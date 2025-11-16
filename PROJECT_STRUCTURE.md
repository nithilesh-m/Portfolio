# Project Structure

```
Portfolio/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles with custom animations
│   ├── layout.tsx               # Root layout with metadata and providers
│   └── page.tsx                 # Main page with all sections
│
├── components/                   # React components
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx            # Hero section with animated background
│   │   ├── About.tsx           # About me section
│   │   ├── Skills.tsx           # Skills grid with animations
│   │   ├── Projects.tsx        # Featured projects with glass cards
│   │   ├── Achievements.tsx    # Achievements and certificates
│   │   ├── Hackathons.tsx      # Hackathons carousel
│   │   ├── Education.tsx       # Education timeline
│   │   ├── Certificates.tsx    # Certificates grid with modal
│   │   ├── Extracurricular.tsx # Extracurricular activities
│   │   └── Contact.tsx         # Contact form and info
│   │
│   ├── Navigation.tsx          # Fixed navigation bar
│   ├── Footer.tsx              # Footer with social links
│   ├── Preloader.tsx           # Loading animation
│   └── ThemeProvider.tsx       # Dark/light theme context
│
├── lib/                         # Utility functions
│   └── utils.ts                # Class name utilities
│
├── public/                      # Static assets
│   └── resume.pdf             # Your resume (add this file)
│
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
├── postcss.config.js           # PostCSS configuration
├── vercel.json                 # Vercel deployment config
└── README.md                   # Project documentation
```

## Key Features

### Design System
- **Colors**: Neon blue (#00f0ff), Neon purple (#b026ff), Dark backgrounds
- **Effects**: Glassmorphism, gradients, neon glows, parallax scrolling
- **Typography**: Inter (body), Space Grotesk (headings)

### Animations
- Framer Motion for component animations
- GSAP ready (can be added for advanced animations)
- Smooth scroll reveals
- Hover effects and transitions

### Sections
1. **Hero**: Animated background, CTA buttons
2. **About**: Personal info, stats, mission
3. **Skills**: Categorized skill grid
4. **Projects**: 3 featured projects with details
5. **Achievements**: LeetCode, CodeVita, hackathons
6. **Hackathons**: Carousel of hackathon participations
7. **Education**: Timeline of educational background
8. **Certificates**: Grid with modal popups
9. **Extracurricular**: NSS and Music Club activities
10. **Contact**: Contact form and social links

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes

