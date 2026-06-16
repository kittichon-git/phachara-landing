const chapters = [
  { n: 'ภาค 1', title: 'แกะรอยลูกค้า', desc: 'เจาะ 4 ปมในใจ ที่ทำให้ลูกค้ายอมจ่ายเงิน' },
  { n: 'ภาค 2', title: 'วัดผลคำ', desc: 'ระบบเช็คประโยคต่อประโยค คำไหนพัง คำไหนทำเงิน' },
  { n: 'ภาค 3', title: 'ประโยคหยุดนิ้ว', desc: '12 สูตร Hook และ "ประโยคที่ 2" ที่คนมักมองข้าม' },
  { n: 'ภาค 4', title: 'โครงสร้างสะกดจิต', desc: '8 โครงสร้างโพสต์ ที่ลากสายตาให้อ่านจนจบ' },
  { n: 'ภาค 5', title: 'อัพราคาด้วยคำ', desc: '50+ คำพรีเมียม ที่ทำให้สินค้าดูแพงแต่คนแย่งกันซื้อ' },
  { n: 'ภาค 6', title: 'ปิดการขายเนียนตา', desc: '12 ประโยคปิดการขาย ที่ทำให้ลูกค้าตัดสินใจซื้อโดยไม่ต้องง้อ' },
  { n: 'ภาค 7', title: 'เร่งสปีดด้วย AI', desc: 'สูตร Prompt 5 ขั้น สั่ง AI ให้เขียนเหมือนมือโปร' },
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
            7 ภาค 24 บท + โบนัสชุดสูตร{' '}
            <span style={{ whiteSpace: 'nowrap' }}>Template และ Prompt</span>{' '}
            <span style={{ color: '#E87A3D' }}>หยิบไปทำเงินได้ทันที</span>
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
                <div className="curriculum-desc">{c.desc}</div>
              </div>
              <span className="curriculum-arrow">›</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
