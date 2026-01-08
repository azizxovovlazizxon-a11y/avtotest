# AvtoTest - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Telegram Bot
1. Open Telegram
2. Search for `@BotFather`
3. Send `/newbot`
4. Name: `AvtoTest Yo'l Qoidalari`
5. Username: `yol_qoidasi_uz_bot`
6. **Copy the API Token**

### Step 2: Configure
Edit `server/.env`:
```env
TELEGRAM_BOT_TOKEN=YOUR_TOKEN_HERE
PORT=5000
```

### Step 3: Install & Run
```bash
# Install dependencies
npm install

# Terminal 1: Start backend
npm run server

# Terminal 2: Start frontend  
npm run dev
```

### Step 4: Access
- **Website:** http://localhost:3000
- **Admin:** http://localhost:3000/admin (password: admin123)

## 📱 How It Works

### For Users:
1. Visit website - take 1 free exam
2. Want more? Click "Kirish"
3. Open Telegram bot
4. Share phone number
5. Get 6-digit code
6. Enter code → Unlimited access! ✨

### For Admins:
1. Go to /admin/login
2. Enter password: `admin123`
3. Manage questions & tickets
4. Upload images directly

## 🎯 Key Features

- ✅ **1 Free Exam** for everyone
- ✅ **Telegram Auth** for unlimited access
- ✅ **Admin Panel** with image uploads
- ✅ **Real-time OTP** verification
- ✅ **Mobile Responsive** design

## 🔧 Troubleshooting

**Bot not working?**
- Check token in `.env`
- Restart server: `npm run server`

**Can't authenticate?**
- OTP expires in 5 minutes
- Generate new code with `/start`

**Need help?**
- See `TELEGRAM_BOT_SETUP.md` for detailed guide
- Check `PRD.md` for full documentation

## 📞 Bot Commands

- `/start` - Get OTP code

That's it! Happy testing! 🚗💨
