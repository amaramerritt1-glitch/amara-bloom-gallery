# Bloom Gallery - Project Overview

## 🎨 Design Aesthetic

**Illuminated Manuscript meets Dimensional Portal**

This gallery embodies the aesthetic of medieval illuminated manuscripts merged with the concept of portals between dimensions. The design features:

- **Deep indigo backgrounds** reminiscent of night sky and ancient manuscripts
- **Bone white** text like aged vellum
- **Soft gold** accents suggesting gilded letters and divine illumination  
- **Moss green** touches evoking organic growth and natural wisdom
- **Grain texture overlay** for an aged, tactile quality
- **Elegant serif typography** (Cormorant Garamond) for timeless beauty
- **Smooth, dimensional animations** that feel like opening doorways

## ✨ Core Features

### Gallery Grid View (`/`)
- Responsive grid of artworks
- Elegant hover effects with scaling and overlays
- Staggered entrance animations
- Each card shows title and year
- Ornamental placeholder designs (replace with actual images)

### Bloom View (`/art/[id]`)
- Full-screen immersive experience
- Central artwork enlarged with golden border and glow
- 4-6 floating panels that "bloom" outward containing:
  1. **Metadata Panel** - Title, year, medium, dimensions
  2. **Poem Panels** - Poetic fragments with decorative borders
  3. **Detail Panels** - Zoomed-in crop images
  4. **Symbol Panels** - Mystical symbols with interpretations
- Smooth entrance/exit animations
- ESC key to return to gallery
- Visual depth with backdrop blur and layering

### Accessibility
- ✅ Full keyboard navigation support
- ✅ ESC key closes bloom view
- ✅ Focus visible states on all interactive elements
- ✅ ARIA labels on controls
- ✅ Semantic HTML structure
- ✅ Screen reader friendly

## 📦 What's Included

### Complete File Structure
```
bloom-gallery/
├── src/
│   ├── app/
│   │   ├── art/[id]/
│   │   │   ├── page.tsx              ← Bloom view
│   │   │   └── page.module.css
│   │   ├── globals.css               ← Design tokens & grain texture
│   │   ├── layout.tsx                ← Root layout with Google Fonts
│   │   ├── page.tsx                  ← Gallery grid
│   │   └── page.module.css
│   ├── components/
│   │   ├── ArtworkCard.tsx           ← Gallery card with hover
│   │   ├── ArtworkCard.module.css
│   │   ├── BloomPanel.tsx            ← Floating panel component
│   │   └── BloomPanel.module.css
│   └── data/
│       └── artworks.ts               ← 6 example artworks with full data
├── public/
│   └── art/
│       └── README.md                 ← Image requirements guide
├── README.md                         ← Main documentation
├── USAGE.md                          ← Detailed usage & embedding guide
├── package.json                      ← Dependencies configured
├── next.config.js                    ← Iframe optimization
├── vercel.json                       ← Deployment config
├── tsconfig.json                     ← TypeScript config
└── .gitignore
```

### Technologies Used
- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type safety
- **Framer Motion 11** - Smooth animations
- **CSS Modules** - Scoped styling
- **Google Fonts** - Cormorant Garamond, Lato, Crimson Text

## 🚀 Quick Start

```bash
cd bloom-gallery
npm install
npm run dev
```

Visit `http://localhost:3000`

## 📝 Data Structure

The gallery uses a simple TypeScript data model:

```typescript
interface Artwork {
  id: string;              // URL-safe identifier
  title: string;           // Artwork title
  year: string;            // Year created
  medium: string;          // Materials/medium
  dimensions: string;      // Physical size
  imageUrl: string;        // Main image path
  detailUrls: string[];    // Detail crop paths
  poemFragments: string[]; // Poetry stanzas
  symbols: Symbol[];       // Symbolic meanings
}
```

6 example artworks included with full content:
1. Celestial Manuscript
2. Portal of Hours
3. Garden Between Worlds
4. Threshold Grimoire
5. Luminous Codex
6. Echo Chamber

Each has poetry, symbols, and metadata ready to go.

## 🎯 Key Interactions

| Action | Result |
|--------|--------|
| Click artwork in gallery | Opens Bloom view with animation |
| Press ESC in Bloom view | Returns to gallery |
| Click background in Bloom | Returns to gallery |
| Hover artwork card | Subtle scale + overlay effect |
| Tab key navigation | Moves focus through elements |

## 🎨 Customization Points

### Colors
Edit `src/app/globals.css` CSS variables:
```css
:root {
  --indigo-deep: #1a1640;
  --gold-soft: #d4af37;
  --bone-white: #f5f2e8;
  --moss-deep: #3d4f2f;
}
```

### Fonts  
Change in `src/app/layout.tsx`:
```typescript
import { Your_Font } from 'next/font/google';
```

### Animation Speed
Adjust `transition` props in components:
```typescript
transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
```

### Panel Positions
Edit `positions` array in `BloomPanel.tsx` to change floating positions.

## 🌐 Deployment to Vercel

### One-Click Deploy
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Import repository
3. Deploy (zero configuration needed!)

### Iframe Embedding
```html
<iframe 
  src="https://your-bloom-gallery.vercel.app"
  width="100%"
  height="900"
  frameborder="0"
  allowfullscreen
></iframe>
```

## 📸 Adding Your Images

1. Place images in `/public/art/`
   - Main: 3:4 ratio, ~1200×1600px
   - Details: Square, ~800×800px
   - Use WebP or optimized JPG

2. Update `src/data/artworks.ts`:
   ```typescript
   imageUrl: "/art/your-image.jpg"
   ```

3. See `/public/art/README.md` for detailed image requirements

## ⚡ Performance Features

- Grain texture uses lightweight CSS animation
- Framer Motion animations are GPU-accelerated  
- CSS Modules ensure minimal style overhead
- Next.js automatic code splitting
- Optimized for iframe embedding with proper headers

## 🎭 Design Philosophy

This project demonstrates:

1. **Bold aesthetic commitment** - Strong illuminated manuscript theme
2. **Purposeful motion** - Every animation serves the narrative
3. **Spatial design** - Blooming panels create dimensional depth
4. **Typographic hierarchy** - Three font families working in harmony
5. **Accessible beauty** - Elegant AND usable for everyone

The gallery doesn't just display art—it creates an experience of discovery, like opening an ancient tome and watching knowledge bloom across the page.

## 📚 Documentation

- **README.md** - Installation & deployment
- **USAGE.md** - Detailed embedding & customization guide
- **This file** - Project overview
- **Code comments** - Inline documentation throughout

## 🔮 Future Enhancements (Optional)

- Image lazy loading for large galleries
- Lightbox for detail images
- Transition between artworks without returning to gallery
- Animation preferences (reduced motion)
- Touch gestures for mobile
- Share buttons for individual artworks
- Gallery categories/filtering

---

**Ready to use!** This is a complete, production-ready Next.js application. Add your images, customize the colors, and deploy to Vercel for iframe embedding.

The aesthetic is distinctive, the code is clean, and the user experience is magical. ✨
