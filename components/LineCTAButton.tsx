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
  label = 'แอด LINE รับ 3 บทแรกฟรี',
  sublabel,
  size = 'lg',
  className = '',
}: Props) {
  const href = lineUrl(position)

  const isLg = size === 'lg'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-position={position}
      className={`
        inline-flex flex-col items-center justify-center gap-0.5
        rounded-[14px] font-semibold text-white
        transition-transform duration-150
        hover:-translate-y-0.5 active:translate-y-0
        ${isLg ? 'px-7 py-[18px] text-[17px]' : 'px-5 py-3 text-base'}
        ${className}
      `}
      style={{
        background: 'var(--line-green)',
        boxShadow: '0 8px 24px -8px rgba(6,199,85,0.55), inset 0 -3px 0 rgba(0,0,0,0.12)',
      }}
    >
      <span className="flex items-center gap-2.5">
        {/* LINE box icon */}
        <span
          className="grid place-items-center rounded-[6px] font-black shrink-0"
          style={{
            width: isLg ? 22 : 18,
            height: isLg ? 22 : 18,
            background: 'white',
            color: 'var(--line-green)',
            fontSize: isLg ? 11 : 9,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.02em',
          }}
          aria-hidden="true"
        >
          LINE
        </span>
        {label}
        <span aria-hidden="true">→</span>
      </span>
      {sublabel && (
        <span className="text-xs font-normal opacity-85">{sublabel}</span>
      )}
    </a>
  )
}
