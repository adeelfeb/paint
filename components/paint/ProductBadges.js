import {
  Factory,
  Car,
  Layers,
  Droplets,
  Shield,
  FlaskConical,
} from 'lucide-react'

const lineMeta = {
  industrial: {
    label: 'Industrial',
    Icon: Factory,
    className: 'bg-brand-50 text-brand-900 ring-1 ring-brand-200/70',
  },
  automotive: {
    label: 'Automotive',
    Icon: Car,
    className: 'bg-slate-50 text-slate-900 ring-1 ring-slate-200',
  },
}

const chemistryMeta = {
  Epoxy: { Icon: Shield, className: 'bg-slate-900 text-white' },
  Polyurethane: { Icon: Layers, className: 'bg-slate-900 text-white' },
  Alkyd: { Icon: Droplets, className: 'bg-slate-900 text-white' },
  Acrylic: { Icon: Droplets, className: 'bg-slate-900 text-white' },
  Solvent: { Icon: FlaskConical, className: 'bg-slate-900 text-white' },
}

const stageMeta = {
  Primer: { Icon: Shield, className: 'bg-slate-100 text-slate-800 ring-1 ring-slate-200' },
  Basecoat: { Icon: Droplets, className: 'bg-slate-100 text-slate-800 ring-1 ring-slate-200' },
  Clearcoat: { Icon: Layers, className: 'bg-slate-100 text-slate-800 ring-1 ring-slate-200' },
  Hardener: { Icon: FlaskConical, className: 'bg-slate-100 text-slate-800 ring-1 ring-slate-200' },
  Thinner: { Icon: FlaskConical, className: 'bg-slate-100 text-slate-800 ring-1 ring-slate-200' },
}

function Chip({ Icon, children, className }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${className}`}
    >
      {Icon ? <Icon className="w-3.5 h-3.5" aria-hidden /> : null}
      {children}
    </span>
  )
}

export default function ProductBadges({ product, compact = false }) {
  if (!product) return null

  const line = product.line && lineMeta[product.line] ? lineMeta[product.line] : null
  const chemistry = product.chemistry && chemistryMeta[product.chemistry] ? chemistryMeta[product.chemistry] : null
  const stage = product.systemStage && stageMeta[product.systemStage] ? stageMeta[product.systemStage] : null

  const wrapClass = compact ? 'flex flex-wrap gap-1.5' : 'flex flex-wrap gap-2'

  return (
    <div className={wrapClass}>
      {line ? <Chip Icon={line.Icon} className={line.className}>{line.label}</Chip> : null}
      {chemistry ? <Chip Icon={chemistry.Icon} className={chemistry.className}>{product.chemistry}</Chip> : null}
      {stage ? <Chip Icon={stage.Icon} className={stage.className}>{product.systemStage}</Chip> : null}
      {product.mixingRatio ? <Chip Icon={FlaskConical} className="bg-brand-700 text-white">{product.mixingRatio}</Chip> : null}
    </div>
  )
}

