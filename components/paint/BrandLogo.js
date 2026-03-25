export default function BrandLogo({
  className,
  size = 40,
  variant = 'default',
  'aria-hidden': ariaHidden = true,
}) {
  const isOnDark = variant === 'light'
  const ink = isOnDark ? '#ffffff' : '#0b0f0e' // matte black
  const plate = isOnDark ? 'rgba(255,255,255,0.10)' : '#ffffff'
  const plateStroke = isOnDark ? 'rgba(255,255,255,0.16)' : 'rgba(2,6,23,0.08)'
  const green = '#198f63' // industrial green
  const greenDark = '#156f4f'
  const orange = '#f08a24' // soft orange
  const orangeLight = '#ffb36a'

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
      <defs>
        <linearGradient id="vironCoat" x1="18" y1="18" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={green} />
          <stop offset="1" stopColor={greenDark} />
        </linearGradient>
        <linearGradient id="vironDrop" x1="28" y1="41" x2="38" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={orangeLight} />
          <stop offset="1" stopColor={orange} />
        </linearGradient>
      </defs>

      {/* Plate: improves legibility at small sizes on any background */}
      <rect x="4.5" y="4.5" width="55" height="55" rx="16" fill={plate} stroke={plateStroke} />

      {/* VIRON mark: refined industrial "V" + coating stroke + drop (original) */}
      <path
        d="M12.2 14.6h10.6L32 37.2l9.2-22.6h10.6L39.6 44c-1.3 3.2-4.1 5.1-7.6 5.1s-6.3-1.9-7.6-5.1L12.2 14.6Z"
        fill={ink}
        opacity={isOnDark ? 0.94 : 0.90}
      />

      {/* Coating stroke: thicker + more premium contrast */}
      <path
        d="M21.4 17.8h6.6L32 28l4-10.2h6.6l-7.1 16.5c-.9 2-2.1 3.1-3.5 3.1s-2.6-1.1-3.5-3.1l-7.1-16.5Z"
        fill="url(#vironCoat)"
      />

      {/* Drop (with highlight for depth) */}
      <path
        d="M32 40.2c4.4 5.6 6.9 8.8 6.9 12 0 3.8-3.1 6.8-6.9 6.8s-6.9-3-6.9-6.8c0-3.2 2.5-6.4 6.9-12Z"
        fill="url(#vironDrop)"
      />
      <path
        d="M29.6 47c1.4-2.2 2.7-3.8 4-5.3 1.2 1.5 2.3 3.1 3.3 4.8-1.3 3-3.7 3.6-5.6 2.2-.9-.7-1.5-1.5-1.7-1.7Z"
        fill="#ffffff"
        opacity={isOnDark ? 0.22 : 0.30}
      />
    </svg>
  )
}
