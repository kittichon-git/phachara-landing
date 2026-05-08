import LineCTAButton from '@/components/LineCTAButton'

const teasers = [
  { num: '1', title: 'ทำไมคนเขียนเก่งกว่าคุณ ขายได้น้อยกว่าคุณ' },
  { num: '2', title: 'คนซื้อด้วยอารมณ์ แล้วค่อยหาเหตุผลทีหลัง' },
  { num: '3', title: '4 ปมในใจ ทำให้คนยอมจ่าย โดยไม่ทันคิด' },
]

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
            เพราะเรามั่นใจว่าสูตรในเล่มนี้ใช้ได้กับธุรกิจไทยจริง — ไม่ใช่ตำราฝรั่งที่แปลตรง ๆ มา
            <br />
            <strong>กดแอด LINE OA</strong> → รับ 3 บทแรกทันที (~30 หน้า)
            <br />
            อ่านแล้วเอาไปลองปรับงานคุณก่อน — ถ้าเห็นผล ค่อยมาเรียนต่อ ถ้าไม่ใช่ก็ไม่เป็นไร
          </p>

          <LineCTAButton
            position="s5"
            label="🎁 แอด LINE รับ 3 บทฟรี (PDF)"
            size="lg"
            className="w-full sm:w-auto"
          />

          {/* Chapter teasers */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {teasers.map((t) => (
              <div
                key={t.num}
                className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <p className="text-xs text-gray-400 mb-1">บทที่ {t.num}</p>
                <p className="text-sm text-gray-700 font-medium leading-snug">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
