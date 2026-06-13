import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    pullQuote: 'เปลี่ยนแค่มุมเปิดคอนเทนต์ คนก็หยุดดูและเข้าใจง่ายขึ้นทันที',
    name: 'Nutty',
    bio: 'ทนายความ / ครีเอเตอร์',
    changePoint: 'ทำคอนเทนต์กฎหมายให้น่าสนใจ เข้าใจง่าย',
    image: '/images/proof-1.webp',
    imageAlt: 'รีวิวจากทนายความที่ใช้เทคนิคการเขียนทำคอนเทนต์กฎหมาย',
  },
  {
    id: 2,
    pullQuote: 'ใช้คำสั้นแต่โดนใจ เอาสูตรไปจับกับโพสต์เดิม ยอดก็เปลี่ยน',
    name: 'เตะ พนมไพร',
    bio: 'ข้าราชการ / ทำช่องปักตะกร้า',
    changePoint: 'ยอดขายเปลี่ยนแปลงชัดเจน',
    image: '/images/proof-2.webp',
    imageAlt: 'รีวิวจากข้าราชการที่เริ่มทำช่องปักตะกร้าสินค้า',
  },
  {
    id: 3,
    pullQuote: 'คุ้มมาก อ่านไป 4-5 บท ก็หยิบมาใช้ได้เลย ไม่ต้องรออ่านจบ',
    name: 'nim',
    bio: 'เจ้าของช่อง TikTok สอนทำใบงาน',
    changePoint: 'หยิบใช้ได้ก่อนอ่านจบ',
    image: '/images/proof-3.webp',
    imageAlt: 'รีวิวจากเจ้าของช่อง TikTok สอนทำใบงาน',
  },
  {
    id: 4,
    pullQuote: 'เปลี่ยนจากการแค่อธิบายสินค้า เป็นการเขียนให้คนอยากซื้อต่อ',
    name: 'พนักงานบริษัท',
    bio: 'พนักงานบริษัท / ทำรายได้เสริม',
    changePoint: 'ใช้ได้ทั้งงานและชีวิต',
    image: '/images/proof-4.webp',
    imageAlt: 'รีวิวจากพนักงานบริษัทที่ทำช่องหารายได้เสริม',
  },
  {
    id: 5,
    pullQuote: 'คำพูดเดียวกัน ถ้าเลือกใช้ต่างกัน ผลลัพธ์ยอดขายก็ต่างกันได้จริง',
    name: 'นักศึกษา',
    bio: 'นักศึกษา / ทำรายได้เสริม',
    changePoint: 'เห็นว่าการเลือกคำเปลี่ยนผลลัพธ์',
    image: '/images/proof-5.webp',
    imageAlt: 'รีวิวจากนักศึกษาที่ทำช่อง TikTok หารายได้เสริม',
  },
]

export default function S5Outcome() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: '#F4EFEA' }}
    >
      <div className="mx-auto" style={{ maxWidth: 960 }}>
        <span className="section-label">เสียงตอบรับจริง</span>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.3,
            letterSpacing: '-0.5px',
            marginBottom: 28,
          }}
        >
          ผลลัพธ์จากคนที่เปลี่ยนคำ
        </h2>

        <div className="flex flex-col gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                background: '#FFFFFF',
                borderRadius: 16,
                padding: 32,
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                borderLeft: '3px solid #E87A3D',
              }}
            >
              {/* Quote */}
              <p
                className="text-[16px] font-semibold mb-4 italic"
                style={{ color: '#1A1A1A', borderLeft: '3px solid #E87A3D', paddingLeft: 16, lineHeight: 1.7 }}
              >
                &ldquo;{t.pullQuote}&rdquo;
              </p>
              <div className="flex gap-4 items-center">
                {/* Avatar */}
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  width={48}
                  height={48}
                  className="rounded-xl object-cover shrink-0"
                  style={{ width: 48, height: 48 }}
                />
                <div>
                  <div className="flex items-center gap-1 text-[13px]" style={{ color: '#666666' }}>
                    <span className="font-semibold" style={{ color: '#1A1A1A' }}>{t.name}</span>
                    <span>·</span>
                    <span>{t.bio}</span>
                  </div>
                  <span
                    className="inline-block text-[12px] mt-1 px-2.5 py-1 rounded-lg"
                    style={{ background: '#EAF7EE', color: '#3A9E5F' }}
                  >
                    ↳ {t.changePoint}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
