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
    <section
      className="py-9 sm:py-14 px-5"
      style={{ borderTop: '1px solid var(--rule)' }}
      aria-labelledby="fitcheck-headline"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Section head */}
        <div className="mb-8">
          <span className="section-label">ก่อนตัดสินใจ</span>
          <h2
            id="fitcheck-headline"
            className="font-bold leading-snug mb-2"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--ink)',
              fontSize: 'clamp(24px, 4vw, 30px)',
            }}
          >
            บทเรียนนี้เหมาะกับใคร?
          </h2>
          <p className="text-[16px]" style={{ color: 'var(--ink-soft)' }}>
            เราอยากให้คุณรู้ตั้งแต่แรก ว่าคุ้มกับเวลาและเงินของคุณหรือเปล่า
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* YES col */}
          <div
            className="rounded-lg p-6"
            style={{ background: 'var(--green-bg)' }}
          >
            <h3
              className="font-semibold mb-4 text-[16px]"
              style={{ color: 'var(--green-fg)' }}
            >
              ✅ เหมาะกับคุณถ้า...
            </h3>
            <ul className="grid gap-[10px] list-none p-0 m-0">
              {fitItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[15px] leading-[1.65]"
                  style={{ color: 'var(--green-fg)' }}
                >
                  <span className="font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NO col */}
          <div
            className="rounded-lg p-6"
            style={{ background: 'var(--red-bg)' }}
          >
            <h3
              className="font-semibold mb-4 text-[16px]"
              style={{ color: 'var(--red-fg)' }}
            >
              ❌ ยังไม่เหมาะถ้า...
            </h3>
            <ul className="grid gap-[10px] list-none p-0 m-0">
              {notFitItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[15px] leading-[1.65]"
                  style={{ color: 'var(--red-fg)' }}
                >
                  <span className="font-bold shrink-0 mt-0.5" aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mini CTA */}
        <p className="mt-4 text-[15.5px]" style={{ color: 'var(--ink-soft)' }}>
          ตรงกับคุณข้อใดข้อหนึ่งใช่ไหม? →{' '}
          <LineCTAButton position="s3" label="เรียนฟรี 2 บทเรียน" size="md" />
        </p>

      </div>
    </section>
  )
}
