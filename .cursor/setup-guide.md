# A3 Aluminium Website - Complete Setup Guide

## 🏗️ Tech Design Architecture

### Frontend Architecture

```
React 18 (Single Page Application)
├── TypeScript for type safety
├── Vite for fast development & building
├── Tailwind CSS for styling
├── GSAP for advanced animations
├── Lucide React for icons
└── React Hook Form for form handling
```

### Design Patterns

- **Component-Based Architecture**: Reusable, modular components
- **Mobile-First Responsive Design**: Progressive enhancement from mobile
- **Accessibility-First**: WCAG 2.1 AA compliance
- **Performance-Optimized**: Lazy loading, image optimization
- **SEO-Friendly**: Meta tags, semantic HTML, structured data

## 📁 Folder Structure

```
atiga-aluminium/
├── public/
│   ├── images/                    # Product images, hero backgrounds
│   │   ├── products/             # Product category images
│   │   ├── gallery/              # Gallery images
│   │   ├── hero/                 # Hero section images
│   │   └── icons/                # Favicons, PWA icons
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── components/               # Reusable components
│   │   ├── common/              # Shared components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Loading.tsx
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── FloatingWhatsApp.tsx
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Gallery.tsx      # New gallery section
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                  # UI-specific components
│   │       ├── ProductCard.tsx
│   │       ├── GalleryCard.tsx
│   │       └── ServiceCard.tsx
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useGSAP.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useResponsive.ts
│   │
│   ├── data/                    # Static data and content
│   │   ├── products.ts
│   │   ├── gallery.ts
│   │   ├── services.ts
│   │   └── testimonials.ts
│   │
│   ├── styles/                  # Additional styles
│   │   ├── globals.css
│   │   ├── animations.css
│   │   └── components.css
│   │
│   ├── utils/                   # Utility functions
│   │   ├── animations.ts
│   │   ├── constants.ts
│   │   └── helpers.ts
│   │
│   ├── types/                   # TypeScript type definitions
│   │   ├── index.ts
│   │   ├── products.ts
│   │   └── gallery.ts
│   │
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Tailwind imports
│
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment variables
├── package.json
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── vercel.json                  # Vercel deployment config
```

## 🛠️ Tech Stack Details

### Core Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.2",
    "gsap": "^3.12.2",
    "lucide-react": "^0.294.0",
    "react-hook-form": "^7.47.0",
    "@hookform/resolvers": "^3.3.2",
    "zod": "^3.22.4",
    "embla-carousel-react": "^8.0.0",
    "framer-motion": "^10.16.4"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8",
    "tailwindcss": "^3.3.6",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "eslint": "^8.55.0",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0"
  }
}
```

### GSAP Features Used

- **ScrollTrigger**: Scroll-based animations
- **Timeline**: Complex animation sequences
- **Flip Plugin**: Layout transitions (FREE for web)
- **TextPlugin**: Text animations
- **MorphSVG**: SVG morphing (if needed)

## 🚀 Deployment Guide

### Option 1: Vercel (Recommended - FREE)

#### 1. Install Vercel CLI

```bash
npm i -g vercel
```

#### 2. Build Configuration

Create `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

#### 3. Deploy Steps

```bash
# 1. Build the project
npm run build

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel

# 4. For production deployment
vercel --prod
```

#### 4. Custom Domain Setup

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Update DNS records as instructed

## 🔄 Redeployment Guide (After Making Changes)

### Method 1: Manual CLI Deployment (Quick Updates)

**When to use**: For quick fixes, testing, or when you want full control over deployments.

```bash
# Step 1: Make your code changes
# Step 2: Build the project
npm run build

# Step 3: Deploy to production
vercel --prod
```

**Example workflow:**

```bash
# Edit your files (e.g., fix a bug, update content)
# Then run:
npm run build
vercel --prod
```

### Method 2: Git-Based Automatic Deployment (Recommended)

**When to use**: For ongoing development, team collaboration, and professional workflows.

#### Setup Automatic Deployment

1. **Connect GitHub Repository to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click on your project (`atiga-aluminium`)
   - Go to Settings → Git
   - Connect to your GitHub repository: `mochammadshenna/atiga-aluminium`

2. **Configure Auto-Deploy Settings:**
   - Production Branch: `master` (or `main`)
   - Preview Deployments: Enable for pull requests
   - Automatic Deployments: Enable

#### Daily Development Workflow

