import express from 'express'
import cors from 'cors'
import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, existsSync } from 'fs'
import rateLimit from 'express-rate-limit'
import sharp from 'sharp'
import { MongoClient } from 'mongodb'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load questions data
let questionsData = []
try {
  const questionsFile = readFileSync(join(__dirname, 'questions-data.json'), 'utf8')
  questionsData = JSON.parse(questionsFile)
  console.log(`✅ Loaded ${questionsData.length} questions from database`)
} catch (error) {
  console.error('⚠️  Failed to load questions:', error.message)
}

dotenv.config({ path: join(__dirname, '.env') })

const app = express()

// Rate limiting - increased limits for production
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // Limit each IP to 500 requests per window
  message: 'Juda ko\'p so\'rov yuborildi, iltimos keyinroq urinib ko\'ring',
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.path === '/api/health' // Don't rate limit health checks
})

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50, // Limit auth attempts
  message: 'Juda ko\'p autentifikatsiya urinishi, 15 daqiqa kuting'
})

app.use('/api/', apiLimiter)
app.use('/api/auth/', authLimiter)

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true)
    
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://avtotest-pearl.vercel.app'
    ]
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    
    // Allow all vercel preview deployments
    if (origin.includes('vercel.app')) {
      return callback(null, true)
    }
    
    return callback(null, true) // Allow all origins for now to debug mobile issue
  },
  credentials: true
}))
app.use(express.json())

// Telegram Bot Setup
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN_HERE'
const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://avtotest-8t98.onrender.com'
const isBotConfigured = BOT_TOKEN && BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE' && BOT_TOKEN !== 'your_bot_token_here'

let bot = null
if (isBotConfigured) {
  try {
    // Use webhooks instead of polling for better reliability
    bot = new TelegramBot(BOT_TOKEN)
    console.log('✅ Telegram bot is configured (webhook mode)')
  } catch (error) {
    console.log('⚠️  Telegram bot failed to start:', error.message)
  }
} else {
  console.log('⚠️  Telegram bot not configured (add token to .env to enable)')
}

// ===== MONGODB DATABASE =====
const MONGODB_URI = process.env.MONGODB_URI || ''
let db = null
let usersCollection = null
let promoCodesCollection = null

// In-memory storage (synced with MongoDB)
const otpStore = new Map() // telegramId -> { otp, phone, name, expiresAt }
const userSessions = new Map() // sessionToken -> { telegramId, phone, name }
let usersDatabase = new Map() // telegramId -> user data
let promoCodes = new Map() // code -> promo data
const adminSessions = new Map() // adminToken -> { username, loginAt }
let sessionsCollection = null // MongoDB sessions collection

// Connect to MongoDB
async function connectToMongoDB() {
  if (!MONGODB_URI) {
    console.log('⚠️  MONGODB_URI not set, using in-memory storage only')
    return false
  }
  
  try {
    const client = new MongoClient(MONGODB_URI)
    await client.connect()
    db = client.db('avtotest')
    usersCollection = db.collection('users')
    promoCodesCollection = db.collection('promoCodes')
    sessionsCollection = db.collection('sessions')
    
    // Load existing data from MongoDB
    const users = await usersCollection.find({}).toArray()
    users.forEach(user => {
      usersDatabase.set(user.telegramId, user)
    })
    
    const codes = await promoCodesCollection.find({}).toArray()
    codes.forEach(code => {
      promoCodes.set(code.code, code)
    })
    
    // Load existing sessions from MongoDB (restore after server restart)
    const sessions = await sessionsCollection.find({}).toArray()
    sessions.forEach(session => {
      userSessions.set(session.token, {
        telegramId: session.telegramId,
        phone: session.phone,
        name: session.name
      })
    })
    
    console.log(`✅ Connected to MongoDB - Loaded ${users.length} users, ${codes.length} promo codes, ${sessions.length} active sessions`)
    console.log(`📋 Active sessions restored - users won't need to re-login after restart!`)
    return true
  } catch (error) {
    console.error('⚠️ MongoDB connection failed:', error.message)
    return false
  }
}

