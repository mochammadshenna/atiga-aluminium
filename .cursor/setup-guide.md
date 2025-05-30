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
- **Error Boundary Pattern**: Comprehensive error handling and recovery

## 📁 Folder Structure

```
atiga-aluminium/
├── public/
│   ├── images/                    # Product images, hero backgrounds
│   │   ├── products/             # Product category images
│   │   ├── gallery/              # Gallery images
│   │   ├── hero/                 # Hero section images
│   │   └── icons/                # Favicons, PWA icons
│   ├── icons/                    # ATIGA icon system
│   │   ├── atiga-icon.svg        # Simple blue icon
│   │   ├── atiga-icon-white.svg  # Simple white icon
│   │   ├── atiga-icon-black.svg  # Simple black icon
│   │   ├── atiga-icon-blue-text.svg    # Blue with A3 ALUMINIUM text
│   │   ├── atiga-icon-white-with-text.svg # White with text
│   │   └── atiga-icon-black-with-text.svg # Black with text
│   ├── favicon-16x16.svg         # 16x16 favicon
│   ├── favicon-32x32.svg         # 32x32 favicon
│   ├── apple-touch-icon.svg      # iOS touch icon
│   ├── favicon.ico               # Legacy favicon
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
│   │   ├── icons/               # Custom icon components
│   │   │   ├── AtigaIcon.tsx    # Main ATIGA icon component
│   │   │   └── index.tsx        # Icon exports
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
│   ├── App.tsx                  # Main App component with error handling
│   ├── main.tsx                 # Application entry point with initialization
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
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.5.3",
    "gsap": "^3.13.0",
    "lucide-react": "^0.344.0",
    "react-hook-form": "^7.56.4",
    "@hookform/resolvers": "^5.0.1",
    "zod": "^3.25.34",
    "embla-carousel-react": "^8.6.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.2",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "eslint": "^9.9.1",
    "@typescript-eslint/eslint-plugin": "^8.3.0",
    "@typescript-eslint/parser": "^8.3.0"
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
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/index.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
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
  headline: "Solusi Pemasangan Aluminium",
  subheadline: "Berkualitas",
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
- **Favicons**: SVG format with 16x16, 32x32, and 180x180 variants

### Supported Formats

- WebP (preferred for web)
- JPEG (fallback)
- PNG (for logos/graphics)
- SVG (for icons and favicons)

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
  <meta charset="UTF-8" />
  
  <!-- Favicon and App Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon-32x32.svg" />
  <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
  <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-32x32.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>A3 Aluminium - Jendela, Pintu & Kaca Tempered Berkualitas Tinggi</title>
  <meta name="description" content="ATIGA Aluminium menyediakan jasa pemasangan jendela, pintu, dan kaca tempered berkualitas tinggi dengan desain modern dan elegan. Pengalaman 18+ tahun melayani kebutuhan aluminium Anda." />
  <meta name="keywords" content="aluminium, jendela, pintu, kaca tempered, sliding window, pemasangan jendela, ATIGA, A3 Aluminium, Depok, Jakarta" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="A3 Aluminium - Solusi Aluminium Terpercaya" />
  <meta property="og:description" content="Jasa pemasangan jendela, pintu, dan kaca tempered berkualitas tinggi dengan pengalaman 18+ tahun" />
  <meta property="og:image" content="/images/hero-image.jpg" />
  <meta property="og:url" content="https://atiga-aluminium.vercel.app" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="A3 Aluminium - Solusi Aluminium Terpercaya" />
  <meta name="twitter:description" content="Jasa pemasangan jendela, pintu, dan kaca tempered berkualitas tinggi" />
  <meta name="twitter:image" content="/images/hero-image.jpg" />
  
  <!-- Theme colors -->
  <meta name="theme-color" content="#3B82F6" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://atiga-aluminium.vercel.app" />
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

### Performance Monitoring & Testing

#### 1. **Google PageSpeed Insights** (Primary Tool)

```
URL: https://pagespeed.web.dev/
Target: 80+ Performance Score (Mobile & Desktop)
Current Status: 80-90+ (up from 68)
```

#### 2. **Lighthouse (Chrome DevTools)**

```bash
# Steps to test:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Performance" and "Mobile/Desktop"
4. Click "Generate report"
```

#### 3. **Additional Tools**

- **GTmetrix**: <https://gtmetrix.com/>
- **WebPageTest**: <https://www.webpagetest.org/>
- **Vercel Analytics**: Built into Vercel dashboard

### Build-Level Optimizations

#### 1. **Vite Configuration** (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries for better caching
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['gsap'],
          'icon-vendor': ['lucide-react'],
          'gallery-component': ['./src/components/Gallery.tsx'],
          'products-component': ['./src/components/Products.tsx']
        }
      }
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096, // Inline small assets
    cssCodeSplit: true,
    sourcemap: false // Disable sourcemaps in production
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', 'lucide-react']
  }
});
```

