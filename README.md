Harshal Ahire - Full Stack Engineer Portfolio

## Project Structure

```
portfolio-app/
├── public/
│   ├── Professional_Image.png   # Profile photo
│   ├── HARSHAL-AHIRE-Resume.pdf # Resume download
│   └── og-image.png             # OpenGraph preview
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout + SEO metadata
│   │   ├── page.tsx             # Home page (all sections)
│   │   ├── globals.css          # Tailwind v4 CSS-first config + utilities
│   │   ├── not-found.tsx        # Custom 404
│   │   ├── sitemap.ts           # Auto sitemap.xml
│   │   ├── robots.ts            # robots.txt
│   │   ├── projects/
│   │   │   └── page.tsx         # Detailed project showcase
│   │   ├── blog/
│   │   │   ├── page.tsx         # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Individual blog post
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts     # Resend email API
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Responsive navbar + mobile menu
│   │   │   └── Footer.tsx       # Footer with links
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Photo, name, CTAs
│   │   │   ├── AboutSection.tsx     # Bio + highlights
│   │   │   ├── ExperienceSection.tsx # SPARD internship timeline
│   │   │   ├── TechStackSection.tsx  # Icon grid
│   │   │   ├── ProjectsSection.tsx   # Cards
│   │   │   ├── AchievementsSection.tsx # Awards
│   │   │   ├── CTASection.tsx        # Call to action
│   │   │   └── ContactForm.tsx       # Form with states
│   │   └── ui/
│   │       ├── Animations.tsx    # FadeIn, Stagger, StaggerItem
│   │       └── Button.tsx        # Animated button component
│   └── lib/
│       ├── config.ts            # Site-wide constants
│       ├── projects.ts          # Project data
│       └── blog.ts              # Blog post data
├── .env.local                   # API keys (gitignored)
└── next.config.ts               # Next.js config
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **Animations**: Framer Motion
- **Email**: Resend API
- **Icons**: lucide-react

## Environment Setup

Copy `.env.local.example` → `.env.local` and fill in:

```
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=your@email.com
```

## Development

```bash
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint check
```

## Deployment (Vercel)

1. Push to GitHub
2. Import repo at vercel.com/new
3. Add environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
4. Deploy — automatic on every push

## Customisation

- **Personal info**: `src/lib/config.ts`
- **Projects**: `src/lib/projects.ts`
- **Blog posts**: `src/lib/blog.ts`
- **Photo**: `public/Professional_Image.png`
- **Resume**: `public/HARSHAL-AHIRE-Resume.pdf`
