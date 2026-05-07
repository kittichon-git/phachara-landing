import { BUSINESS } from '@/lib/constants'
import NotifyButton from './NotifyButton'

const faqs = [
  {
    q: 'คอร์สนี้เหมาะกับใคร?',
    a: 'เหมาะกับคนขายของออนไลน์ทุกประเภท ไม่ว่าจะเป็นแม่ค้า ดรอปชิป freelancer หรือนักการตลาด ไม่ต้องมีประสบการณ์ด้านการเขียนหรือการตลาดมาก่อน เรียนรู้และนำไปใช้ได้ตั้งแต่โพสแรก',
  },
  {
    q: 'ใช้เวลาเรียนนานแค่ไหน?',
    a: 'เนื้อหาทั้งหมดใช้เวลาประมาณ 3–5 ชั่วโมง สามารถเรียนได้ตามสะดวก ไม่มีเวลากำหนดตายตัว เข้าถึงได้ตลอด 24 ชั่วโมง ไม่มีวันหมดอายุ',
  },
  {
    q: 'มีนโยบายคืนเงินไหม?',
    a: 'มีครับ คืนเงิน 100% ภายใน 7 วันหลังซื้อ โดยมีเงื่อนไขว่าเปิดบทเรียนไม่เกิน 20% ดูรายละเอียดเพิ่มเติมได้ที่หน้านโยบายการคืนเงิน',
    link: { href: '/refund', label: 'ดูนโยบายการคืนเงิน' },
  },
  {
    q: 'เนื้อหาเป็น video หรือ ebook?',
    a: 'เป็น digital content ที่อ่านและใช้งานได้ทุกอุปกรณ์ ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์ ไม่มีวันหมดอายุ เข้าถึงได้ตลอดชีพ',
  },
  {
    q: 'ติดต่อสอบถามได้ทางไหน?',
    a: `สามารถติดต่อได้ผ่านอีเมล ${BUSINESS.email} หรือผ่านช่องทาง LINE ทีมงานจะตอบกลับภายใน 1 วันทำการ`,
  },
]

export default function FAQ() {
  return (
    <section className="py-20 sm:py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">คำถามที่พบบ่อย</p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
            FAQ
          </h2>
          <p className="mt-4 text-gray-500 text-lg">มีคำถามเพิ่มเติม? ติดต่อเราได้เลยครับ</p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-yellow-300 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-gray-900 text-lg select-none">
                <span>{faq.q}</span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 group-open:bg-yellow-400 flex items-center justify-center transition-colors"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 group-open:text-gray-900 group-open:rotate-45 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>{faq.a}</p>
                {faq.link && (
                  <a
                    href={faq.link.href}
                    className="inline-block mt-3 text-yellow-600 font-semibold hover:text-yellow-700 underline underline-offset-2"
                  >
                    {faq.link.label} →
                  </a>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 text-lg mb-6">พร้อมแล้ว? รับการแจ้งเตือนเมื่อเปิดขาย</p>
          <NotifyButton />
        </div>
      </div>
    </section>
  )
}