#### 2. **HTML Optimizations** (`index.html`)

```html
<!-- DNS Prefetching -->
<link rel="dns-prefetch" href="//wa.me">
<link rel="dns-prefetch" href="//fonts.googleapis.com">

<!-- Preload Critical Resources -->
<link rel="preload" href="/images/hero-image.jpg" as="image" type="image/jpeg">
<link rel="preload" href="/images/tentang-kami-image.jpg" as="image" type="image/jpeg">

<!-- Preconnect to External Domains -->
<link rel="preconnect" href="https://wa.me" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>

<!-- Critical CSS Inline -->
<style>
  /* Critical above-the-fold CSS inlined for immediate rendering */
  .critical-css { /* Minimal styles for immediate render */ }
</style>
```

### Component-Level Optimizations

#### 1. **React App Structure** (`App.tsx`)

```typescript
// Lazy loading for non-critical components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Gallery = lazy(() => import('./components/Gallery'));
const Products = lazy(() => import('./components/Products'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));

function App() {
  return (
    <div className="font-sans">
      {/* Critical above-the-fold content loads immediately */}
      <Header />
      <Hero />
      
      {/* Non-critical content lazy loads */}
      <Suspense fallback={<SectionLoader />}>
        <Services />
        <Products />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
      
      <FloatingWhatsApp />
    </div>
  );
}
```

#### 2. **Hero Component Optimizations**

```typescript
// Optimized image loading
<img
  src="/images/hero-image.jpg"
  alt="A3 Aluminium - Produk Berkualitas Tinggi"
  loading="eager" // Load immediately as it's above the fold
  decoding="async"
  fetchPriority="high"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 600px, 700px"
/>

// Throttled scroll events
const throttledScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
};
```

#### 3. **Gallery Component Optimizations**

```typescript
// Memoized components
const GalleryImage = React.memo(({ image }) => {
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '100px' }
    );
    // ... observer logic
  }, []);
});

// useCallback for event handlers
const handleImageLoad = useCallback(() => {
  setImageLoaded(true);
}, []);
```

#### 4. **Products Component Optimizations**

```typescript
// Memoized ProductCard component
const ProductCard = React.memo(({ product, onImageClick }) => {
  // Intersection Observer for lazy loading
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '100px' }
    );
    // ... observer logic
  }, []);

  // Lazy image loading
  {isInView && (
    <img
      src={product.images[0]}
      loading="lazy"
      decoding="async"
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  )}
});
```

### CSS Performance Optimizations

#### 1. **Critical CSS** (`index.css`)

```css
/* Critical above-the-fold styles */
.critical-loading {
  /* Optimized loading styles */
}

/* GPU Acceleration */
.gpu-accelerated {
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

/* Performance-focused utilities */
.performance-optimized {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Mobile performance */
@media (max-width: 768px) {
  .mobile-optimized {
    /* Reduced animations on mobile */
    transition-duration: 0.2s;
  }
}
```

### Performance Results Achieved

#### Before Optimization

- **Performance Score**: 68 (Poor)
- **First Contentful Paint**: ~3.2s
- **Bundle Size**: Large, unoptimized

#### After Optimization

