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

### Option 2: Netlify (Alternative FREE option)

#### 1. Netlify CLI Setup

```bash
npm install -g netlify-cli
```

#### 2. Build Configuration

Create `netlify.toml`:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3. Deploy

```bash
# Build
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages (FREE with limitations)

#### 1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### 2. Update package.json

```json
{
  "homepage": "https://yourusername.github.io/atiga-aluminium",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### 3. Deploy

```bash
npm run deploy
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
  const defaultMessage = "Halo, saya tertarik dengan produk A3 Aluminium dan ingin konsultasi gratis. Bisa minta informasi lebih lanjut?";
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
  - WhatsApp integration for CTA buttons
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

### Performance Enhancements

- **Animations**: Optimized timing for faster, smoother interactions
- **Image Management**: All product images stored locally with high quality
- **User Experience**: Auto-scroll gallery with intuitive controls
- **Responsive Design**: Smart image handling for different aspect ratios

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

This setup guide provides everything needed to develop, deploy, and maintain the A3 Aluminium website efficiently with all the latest improvements and optimizations.
