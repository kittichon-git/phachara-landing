import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    pullQuote: 'ช่วยเปลี่ยนทนายความให้เป็นครีเอเตอร์สายกฎหมายมืออาชีพ',
    name: 'ทนายความ / ครีเอเตอร์',
    bio: 'ทำช่องให้ความรู้กฎหมาย',
    changePoint: 'ทำคอนเทนต์กฎหมายให้น่าสนใจ เข้าใจง่าย',
    image: '/images/proof-1.webp',
    imageAlt: 'รีวิวจากทนายความที่ใช้เทคนิคการเขียนทำคอนเทนต์กฎหมาย',
  },
  {
    id: 2,
    pullQuote: 'ใช้คำสั้นแต่โดนใจ เหมือนเขียนเพื่อเปลี่ยนความคิดคน',
    name: 'เต๊ะ พนมไพร',
    bio: 'ข้าราชการ',
    changePoint: 'ทำให้คนรู้สึก "เออ มันจริง"',
    image: '/images/proof-2.webp',
    imageAlt: 'รีวิวจากข้าราชการที่เริ่มทำช่องปักตะกร้าสินค้า',
  },
  {
    id: 3,
    pullQuote: 'คุ้มมากละ ขนาดแค่อ่านไป 4–5 บท ก็ได้อะไรมาเยอะ',
    name: 'nim',
    bio: 'ช่อง TikTok สอนทำใบงาน',
    changePoint: 'หยิบใช้ได้ก่อนอ่านจบ',
    image: '/images/proof-3.webp',
    imageAlt: 'รีวิวจากเจ้าของช่อง TikTok สอนทำใบงาน',
  },
  {
    id: 4,
    pullQuote: 'แค่เปลี่ยนคำพูด ก็เอาไปปรับใช้กับยอดขายได้จริง',
    name: 'พนักงานบริษัท',
    bio: 'ช่องหารายได้เสริม',
    changePoint: 'ใช้ได้ทั้งงานและชีวิต',
    image: '/images/proof-4.webp',
    imageAlt: 'รีวิวจากพนักงานบริษัทที่ทำช่องหารายได้เสริม',
  },
  {
    id: 5,
    pullQuote: 'คำพูดเดียวกัน ถ้าเลือกใช้ต่างกัน ผลลัพธ์ก็ต่างกันได้จริง',
    name: 'นักศึกษา',
    bio: 'ช่อง TikTok หารายได้เสริม',
    changePoint: 'เห็นว่าการเลือกคำเปลี่ยนผลลัพธ์',
    image: '/images/proof-5.webp',
    imageAlt: 'รีวิวจากนักศึกษาที่ทำช่อง TikTok หารายได้เสริม',
  },
]

export default function S5Outcome() {
  return (
    <section
      className="px-5 py-20"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--rule)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 620 }}>
        <span className="section-label">เสียงตอบรับ</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px,5vw,30px)',
            fontWeight: 800,
            color: 'var(--ink)',
            lineHeight: 1.3,
            marginBottom: 28,
          }}
        >
          จากคนที่ลองอ่านจริง
        </h2>

        <div className="flex flex-col gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="card"
              style={{ borderLeft: '3px solid rgba(61,165,169,0.5)' }}
            >
              <div className="flex gap-4 items-start">
                {/* Avatar */}
                <div className="shrink-0">
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    width={52}
                    height={52}
                    className="rounded-xl object-cover"
                    style={{ width: 52, height: 52 }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  {/* Quote */}
                  <p
                    className="text-[15.5px] font-semibold mb-2.5 leading-snug"
                    style={{ color: 'var(--ink)', fontFamily: 'var(--font-heading)' }}
                  >
                    &ldquo;{t.pullQuote}&rdquo;
                  </p>
                  {/* Attribution */}
                  <div
                    className="flex flex-wrap items-center gap-1 text-[12.5px] mb-2"
                    style={{ color: 'var(--ink-mute)' }}
                  >
                    <span className="font-semibold" style={{ color: 'var(--ink-soft)' }}>
                      {t.name}
                    </span>
                    <span>·</span>
                    <span>{t.bio}</span>
                  </div>
                  {/* Change point pill */}
                  <span
                    className="inline-block text-[12px] px-2.5 py-1 rounded-lg"
                    style={{ background: 'var(--teal-bg)', color: 'var(--teal)' }}
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
