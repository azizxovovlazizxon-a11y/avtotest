import express from 'express'
import cors from 'cors'
import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync, existsSync } from 'fs'
import rateLimit from 'express-rate-limit'
import sharp from 'sharp'

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

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Juda ko\'p so\'rov yuborildi, iltimos keyinroq urinib ko\'ring'
})

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // Limit auth attempts
  message: 'Juda ko\'p autentifikatsiya urinishi, 15 daqiqa kuting'
})

app.use('/api/', apiLimiter)
app.use('/api/auth/', authLimiter)

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://avtotest-pearl.vercel.app'
  ],
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

// ===== PERSISTENT FILE STORAGE =====
const DATA_FILE = join(__dirname, 'data.json')

// Load data from file
function loadData() {
  try {
    if (existsSync(DATA_FILE)) {
      const data = JSON.parse(readFileSync(DATA_FILE, 'utf8'))
      console.log(`✅ Loaded ${Object.keys(data.users || {}).length} users from database`)
      return data
    }
  } catch (error) {
    console.error('⚠️ Error loading data:', error.message)
  }
  return { users: {}, promoCodes: {} }
}

// Save data to file
function saveData() {
  try {
    const data = {
      users: Object.fromEntries(usersDatabase),
      promoCodes: Object.fromEntries(promoCodes)
    }
    const fs = require('fs')
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8')
  } catch (error) {
    console.error('⚠️ Error saving data:', error.message)
  }
}

// Initialize data
const persistedData = loadData()

// In-memory storage with persistence
const otpStore = new Map() // telegramId -> { otp, phone, name, expiresAt }
const userSessions = new Map() // sessionToken -> { telegramId, phone, name }
const usersDatabase = new Map(Object.entries(persistedData.users || {})) // telegramId -> user data
const promoCodes = new Map(Object.entries(persistedData.promoCodes || {})) // code -> promo data
const adminSessions = new Map() // adminToken -> { username, loginAt }

// Auto-save every 30 seconds
setInterval(saveData, 30000)

// Admin credentials (in production, use environment variables and hashed passwords)
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
app.post('/api/auth/verify-otp', (req, res) => {
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
    usersDatabase.set(foundUser.telegramId, {
      id: foundUser.telegramId,
      telegramId: foundUser.telegramId,
      phone: foundUser.phone,
      name: foundUser.name,
      isPro: false,
      proExpiresAt: null,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    })
    saveData() // Persist new user
  } else {
    // Update last login
    const user = usersDatabase.get(foundUser.telegramId)
    user.lastLoginAt = new Date().toISOString()
    saveData() // Persist update
  }
  
  userSessions.set(sessionToken, {
    telegramId: foundUser.telegramId,
    phone: foundUser.phone,
    name: foundUser.name
  })
  
  // Remove OTP from store
  otpStore.delete(foundUser.telegramId)
  
  res.json({
    success: true,
    token: sessionToken,
    user: {
      id: foundUser.telegramId,
      name: foundUser.name,
      phone: foundUser.phone
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
  
  res.json({
    success: true,
    user: {
      id: session.telegramId,
      name: session.name,
      phone: session.phone
    }
  })
})

// Logout
app.post('/api/auth/logout', (req, res) => {
  const { token } = req.body
  userSessions.delete(token)
  
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

// Admin API - Update user Pro status (protected)
app.put('/api/admin/users/:telegramId/pro', requireAdmin, (req, res) => {
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
  
  usersDatabase.set(telegramId, user)
  saveData() // Persist Pro status change
  
  res.json({
    success: true,
    user: user
  })
})

// Questions API - Get bilet info (requires auth)
app.get('/api/questions/bilets', authLimiter, (req, res) => {
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
app.get('/api/questions/bilet/:biletId', authLimiter, (req, res) => {
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
app.post('/api/admin/promocodes', requireAdmin, (req, res) => {
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

    promoCodes.set(promoCode.code, promoCode)
    saveData() // Persist new promo code

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
app.patch('/api/admin/promocodes/:code', requireAdmin, (req, res) => {
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
    promoCodes.set(code.toUpperCase(), promoCode)
    saveData() // Persist promo code update

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
app.post('/api/promo/apply', authLimiter, (req, res) => {
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
    promoCodes.set(promoCode.code, promoCode)
    saveData() // Persist promo code usage

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
