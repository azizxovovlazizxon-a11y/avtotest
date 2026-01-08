# Deployment Guide - AvtoTest

## Prerequisites
1. GitHub account
2. Vercel account (free) - https://vercel.com
3. Render account (free) - https://render.com

---

## Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/avtotest.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy Backend to Render

1. **Go to Render Dashboard**
   - Visit https://dashboard.render.com
   - Click "New +" → "Web Service"

2. **Connect GitHub Repository**
   - Select your `avtotest` repository
   - Click "Connect"

3. **Configure Settings**
   - **Name:** `avtotest-backend`
   - **Region:** Choose closest to your users
   - **Branch:** `main`
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Instance Type:** Free

4. **Add Environment Variables**
   Click "Advanced" → Add these variables:
   - `BOT_TOKEN` = `8599489015:AAFMlr6r-MctZis8Cxh141gB9CRO-V47iko`
   - `NODE_ENV` = `production`
   - `PORT` = `5000`

5. **Deploy**
   - Click "Create Web Service"
   - Wait 3-5 minutes for deployment
   - Copy your backend URL (e.g., `https://avtotest-backend.onrender.com`)

---

## Step 3: Update Frontend to Use Production Backend

Before deploying frontend, update the API URL:

**File: `src/store/authStore.ts`**
```typescript
// Change from:
const response = await axios.post('http://localhost:5000/api/auth/verify-otp', {

// To:
const response = await axios.post('https://YOUR-BACKEND-URL.onrender.com/api/auth/verify-otp', {
```

Do this for all API calls in:
- `src/store/authStore.ts`
- Any other files making API calls

**OR** create an environment variable approach:

**File: `.env.production`**
```
VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com
```

Then update your code to use:
```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
```

---

## Step 4: Deploy Frontend to Vercel

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New" → "Project"

2. **Import Git Repository**
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as root)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at `https://your-project.vercel.app`

---

## Step 5: Configure CORS on Backend

Update `server/index.js` to allow your Vercel domain:

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-project.vercel.app'  // Add your Vercel URL
  ],
  credentials: true
}))
```

Then push changes and Render will auto-redeploy.

---

## Alternative: Deploy Both on Same Platform

### Option A: Railway (Easier for monorepo)
- Free tier available
- Deploy both frontend and backend
- Visit https://railway.app

### Option B: DigitalOcean App Platform
- $5/month
- Full stack deployment
- Better for production

---

## Post-Deployment Checklist

✅ Backend is accessible (test with `https://your-backend.onrender.com/health`)
✅ Frontend loads correctly
✅ Telegram bot receives messages
✅ OTP verification works
✅ Exams load and save properly
✅ Admin panel accessible

---

## Custom Domain (Optional)

### Vercel (Frontend):
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown

### Render (Backend):
1. Go to Service Settings → Custom Domain
2. Add your API subdomain (e.g., `api.yourdomain.com`)
3. Update DNS records

---

## Troubleshooting

**Backend not responding:**
- Check Render logs: Dashboard → Service → Logs
- Verify environment variables are set
- Check if free tier is sleeping (takes 30s to wake)

**Frontend API errors:**
- Check CORS configuration
- Verify API URL is correct
- Check browser console for errors

**Telegram bot not working:**
- Verify BOT_TOKEN in Render environment variables
- Check bot is not rate limited
- Test with `/start` command in Telegram

---

## Free Tier Limitations

**Render Free Tier:**
- Sleeps after 15 minutes of inactivity
- Takes 30-60 seconds to wake up
- 750 hours/month

**Vercel Free Tier:**
- 100 GB bandwidth/month
- Unlimited websites
- Automatic SSL

**Upgrade Recommendations:**
- If you get >1000 users: Upgrade Render to $7/month
- For custom domain: Any plan works
- For 24/7 availability: Paid plan needed

---

## Support

If you encounter issues:
1. Check deployment logs
2. Test each service independently
3. Verify environment variables
4. Check CORS configuration