```bash
# Step 1: Make your changes
# Edit files, add features, fix bugs...

# Step 2: Test locally
npm run dev
# Test your changes at http://localhost:5173

# Step 3: Build and verify
npm run build
npm run preview

# Step 4: Commit and push
git add .
git commit -m "Your descriptive commit message"
git push origin master

# Step 5: Automatic deployment happens!
# Vercel will automatically build and deploy your changes
```

#### Branch-Based Deployment

```bash
# For feature development:
git checkout -b feature/new-feature
# Make changes...
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
# Creates preview deployment

# For production:
git checkout master
git merge feature/new-feature
git push origin master
# Triggers production deployment
```

### Method 3: Vercel CLI with Git Integration

**When to use**: When you want CLI control but with Git tracking.

```bash
# After making changes and committing to Git:
vercel --prod --confirm
```

### Method 4: Quick Content Updates

**For small content changes (text, images):**

```bash
# 1. Edit content files
# 2. Quick deploy without full rebuild
vercel --prod --force
```

## 🔄 Complete Redeployment Workflow Examples

### Example 1: Fix a Bug

```bash
# 1. Fix the bug in your code
# 2. Test locally
npm run dev

# 3. Build and deploy
npm run build
vercel --prod

# Or with Git (recommended):
git add .
git commit -m "Fix: Corrected WhatsApp button issue"
git push origin master
```

### Example 2: Add New Feature

```bash
# 1. Create feature branch
git checkout -b feature/contact-form

# 2. Develop the feature
# Make changes...

# 3. Test locally
npm run dev

# 4. Commit and push
git add .
git commit -m "Add: Contact form with validation"
git push origin feature/contact-form

# 5. Merge to master for production
git checkout master
git merge feature/contact-form
git push origin master
```

### Example 3: Update Content Only

```bash
# 1. Edit text, images, or data files
# 2. Quick deploy
git add .
git commit -m "Update: Product descriptions and pricing"
git push origin master
```

## 📊 Deployment Monitoring

### Check Deployment Status

```bash
# List all deployments
vercel ls

# Get deployment details
vercel inspect

# View deployment logs
vercel logs
```

### Vercel Dashboard Features

- **Deployments**: View all deployment history
- **Functions**: Monitor serverless functions (if any)
- **Analytics**: Track website performance
- **Domains**: Manage custom domains
- **Settings**: Configure build and deployment options

## 🚀 Best Practices for Redeployment

### 1. Development Workflow

```bash
# Always test locally first
npm run dev

# Build before deploying
npm run build

# Use descriptive commit messages
git commit -m "Fix: Mobile navigation menu overflow issue"
```

### 2. Version Control

