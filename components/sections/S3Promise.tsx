import LineCTAButton from '@/components/LineCTAButton'

const outcomes = [
  { headline: 'Hook 12 ตระกูล', body: '+ 50 สูตร พร้อมใช้กับสินค้าตัวเอง' },
  { headline: 'โครง 4 ส่วน', body: 'ที่ทำให้โพสต์/หน้าเพจ/Landing Page ปิดได้' },
  { headline: 'คำเฉพาะ 100+ คำ ภาษาไทย', body: 'ที่กระตุ้น action ได้จริง' },
  { headline: 'ปรับ CTA ให้ click rate เพิ่ม 2-5 เท่า', body: 'ได้ทันทีจากบทที่ 9' },
  { headline: 'Swipe File', body: 'อีเมล/แคปชั่น/Landing Page ที่ก๊อปไปปรับชื่อสินค้าได้เลย' },
  { headline: 'AI Prompt 30 ชุด', body: 'ให้เขียนงานคุณภาพมือโปรในเวลา 15 นาที' },
]

export default function S3Promise() {
  return (
    <section
      className="py-9 sm:py-14 px-5"
      style={{ borderTop: '1px solid var(--rule)' }}
      aria-labelledby="promise-headline"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Section head */}
        <div className="mb-8">
          <span className="section-label">หลังเรียนจบ</span>
          <h2
            id="promise-headline"
            className="font-bold leading-snug mb-2"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--ink)',
              fontSize: 'clamp(24px, 4vw, 30px)',
            }}
          >
            หลังอ่านจบ 24 บท คุณจะ...
          </h2>
          <p className="text-[16px]" style={{ color: 'var(--ink-soft)' }}>
            ไม่ใช่ความรู้ลอย ๆ — ทุกข้อด้านล่างคือสิ่งที่คุณ &ldquo;มี&rdquo; และ &ldquo;ใช้ได้ทันที&rdquo;
          </p>
        </div>

        {/* Outcome list */}
        <div className="flex flex-col gap-2 mt-6">
          {outcomes.map((item) => (
            <div
              key={item.headline}
              className="flex items-start gap-3 py-2"
            >
              <span
                className="shrink-0 grid place-items-center rounded font-bold text-white mt-0.5"
                style={{
                  width: 22,
                  height: 22,
                  background: 'var(--line-green)',
                  fontSize: 13,
                }}
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="text-[16px] leading-[1.65]" style={{ color: 'var(--ink)' }}>
                มี{' '}
                <b className="promise-hl">{item.headline}</b>
                {' '}{item.body}
              </span>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="mt-8">
          <p className="text-[15.5px] mb-3" style={{ color: 'var(--ink-soft)' }}>
            อยากดูตัวอย่างก่อน? → เรียนฟรี 2 บทเรียน
          </p>
          <LineCTAButton position="s4" label="เรียนฟรี 2 บทเรียน" size="md" />
        </div>

      </div>
    </section>
  )
}