- **Performance Score**: 80-90+ (Good/Excellent)
- **First Contentful Paint**: ~1.2s (60% improvement)
- **Bundle Sizes**:
  - `react-vendor`: 139.54 kB (44.79 kB gzipped)
  - `animation-vendor`: 69.43 kB (27.16 kB gzipped)
  - `products-component`: 20.13 kB (5.47 kB gzipped)
  - `CSS`: 36.07 kB (6.09 kB gzipped)

### Performance Monitoring Commands

```bash
# Build and analyze bundle
npm run build
npm run preview

# Deploy optimized version
vercel --prod

# Check build output sizes
ls -la dist/assets/

# Performance testing
lighthouse https://your-domain.com --output=html --output-path=./lighthouse-report.html
```

### Performance Best Practices Implemented

1. **Code Splitting**: Separated vendor libs and components
2. **Lazy Loading**: Non-critical components load on demand
3. **Image Optimization**: Proper loading attributes and sizing
4. **CSS Optimization**: Critical CSS inlined, unused styles removed
5. **JavaScript Optimization**: Minification and tree-shaking
6. **Caching Strategy**: Proper cache headers for assets
7. **Bundle Analysis**: Manual chunk splitting for optimal caching
8. **Memory Management**: useCallback and React.memo optimizations
9. **Network Optimization**: DNS prefetching and preconnect hints
10. **Runtime Performance**: Throttled scroll events and GPU acceleration

### Bundle Optimization

## 📞 WhatsApp Integration

### Global Configuration

```typescript
// WhatsApp utility function
export const openWhatsApp = (customMessage?: string) => {
  const phoneNumber = "6289636124857";
  const defaultMessage = "Halo *Pak Uki*, saya tertarik untuk pemasangan Aluminium dan ingin konsultasi lebih lanjut. Terima kasih.";
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

## 🔧 Error Handling & Stability

### App-Level Error Handling

**File**: `src/App.tsx`

```typescript
function App() {
  try {
    return (
      <div className="font-sans">
        <Header />
        <Hero />
        {/* ... other components */}
      </div>
    );
  } catch (error) {
    console.error('App rendering error:', error);
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-700 mb-4">
            There was an error loading the A3 Aluminium website.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
}
```

### Main Application Initialization

**File**: `src/main.tsx`

```typescript
// Enhanced error handling and loading states
const initApp = () => {
  console.log('A3 Aluminium - Initializing app...');
  
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found!');
    // Show error message
    return;
  }

  // Show loading state
  rootElement.innerHTML = `
    <div style="/* loading styles */">
      <div style="text-align: center; color: white;">
        <div style="/* spinner styles */"></div>
        <h1>A3 Aluminium</h1>
        <p>Loading...</p>
      </div>
    </div>
  `;

  try {
    const root = createRoot(rootElement);
    root.render(<StrictMode><App /></StrictMode>);
  } catch (error) {
    console.error('Failed to initialize React app:', error);
    // Show error recovery UI
  }
};
```

## 🎨 Favicon System

### ATIGA Icon Variants

```
public/icons/
├── atiga-icon.svg                    # Blue simple icon
├── atiga-icon-white.svg              # White simple icon  
├── atiga-icon-black.svg              # Black simple icon
├── atiga-icon-blue-text.svg          # Blue with A3 ALUMINIUM text
├── atiga-icon-white-with-text.svg    # White with text
└── atiga-icon-black-with-text.svg    # Black with text

public/
├── favicon-16x16.svg                 # 16x16 favicon
├── favicon-32x32.svg                 # 32x32 favicon
└── apple-touch-icon.svg              # iOS touch icon (180x180)
```

### React Icon Component

```typescript
// src/components/icons/AtigaIcon.tsx
interface AtigaIconProps {
  size?: number;
  className?: string;
  color?: string;
  withText?: boolean;
}

const AtigaIcon: React.FC<AtigaIconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
  withText = false
}) => {
  const width = withText ? (size * 80 / 32) : size;
  return (
    <svg width={width} height={size} viewBox={withText ? "0 0 80 32" : "0 0 32 32"}>
      {/* Icon content */}
    </svg>
  );
};
```

### Usage Examples

```tsx
// Simple icon
<AtigaIcon size={32} color="blue" />

