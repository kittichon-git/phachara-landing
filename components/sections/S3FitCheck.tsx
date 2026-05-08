import LineCTAButton from '@/components/LineCTAButton'

const fitItems = [
  'ขายของออนไลน์อยู่แล้ว แต่ยอดไม่นิ่ง — เดือนนี้ดี เดือนหน้าหาย',
  'เป็นเจ้าของแบรนด์เล็ก ไม่มีงบจ้าง copywriter เดือนละ 30,000+',
  'ยิงแอด FB/TikTok เอง อยากให้ ROAS ดีขึ้นด้วยการเปลี่ยนคำ ไม่ใช่เพิ่มงบ',
  'อยากเขียนแคปชั่นที่คนอ่านแล้วทักมาเอง ไม่ต้องไล่ตามลูกค้า',
  'เปิดร้านใหม่ อยากปิดยอดแรกใน 30 วัน',
  'ใช้ AI ช่วยเขียนอยู่แล้ว แต่ output ยัง "ดูเป็น AI" คนอ่านปุ๊บรู้ทันที',
]

const notFitItems = [
  'มองหาบทเรียนสอนยิงแอด FB Ads / Google Ads (เล่มนี้ไม่ได้สอน)',
  'มองหาบทเรียนทำเว็บ / SEO / Analytics',
  'คาดหวังจะรวยใน 7 วัน — เล่มนี้ให้ "สูตร" ที่ต้องลงมือทำ',
  'ไม่พร้อมเปิดโพสต์ขึ้นมาลองเขียนอย่างน้อยสัปดาห์ละ 3 ครั้ง',
]

export default function S3FitCheck() {
  return (
    <section className="py-16 sm:py-24 px-5" aria-labelledby="fitcheck-headline">
      <div className="max-w-5xl mx-auto">

        {/* Section head */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-4 block">ก่อนตัดสินใจ</span>
          <h2
            id="fitcheck-headline"
            className="text-[clamp(28px,4.5vw,42px)] font-bold leading-snug mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--ink)' }}
          >
            บทเรียนนี้เหมาะกับใคร?
          </h2>
          <p className="text-[17px]" style={{ color: 'var(--ink-soft)' }}>
            เราอยากให้คุณรู้ตั้งแต่แรก ว่าคุ้มกับเวลาและเงินของคุณหรือเปล่า
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ✅ Fit */}
          <div
            className="rounded-[22px] p-8 border border-t-4"
            style={{
              background: '#fbf6ec',
              borderColor: 'var(--rule)',
              borderTopColor: '#4a8d3f',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <h3
              className="text-[22px] font-bold mb-4 flex items-center gap-2.5"
              style={{ fontFamily: 'var(--font-serif)', color: '#2f6b27' }}
            >
              <span aria-hidden="true">✅</span> เหมาะกับคุณถ้า...
            </h3>
            <ul className="space-y-0 divide-y" style={{ borderColor: 'rgba(216,200,169,0.7)' }}>
              {fitItems.map((item) => (
                <li
                  key={item}
                  className="py-3 flex gap-3 text-[15.5px] leading-[1.65]"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  <span className="shrink-0 font-bold mt-0.5 text-sm" style={{ color: '#4a8d3f' }} aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ❌ Not Fit */}
          <div
            className="rounded-[22px] p-8 border border-t-4 opacity-[0.94]"
            style={{
              background: '#fbf6ec',
              borderColor: 'var(--rule)',
              borderTopColor: '#b8703a',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <h3
              className="text-[22px] font-bold mb-4 flex items-center gap-2.5"
              style={{ fontFamily: 'var(--font-serif)', color: '#8a4f23' }}
            >
              <span aria-hidden="true">❌</span> ยังไม่เหมาะถ้า...
            </h3>
            <ul className="space-y-0 divide-y" style={{ borderColor: 'rgba(216,200,169,0.7)' }}>
              {notFitItems.map((item) => (
                <li
                  key={item}
                  className="py-3 flex gap-3 text-[15.5px] leading-[1.65]"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  <span className="shrink-0 font-bold mt-0.5 text-sm" style={{ color: '#b8703a' }} aria-hidden="true">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mini CTA */}
        <div className="mt-9 text-center">
          <p className="text-[16px] mb-4" style={{ color: 'var(--ink-soft)' }}>
            ตรงกับคุณข้อใดข้อหนึ่งใช่ไหม? →{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>แอด LINE รับ 3 บทฟรี</span>
          </p>
          <LineCTAButton position="s3" label="แอด LINE รับ 3 บทฟรี" size="md" />
        </div>

      </div>
    </section>
  )
}
