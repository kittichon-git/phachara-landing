import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    quote: 'เปลี่ยนแค่มุมเปิดคอนเทนต์ คนก็หยุดดูและเข้าใจง่ายขึ้นทันที',
    name: 'Nutty',
    role: 'ทนายความ / ครีเอเตอร์',
    image: '/images/proof-1.webp',
    imageAlt: 'รีวิวจากทนายความที่ใช้เทคนิคการเขียนทำคอนเทนต์กฎหมาย',
    ts: '10:24',
  },
  {
    id: 2,
    quote: 'ใช้คำสั้นแต่โดนใจ เอาสูตรไปจับกับโพสต์เดิม ยอดก็เปลี่ยน',
    name: 'เตะ พนมไพร',
    role: 'ข้าราชการ / ทำช่องปักตะกร้า',
    image: '/images/proof-2.webp',
    imageAlt: 'รีวิวจากข้าราชการที่เริ่มทำช่องปักตะกร้าสินค้า',
    ts: '09:15',
  },
  {
    id: 3,
    quote: 'คุ้มมาก อ่านไป 4-5 บท ก็หยิบมาใช้ได้เลย ไม่ต้องรออ่านจบ',
    name: 'nim',
    role: 'เจ้าของช่อง TikTok สอนทำใบงาน',
    image: '/images/proof-3.webp',
    imageAlt: 'รีวิวจากเจ้าของช่อง TikTok สอนทำใบงาน',
    ts: '11:08',
  },
  {
    id: 4,
    quote: 'เปลี่ยนจากการแค่อธิบายสินค้า เป็นการเขียนให้คนอยากซื้อต่อ',
    name: 'พนักงานบริษัท',
    role: 'พนักงานบริษัท / ทำรายได้เสริม',
    image: '/images/proof-4.webp',
    imageAlt: 'รีวิวจากพนักงานบริษัทที่ทำช่องหารายได้เสริม',
    ts: '08:47',
  },
  {
    id: 5,
    quote: 'คำพูดเดียวกัน ถ้าเลือกใช้ต่างกัน ผลลัพธ์ยอดขายก็ต่างกันได้จริง',
    name: 'นักศึกษา',
    role: 'นักศึกษา / ทำรายได้เสริม',
    image: '/images/proof-5.webp',
    imageAlt: 'รีวิวจากนักศึกษาที่ทำช่อง TikTok หารายได้เสริม',
    ts: '13:52',
  },
]

export default function S5Outcome() {
  return (
    <section id="proof" style={{ padding: '80px 24px', background: '#F4EFEA' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        <div className="text-center">
          <span className="section-label">เสียงตอบรับจริง</span>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 34px)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              marginBottom: 16,
            }}
          >
            ผลลัพธ์จากคนที่เปลี่ยนคำ
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            maxWidth: 800,
            margin: '40px auto 0',
          }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="proof-chat-card">
              {/* Sender header */}
              <div className="proof-chat-header">
                <div className="proof-chat-avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="proof-chat-name">{t.name}</div>
                  <div className="proof-chat-role">{t.role}</div>
                </div>
              </div>

              {/* Chat bubble with quote */}
              <div className="proof-chat-bubble">
                <p>{t.quote}</p>
              </div>

              {/* Proof screenshot */}
              <Image
                src={t.image}
                alt={t.imageAlt}
                width={736}
                height={414}
                className="proof-chat-image"
                style={{ width: '100%', height: 'auto' }}
              />

              {/* Read receipt */}
              <div className="proof-chat-timestamp">{t.ts} ✓✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