// Save session to MongoDB
async function saveSession(token, sessionData) {
  userSessions.set(token, sessionData)
  if (sessionsCollection) {
    try {
      await sessionsCollection.updateOne(
        { token },
        { $set: { token, ...sessionData, updatedAt: new Date() } },
        { upsert: true }
      )
      console.log(`💾 Saved session for ${sessionData.telegramId} to MongoDB`)
    } catch (error) {
      console.error('⚠️ Error saving session to MongoDB:', error.message)
    }
  }
}

// Delete session from MongoDB
async function deleteSession(token) {
  userSessions.delete(token)
  if (sessionsCollection) {
    try {
      await sessionsCollection.deleteOne({ token })
      console.log(`🗑️ Deleted session from MongoDB`)
    } catch (error) {
      console.error('⚠️ Error deleting session from MongoDB:', error.message)
    }
  }
}

// Save user to MongoDB
async function saveUser(telegramId, userData) {
  usersDatabase.set(telegramId, userData)
  if (usersCollection) {
    try {
      await usersCollection.updateOne(
        { telegramId },
        { $set: userData },
        { upsert: true }
      )
      console.log(`💾 Saved user ${telegramId} to MongoDB`)
    } catch (error) {
      console.error('⚠️ Error saving user to MongoDB:', error.message)
    }
  }
}

// Save promo code to MongoDB
async function savePromoCode(code, promoData) {
  promoCodes.set(code, promoData)
  if (promoCodesCollection) {
    try {
      await promoCodesCollection.updateOne(
        { code },
        { $set: promoData },
        { upsert: true }
      )
      console.log(`💾 Saved promo code ${code} to MongoDB`)
    } catch (error) {
      console.error('⚠️ Error saving promo code to MongoDB:', error.message)
    }
  }
}

// Initialize MongoDB connection
connectToMongoDB()

// Admin credentials from environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

// Middleware to verify admin authentication
function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Admin autentifikatsiyasi talab qilinadi'
    })
  }
  
  const token = authHeader.substring(7)
  
  // Accept client-side tokens (start with admin_client_)
  if (token.startsWith('admin_client_')) {
    req.admin = { username: 'admin', clientSide: true }
    return next()
  }
  
  const session = adminSessions.get(token)
  
  if (!session) {
    return res.status(401).json({
      success: false,
      message: 'Yaroqsiz yoki muddati o\'tgan sessiya'
    })
  }
  
  req.admin = session
  next()
}

// Generate 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Telegram Webhook endpoint
app.post('/webhook/telegram', (req, res) => {
  if (bot) {
    bot.processUpdate(req.body)
  }
  res.sendStatus(200)
})

// Bot message handlers
function setupBotHandlers() {
  if (!bot) return

  // Bot command: /start
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id
    const firstName = msg.from.first_name || 'Foydalanuvchi'
    
    const keyboard = {
      keyboard: [
        [{ text: '📱 Telefon raqamni yuborish', request_contact: true }]
      ],
      resize_keyboard: true,
      one_time_keyboard: true
    }
    
    bot.sendMessage(
      chatId,
      `Assalomu alaykum, ${firstName}! 👋\n\n` +
      `AvtoTest platformasiga xush kelibsiz.\n\n` +
      `Davom etish uchun telefon raqamingizni yuboring.`,
      { reply_markup: keyboard }
    )
  })

  // Handle contact sharing
  bot.on('contact', (msg) => {
    const chatId = msg.chat.id
    const contact = msg.contact
    
    if (contact.user_id !== msg.from.id) {
      bot.sendMessage(chatId, '❌ Iltimos, o\'z telefon raqamingizni yuboring.')
      return
    }
    
    const telegramId = msg.from.id.toString()
    const phone = contact.phone_number
    const name = msg.from.first_name + (msg.from.last_name ? ' ' + msg.from.last_name : '')
    
    // Generate OTP
    const otp = generateOTP()
    const expiresAt = Date.now() + 5 * 60 * 1000 // 5 minutes
    
    // Store OTP
    otpStore.set(telegramId, { otp, phone, name, expiresAt })
    
    bot.sendMessage(
      chatId,
      `✅ Telefon raqam qabul qilindi!\n\n` +
      `Sizning tasdiqlash kodingiz:\n\n` +
      `🔐 <b>${otp}</b>\n\n` +
      `Bu kodni veb-saytda kiriting.\n` +
      `Kod 5 daqiqa amal qiladi.`,
      { parse_mode: 'HTML' }
    )
  })
}

