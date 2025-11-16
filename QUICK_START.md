# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Your Portfolio

#### Update Contact Information
- Edit `components/sections/Contact.tsx`
- Update phone number and email address
- Update social media links

#### Update Social Links
- Edit `components/Footer.tsx` and `components/sections/Contact.tsx`
- Replace placeholder URLs with your actual profiles:
  - GitHub
  - LinkedIn
  - LeetCode

#### Add Your Resume
1. Place your resume PDF in the `public` folder
2. Name it `resume.pdf`
3. The download button will automatically work

#### Update Project Links
- Edit `components/sections/Projects.tsx`
- Replace `#` placeholders with actual URLs:
  - Live demo URLs
  - GitHub repository URLs

#### Update Certificate Links
- Edit `components/sections/Certificates.tsx`
- Replace `#` placeholders with certificate URLs

#### Update Education Links
- Edit `components/sections/Education.tsx`
- Add certificate links if available

### 4. Build for Production

```bash
npm run build
```

### 5. Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 🎨 Customization Tips

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- `neon-blue`: Primary accent color
- `neon-purple`: Secondary accent color
- `dark-bg`: Background color

### Animations
- All animations use Framer Motion
- Adjust animation delays and durations in component files
- Add GSAP animations if needed for more complex effects

### Content
- All content is in the component files
- Use the resume data provided
- Update achievements, projects, and skills as needed

## 📧 Email Integration (Optional)

To enable email functionality in the contact form:

1. Choose an email service (Resend, SendGrid, etc.)
2. Create an API route in `app/api/contact/route.ts`
3. Add environment variables
4. Update the form submission handler in `components/sections/Contact.tsx`

## ✅ Checklist Before Deployment

- [ ] Update all contact information
- [ ] Add resume PDF to public folder
- [ ] Update all project links (live demo & GitHub)
- [ ] Update social media links
- [ ] Update certificate links
- [ ] Test all navigation links
- [ ] Test responsive design on mobile
- [ ] Verify all animations work
- [ ] Check SEO meta tags in `app/layout.tsx`
- [ ] Build and test production build

