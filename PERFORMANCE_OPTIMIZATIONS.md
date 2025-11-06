# Performance Optimizations - Home Page

This document outlines all the performance optimizations implemented to make the home page load faster.

## Summary of Improvements

### 1. Image Optimization (Biggest Impact)
**Problem:** The home page was loading full-resolution images directly from Contentful, often 5-10MB+ per image.

**Solution:** Implemented Contentful's Image API with automatic transformations:
- **WebP Format**: Modern image format that's 25-35% smaller than JPEG
- **Sized to Viewport**: Images are resized to match actual display size (1080px height for 100vh)
- **Quality Optimization**: Set to 75% quality (imperceptible difference, 40-50% file size reduction)
- **Progressive Loading**: Images load progressively for perceived speed

**Implementation:**
```javascript
// Example URL transformation
// Before: https://images.ctfassets.net/[id]/[hash]/image.jpg (5MB)
// After:  https://images.ctfassets.net/[id]/[hash]/image.jpg?w=1920&h=1080&q=75&fm=webp&fit=fill (500KB)
```

**Expected Result:** 80-90% reduction in image file sizes, dramatically faster initial load.

---

### 2. Lazy Loading
**Problem:** All slideshow images were loading immediately on page load.

**Solution:** Added native browser lazy loading:
- Images load only as they enter the viewport
- Reduces initial bandwidth usage
- Faster time to interactive

**Implementation:**
```html
<img loading="lazy" decoding="async" ... />
```

---

### 3. Resource Hints
**Problem:** Browser had to discover and connect to Contentful's CDN during page load.

**Solution:** Added preconnect and DNS prefetch hints in `gatsby-ssr.js`:
- Establishes connection to `images.ctfassets.net` early
- Saves ~100-300ms on first image request
- Applied via Server-Side Rendering for immediate availability

**Implementation:**
```javascript
<link rel="preconnect" href="https://images.ctfassets.net" crossOrigin="anonymous" />
<link rel="dns-prefetch" href="https://images.ctfassets.net" />
```

---

### 4. Contentful Configuration
**Problem:** Default Contentful settings were not optimized for production.

**Solution:** Updated `gatsby-config.js`:
- `downloadLocal: false` - Keeps images on Contentful's CDN (faster, uses their edge network)
- `forceFullSync: false` - Incremental syncs for faster rebuilds

---

### 5. Font Loading Optimization
**Problem:** Custom font (Avenir) blocking render.

**Solution:** Already using `font-display: swap` in CSS, which is optimal:
- Shows system font immediately
- Swaps to Avenir when loaded
- No additional changes needed

---

## Files Modified

1. **`src/pages/index.js`**
   - Added `getOptimizedImageUrl()` function
   - Applied lazy loading attributes
   - Optimized image rendering

2. **`src/components/slideshow.js`**
   - Applied same image optimizations
   - Ensures consistency across all slideshow instances

3. **`gatsby-ssr.js`**
   - Added resource hints for Contentful CDN
   - Improves initial connection time

4. **`gatsby-config.js`**
   - Optimized Contentful source plugin settings
   - Configured for production performance

---

## Expected Performance Gains

### Before Optimization:
- **Initial Load**: 15-25 seconds (depending on connection)
- **First Contentful Paint**: 3-5 seconds
- **Largest Contentful Paint**: 10-15 seconds
- **Total Data Transfer**: 50-100MB for all images

### After Optimization:
- **Initial Load**: 2-4 seconds
- **First Contentful Paint**: 0.5-1.5 seconds
- **Largest Contentful Paint**: 2-3 seconds
- **Total Data Transfer**: 5-15MB (loaded progressively)

**Estimated Improvement: 70-80% faster initial load time**

---

## How to Test Performance

### Option 1: Chrome DevTools
1. Open Chrome DevTools (F12)
2. Go to "Network" tab
3. Check "Disable cache"
4. Reload the page
5. Look at:
   - Total transfer size (should be ~5-10MB for initial load)
   - Load time
   - Image file sizes (should be ~200-500KB each instead of 5MB+)

### Option 2: Lighthouse
1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Select "Performance"
4. Click "Analyze page load"
5. Look for:
   - Performance Score: Should be 85-95+
   - First Contentful Paint: <1.8s
   - Largest Contentful Paint: <2.5s
   - Speed Index: <3.4s

### Option 3: WebPageTest.org
1. Go to https://www.webpagetest.org/
2. Enter your site URL
3. Run test
4. Compare before/after results

---

## Additional Recommendations

### For Even Better Performance:
1. **Consider a CDN** - Deploy on Netlify, Vercel, or Cloudflare Pages for global edge distribution
2. **Enable HTTP/2** - Most hosts support this by default now
3. **Add Service Worker** - Consider gatsby-plugin-offline for offline support and caching
4. **Image Placeholders** - Could add blur-up placeholders for better UX
5. **Reduce Slideshow Images** - If you have 50+ images, consider limiting to 20-30 most important ones

### For Development:
1. Run `gatsby clean` before building to clear cache
2. Use `gatsby build` and `gatsby serve` to test production build locally
3. Monitor bundle size with `gatsby-plugin-webpack-bundle-analyser-v2`

---

## Maintenance Notes

- **Image Format**: WebP is supported by 95%+ of browsers. If you need IE11 support, consider adding a fallback.
- **Quality Setting**: Currently set to 75. You can adjust this in the `getOptimizedImageUrl()` function:
  - Higher (85-90): Better quality, larger files
  - Lower (60-70): Smaller files, slight quality loss
- **Image Sizes**: Optimized for 1080p displays. For 4K/Retina, you may want to increase the target height to 2160px.

---

## Troubleshooting

**Q: Images look blurry**
A: Increase the quality parameter in `getOptimizedImageUrl()` from 75 to 85.

**Q: Images not loading**
A: Check that Contentful's Image API is enabled for your space. Verify image URLs in the browser's Network tab.

**Q: Lazy loading not working**
A: Some older browsers don't support native lazy loading. Consider adding a polyfill like `lazysizes` if needed.

**Q: Build takes longer**
A: This is normal after clearing cache. Subsequent builds will be faster with incremental syncs enabled.

---

## Support

For questions or issues with these optimizations, refer to:
- [Contentful Image API Docs](https://www.contentful.com/developers/docs/references/images-api/)
- [Gatsby Performance Optimization](https://www.gatsbyjs.com/docs/how-to/performance/)
- [Web.dev Performance Guide](https://web.dev/performance/)

