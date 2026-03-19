# Product images (`public/products`)

- **`hpc/`** — Named renders and labels (e.g. base coat, primer, clears). Best for **primary product photos**.
- **`uni/`** — UNICHEM-related phone photos; good for **extra gallery** shots.
- **Root** — General WhatsApp exports; usable as alternates; filenames are auto-generated.

Paths are referenced from code via `publicProductPath()` in `data/publicProductImages.js` so spaces and special characters work in URLs.

## Files to fix or replace (optional)

These are **not** wired in code:

| Issue | File |
|--------|------|
| Invalid extension | `WhatsApp Image 2026-02-24 at 1.16.31 AM (3).jpegx .jpeg` |
| Bad duplicate name | `WhatsApp Image 2026-02-24 at 1.16.56 AM.jpegujh.jpeg` |
| Not an image | `hpc/READY MIX B.C` (no image extension) |

Rename or remove them, then add new paths in `data/paintProducts.js` if needed.
