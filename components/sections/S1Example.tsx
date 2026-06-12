export default function S1Example() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">กรณีศึกษา</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(24px,5vw,32px)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.25,
            marginBottom: 20,
          }}
        >
          คน 2 คน ขายเซรั่มขวดเดียวกัน —
          <br />
          คนหนึ่งเงียบ อีกคนขายไม่ทัน
        </h2>

        <div
          className="flex flex-col gap-3 mb-7 text-[15.5px]"
          style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}
        >
          <p>คนแรกเขียนเต็มที่ สรรพคุณครบ — 3 วันยอดทัก 0</p>
          <p>อีกคนเขียน 3 บรรทัด — วันเดียวคนทักจนตอบไม่ทัน</p>
          <p>
            ของขวดเดียวกัน ราคาเท่ากัน{' '}
            <strong style={{ color: 'var(--ink)' }}>
              ต่างกันแค่ &ldquo;คำ&rdquo;
            </strong>
          </p>
        </div>

        {/* Before / After */}
        <div className="flex flex-col gap-3 mb-8">
          <div
            className="card"
            style={{ borderLeft: '3px solid var(--rust)', borderColor: 'rgba(194,84,42,0.35)' }}
          >
            <p
              className="text-[10px] font-bold tracking-[0.16em] uppercase mb-2.5"
              style={{ color: 'var(--rust)' }}
            >
              ❌ ที่ใช้อยู่
            </p>
            <p className="text-[15px]" style={{ color: 'var(--ink-soft)' }}>
              เซรั่มเข้มข้น Vitamin C 20% ลดเลือนจุดด่างดำ ผิวกระจ่างใส
            </p>
          </div>
          <div
            className="card"
            style={{ borderLeft: '3px solid var(--teal)', borderColor: 'rgba(61,165,169,0.35)' }}
          >
            <p
              className="text-[10px] font-bold tracking-[0.16em] uppercase mb-2.5"
              style={{ color: 'var(--teal)' }}
            >
              ✅ ที่ใช้แทน
            </p>
            <p className="text-[15px]" style={{ color: 'var(--ink)' }}>
              ส่องกระจกตอนเช้าแล้วเจอจุดด่างดำที่เพิ่งโผล่? ขวดนี้คือตัวที่ลูกค้าซื้อซ้ำบ่อยสุด
            </p>
          </div>
        </div>

        {/* Punch line */}
        <div
          className="rounded-2xl px-6 py-5 mb-6"
          style={{
            background: 'var(--amber-bg)',
            border: '1px solid rgba(229,190,99,0.25)',
          }}
        >
          <p
            className="text-[17px] font-semibold leading-snug"
            style={{ color: 'var(--amber)', fontFamily: 'var(--font-heading)' }}
          >
            คำสวยทำให้คนชม แต่คำที่ใช่ทำให้คนโอน
          </p>
        </div>

        <p className="text-[14.5px]" style={{ color: 'var(--ink-mute)' }}>
          นี่คือการเปลี่ยนแค่ประโยคเดียว — ในเล่มมีหลักคิดแบบนี้กับทุกจุดของโพสต์
          ตั้งแต่บรรทัดแรกยันคำปิดการขาย
        </p>
      </div>
    </section>
  )
}
