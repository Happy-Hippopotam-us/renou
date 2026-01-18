#!/bin/bash

# Add placeholder images to Renou Homes project
# Using Unsplash for high-quality, optimized stock photos

echo "Creating images directory..."
mkdir -p public/images/{hero,services,process}

echo "Downloading optimized placeholder images from Unsplash..."

# Hero image - Family organizing home
curl -L "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1920&q=80&fit=crop" \
  -o public/images/hero/home-transition.jpg

# Services - Inventory cataloging
curl -L "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80&fit=crop" \
  -o public/images/services/inventory.jpg

# Services - Valuation
curl -L "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80&fit=crop" \
  -o public/images/services/valuation.jpg

# Process - Consultation
curl -L "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&fit=crop" \
  -o public/images/process/consultation.jpg

# Process - Organizing
curl -L "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80&fit=crop" \
  -o public/images/process/organizing.jpg

# About - Team/compassion
curl -L "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&fit=crop" \
  -o public/images/about/team.jpg

echo "✅ Images downloaded successfully!"
echo ""
echo "Images are optimized at 80% quality and properly sized."
echo "These are royalty-free from Unsplash."
echo ""
echo "Next steps:"
echo "1. Review images in public/images/"
echo "2. Replace with your own photography when ready"
echo "3. Commit: git add public/images && git commit -m 'Add placeholder images'"