setupBotHandlers()

// API Endpoints

// Request OTP (when user clicks "Get OTP" from website)
app.post('/api/auth/request-otp', (req, res) => {
  res.json({
    success: true,
    message: 'Telegram botga /start buyrug\'ini yuboring',
    botUsername: 'yol_qoidasi_uz_bot'
  })
})

// Verify OTP
app.post('/api/auth/verify-otp', async (req, res) => {
  const { otp } = req.body
  
  if (!otp || otp.length !== 6) {
    return res.status(400).json({
      success: false,
      message: 'OTP 6 raqamdan iborat bo\'lishi kerak'
    })
  }
  
  // Find user by OTP
  let foundUser = null
  for (const [telegramId, data] of otpStore.entries()) {
    if (data.otp === otp) {
      if (Date.now() > data.expiresAt) {
        otpStore.delete(telegramId)
        return res.status(400).json({
          success: false,
          message: 'OTP muddati tugagan. Qaytadan urinib ko\'ring.'
        })
      }
      foundUser = { telegramId, ...data }
      break
    }
  }
  
  if (!foundUser) {
    return res.status(400).json({
      success: false,
      message: 'Noto\'g\'ri OTP kod'
    })
  }
  
  // Create session token
  const sessionToken = `session_${Date.now()}_${Math.random().toString(36).substr(2)}`
  
  // Save or update user in database
  if (!usersDatabase.has(foundUser.telegramId)) {
    const newUser = {
      id: foundUser.telegramId,
      telegramId: foundUser.telegramId,
      phone: foundUser.phone,
      name: foundUser.name,
      isPro: false,
      proExpiresAt: null,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    }
    await saveUser(foundUser.telegramId, newUser)
  } else {
    // Update last login
    const user = usersDatabase.get(foundUser.telegramId)
    user.lastLoginAt = new Date().toISOString()
    await saveUser(foundUser.telegramId, user)
  }
  
  userSessions.set(sessionToken, {
    telegramId: foundUser.telegramId,
    phone: foundUser.phone,
    name: foundUser.name
  })
  
  // Save session to MongoDB for persistence across server restarts
  await saveSession(sessionToken, {
    telegramId: foundUser.telegramId,
    phone: foundUser.phone,
    name: foundUser.name
  })
  
  // Remove OTP from store
  otpStore.delete(foundUser.telegramId)
  
  // Get user from database to include isPro status
  const dbUser = usersDatabase.get(foundUser.telegramId)
  
  res.json({
    success: true,
    token: sessionToken,
    user: {
      id: foundUser.telegramId,
      name: foundUser.name,
      phone: foundUser.phone,
      isPro: dbUser?.isPro || false,
      proExpiresAt: dbUser?.proExpiresAt || null
    }
  })
})

// Verify session token
app.post('/api/auth/verify-token', (req, res) => {
  const { token } = req.body
  
  const session = userSessions.get(token)
  if (!session) {
    return res.status(401).json({
      success: false,
      message: 'Sessiya topilmadi'
    })
  }
  
  // Get user from database to include isPro status
  const dbUser = usersDatabase.get(session.telegramId)
  
  res.json({
    success: true,
    user: {
      id: session.telegramId,
      name: session.name,
      phone: session.phone,
      isPro: dbUser?.isPro || false,
      proExpiresAt: dbUser?.proExpiresAt || null
    }
  })
})

// Logout
app.post('/api/auth/logout', async (req, res) => {
  const { token } = req.body
  await deleteSession(token)
  
  res.json({
    success: true,
    message: 'Tizimdan muvaffaqiyatli chiqdingiz'
  })
})

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body
  
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return res.status(401).json({
      success: false,
      message: 'Noto\'g\'ri login yoki parol'
    })
  }
  
  const adminToken = `admin_${Date.now()}_${Math.random().toString(36).substr(2)}`
  adminSessions.set(adminToken, {
    username,
    loginAt: new Date().toISOString()
  })
  
  res.json({
    success: true,
    token: adminToken,
    admin: { username }
  })
})

