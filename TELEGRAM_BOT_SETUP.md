# Telegram Bot Setup Guide

## Prerequisites
- Node.js installed
- Telegram account

## Step 1: Create Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot` command
3. Follow the prompts:
   - Choose a name: `AvtoTest Yo'l Qoidalari`
   - Choose a username: `yol_qoidasi_uz_bot`
4. BotFather will give you an **API Token** - save it!

## Step 2: Configure the Bot

1. Open `server/.env` file
2. Replace `your_bot_token_here` with your actual bot token:
```
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
PORT=5000
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Start the Backend Server

Open a new terminal and run:
```bash
npm run server
```

You should see:
```
🚀 Server running on port 5000
🤖 Telegram bot @yol_qoidasi_uz_bot is active
```

## Step 5: Start the Frontend

In another terminal:
```bash
npm run dev
```

## Step 6: Test the System

1. Go to http://localhost:3000
2. Try to start an exam (you get 1 free attempt)
3. After using the free attempt, you'll be prompted to authenticate
4. Click "Kirish" or try to start another exam
5. You'll be redirected to the Telegram auth page
6. Click the button to open your Telegram bot
7. Send `/start` to the bot
8. Share your phone number with the bot
9. Bot will send you a 6-digit OTP code
10. Enter the code on the website
11. You're authenticated! Now you have unlimited exam attempts

## Troubleshooting

### Bot not responding
- Check if the bot token is correct in `.env`
- Make sure the server is running (`npm run server`)
- Check terminal for error messages

### OTP not working
- Make sure the code is entered within 5 minutes
- The bot must be running (check server terminal)
- Try generating a new code by sending `/start` again

### Frontend can't connect to backend
- Verify backend is running on port 5000
- Check browser console for errors
- Ensure no firewall is blocking localhost:5000

## Architecture

```
User -> Website -> Telegram Auth Page
                        ↓
                   Opens Telegram
                        ↓
                   Bot (@yol_qoidasi_uz_bot)
                        ↓
                   Shares Phone
                        ↓
                   Bot sends OTP
                        ↓
                   User enters OTP
                        ↓
                   Backend verifies
                        ↓
                   User authenticated!
```

## Features

- **1 Free Exam**: Unauthenticated users can take 1 exam for free
- **Unlimited Exams**: Authenticated users get unlimited access
- **Telegram Auth**: Simple phone-based authentication via Telegram
- **OTP System**: Secure 6-digit OTP codes with 5-minute expiry
- **Session Management**: Persistent sessions with tokens
