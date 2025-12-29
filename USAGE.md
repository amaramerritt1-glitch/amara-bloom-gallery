# Bloom Gallery - Usage & Embedding Guide

## Quick Start Guide

### 1. Install and Run Locally

```bash
cd bloom-gallery
npm install
npm run dev
```

Visit `http://localhost:3000` to see your gallery.

### 2. Add Your Artwork Images

Place images in `/public/art/`:

```
public/art/
├── artwork-1-main.jpg        (3:4 ratio, ~1200px wide)
├── artwork-1-detail-1.jpg    (square, ~800px)
├── artwork-1-detail-2.jpg
├── artwork-2-main.jpg
└── ...
```

### 3. Update Data

Edit `src/data/artworks.ts` and update the `imageUrl` and `detailUrls` fields to match your actual image filenames.

## Embedding in Another Website

### Basic Iframe Embed

```html
<iframe 
  src="https://your-bloom-gallery.vercel.app"
  width="100%"
  height="900"
  frameborder="0"
  title="Bloom Gallery"
  style="border: none; border-radius: 8px;"
  allowfullscreen
></iframe>
```

### Responsive Iframe

```html
<div style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;">
  <iframe 
    src="https://your-bloom-gallery.vercel.app"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    title="Bloom Gallery"
    allowfullscreen
  ></iframe>
</div>
```

### WordPress Embed

```
[iframe src="https://your-bloom-gallery.vercel.app" width="100%" height="900"]
```

Or use a custom HTML block:
```html
<div class="bloom-gallery-embed">
  <iframe 
    src="https://your-bloom-gallery.vercel.app"
    width="100%"
    height="900"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
```

### Notion Embed

1. Copy your Vercel deployment URL
2. In Notion, type `/embed`
3. Paste the URL
4. Resize as needed

## User Interactions

### Gallery View (Home)
- **Click/Tap artwork** → Opens Bloom view
- **Hover artwork** → Subtle scale and overlay effect
- **Keyboard navigation** → Tab through cards, Enter to open

### Bloom View
- **ESC key** → Returns to gallery
- **Click background** → Returns to gallery
- **Click X button** → Returns to gallery
- **Tab navigation** → (Future: navigate between panels)

## Customization Options

### 1. Change Color Scheme

In `src/app/globals.css`, modify:

```css
:root {
  --indigo-deep: #1a1640;    /* Main background */
  --gold-soft: #d4af37;      /* Accent color */
  --bone-white: #f5f2e8;     /* Text color */
  /* etc... */
}
```

### 2. Adjust Animation Speed

In component files, find `transition` props:

```typescript
// Slower, more luxurious
transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}

// Faster, more snappy
transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
```

### 3. Modify Panel Layout

In `src/components/BloomPanel.tsx`, edit the `positions` array:

```typescript
const positions = [
  { x: -320, y: -180, rotate: -8 },  // Top left
  { x: 320, y: -160, rotate: 6 },    // Top right
  // Add more positions or modify existing ones
];
```

### 4. Change Typography

Replace fonts in `src/app/layout.tsx`:

```typescript
import { Playfair_Display, Inter, EB_Garamond } from 'next/font/google';
```

Update CSS variables accordingly.

### 5. Disable Grain Texture

In `src/app/globals.css`:

```css
:root {
  --grain-opacity: 0;  /* Was 0.03 */
}
```

## Data Model Reference

```typescript
interface Artwork {
  id: string;              // Unique identifier (URL-safe)
  title: string;           // Artwork title
  year: string;            // Year created
  medium: string;          // Medium/materials
  dimensions: string;      // Size (e.g., "24 × 18 inches")
  imageUrl: string;        // Main image path
  detailUrls: string[];    // Array of detail crop paths
  poemFragments: string[]; // Array of poem stanzas
  symbols: Symbol[];       // Array of symbol objects
}

interface Symbol {
  label: string;           // Symbol name
  meaning: string;         // 1-2 sentence explanation
}
```

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress JPGs to ~85% quality
   - Recommended sizes:
     - Main: 1200×1600px
     - Details: 800×800px

2. **Lazy Load for Large Galleries**
   - If you have 30+ artworks, consider pagination
   - Or implement scroll-based lazy loading

3. **Reduce Motion**
   Add to `globals.css`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

## Troubleshooting

### Iframe Not Displaying

Check that your `next.config.js` includes:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'ALLOWALL' },
      ],
    },
  ];
}
```

### Images Not Loading

1. Verify images are in `/public/art/`
2. Check paths in `artworks.ts` match actual filenames
3. Paths should start with `/art/` not `/public/art/`

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styling Issues

Check that CSS modules are imported correctly:
```typescript
import styles from './Component.module.css';
```

## Advanced: Adding New Panel Types

To create a custom panel type:

1. Add to TypeScript type in `BloomPanel.tsx`:
   ```typescript
   type: 'poem' | 'detail' | 'symbol' | 'metadata' | 'custom'
   ```

2. Add render logic:
   ```typescript
   {type === 'custom' && (
     <div className={styles.customContent}>
       {/* Your custom content */}
     </div>
   )}
   ```

3. Add styles in `BloomPanel.module.css`:
   ```css
   .custom {
     /* Your custom styles */
   }
   ```

## SEO Considerations

For better SEO when embedding:

1. Add proper `alt` attributes to images
2. Use semantic HTML (already included)
3. Add structured data if needed
4. Consider SSR for critical content

## Accessibility Checklist

- ✅ Keyboard navigation works
- ✅ Focus states visible
- ✅ Semantic HTML used
- ✅ ARIA labels on controls
- ⬜ Add alt text to all images (when you add real images)
- ⬜ Test with screen reader
- ⬜ Ensure color contrast ratios meet WCAG AA

## Questions?

This is a fully self-contained project. All the code you need is included. Modify freely to suit your needs!
