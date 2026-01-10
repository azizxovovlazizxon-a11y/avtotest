import express from 'express'
import cors from 'cors'
import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: join(__dirname, '.env') })

const app = express()
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

// In-memory storage (use database in production)
const otpStore = new Map() // telegramId -> { otp, phone, name, expiresAt }
const userSessions = new Map() // sessionToken -> { telegramId, phone, name }

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
