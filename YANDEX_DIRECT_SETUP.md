# Yandex.Direct Integration Guide

## Step 1: Create Yandex.Direct Account

1. Go to https://direct.yandex.ru/ (or https://direct.yandex.uz/ for Uzbekistan)
2. Sign in with your Yandex account (or create one)
3. Click "Создать объявление" (Create ad)

## Step 2: Get Your Ad Block IDs

1. In Yandex.Direct dashboard, go to **"Рекламная сеть Яндекса"** (Yandex Advertising Network)
2. Create a new ad placement:
   - For homepage banner: 300×250 or flexible size
   - For exam sidebar: 160×600 (skyscraper)
3. You'll receive block IDs like: `R-A-123456-1`, `R-A-123456-2`, etc.

## Step 3: Add Block IDs to Your Website

### For Homepage Banner (BoshSahifa.tsx):

```tsx
// Line ~105, replace this:
<YandexAdPlaceholder type="square" />

// With this (use your actual block ID):
<YandexAd blockId="R-A-XXXXXX-1" type="square" />
```

### For Exam Left Sidebar (Exam.tsx):

```tsx
// Line ~202, replace:
<YandexAdPlaceholder type="vertical" />

// With:
<YandexAd blockId="R-A-XXXXXX-2" type="vertical" />
```

### For Exam Right Sidebar (Exam.tsx):

```tsx
// Line ~482, replace:
<YandexAdPlaceholder type="vertical" />

// With:
<YandexAd blockId="R-A-XXXXXX-3" type="vertical" />
```

## Step 4: Update the Code

1. Open the files mentioned above
2. Uncomment the `<YandexAd />` lines
3. Replace `R-A-XXXXXX-X` with your actual block IDs
4. Comment out or remove the `<YandexAdPlaceholder />` lines

Example:
```tsx
{/* <YandexAd blockId="R-A-123456-1" type="square" /> */}
<YandexAdPlaceholder type="square" />
```

Becomes:
```tsx
<YandexAd blockId="R-A-123456-1" type="square" />
{/* <YandexAdPlaceholder type="square" /> */}
```

## Step 5: Test Your Ads

1. Run `npm run build`
2. Deploy to Vercel
3. Visit your live site
4. Ads should appear within 24 hours after Yandex approval

## Troubleshooting

**Ads not showing?**
- Check if your site is approved in Yandex.Direct dashboard
- Verify block IDs are correct
- Clear browser cache
- Check browser console for errors

**Revenue tracking:**
- Go to Yandex.Direct dashboard → Reports
- View impressions, clicks, and earnings

## Ad Sizes Used:

- **Homepage:** 300×250 (Medium Rectangle)
- **Exam Sidebars:** 160×600 (Wide Skyscraper)

## Payment Setup:

1. In Yandex.Direct, go to **"Настройки"** → **"Реквизиты"**
2. Add your bank details (supports Uzbek banks)
3. Set minimum payout threshold (usually $10-20)
4. Payments typically processed monthly

## Support:

- Yandex.Direct Help: https://yandex.ru/support/direct/
- For Uzbekistan: Contact support in Tashkent office
