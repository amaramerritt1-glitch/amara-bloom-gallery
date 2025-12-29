# Artwork Images Directory

This directory should contain your artwork images.

## Image Requirements

### Main Artwork Images
- **Aspect Ratio:** 3:4 (portrait)
- **Recommended Size:** 1200 × 1600 pixels
- **Format:** JPG or WebP
- **Quality:** 85-90% compression
- **Naming:** Use the artwork ID from `artworks.ts`

Example:
- `celestial-manuscript.jpg`
- `portal-of-hours.jpg`
- `garden-between-worlds.jpg`

### Detail Crop Images
- **Aspect Ratio:** 1:1 (square) or matching detail
- **Recommended Size:** 800 × 800 pixels
- **Format:** JPG or WebP
- **Naming:** `{artwork-id}-detail-{number}.jpg`

Example:
- `celestial-manuscript-detail-1.jpg`
- `celestial-manuscript-detail-2.jpg`
- `portal-of-hours-detail-1.jpg`

## Current Placeholder Structure

The app is currently using placeholders. Replace these paths in `src/data/artworks.ts`:

```typescript
imageUrl: "/art/your-artwork-name.jpg"
detailUrls: [
  "/art/your-artwork-name-detail-1.jpg",
  "/art/your-artwork-name-detail-2.jpg"
]
```

## Image Optimization Tips

1. **Compress Before Upload**
   - Use tools like TinyPNG, Squoosh, or ImageOptim
   - Target file size: <500KB for main images, <200KB for details

2. **WebP Format**
   - Better compression than JPG
   - Supported by all modern browsers
   - Convert using: `cwebp input.jpg -q 85 -o output.webp`

3. **Responsive Images** (Advanced)
   If you want to serve different sizes:
   - Add multiple sizes in `/public/art/`
   - Update to use Next.js `<Image>` component
   - Configure `next.config.js` image domains

## Example Directory Structure

```
public/art/
├── README.md (this file)
├── celestial-manuscript.jpg
├── celestial-manuscript-detail-1.jpg
├── celestial-manuscript-detail-2.jpg
├── portal-of-hours.jpg
├── portal-of-hours-detail-1.jpg
├── portal-of-hours-detail-2.jpg
├── portal-of-hours-detail-3.jpg
├── garden-between-worlds.jpg
├── garden-between-worlds-detail-1.jpg
├── garden-between-worlds-detail-2.jpg
└── ... (etc)
```

## Adding New Artworks

1. Add your images to this directory
2. Update `src/data/artworks.ts` with the new artwork data
3. Match the `id` field to your image filename (without extension)
4. Rebuild: `npm run build`

---

**Note:** The placeholder designs you see in the app are CSS-generated. Replace with actual artwork images for production use.
