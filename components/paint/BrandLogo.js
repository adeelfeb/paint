/**
 * Brand mark: protective coating film over a substrate (industrial paints / corrosion protection).
 * Not a shield — reads as “layer on steel/surface”.
 *
 * variant "default" — light UI (nav, light hero)
 * variant "light" — dark UI (footer); pale substrate + white film + warm accent
 */
export default function BrandLogo({
  className,
  size = 40,
  variant = 'default',
  'aria-hidden': ariaHidden = true,
}) {
  const isLight = variant === 'light'
  const substrate = isLight ? 'rgba(255,255,255,0.35)' : '#64748b'
  const film = isLight ? '#ffffff' : '#0f7669'
  const accent = isLight ? '#fbbf24' : '#d97706'

  const dimProps = className ? {} : { width: size, height: size }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className ? `block shrink-0 ${className}` : 'block shrink-0'}
      {...dimProps}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      {/* Substrate / surface */}
      <rect x="8" y="46" width="48" height="10" rx="2.5" fill={substrate} />
      {/* Coating film (curved wet layer) */}
      <path
        d="M 8 46 Q 32 17 56 46 L 56 46 L 8 46 Z"
        fill={film}
      />
      {/* Cure / spec highlight */}
      <circle cx="32" cy="28" r="3.25" fill={accent} />
    </svg>
  )
}