// Admin logout
app.post('/api/admin/logout', requireAdmin, (req, res) => {
  const authHeader = req.headers.authorization
  const token = authHeader.substring(7)
  adminSessions.delete(token)
  
  res.json({
    success: true,
    message: 'Admin paneldan chiqdingiz'
  })
})

// Admin API - Get all users (protected)
app.get('/api/admin/users', requireAdmin, (req, res) => {
  const users = Array.from(usersDatabase.values())
  res.json({
    success: true,
    users: users
  })
})

// Admin API - Get all questions (protected)
app.get('/api/admin/questions', requireAdmin, (req, res) => {
  res.json({
    success: true,
    questions: questionsData,
    totalCount: questionsData.length
  })
})

// Admin API - Update user Pro status (protected)
app.put('/api/admin/users/:telegramId/pro', requireAdmin, async (req, res) => {
  const { telegramId } = req.params
  const { isPro, expirationDays } = req.body
  
  const user = usersDatabase.get(telegramId)
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Foydalanuvchi topilmadi'
    })
  }
  
  user.isPro = isPro
  if (isPro && expirationDays) {
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + expirationDays)
    user.proExpiresAt = expiresAt.toISOString()
  } else {
    user.proExpiresAt = null
  }
  
  await saveUser(telegramId, user)
  
  res.json({
    success: true,
    user: user
  })
})

// Questions API - Get bilet info (requires auth)
app.get('/api/questions/bilets', (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Avtorizatsiya talab qilinadi'
    })
  }
  
  const token = authHeader.substring(7)
  const session = userSessions.get(token)
  
  if (!session) {
    return res.status(401).json({
      success: false,
      message: 'Yaroqsiz sessiya. Iltimos, qaytadan kiring'
    })
  }
  
  // Get all unique bilet IDs and create info
  const biletIds = [...new Set(questionsData.map(q => q.biletId))].sort((a, b) => a - b)
  const biletInfos = biletIds.map(id => {
    const biletQuestions = questionsData.filter(q => q.biletId === id)
    return {
      id: id,
      number: id,
      questionsCount: biletQuestions.length,
      isFree: id <= 5
    }
  })
  
  res.json({
    success: true,
    bilets: biletInfos
  })
})

// Questions API - Get questions by bilet (protected, requires auth)
app.get('/api/questions/bilet/:biletId', (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Avtorizatsiya talab qilinadi'
    })
  }
  
  const token = authHeader.substring(7)
  const session = userSessions.get(token)
  
  if (!session) {
    return res.status(401).json({
      success: false,
      message: 'Yaroqsiz sessiya. Iltimos, qaytadan kiring'
    })
  }
  
  const { biletId } = req.params
  const biletNumber = parseInt(biletId)
  
  // Check if user has access (first 5 bilets are free)
  const user = usersDatabase.get(session.telegramId)
  if (biletNumber > 5 && (!user || !user.isPro)) {
    return res.status(403).json({
      success: false,
      message: 'Bu bilet faqat Pro foydalanuvchilar uchun'
    })
  }
  
  // Get questions for this bilet
  const biletQuestions = questionsData.filter(q => q.biletId === biletNumber)
  
  res.json({
    success: true,
    biletId: biletNumber,
    questions: biletQuestions
  })
})

// Questions API - Get random questions for exam (always allowed for standard/real exams)
app.get('/api/questions/random', apiLimiter, (req, res) => {
  const { count = 10 } = req.query
  const questionCount = parseInt(count)
  
  // Random questions are always available (no auth needed)
  // This is for standard and real exams where questions are randomly selected
  const shuffled = [...questionsData].sort(() => Math.random() - 0.5)
  const randomQuestions = shuffled.slice(0, questionCount)
  
  res.json({
    success: true,
    count: questionCount,
    questions: randomQuestions
  })
})

