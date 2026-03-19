/**
 * Local product imagery under `public/products/` (root, `hpc/`, `uni/`).
 *
 * Why this helper: filenames contain spaces, `+`, and parentheses. Browsers need
 * each path segment encoded (e.g. spaces → %20) while preserving `/` separators.
 *
 * Not used (broken or non-image — do not reference):
 * - `WhatsApp Image 2026-02-24 at 1.16.31 AM (3).jpegx .jpeg` — bad extension
 * - `WhatsApp Image 2026-02-24 at 1.16.56 AM.jpegujh.jpeg` — corrupt name
 * - `hpc/READY MIX B.C` — not a valid image file in repo
 *
 * @param {string} relativePath - Path under `products/`, e.g. `"hpc/BASE COAT READY MIX.png"`
 * @returns {string} - Absolute URL path for Next.js `<Image src={...} />` or `<img />`
 */
export function publicProductPath(relativePath) {
  const segments = relativePath
    .replace(/^\/+/, '')
    .split('/')
    .filter(Boolean)
    .map((seg) => encodeURIComponent(seg))
  return `/products/${segments.join('/')}`
}
