import { BUSINESS, COURSE } from '@/lib/constants'

export default function NotifyButton({ className = '' }: { className?: string }) {
  const subject = encodeURIComponent(`สนใจคอร์ส ${COURSE.title}`)
  const href = `mailto:${BUSINESS.email}?subject=${subject}`
  return (
    <a
      href={href}
      className={`inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-2xl text-lg transition-colors shadow-lg shadow-yellow-400/30 ${className}`}
    >
      แจ้งเตือนเมื่อเปิดขาย →
    </a>
  )
}