// Image serving with watermark (requires auth)
app.get('/api/images/:filename', authLimiter, async (req, res) => {
  try {
    console.log('🖼️ Watermark request for:', req.params.filename)
    console.log('🔑 Authorization header:', req.headers.authorization ? 'EXISTS' : 'MISSING')
    
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('❌ No auth header')
      return res.status(401).json({
        success: false,
        message: 'Avtorizatsiya talab qilinadi'
      })
    }
    
    const token = authHeader.substring(7)
    const session = userSessions.get(token)
    
    if (!session) {
      console.log('❌ Invalid session')
      return res.status(401).json({
        success: false,
        message: 'Yaroqsiz sessiya'
      })
    }
    
    console.log('✅ Session valid for phone:', session.phoneNumber)
    
    const { filename } = req.params
    
    // Security: only allow webp files from questions directory
    if (!filename.match(/^i\d+_\d+\.webp$/)) {
      console.log('❌ Invalid filename format')
      return res.status(400).send('Invalid filename')
    }
    
    const imagePath = join(__dirname, '..', 'public', 'images', 'questions', filename)
    
    if (!existsSync(imagePath)) {
      console.log('❌ Image not found:', imagePath)
      return res.status(404).send('Image not found')
    }
    
    // Read the original image
    const imageBuffer = readFileSync(imagePath)
    
    // Get image metadata
    const metadata = await sharp(imageBuffer).metadata()
    console.log(`📐 Image dimensions: ${metadata.width}x${metadata.height}`)
    
    // Create subtle watermark - white color, smaller font, left bottom
    const fontSize = Math.max(16, Math.floor(metadata.width / 40))
    const yPosition = Math.floor(metadata.height * 0.97)
    const xPosition = Math.floor(metadata.width * 0.15)
    
    console.log(`✏️ Watermark: fontSize=${fontSize}, position=(${xPosition}, ${yPosition})`)
    
    const watermarkSvg = `
      <svg width="${metadata.width}" height="${metadata.height}">
        <defs>
          <filter id="shadow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="1" dy="1" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <text
          x="${xPosition}"
          y="${yPosition}"
          font-family="Arial, sans-serif"
          font-size="${fontSize}"
          font-weight="normal"
          fill="white"
          text-anchor="start"
          filter="url(#shadow)"
          opacity="0.5"
        >yo'lqoidasi.uz</text>
      </svg>
    `
    
    // Apply watermark
    const watermarkedImage = await sharp(imageBuffer)
      .composite([{
        input: Buffer.from(watermarkSvg),
        top: 0,
        left: 0
      }])
      .webp({ quality: 90 })
      .toBuffer()
    
    console.log('✅ Watermark applied, sending image')
    
    res.set('Content-Type', 'image/webp')
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate') // No cache for testing
    res.send(watermarkedImage)
  } catch (error) {
    console.error('❌ Error serving watermarked image:', error)
    res.status(500).send('Error processing image')
  }
})

// ===== PROMO CODE SYSTEM =====
// (promoCodes Map is initialized above with persistence)

// Admin: Create promo code
app.post('/api/admin/promocodes', requireAdmin, async (req, res) => {
  try {
    const { code, durationMonths, maxUses, expiresInDays } = req.body

    if (!code || !durationMonths || !maxUses) {
      return res.status(400).json({
        success: false,
        message: 'Barcha maydonlarni to\'ldiring'
      })
    }

    if (promoCodes.has(code.toUpperCase())) {
      return res.status(400).json({
        success: false,
        message: 'Bu promokod allaqachon mavjud'
      })
    }

    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + (expiresInDays || 30))

    const promoCode = {
      code: code.toUpperCase(),
      durationMonths: parseInt(durationMonths),
      maxUses: parseInt(maxUses),
      usedCount: 0,
      isActive: true,
      createdAt: new Date().toISOString(),
      expiresAt: expiresAt.toISOString()
    }

    await savePromoCode(promoCode.code, promoCode)

    res.json({
      success: true,
      promoCode
    })
  } catch (error) {
    console.error('Error creating promocode:', error)
    res.status(500).json({ success: false, message: 'Server xatosi' })
  }
})