// With text positioned to the right
<AtigaIcon size={64} color="black" withText={true} />

// White variant (useful on dark backgrounds)
<AtigaIcon size={48} color="white" withText={true} />
```

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
- Error tracking and debugging

## 📞 Support

For technical support or content updates:

1. Check documentation first
2. Review component structure
3. Test changes in development
4. Deploy to staging before production

## 🎨 Recent Updates (Latest Version)

### Critical Stability Fixes (December 2024)

- **Website Reliability**:
  - ✅ **Fixed blank page issue** - Comprehensive error handling prevents blank screens
  - ✅ **Enhanced initialization** - Robust DOM ready detection and React app startup
  - ✅ **Loading indicators** - Beautiful loading screen with A3 Aluminium branding
  - ✅ **Error boundaries** - Meaningful error messages with recovery options
  - ✅ **Console logging** - Detailed debugging information for troubleshooting

- **Professional Favicon System**:
  - ✅ **ATIGA-branded favicons** - Created 16x16, 32x32 SVG favicons based on company logo
  - ✅ **Apple touch icon** - Optimized 180x180 icon for iOS devices with white background
  - ✅ **Browser tab branding** - Professional appearance in Chrome/browser tabs
  - ✅ **Multi-device support** - Icons work seamlessly across all devices and platforms
  - ✅ **SEO optimization** - Proper favicon structure for search engine indexing

- **Enhanced SEO & Social Sharing**:
  - ✅ **Comprehensive meta tags** - Detailed descriptions for search engines and social media
  - ✅ **Open Graph protocol** - Perfect sharing previews on Facebook, LinkedIn, etc.
  - ✅ **Twitter Card support** - Enhanced sharing experience on Twitter platform
  - ✅ **Theme colors** - Brand-consistent colors across mobile browsers
  - ✅ **Canonical URLs** - Proper URL structure for SEO ranking optimization

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
  - **Mobile horizontal scrolling**: Shows all products with card-by-card navigation buttons (Previous/Next)
  - **Desktop pagination**: Maintains responsive grid layout (2-3 columns) with "Load More" functionality showing 6 products initially
  - **Card-by-card scrolling**: Precise navigation with 336px scroll distance (320px card + 16px gap)
  - **Click-anywhere-to-close functionality** added to product image popups for better UX
  - **Enhanced Products modal** with navigation identical to Gallery modal for mobile responsive design
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

### Performance Enhancements

- **Animations**: Optimized timing for faster, smoother interactions
- **Image Management**: All product images stored locally with high quality
- **User Experience**: Auto-scroll gallery with intuitive controls
- **Responsive Design**: Smart image handling for different aspect ratios
- **Error Recovery**: Graceful handling of component failures with user-friendly messages

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
  - **Enhanced Products modal navigation** identical to Gallery modal for mobile responsive design
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

### Contact Information

- **Phone/WhatsApp**: +62 896-3612-4857
- **Email**: <tisnawardana@gmail.com>
- **Address**: Veronica Residence 2, Jl. Mandor Dami 3 No.11b, Kalimulya, Depok, Jawa Barat 17530
- **Business Hours**:
  - Monday - Saturday: 08:00 - 17:00
  - Sunday: Closed

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

**Favicon Files** (stored in `public/`):

- `favicon-16x16.svg` - 16x16 favicon for browser tabs
- `favicon-32x32.svg` - 32x32 favicon for high-resolution displays
- `apple-touch-icon.svg` - 180x180 iOS touch icon with white background

**React Component**: `src/components/icons/AtigaIcon.tsx`

- Supports `withText` prop for layout switching
- Automatically adjusts dimensions (2.5x width for text variants)
- Color customization through `color` prop
- Size scaling through `size` prop

This setup guide provides everything needed to develop, deploy, and maintain the A3 Aluminium website efficiently with all the latest improvements, stability fixes, and professional branding elements.
