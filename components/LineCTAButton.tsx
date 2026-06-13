import { lineUrl, type LinePosition } from '@/lib/constants'

interface Props {
  position: LinePosition
  label?: string
  sublabel?: string
  size?: 'md' | 'lg'
  className?: string
}

export default function LineCTAButton({
  position,
  label = 'เริ่มอ่านฟรี 2 บทแรก ใน LINE',
  sublabel,
  size = 'lg',
  className = '',
}: Props) {
  return (
    <a
      href={lineUrl(position)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-position={position}
      className={`cta-btn ${className}`}
      style={{ fontSize: size === 'lg' ? 18 : 16, padding: size === 'lg' ? '18px 32px' : '14px 24px' }}
    >
      <span className="flex items-center gap-2.5">
        <span
          className="grid place-items-center rounded-[5px] font-black shrink-0 text-[10px]"
          style={{ width: 22, height: 22, background: 'white', color: '#E87A3D' }}
          aria-hidden="true"
        >
          LINE
        </span>
        {label}
        <span aria-hidden="true">→</span>
      </span>
      {sublabel && <span className="cta-btn-sub">{sublabel}</span>}
    </a>
  )
}
