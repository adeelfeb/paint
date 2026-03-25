'use client'

import { useEffect, useState } from 'react'

export default function TdsQrCode({ url, size = 176 }) {
  const [dataUrl, setDataUrl] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function run() {
      if (!url) {
        setDataUrl(null)
        return
      }
      const QRCode = (await import('qrcode')).default
      const out = await QRCode.toDataURL(url, {
        margin: 1,
        width: size,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#0b0f0e',
          light: '#ffffff',
        },
      })
      if (!cancelled) setDataUrl(out)
    }

    run().catch(() => {
      if (!cancelled) setDataUrl(null)
    })

    return () => {
      cancelled = true
    }
  }, [url, size])

  if (!url) return null

  if (!dataUrl) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-xl border border-slate-200 bg-slate-50 animate-pulse"
        aria-label="Generating QR code"
      />
    )
  }

  // Use <img> (not next/image) to avoid extra config for data URLs.
  return (
    <img
      src={dataUrl}
      alt="QR code for TDS"
      width={size}
      height={size}
      className="rounded-xl border border-slate-200 bg-white"
      loading="lazy"
    />
  )
}

