'use client'

import { useRef, useEffect } from 'react'
import { lineUrl, type LinePosition } from '@/lib/constants'
import { fireCTAEvents, observeCtaVisible } from '@/lib/track'

interface Props {
  position: LinePosition
  label?: string
  sublabel?: string
  size?: 'md' | 'lg'
  className?: string
}

export default function LineCTAButton({
  position,
  label = 'ซื้อเลย 890฿ · อ่านใน LINE ทันที',
  sublabel,
  size = 'lg',
  className = '',
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return observeCtaVisible(ref.current, position)
  }, [position])

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const url = lineUrl(position)
    fireCTAEvents(position)
    // fire-then-redirect: ให้ beacon queue ก่อน แล้วค่อย navigate (กัน event หลุดบน LINE in-app browser)
    setTimeout(() => { window.location.href = url }, 300)
  }

  return (
    <a
      ref={ref}
      href={lineUrl(position)}
      data-cta-position={position}
      onClick={handleClick}
      className={`cta-btn ${className}`}
      style={{
        fontSize: size === 'lg' ? 18 : 16,
        padding: size === 'lg' ? '18px 32px' : '14px 24px',
      }}
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
