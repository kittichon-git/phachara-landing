import LineCTAButton from '@/components/LineCTAButton'

const teasers = [
  { num: 'บท 01', title: 'ทำไมคนเขียนเก่งกว่าคุณ ขายได้น้อยกว่าคุณ' },
  { num: 'บท 02', title: 'คนซื้อด้วยอารมณ์ แล้วค่อยหาเหตุผลทีหลัง' },
  { num: 'บท 03', title: '4 ปมในใจ ทำให้คนยอมจ่าย โดยไม่ทันคิด' },
]

export default function S4Preview() {
  return (
    <section className="py-16 sm:py-24 px-5" id="preview" aria-labelledby="preview-headline">
      <div className="max-w-5xl mx-auto">

        {/* Dark green preview box */}
        <div
          className="rounded-[28px] px-9 py-14 text-white text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(155deg, #054a23 0%, #06773a 50%, #04a945 100%)',
            boxShadow: '0 30px 60px -30px rgba(6,90,40,0.6)',
          }}
        >
          {/* Decorative background emoji */}
          <span
            className="absolute right-[-20px] top-[-30px] text-[220px] opacity-[0.07] pointer-events-none select-none"
            style={{ transform: 'rotate(-15deg)', lineHeight: 1 }}
            aria-hidden="true"
          >
            🎁
          </span>

          {/* Eyebrow pill */}
          <span
            className="inline-flex items-center gap-2 text-[13px] px-3.5 py-1.5 rounded-full mb-4 font-medium tracking-[0.05em]"
            style={{
              color: 'rgba(255,255,255,0.85)',
              background: 'rgba(255,255,255,0.14)',
            }}
          >
            🎁 ของแถม ก่อนตัดสินใจ
          </span>

          <h2
            id="preview-headline"
            className="text-[clamp(28px,4.4vw,40px)] font-bold leading-[1.25] mb-4 max-w-[640px] mx-auto"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            ลองอ่าน 3 บทแรกก่อน — ฟรี ไม่ต้องสมัคร
          </h2>

          <p
            className="text-[17px] leading-[1.75] max-w-[580px] mx-auto mb-8"
            style={{ opacity: 0.95 }}
          >
            เพราะเรามั่นใจว่าสูตรในเล่มนี้ใช้ได้กับธุรกิจไทยจริง — ไม่ใช่ตำราฝรั่งที่แปลตรง ๆ มา
            <br />
            <strong style={{ color: '#fff5cf' }}>กดแอด LINE OA</strong> → รับ 3 บทแรกทันที (~30 หน้า)
            <br />
            อ่านแล้วเอาไปลองปรับงานคุณก่อน — ถ้าเห็นผล ค่อยมาเรียนต่อ ถ้าไม่ใช่ก็ไม่เป็นไร
          </p>

          {/* CTA — white button on dark green */}
          <a
            href={`https://lin.ee/oMmZLf7Z?utm_source=sp&utm_medium=sp_s5`}
            target="_blank"
            rel="noopener noreferrer"
            data-cta-position="s5"
            className="inline-flex items-center gap-2.5 font-semibold text-[18px] px-8 py-5 rounded-[14px] max-w-[420px] w-full sm:w-auto justify-center transition-transform hover:-translate-y-0.5"
            style={{
              background: 'white',
              color: '#054a23',
              boxShadow: '0 12px 30px -10px rgba(0,0,0,0.35), inset 0 -3px 0 rgba(0,0,0,0.08)',
            }}
          >
            <span
              className="grid place-items-center rounded-[6px] font-black text-[11px] shrink-0"
              style={{
                width: 22, height: 22,
                background: 'var(--line-green)',
                color: 'white',
              }}
              aria-hidden="true"
            >
              LINE
            </span>
            🎁 แอด LINE รับ 3 บทฟรี (PDF)
          </a>

          {/* Chapter teasers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 text-left max-w-[640px] mx-auto">
            {teasers.map((t) => (
              <div
                key={t.num}
                className="rounded-[12px] p-3.5 border flex items-start gap-3.5 backdrop-blur-sm"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.18)',
                }}
              >
                <span
                  className="shrink-0 text-[11px] tracking-[0.18em] mt-0.5"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {t.num}
                </span>
                <span className="text-[14.5px] leading-[1.5]">{t.title}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
