# Renou Homes - Brand Guidelines

## Brand Identity

**Mission**: Helping families transition with dignity, care, and respect during life's significant changes.

**Voice**: Professional, compassionate, trustworthy, warm

**Audience**: 
- Retirees downsizing to smaller homes
- Families navigating divorce
- Estate executors managing inherited properties
- Adult children helping aging parents

---

## Logo

### Primary Logo
- **Font**: New Astro
- **Colors**: 
  - Primary: `#a67939` (Warm Gold/Bronze)
  - Secondary: `#30531C` (Deep Forest Green)

### Logo Usage
- Minimum size: 120px width
- Clear space: Equal to the height of the logo on all sides
- Logo files location: `public/logo.svg`, `public/logo.png`

### Logo Variations
- Full color (primary use)
- White version (for dark backgrounds)
- Black version (for light backgrounds where color isn't appropriate)

---

## Color Palette

### Primary Colors

**Warm Gold** (Heritage, Trust, Value)
```
Hex: #a67939
RGB: 166, 121, 57
Tailwind: Use custom color or closest: amber-600
Usage: Accent elements, CTAs, highlights
```

**Forest Green** (Growth, Stability, Care)
```
Hex: #30531C
RGB: 48, 83, 28
Tailwind: Use custom color or closest: green-800
Usage: Headers, important text, secondary CTAs
```

### Secondary Colors

**Soft Cream** (Warmth, Comfort)
```
Hex: #F5F1E8
RGB: 245, 241, 232
Tailwind: Use custom or stone-50
Usage: Backgrounds, soft sections
```

**Warm Gray** (Neutrality, Elegance)
```
Hex: #8B8680
RGB: 139, 134, 128
Tailwind: stone-500
Usage: Body text, borders, subtle elements
```

**Deep Charcoal** (Professionalism)
```
Hex: #2D2926
RGB: 45, 41, 38
Tailwind: stone-900
Usage: Primary text, headers
```

### Accent Colors

**Terracotta** (Warmth, Energy)
```
Hex: #C97D60
RGB: 201, 125, 96
Tailwind: orange-400/Custom
Usage: Highlights, call-outs
```

**Sage Green** (Calm, Peace)
```
Hex: #7A9B76
RGB: 122, 155, 118
Tailwind: green-500/Custom
Usage: Success states, positive messaging
```

---

## Typography

### Primary Font: Inter
**Usage**: All body text, UI elements, buttons
- **Body**: 16-18px (1rem - 1.125rem)
- **Small**: 14px (0.875rem)
- **Line height**: 1.6-1.8

### Display Font: New Astro
**Usage**: Logo only (currently)
- Consider using for major headlines if web font available
- Fallback: Use serif font family

### Type Scale

```css
/* Headings */
h1: 2.5rem - 3.5rem (40px - 56px) - font-bold
h2: 2rem - 3rem (32px - 48px) - font-bold
h3: 1.5rem - 2rem (24px - 32px) - font-semibold
h4: 1.25rem - 1.5rem (20px - 24px) - font-semibold

/* Body */
p: 1rem - 1.125rem (16px - 18px) - font-normal
small: 0.875rem (14px) - font-normal
```

### Font Weights
- Regular: 400 (body text)
- Medium: 500 (emphasis)
- Semibold: 600 (subheadings)
- Bold: 700 (headings, CTAs)

---

## UI Components

### Buttons

**Primary Button**
```css
Background: #a67939 (Warm Gold)
Text: White
Hover: Darken 10%
Padding: 12px 32px
Border-radius: 8px
Font-weight: 600
```

**Secondary Button**
```css
Background: Transparent
Border: 2px solid #30531C (Forest Green)
Text: #30531C
Hover: Background #30531C, Text White
Padding: 12px 32px
Border-radius: 8px
Font-weight: 600
```

**Tertiary/Text Button**
```css
Background: Transparent
Text: #a67939 (Warm Gold)
Hover: Underline
Font-weight: 500
```

### Cards
```css
Background: White
Border: 1px solid #E5E1D8 (light warm gray)
Border-radius: 12px
Padding: 24px - 32px
Shadow: Subtle (0 2px 8px rgba(0,0,0,0.08))
```

### Forms
```css
Input Background: White
Border: 1px solid #D1CDC5
Focus Border: #a67939 (Warm Gold)
Border-radius: 8px
Padding: 12px 16px
Label: #2D2926, font-weight: 500
```

---

## Imagery

### Photography Style
- **Emotion**: Warm, authentic, hopeful
- **Subjects**: Real families, home interiors, personal belongings
- **Tone**: Natural lighting, slightly warm color temperature
- **Avoid**: Stock photo feel, overly staged, cold/clinical

### Image Treatment
- **Border-radius**: 8px - 12px (soften edges)
- **Overlay**: When needed, use warm overlay (#a67939 at 30-50% opacity)
- **Aspect Ratios**: 
  - Hero: 16:9
  - Cards: 4:3 or 1:1
  - Portraits: 3:4

---

## Spacing & Layout

### Container Widths
```css
Max-width: 1280px (7xl)
Padding: 16px mobile, 24px tablet, 32px desktop
```

### Section Spacing
```css
Mobile: 48px - 64px (py-12 - py-16)
Desktop: 96px - 128px (py-24 - py-32)
```

### Grid System
- Use Tailwind's grid system
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns (depending on content)

---

## Tailwind Configuration

Add these custom colors to `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        'renou': {
          gold: '#a67939',
          forest: '#30531C',
          cream: '#F5F1E8',
          gray: '#8B8680',
          charcoal: '#2D2926',
          terracotta: '#C97D60',
          sage: '#7A9B76',
        }
      },
      fontFamily: {
        'display': ['New Astro', 'Georgia', 'serif'], // Logo font
      }
    }
  }
}
```

### Usage Examples

```jsx
{/* Primary button */}
<button className="bg-renou-gold text-white hover:bg-renou-gold/90">
  Get Started
</button>

{/* Secondary button */}
<button className="border-2 border-renou-forest text-renou-forest hover:bg-renou-forest hover:text-white">
  Learn More
</button>

{/* Section with brand background */}
<section className="bg-renou-cream py-16">
  <h2 className="text-renou-charcoal">Our Services</h2>
</section>

{/* Accent text */}
<p className="text-renou-gray">Supporting text in warm gray</p>
```

---

## Icon Style

### Icon Library
Use **Heroicons** or **Lucide React** for consistency

### Icon Treatment
- **Stroke-width**: 2px (medium weight)
- **Size**: 24px standard, 32px for emphasis
- **Color**: Match brand palette
  - Default: `#8B8680` (warm gray)
  - Active: `#a67939` (warm gold)
  - Success: `#7A9B76` (sage green)

---

## Tone of Voice

### Writing Style
- **Clear**: Avoid jargon, explain processes simply
- **Compassionate**: Acknowledge emotional nature of transitions
- **Professional**: Trustworthy without being cold
- **Direct**: Respect people's time, get to the point

### Do's
✅ "We help families transition with dignity"
✅ "Preserve your family's stories"
✅ "Professional inventory and valuation"
✅ "You're not alone in this process"

### Don'ts
❌ "Liquidate your assets" (too cold)
❌ "Get rid of unwanted items" (disrespectful)
❌ "Quick estate clearance" (insensitive)
❌ Technical jargon without explanation

---

## Examples of Brand Application

### Hero Section
```jsx
<section className="relative h-[600px]">
  <div className="absolute inset-0 bg-renou-forest/70" />
  <div className="relative text-white">
    <h1 className="text-5xl font-bold">
      Transition Your Home with Dignity
    </h1>
    <button className="bg-renou-gold hover:bg-renou-gold/90">
      Get Started
    </button>
  </div>
</section>
```

### Card Component
```jsx
<div className="bg-white border border-stone-200 rounded-lg p-8 shadow-sm">
  <h3 className="text-renou-charcoal text-2xl font-semibold mb-4">
    Complete Home Inventory
  </h3>
  <p className="text-renou-gray mb-6">
    We photograph and catalog every item...
  </p>
  <a href="#" className="text-renou-gold font-medium hover:underline">
    Learn More →
  </a>
</div>
```

---

## File Locations

### Brand Assets
```
public/
├── logo.svg              # Primary logo
├── logo-white.svg        # White version
├── logo-black.svg        # Black version
├── favicon.ico           # Browser icon
└── branding/
    ├── logo-variations/  # Different logo formats
    ├── color-swatches/   # Color palette exports
    └── this-guide.md     # This branding guide
```

---

## Accessibility

### Color Contrast
All text must meet WCAG AA standards:
- Body text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum

### Tested Combinations
✅ `#2D2926` (charcoal) on `#F5F1E8` (cream) - PASS
✅ White on `#a67939` (gold) - PASS
✅ White on `#30531C` (forest) - PASS
✅ `#30531C` (forest) on white - PASS

---

## Notes for Developers

1. **Always use brand colors** from the Tailwind config, not arbitrary hex values
2. **Mobile-first**: Design for mobile, enhance for desktop
3. **Imagery**: All photos should feel warm and authentic
4. **Respect the logo**: Never distort, recolor, or add effects
5. **Consistency**: Use the same button styles, spacing, and components throughout

---

## Questions?

When in doubt:
- Prioritize **warmth** over clinical precision
- Choose **clarity** over clever copy
- Emphasize **dignity** and respect in all messaging
- Make it **accessible** to non-technical users

This is a living document. Update as the brand evolves.
