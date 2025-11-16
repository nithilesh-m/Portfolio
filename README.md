# Nithilesh Muchakurthi - Portfolio Website

A futuristic, premium portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Futuristic Design**: Glassmorphism, neon effects, and smooth animations
- **Fully Responsive**: Works seamlessly on mobile to 4K monitors
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Framer Motion and GSAP powered
- **3D Elements**: Optional Three.js integration
- **SEO Optimized**: Meta tags and OpenGraph support

## 🛠️ Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js / React Three Fiber

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚢 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
npm run build
vercel
```

3. **Or connect via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect Next.js and deploy

### Environment Variables

No environment variables are required for basic functionality. If you want to add email functionality to the contact form, you'll need to set up an email service (Resend, SendGrid, etc.) and add the API key.

### Adding Your Resume

1. Place your resume PDF in the `public` folder
2. Name it `resume.pdf`
3. The download button in the navigation will automatically link to it

## 📝 Customization

- Update contact information in `components/sections/Contact.tsx`
- Update social links in `components/Footer.tsx` and `components/sections/Contact.tsx`
- Modify project details in `components/sections/Projects.tsx`
- Adjust colors and gradients in `tailwind.config.ts`

## 📄 License

MIT