// Admin: Get all promo codes
app.get('/api/admin/promocodes', requireAdmin, (req, res) => {
  try {
    const allPromoCodes = Array.from(promoCodes.values())
    res.json({
      success: true,
      promoCodes: allPromoCodes
    })
  } catch (error) {
    console.error('Error fetching promocodes:', error)
    res.status(500).json({ success: false, message: 'Server xatosi' })
  }
})

// Admin: Update promo code
app.patch('/api/admin/promocodes/:code', requireAdmin, async (req, res) => {
  try {
    const { code } = req.params
    const { isActive } = req.body

    const promoCode = promoCodes.get(code.toUpperCase())
    if (!promoCode) {
      return res.status(404).json({
        success: false,
        message: 'Promokod topilmadi'
      })
    }

    promoCode.isActive = isActive
    await savePromoCode(code.toUpperCase(), promoCode)

    res.json({
      success: true,
      promoCode
    })
  } catch (error) {
    console.error('Error updating promocode:', error)
    res.status(500).json({ success: false, message: 'Server xatosi' })
  }
})

// Admin: Delete promo code
app.delete('/api/admin/promocodes/:code', requireAdmin, (req, res) => {
  try {
    const { code } = req.params
    
    if (!promoCodes.has(code.toUpperCase())) {
      return res.status(404).json({
        success: false,
        message: 'Promokod topilmadi'
      })
    }

    promoCodes.delete(code.toUpperCase())
    saveData() // Persist promo code deletion

    res.json({
      success: true,
      message: 'Promokod o\'chirildi'
    })
  } catch (error) {
    console.error('Error deleting promocode:', error)
    res.status(500).json({ success: false, message: 'Server xatosi' })
  }
})

// User: Apply promo code
app.post('/api/promo/apply', authLimiter, async (req, res) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Avtorizatsiya talab qilinadi'
      })
    }
    
    const token = authHeader.substring(7)
    const session = userSessions.get(token)
    
    if (!session) {
      return res.status(401).json({
        success: false,
        message: 'Yaroqsiz sessiya'
      })
    }

    const { code } = req.body
    if (!code) {
      return res.status(400).json({
        success: false,
        message: 'Promokod kiriting'
      })
    }

    const promoCode = promoCodes.get(code.toUpperCase())
    
    if (!promoCode) {
      return res.status(404).json({
        success: false,
        message: 'Promokod topilmadi'
      })
    }

    if (!promoCode.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Promokod nofaol'
      })
    }

    if (new Date(promoCode.expiresAt) < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Promokod muddati tugagan'
      })
    }

    if (promoCode.usedCount >= promoCode.maxUses) {
      return res.status(400).json({
        success: false,
        message: 'Promokod limitga yetgan'
      })
    }

    // Apply promocode
    promoCode.usedCount++
    await savePromoCode(promoCode.code, promoCode)

    // Calculate expiration date
    const expiresAt = new Date()
    expiresAt.setMonth(expiresAt.getMonth() + promoCode.durationMonths)

    res.json({
      success: true,
      message: 'Promokod muvaffaqiyatli faollashtirildi',
      expiresAt: expiresAt.toISOString(),
      durationMonths: promoCode.durationMonths
    })
  } catch (error) {
    console.error('Error applying promocode:', error)
    res.status(500).json({ success: false, message: 'Server xatosi' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    bot: bot ? 'configured (webhook)' : 'not configured'
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`)
  
  // Set up webhook
  if (isBotConfigured && bot) {
    try {
      const webhookUrl = `${WEBHOOK_URL}/webhook/telegram`
      await bot.setWebHook(webhookUrl)
      console.log(`🤖 Telegram bot webhook set to: ${webhookUrl}`)
      console.log(`🤖 Telegram bot @yol_qoidasi_uz_bot is active`)
    } catch (error) {
      console.error('❌ Failed to set webhook:', error.message)
    }
  }
})

// Handle graceful shutdown
process.on('SIGINT', async () => {
  if (bot) {
    await bot.deleteWebHook()
  }
  process.exit()
})
