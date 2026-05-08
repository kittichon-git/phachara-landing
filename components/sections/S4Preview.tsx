import LineCTAButton from '@/components/LineCTAButton'
import { track } from '@/lib/analytics'

export default function S4Preview() {
  return (
    <section className="bg-[#f0fdf4] py-16 px-4" aria-labelledby="preview-headline">
      <div className="max-w-2xl mx-auto text-center">
        {/* Callout box */}
        <div className="bg-white border-2 border-[var(--line-green)] rounded-3xl p-8 sm:p-10 shadow-lg">
          <div className="text-4xl mb-3" aria-hidden="true">🎁</div>

          <h2
            id="preview-headline"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5"
          >
            ลองอ่าน 3 บทแรกก่อน — ฟรี ไม่ต้องสมัคร
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            เพราะเรามั่นใจว่า framework ในเล่มนี้ใช้ได้กับธุรกิจไทยจริง
            <br />
            <strong>กดแอด LINE OA</strong> → รับ PDF 3 บทแรกทันที (~30 หน้า)
            <br />
            อ่านแล้วลองนำไปปรับงานคุณก่อน — ถ้าเห็นผล ค่อยมาเรียนต่อ
          </p>

          <div onClick={() => track('sp_cta_click', { position: 's4' })}>
            <LineCTAButton
              position="s4"
              label="🎁 แอด LINE รับ 3 บทฟรี (PDF)"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>

          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            บท 1 "ทำไมคำเดิมขายไม่ได้" · บท 2 "Hook 30 แบบ ที่หยุดคนเลื่อน"
            <br />
            บท 3 "สูตร 4 ส่วน ของหน้าเพจที่ปิดได้"
          </p>
        </div>
      </div>
    </section>
  )
}
