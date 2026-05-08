'use client'

import { lineUrl, type LinePosition } from '@/lib/constants'
import { track } from '@/lib/analytics'

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

  const sizeClasses =
    size === 'lg'
      ? 'px-8 py-4 text-lg'
      : 'px-5 py-3 text-base'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('sp_cta_click', { position })}
      className={`
        inline-flex flex-col items-center justify-center gap-0.5
        rounded-2xl font-bold text-white
        bg-[var(--line-green)] hover:bg-[var(--line-green-dark)]
        shadow-lg hover:shadow-xl
        active:scale-[.97]
        transition-all duration-150
        ${sizeClasses}
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {/* LINE logo mark */}
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M11 1C5.477 1 1 4.926 1 9.75c0 3.348 2.128 6.27 5.31 7.9-.147.538-.534 1.953-.613 2.257-.096.374.138.37.29.269.12-.08 1.89-1.284 2.653-1.803.44.062.893.093 1.36.093 5.523 0 10-3.926 10-8.75S16.523 1 11 1Z"
            fill="white"
          />
          <path
            d="M8.308 11.555H6.897a.276.276 0 0 1-.276-.276V7.744a.276.276 0 0 1 .552 0v3.259h1.135a.276.276 0 0 1 0 .552ZM9.514 11.279a.276.276 0 0 1-.552 0V7.744a.276.276 0 0 1 .552 0v3.535ZM13.506 11.279a.276.276 0 0 1-.497.165l-1.927-2.627v2.462a.276.276 0 0 1-.552 0V7.744a.276.276 0 0 1 .497-.165l1.927 2.627V7.744a.276.276 0 0 1 .552 0v3.535ZM15.379 9.127h-1.135V8.02h1.135a.276.276 0 0 0 0-.552h-1.411a.276.276 0 0 0-.276.276v3.535c0 .153.124.276.276.276h1.411a.276.276 0 0 0 0-.552h-1.135v-1.32h1.135a.276.276 0 0 0 0-.552v.004Z"
            fill="#06C755"
          />
        </svg>
        {label}
        <span aria-hidden="true">→</span>
      </span>
      {sublabel && (
        <span className="text-xs font-normal opacity-85">{sublabel}</span>
      )}
    </a>
  )
}