- Use feature branches for new features
- Keep master/main branch stable
- Use descriptive commit messages
- Regular commits (don't wait too long)

### 3. Testing

- Test locally before pushing
- Use Vercel preview deployments for testing
- Check mobile responsiveness
- Verify all links and functionality

### 4. Monitoring

- Check deployment status in Vercel dashboard
- Monitor website performance
- Review deployment logs for errors
- Set up error monitoring if needed

## 🔧 Troubleshooting Deployments

### Common Issues

1. **Build Failures:**

   ```bash
   # Check build locally
   npm run build
   
   # View detailed logs
   vercel logs
   ```

2. **Outdated Dependencies:**

   ```bash
   # Update dependencies
   npm update
   npm run build
   vercel --prod
   ```

3. **Environment Variables:**
   - Set in Vercel Dashboard → Settings → Environment Variables
   - Redeploy after adding env vars

4. **Cache Issues:**

   ```bash
   # Force fresh deployment
   vercel --prod --force
   ```

### Quick Commands Reference

```bash
# Manual deployment
vercel --prod

# Check status
vercel ls

# View logs
vercel logs

# Force deployment
vercel --prod --force

# Connect to Git (if not connected)
vercel --confirm
```

## 🔧 Development Setup

### 1. Environment Setup

```bash
# Clone repository
git clone <your-repo-url>
cd atiga-aluminium

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Environment Variables

Create `.env.local`:

```env
VITE_COMPANY_NAME=A3 Aluminium
VITE_CONTACT_EMAIL=info@atigaaluminium.com
VITE_CONTACT_PHONE=+62-896-3612-4857
VITE_WHATSAPP_NUMBER=6289636124857
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
VITE_ANALYTICS_ID=your_google_analytics_id
```

### 3. GSAP Setup

```typescript
// src/utils/animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Flip);

export { gsap, ScrollTrigger, Flip };
```

## 📝 Content Editing Guide

### 1. Company Information

**File**: `src/data/company.ts`

```typescript
export const companyInfo = {
  name: "A3 Aluminium",
  tagline: "Presisi dan Keunggulan dalam Aluminium",
  description: "Menghadirkan solusi aluminium berkualitas tinggi sejak 1985...",
  founded: "1985",
  address: "Veronica Residence 2, Jl. Mandor Dami 3 No.11b, Kalimulya, Depok, Jawa Barat 17530",
  phone: "+62-896-3612-4857",
  email: "info@atigaaluminium.com",
  whatsapp: "6289636124857"
};
```

### 2. Products Configuration

**File**: `src/data/products.ts`

```typescript
export const products = [
  {
    id: 1,
    name: "Jendela Aluminium Premium",
    category: "windows",
    description: "Jendela aluminium berkualitas tinggi...",
    features: ["Tahan korosi", "Desain modern", "Efisiensi energi"],
    images: ["/images/produk-jendela.jpg"],
    price: "Hubungi untuk harga"
  },
  // Add more products...
];
```

### 3. Gallery Images

**File**: `src/data/gallery.ts`

```typescript
export const galleryImages = [
  {
    id: 1,
    title: "Modern Glass Window",
    category: "windows",
    image: "/images/gallery/window-modern.jpg",
    description: "High-quality aluminum window installation"
  },
  // Add more gallery items...
];
```

### 4. Services Configuration

**File**: `src/data/services.ts`

```typescript
export const services = [
  {
    id: 1,
    title: "Pemasangan Jendela",
    description: "Layanan pemasangan professional...",
    icon: "Window",
    features: ["Konsultasi gratis", "Garansi 5 tahun"]
  },
  // Add more services...
];
```

### 5. Hero Section Content

**File**: `src/components/sections/Hero.tsx`
Update the hero content by modifying:

```typescript
const heroContent = {
  headline: "Solusi Aluminium",
  subheadline: "Terdepan",
  description: "ATIGA Aluminium menghadirkan jendela, pintu, dan kaca tempered berkualitas tinggi...",
  primaryCTA: "Lihat Galeri Proyek",
  secondaryCTA: "Konsultasi Gratis"
};
```

### 6. Styling Customization

**File**: `tailwind.config.js`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        accent: {
          primary: '#3b82f6',
          secondary: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}
```

## 🎨 Image Guidelines

### Image Requirements

- **Hero Images**: 1920x1080px (16:9 ratio) - supports both landscape and portrait
- **Product Images**: 800x600px (4:3 ratio) - optimized for popup viewing
- **Gallery Images**: 600x400px (3:2 ratio) - auto-scroll optimized
- **Thumbnails**: 300x200px (3:2 ratio)

### Supported Formats

- WebP (preferred for web)
- JPEG (fallback)
- PNG (for logos/graphics)

### Optimization

```bash
# Install image optimization tools
npm install --save-dev imagemin imagemin-webp

# Optimize images before adding to public/images/
```

## 🔍 SEO Configuration

### Meta Tags Setup

**File**: `index.html`

```html
<head>
  <title>A3 Aluminium - Jendela & Pintu Aluminium Berkualitas</title>
  <meta name="description" content="A3 Aluminium menyediakan jendela, pintu, dan produk aluminium berkualitas tinggi. Layanan pemasangan professional di seluruh Indonesia.">
  <meta name="keywords" content="aluminium, jendela, pintu, kaca, tempered glass, sliding window">
  
  <!-- Open Graph -->
  <meta property="og:title" content="A3 Aluminium - Solusi Aluminium Terpercaya">
  <meta property="og:description" content="Produk aluminium berkualitas tinggi untuk kebutuhan rumah dan komersial">
  <meta property="og:image" content="/images/og-image.jpg">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "A3 Aluminium",
    "description": "Penyedia produk aluminium berkualitas tinggi",
    "url": "https://a3aluminium.com"
  }
  </script>
</head>
```

## 📱 Mobile Optimization

### Touch Targets

- Minimum 44px touch targets
- Adequate spacing between interactive elements
- Swipe gestures for gallery navigation

### Performance

- Lazy loading for images
- Code splitting for better initial load
- Service worker for caching (optional)

## 🚀 Performance Optimization

### Bundle Optimization

```typescript
// vite.config.ts
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap'],
          utils: ['lucide-react']
        }
      }
    }
  }
}
```

### Image Optimization

- Use WebP format where supported
- Implement responsive images
- Lazy loading for below-the-fold content

## 📞 WhatsApp Integration

### Global Configuration

```typescript
// WhatsApp utility function
export const openWhatsApp = (customMessage?: string) => {
  const phoneNumber = "6289636124857";
  const defaultMessage = "Halo *Pak Uki*, saya tertarik dengan produk A3 Aluminium dan ingin konsultasi gratis. Bisa minta informasi lebih lanjut?";
  const message = encodeURIComponent(customMessage || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
```

### Integration Points

- Header navigation button
- Hero section CTA buttons
- Products custom CTA
- FloatingWhatsApp component
- All "Konsultasi Gratis" buttons

## 🔧 Maintenance

### Regular Updates

1. **Dependencies**: Update monthly
2. **Content**: Review quarterly
3. **Images**: Optimize regularly
4. **SEO**: Monitor and improve

### Monitoring

- Google Analytics
- Google Search Console
- Lighthouse performance audits
- User feedback collection

## 📞 Support

For technical support or content updates:

1. Check documentation first
2. Review component structure
3. Test changes in development
4. Deploy to staging before production

## 🎨 Recent Updates (Latest Version)

### Design Improvements

- **Hero Section**:
  - Smart landscape/portrait image detection
  - Responsive object fitting for all image types
  - **Frameless hero image design** (removed rounded corners and shadows)
  - **Improved mobile layout** with better image positioning and text scaling
  - WhatsApp integration for CTA buttons
  - **Touch-friendly button sizes** for better mobile interaction
- **Services Section**:
  - Fixed icon colors for proper white visibility
  - Enhanced background integration
- **Products Section**:
  - Removed action buttons for cleaner design
  - Added full-screen image popup functionality
  - Updated with 11 high-quality local product images
  - Faster animations (0.3s duration, 0.05s stagger)
- **Gallery**:
  - Auto-scroll functionality (3-second intervals)
  - Pause on hover with manual control resume
  - Removed text from white cards, kept only image overlays
  - Cleaner card design with gradient accents
- **WhatsApp Integration**:
  - Global phone number: +62 896-3612-4857
  - Custom messages for different contexts
  - Seamless integration across all CTAs
- **Custom ATIGA Icon System**:
  - **Frame-inspired design** perfect for aluminium company branding
  - **6 complete variants**: Blue, White, Black colors × Simple + Text layouts
  - **Improved text layout** - A3 and ALUMINIUM text positioned to the right of icon frame
  - **Smart dimensions** - Text variants automatically scale to 2.5x width for proper proportions
  - **React component** supports `withText` prop for easy switching between layouts
  - **PNG converter** with automatic sizing and proper canvas dimensions
  - **SVG files** for all variants stored in `public/icons/`

### Icon Usage Examples

```tsx
// Simple icon
<AtigaIcon size={32} color="blue" />

// With text positioned to the right
<AtigaIcon size={64} color="black" withText={true} />

// White variant (useful on dark backgrounds)
<AtigaIcon size={48} color="white" withText={true} />
```

#### How to Access Save Image

```bash
open scripts/svg-to-png-converter.html

or

http://localhost:5173/scripts/svg-to-png-converter.html
```

### Performance Enhancements

- **Animations**: Optimized timing for faster, smoother interactions
- **Image Management**: All product images stored locally with high quality
- **User Experience**: Auto-scroll gallery with intuitive controls
- **Responsive Design**: Smart image handling for different aspect ratios

### Mobile Responsiveness Enhancements

- **Mobile-First Approach**:
  - **Hero Section Mobile Fixes**:
    - Added proper top padding (`pt-20 md:pt-24`) to account for fixed navbar height
    - Adjusted hero image height from 300px to 280px on mobile for better proportion
    - ChevronDown smooth auto-hide: fades out with opacity and scale transitions (500ms duration) when reaching buttons
    - Enhanced scroll button UI with smaller circle on mobile (`p-2`), blue background (`bg-blue-300/45`), and conditional animations
    - Fixed badge and content positioning to prevent navbar cropping
    - Enhanced mobile layout with proper spacing from navbar (80px mobile, 96px desktop)
  - **Hero image frame redesigned** to be properly landscape/horizontal oriented (600-700px wide on desktop) with object-cover for better presentation
  - Touch-friendly button sizes (minimum 44px for all interactive elements)
  - Optimized font sizes that scale properly on mobile devices
  - Better spacing and padding adapted for small screens
- **Products Section**:
  - **Converted to horizontal scrolling cards** on mobile for optimal user experience
  - Desktop maintains responsive grid layout (2-3 columns based on screen size)
  - Mobile cards optimized with smaller dimensions and compact content
  - **Click-anywhere-to-close functionality** added to product image popups for better UX
- **About Section (Mengapa Memilih ATIGA)**:
  - **Features converted to horizontal scrolling cards** on mobile with swipe gestures
  - Desktop maintains grid layout while mobile uses scrollable cards
- **Testimonials Section**:
  - **Converted to horizontal scrolling cards** on mobile for better user experience
  - Smooth scrolling with visual indicators
- **Contact Section**:
  - **Redesigned mobile layout** with contact info at top and map at bottom
  - Both sections contained within main container for consistent spacing
  - Separate layouts for desktop (floating info over map) and mobile (stacked)
- **Header & Navigation**:
  - **Fixed mobile "Konsultasi Gratis" button visibility** with proper separation and full-width styling
  - Improved mobile menu layout with better touch targets
  - Responsive logo and navigation spacing
  - Touch-friendly hamburger menu with proper sizing
  - **Header height considerations**: Fixed positioning with proper padding (`py-3 md:py-4`)
- **FloatingWhatsApp Button**:
  - **Fixed direct WhatsApp functionality** to properly open in new tab
  - Enhanced tooltip and hover interactions
  - Improved mobile responsiveness and touch handling
- **Footer**:
  - **Fixed text wrapping** for better mobile readability
  - Proper responsive layout for all footer content
- **CSS & Technical**:
  - Added mobile-first CSS utilities in index.css
  - Prevented horizontal scroll issues on mobile devices
  - Improved font smoothing for better readability
  - iOS-specific input zoom prevention
  - Proper viewport meta tag configuration
  - **Navbar space calculations**: Hero section accounts for fixed navbar height (≈80px mobile, ≈96px desktop)

### Product Images Inventory

Local images stored in `public/images/`:

- `glass-2.jpg` - Kaca Tempered Premium
- `glass-3.jpg` - Kaca Laminated  
- `product-1.jpeg` - Produk Custom Aluminium
- `produk-kaca.jpg` - Produk Kaca Berkualitas
- `produk-kaca-1.jpg` - Kaca Premium Series
- `produk-jendela.jpg` - Jendela Aluminium Premium
- `produk-jendela-2.jpg` - Jendela Aluminium Modern
- `produk-jendela-sliding.jpg` - Jendela Sliding Aluminium
- `produk-jendela-sliding-2.jpg` - Jendela Sliding Premium
- `produk-jendela-sliding-3.jpg` - Jendela Sliding Executive
- `produk-jendela-sliding-4.jpeg` - Jendela Sliding Deluxe
- `hero-image.jpg` - Main hero section image
- `tentang-kami-image.jpg` - About us section image
- `background-image-layanan-kami.jpg` - Services section background

### Contact Information

- **Phone/WhatsApp**: +62 896-3612-4857
- **Email**: <info@atigaaluminium.com>
- **Address**: Veronica Residence 2, Jl. Mandor Dami 3 No.11b, Kalimulya, Depok, Jawa Barat 17530
- **Business Hours**:
  - Monday - Saturday: 08:00 - 17:00
  - Sunday: 08:00 - 15:00

### ATIGA Icon System Files

**SVG Icon Files** (stored in `public/icons/`):

**Simple Icons** (32x32px viewBox):

- `atiga-icon.svg` - Blue (#3B82F6)
- `atiga-icon-white.svg` - White
- `atiga-icon-black.svg` - Black

**Text Variants** (80x32px viewBox with text positioned right):

- `atiga-icon-blue-text.svg` - Blue with A3 ALUMINIUM text
- `atiga-icon-white-with-text.svg` - White with A3 ALUMINIUM text  
- `atiga-icon-black-with-text.svg` - Black with A3 ALUMINIUM text

**React Component**: `src/components/icons/AtigaIcon.tsx`

- Supports `withText` prop for layout switching
- Automatically adjusts dimensions (2.5x width for text variants)
- Color customization through `color` prop
- Size scaling through `size` prop

**PNG Generator**: `scripts/svg-to-png-converter.html`

- Converts all variants to PNG format
- Supports sizes: 16px, 32px, 64px, 128px, 256px, 512px
- Automatic canvas sizing for text variants
- File naming: `atiga-icon-{size}x{size}[-color][-with-text].png`

This setup guide provides everything needed to develop, deploy, and maintain the A3 Aluminium website efficiently with all the latest improvements and optimizations.
