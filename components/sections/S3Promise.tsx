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
      className="py-16 sm:py-24 px-5"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(216,200,169,0.22) 50%, transparent)' }}
      aria-labelledby="promise-headline"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section head */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4 block">หลังเรียนจบ</span>
          <h2
            id="promise-headline"
            className="text-[clamp(28px,4.5vw,42px)] font-bold leading-snug mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
          >
            หลังอ่านจบ 24 บท คุณจะ...
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--ink-soft)' }}>
            ไม่ใช่ความรู้ลอย ๆ — ทุกข้อด้านล่างคือสิ่งที่คุณ &ldquo;มี&rdquo; และ &ldquo;ใช้ได้ทันที&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-[880px] mx-auto">
          {outcomes.map((item, i) => (
            <div
              key={item.headline}
              className="flex items-start gap-4 rounded-[14px] p-5 border"
              style={{
                background: '#fbf6ec',
                borderColor: 'var(--rule)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              {/* Numbered circle */}
              <span
                className="shrink-0 w-[34px] h-[34px] rounded-full grid place-items-center text-[15px] font-bold"
                style={{
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                  fontFamily: 'var(--font-serif)',
                }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-[15.5px] leading-[1.6]" style={{ color: 'var(--ink-soft)', margin: 0 }}>
                มี <b className="promise-gold" style={{ color: 'var(--ink)' }}>{item.headline}</b>{' '}{item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="mt-9 text-center">
          <p className="text-[16px] mb-4" style={{ color: 'var(--ink-soft)' }}>
            อยากดูตัวอย่างก่อน? →{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>แอด LINE รับ 3 บทแรก</span>
          </p>
          <LineCTAButton position="s4" label="แอด LINE รับ 3 บทแรกฟรี" size="md" />
        </div>

      </div>
    </section>
  )
}
