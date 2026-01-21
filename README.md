# Renou Homes - Estate Transition Services Platform

Modern, mobile-first website for estate transition services with MDX content management.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX (Markdown + JSX)
- **Language**: TypeScript
- **Deployment**: Vercel (recommended) or Cloudflare Pages

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
renou/
├── app/
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx            # Homepage
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── services/
│   │   └── page.mdx        # Services (MDX content)
│   ├── how-it-works/
│   │   └── page.mdx        # Process (MDX content)
│   ├── about/
│   │   └── page.mdx        # About (MDX content)
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API
├── components/
│   └── ContactForm.tsx     # Contact form component
├── mdx-components.tsx      # MDX styling configuration
└── next.config.mjs         # MDX configuration
```

## Editing Content

All content pages are in MDX format, allowing you to:

1. **Edit with Claude**: Share MDX files, ask for content revisions
2. **Mix Markdown + HTML**: Use standard markdown with custom HTML/Tailwind classes
3. **Add Components**: Import React components directly into content

Example MDX:
```mdx
# Heading in Markdown

Regular paragraph text with **bold** and *italic*.

<div className="bg-blue-50 p-6 rounded-lg">
  Custom styled section with Tailwind classes
</div>
```

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

**Benefits:**
- Zero configuration
- Automatic deployments on git push
- Free SSL, CDN, analytics
- Built by Next.js creators

### Option 2: Cloudflare Pages

1. Push code to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Connect repository
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Framework preset: Next.js

**Benefits:**
- Global CDN (even faster than Vercel in some regions)
- Free tier is generous
- You already use Cloudflare

### Option 3: Your A2 Hosting (Node.js)

If A2 supports Node.js:
```bash
npm run build
npm start
```

You'll need to configure:
- Node.js environment (v18+)
- PM2 or similar process manager
- Reverse proxy (nginx)

**Note**: Static deployment is simpler - use Vercel/Cloudflare for now.

## Git Strategy

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial Renou Homes website"

# Create GitHub repo, then:
git remote add origin https://github.com/yourusername/renou.git
git branch -M main
git push -u origin main
```

**Recommended branches:**
- `main` - production (auto-deploys)
- `staging` - preview deploys
- Feature branches for changes

## Contact Form Setup

The contact form currently logs to console. To activate email:

1. **Using Resend** (recommended):
   ```bash
   npm install resend
   ```
   Add to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   ```
   Uncomment code in `app/api/contact/route.ts`

2. **Using SendGrid/Postmark/Mailgun**: Similar process

3. **Using your A2 email SMTP**: Use `nodemailer`

## Environment Variables

Create `.env.local`:
```
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://renou.homes
```

## Future Enhancements

- PWA support (add `next-pwa`)
- Client authentication (NextAuth.js or Clerk)
- Database integration (Postgres, Supabase)
- Payment processing (Stripe)
- Admin dashboard
- Client portal

## Custom Domain

**On Vercel:**
1. Project Settings → Domains
2. Add your domain
3. Update DNS (they'll show you the records)

**On Cloudflare Pages:**
1. Already on Cloudflare DNS
2. Pages → Custom Domains
3. Add domain (automatic DNS setup)

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Check code quality
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Progressive enhancement

## License

Private - All rights reserved

## Support

Questions? Contact the development team.
