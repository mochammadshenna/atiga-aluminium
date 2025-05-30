# A3 Aluminium Website

Modern, responsive website for ATIGA Aluminium - specialist in high-quality aluminum windows, doors, and glass solutions.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with optimized layouts
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Product Showcase**: Interactive gallery with auto-scroll functionality
- **WhatsApp Integration**: Direct contact through WhatsApp for consultations
- **Custom Icon System**: ATIGA branded icons with multiple variants
- **Performance Optimized**: Fast loading with GSAP animations

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **GSAP** for advanced animations
- **Lucide React** for icons

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (preview)
vercel

# Deploy to production
vercel --prod
```

## 📱 Live Website

🌍 **Production URL**: <https://atiga-aluminium-n6eyxvxpr-mochammadshennas-projects.vercel.app>

📊 **Vercel Dashboard**: <https://vercel.com/mochammadshennas-projects/atiga-aluminium>

## 📞 Contact Information

- **Phone/WhatsApp**: +62 896-3612-4857
- **Email**: <tisnawardana@gmail.com>
- **Address**: Veronica Residence 2, Jl. Mandor Dami 3 No.11b, Kalimulya, Depok, Jawa Barat 17530

## 🎨 ATIGA Icon System

Custom icon system with 6 variants:

- **Simple Icons**: Blue, White, Black
- **Text Variants**: With "A3 ALUMINIUM" text positioned to the right

### Usage

```tsx
// Simple icon
<AtigaIcon size={32} color="blue" />

// With text
<AtigaIcon size={32} color="black" withText={true} />
```

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── icons/          # Custom ATIGA icons
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Products.tsx    # Products showcase
│   ├── Gallery.tsx     # Project gallery
│   ├── Services.tsx    # Services section
│   ├── About.tsx       # About company
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer section
├── data/               # Static data and content
└── styles/             # CSS files
```

## 🏗️ Business Information

**ATIGA Aluminium** - Established since 2007, specializing in:

- Premium aluminum windows and doors
- Tempered glass solutions
- Custom aluminum installations
- Sliding windows and folding doors

---

Built with ❤️ for ATIGA Aluminium by Modern Web Solutions
