import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'นโยบายคุกกี้ | phachara.com',
  description: 'นโยบายการใช้คุกกี้ของ phachara.com',
  alternates: { canonical: 'https://phachara.com/legal/cookie' },
}

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors mb-6 inline-block">
            ← กลับหน้าหลัก
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold">นโยบายคุกกี้</h1>
          <p className="text-gray-400 mt-2">Cookie Policy</p>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-gray-500 text-sm mb-8">อัปเดตล่าสุด: พฤษภาคม 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>
            {/* TODO: เพิ่มเนื้อหานโยบายคุกกี้ก่อน launch */}
            เนื้อหานโยบายคุกกี้อยู่ระหว่างการจัดทำ
          </p>
        </div>
      </main>
      <div className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <a href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">← หน้าหลัก</a>
          <span className="text-gray-300">|</span>
          <a href="/legal/refund" className="text-gray-500 hover:text-gray-700">คืนเงิน</a>
          <a href="/legal/terms" className="text-gray-500 hover:text-gray-700">ข้อกำหนด</a>
          <a href="/legal/privacy" className="text-gray-500 hover:text-gray-700">ความเป็นส่วนตัว</a>
        </div>
      </div>
    </div>
  )
}
