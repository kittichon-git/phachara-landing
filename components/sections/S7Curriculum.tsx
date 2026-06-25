import LineCTAButton from '@/components/LineCTAButton'

const chapters = [
  {
    n: 'ภาค 1',
    title: 'แกะรอยลูกค้า',
    question: 'สินค้าดีพอๆ กัน แล้วทำไมบางคนถึงขายดีกว่า?',
    desc: 'คำตอบอยู่ที่ 4 ปมในใจ ที่ทำให้ลูกค้ายอมควักเงิน',
  },
  {
    n: 'ภาค 2',
    title: 'วัดผลคำ',
    question: 'จะรู้ได้ยังไงว่าโพสต์นี้เวิร์ก — ตั้งแต่ก่อนกดโพสต์?',
    desc: 'ระบบเช็คทีละประโยค คำไหนพัง คำไหนทำเงิน',
  },
  {
    n: 'ภาค 3',
    title: 'ประโยคหยุดนิ้ว',
    question: 'ประโยคแรกแบบไหน ที่คนเลื่อนผ่านภายใน 1 วินาที?',
    desc: '12 สูตร Hook + "ประโยคที่ 2" ที่เกือบทุกคนมองข้าม',
  },
  {
    n: 'ภาค 4',
    title: 'โครงสร้างสะกดจิต',
    question: 'Hook หยุดคนได้แล้ว แต่ทำไมอ่านจบยังไม่ทักมา?',
    desc: '8 โครงสร้างโพสต์ ที่ลากสายตาให้อ่านยาวจนถึงปุ่มซื้อ',
  },
  {
    n: 'ภาค 5',
    title: 'อัพราคาด้วยคำ',
    question: 'ของคล้ายๆ กัน ทำไมร้านอื่นตั้งแพงกว่า แต่คนยังแย่งซื้อ?',
    desc: '50+ คำพรีเมียม ที่ทำให้สินค้าดูมีค่าขึ้นทันที',
  },
  {
    n: 'ภาค 6',
    title: 'ปิดการขายเนียนตา',
    question: 'ลูกค้าพิมพ์ว่า "ขอดูก่อนนะ" แล้วเงียบหาย — เพราะอะไร?',
    desc: '12 ประโยคปิดการขาย ที่ทำให้ลูกค้าตัดสินใจเอง โดยไม่ต้องตื๊อ',
  },
  {
    n: 'ภาค 7',
    title: 'เร่งสปีดด้วย AI',
    question: 'สั่ง AI ทีไร ได้คำแข็งๆ น่าเบื่อทุกที?',
    desc: 'สูตร Prompt 5 ขั้น สั่ง AI ให้เขียนเหมือนมือโปร',
  },
]

export default function S7Curriculum() {
  return (
    <section id="curriculum" style={{ padding: '80px 24px', background: '#FDFBF7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        <div className="text-center">
          <span className="section-label">เนื้อหา</span>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 34px)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              marginBottom: 16,
            }}
          >
            ข้างในเล่มนี้แก้ปมไหนของคุณบ้าง —{' '}
            <span style={{ whiteSpace: 'nowrap' }}>7 ภาค 24 บท</span>{' '}
            <span style={{ color: '#E87A3D' }}>+ โบนัสชุดสูตร Template &amp; Prompt หยิบไปทำเงินได้ทันที</span>
          </h2>
        </div>

        <div className="curriculum-list">
          {chapters.map((c, idx) => (
            <div
              key={c.n}
              className="curriculum-row"
              style={{ borderTop: idx > 0 ? '1px solid #E5DDD5' : 'none' }}
            >
              <div className="curriculum-badge">{c.n}</div>
              <div className="curriculum-content">
                <div className="curriculum-title">{c.title}</div>
                <div className="curriculum-desc" style={{ fontStyle: 'italic', color: '#888', marginBottom: 4 }}>
                  &ldquo;{c.question}&rdquo;
                </div>
                <div className="curriculum-desc">{c.desc}</div>
              </div>
              <span className="curriculum-arrow">›</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <LineCTAButton position="curriculum" />
        </div>
      </div>
    </section>
  )
}
