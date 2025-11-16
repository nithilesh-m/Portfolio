# Deployment Guide

## Vercel Deployment (Recommended)

### Option 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch = production deployment
   - Every push to other branches = preview deployment

### Option 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

## Environment Variables

Currently, no environment variables are required. If you add email functionality:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your API keys (e.g., `RESEND_API_KEY`, `CONTACT_EMAIL`)
3. Redeploy

## Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

## Performance Optimization

The site is already optimized with:
- ✅ Next.js automatic code splitting
- ✅ Image optimization (when using Next.js Image component)
- ✅ CSS optimization
- ✅ Font optimization (next/font)
- ✅ Static generation where possible

## Analytics (Optional)

Add Vercel Analytics:
1. Install: `npm install @vercel/analytics`
2. Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   // In your layout
   <Analytics />
   ```

## Monitoring

Vercel provides:
- Real-time logs
- Performance metrics
- Error tracking
- Analytics dashboard

