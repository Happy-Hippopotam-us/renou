# Renou Homes - Project Context

## Project Overview
Estate transition services platform helping families downsize, navigate divorce, or settle estates. We provide inventory management, valuation, sales coordination, and family collaboration tools.

## Business Model
- B2C service business (currently operating with manual processes)
- Building toward B2B SaaS platform for other estate service providers
- Revenue: Service fees + commission on sales

## Current Phase
**MVP Website** - Marketing site to generate leads and establish credibility while we develop the full platform.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX (Markdown + JSX)
- **Deployment**: Vercel (planned)
- **Repository**: https://github.com/Happy-Hippopotam-us/renou

## Key People
- **Paul (Dorf)**: Developer, WordPress background, Laravel Valet user
- **Tita**: Content editor, non-developer (will use Claude Code for content editing)

## Local Development
- **Location**: `~/Sites/renou`
- **Dev server**: `npm run dev` → http://localhost:3000
- **Other projects**: `~/Sites/valet` (PHP/WordPress with .birdie TLD)

## Project Structure
```
renou/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer, metadata)
│   ├── page.tsx            # Homepage (Hero, How It Works, CTA)
│   ├── contact/
│   │   └── page.tsx        # Contact page with form
│   ├── services/
│   │   └── page.mdx        # Services page (MDX content)
│   ├── how-it-works/
│   │   └── page.mdx        # Process explanation (MDX)
│   ├── about/
│   │   └── page.mdx        # About us (MDX)
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API endpoint
├── components/
│   └── ContactForm.tsx     # Reusable contact form
├── public/
│   └── images/             # Static assets
├── mdx-components.tsx      # MDX styling configuration
├── next.config.mjs         # Next.js + MDX config
└── .claudeproject          # This file
```

## Content Strategy
All main content pages are MDX files that can be edited by asking Claude:
- Mix markdown with HTML/Tailwind classes
- Import React components into content
- Easy for non-developers to edit via Claude

## Features Implemented
✅ Mobile-first responsive design
✅ MDX content management
✅ Contact form (needs email service)
✅ SEO-friendly metadata
✅ Clean navigation and footer
✅ Tailwind styling system

## Immediate Roadmap
1. **MVP Launch** (This Week)
   - Add placeholder images
   - Deploy to Vercel
   - Connect custom domain
   - Set up contact form email (Resend)

2. **Content Refinement** (Next Week)
   - Finalize copy with Tita
   - Professional photography
   - Add testimonials section
   - Create case studies

3. **Lead Generation** (Week 3-4)
   - Google Ads setup
   - SEO optimization
   - Social media presence
   - Email capture/newsletter

## Future Platform Features
- Client authentication (NextAuth.js or Clerk)
- Database (Postgres via Vercel or Supabase)
- Inventory management tool
- Photo upload and cataloging
- AI-powered valuation
- Client portal
- Payment processing (Stripe)
- Marketplace integration (eBay, Facebook)

## Design System
- **Colors**: Blue primary (#2563eb), warm grays for text
- **Typography**: Inter font family
- **Spacing**: Tailwind default scale
- **Breakpoints**: Mobile-first, md: 768px, lg: 1024px
- **Tone**: Professional, compassionate, trustworthy

## Development Practices
- Commit messages: Clear, descriptive
- Branch strategy: `main` for production, feature branches as needed
- Testing: Manual testing before push (automated tests later)
- Deployment: Auto-deploy from `main` via Vercel

## Common Tasks

### Add new page
```bash
# Create new MDX file
touch app/new-page/page.mdx

# Add to navigation in app/layout.tsx
```

### Edit content
Just ask Claude: "Update the services page to add X"

### Add images
```bash
# Place in public directory
cp image.jpg public/images/

# Use in TSX:
import Image from 'next/image'
<Image src="/images/image.jpg" alt="..." width={800} height={600} />

# Use in MDX:
![Alt text](/images/image.jpg)
```

### Deploy changes
```bash
git add .
git commit -m "Description of changes"
git push
# Auto-deploys via Vercel
```

## Environment Variables (Production)
Will need to add via Vercel dashboard:
- `RESEND_API_KEY` - for contact form emails
- `NEXT_PUBLIC_SITE_URL` - production domain

## Contact Form Todo
Currently logs to console. Needs integration with email service:
- **Recommended**: Resend (simple, reliable)
- **Alternative**: SendGrid, Postmark
- File to update: `app/api/contact/route.ts`

## Hosting Details
- **Current**: A2 reseller hosting (for other projects)
- **This project**: Vercel (serverless, auto-deploy, free tier)
- **DNS**: Cloudflare
- **Domain**: TBD

## Key Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build locally
npm run lint     # Check code quality
```

## Notes
- Keep it simple for MVP
- Content in git = easy collaboration
- Mobile-first always
- Deploy early, iterate fast
- Tita can edit content with Claude Code once she has Claude Pro

## Questions for Claude When Working
- What phase of development are we in?
- Who is the audience for this change?
- Does this need to be mobile-responsive?
- Should this be committed to git?

## Resources
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- MDX Docs: https://mdxjs.com/docs
- Vercel Docs: https://vercel.com/docs
