#!/bin/bash

# Renou Homes - File Installation Script
# Run this from your ~/Sites/renou directory

echo "Installing Renou Homes files..."

# Create directories
mkdir -p app/api/contact
mkdir -p app/services
mkdir -p app/how-it-works
mkdir -p app/about
mkdir -p app/contact
mkdir -p components

# Copy this script's directory files to your project
# You'll need to manually copy the files I created above

echo "
===========================================
MANUAL INSTALLATION STEPS:
===========================================

1. Copy these files from Claude's output to your ~/Sites/renou directory:

   next.config.mjs
   mdx-components.tsx
   README.md
   app/layout.tsx
   app/page.tsx
   app/contact/page.tsx
   app/services/page.mdx
   app/how-it-works/page.mdx
   app/about/page.mdx
   app/api/contact/route.ts
   components/ContactForm.tsx

2. After copying files, run:
   npm run dev

3. Open http://localhost:3000

4. Start editing content in the MDX files!

===========================================
DEPLOYMENT (when ready):
===========================================

# Push to GitHub
git add .
git commit -m 'Initial Renou Homes site'
git push origin main

# Then deploy on Vercel:
1. Go to vercel.com
2. Import your GitHub repo
3. Click Deploy
4. Done!

===========================================
"
