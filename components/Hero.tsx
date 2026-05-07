import { COURSE } from '@/lib/constants'
import NotifyButton from './NotifyButton'

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-b from-yellow-50 via-yellow-50/60 to-white">
      <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 text-sm font-semibold px-4 py-1.5 rounded-full mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-30"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-900/70"></span>
          </span>
          เปิดขายเร็วๆ นี้
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4">
          ✍️ แค่เปลี่ยนคำ
          <br />
          <span className="text-yellow-500">ก็ทำเงิน</span> 💰
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 font-medium mt-6 mb-10 max-w-2xl mx-auto leading-relaxed">
          {COURSE.subtitle}
          <br />
          <span className="text-gray-500 text-lg">ด้วยเทคนิค copywriting ที่ใช้ได้จริง เพิ่ม conversion 2–5 เท่า</span>
        </p>

        {/* Pricing */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="bg-white rounded-2xl shadow-md px-8 py-5 flex items-end gap-3 border border-yellow-100">
            <span className="text-gray-400 line-through text-2xl font-medium">
              {COURSE.anchorPrice.toLocaleString('th-TH')}฿
            </span>
            <span className="text-5xl font-bold text-gray-900">
              {COURSE.price.toLocaleString('th-TH')}
              <span className="text-2xl ml-1">฿</span>
            </span>
            <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded-lg mb-1">
              -50%
            </span>
          </div>
        </div>

        {/* CTA */}
        <NotifyButton className="text-xl px-10 py-5" />

        <p className="mt-5 text-gray-400 text-sm">
          ไม่มีค่าใช้จ่ายในการแจ้งเตือน · คืนเงิน 100% ภายใน 7 วัน
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-gray-400 text-xs">
            <span>เรียนรู้เพิ่มเติม</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}
