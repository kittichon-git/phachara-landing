import LineCTAButton from '@/components/LineCTAButton'

const sections = [
  {
    icon: '🧠',
    part: 'ภาค 1',
    title: 'จิตวิทยาผู้ซื้อ',
    summary: 'เข้าใจว่าทำไมคนถึงยอมจ่าย "ปม" อะไรในใจที่ทำให้กดซื้อ และทำไมคนซื้อด้วยอารมณ์ก่อนเหตุผล',
    items: [
      { num: 'บท 01', title: 'คนซื้อด้วยอารมณ์ แล้วค่อยหาเหตุผลทีหลัง: Buyer Psychology' },
      { num: 'บท 02', title: '4 ปมในใจ ทำให้คนยอมจ่าย โดยไม่ทันคิด' },
      { num: 'บท 03', title: 'สูตรขายอายุ 100 ปี ที่ยังได้ผลในยุค tiktok' },
      { num: 'บท 04', title: 'จงให้คำสัญญากับลูกค้า แต่อย่าโกหก' },
    ],
  },
  {
    icon: '📊',
    part: 'ภาค 2',
    title: 'วัดผลคำที่เขียน',
    summary: 'รู้วิธีตรวจว่าคำของคุณ "ใช้ได้จริง" หรือแค่คิดไปเอง ด้วย 4 ตัวเลขที่บอกผลทันที',
    items: [
      { num: 'บท 05', title: '5 จุดที่สมองคนตัดสินว่า "ดูต่อ" หรือ "เลื่อนผ่าน"' },
      { num: 'บท 06', title: '"คำ" ที่คุณเขียน ใช้ได้แล้วหรือยัง' },
    ],
  },
  {
    icon: '🎣',
    part: 'ภาค 3',
    title: 'Hook ที่หยุดคนเลื่อน',
    summary: 'คลัง Hook 12 ตระกูล + 50 สูตร พร้อมตัวอย่างแคมเปญไทยจริง — ผสม Hook 2-3 แบบให้แรงทวีคูณ',
    items: [
      { num: 'บท 07', title: 'อย่าเปิดประโยคด้วย "สวัสดีครับ"' },
      { num: 'บท 08', title: 'Hook คือเหยื่อล่อปลา ไม่ใช่บทเกริ่นนำ แยกให้ออก' },
      { num: 'บท 09', title: '12 สูตร Hook สับไก เปิดใจคนปี 2026' },
      { num: 'บท 10', title: 'เคล็ดผสม Hook 2-3 แบบใน 1 ประโยค ให้แรงทะลุจอ' },
      { num: 'บท 11', title: 'ประโยคที่ 2 ของเนื้อหา พาให้คนอ่านต่อ' },
    ],
  },
  {
    icon: '📐',
    part: 'ภาค 4',
    title: 'โครงเขียนเต็มฟอร์แมต',
    summary: 'สูตรเขียน 3 รูปแบบ: โพสต์ขาย / สคริปต์คลิปสั้น 60 วิ / Landing Page 9 ส่วน',
    items: [
      { num: 'บท 12', title: '8 โครงโพสต์สะกดจิตคน ที่ทำให้อ่านจบและทำตาม' },
      { num: 'บท 13', title: 'คลิปสั้น 60 วิ: สคริปต์แบบไหน ที่คนยอมหยุดดู' },
      { num: 'บท 14', title: 'หน้าเดียวทำเงิน : ชำแหละ Landing Page ที่ปิดยอดได้จริง' },
    ],
  },
  {
    icon: '✨',
    part: 'ภาค 5',
    title: 'คำที่ทรงพลัง',
    summary: 'Call-out Words ที่ทำให้คน "รู้สึกว่าพูดถึงตัวเอง" + คำลดแรงต้านมือใหม่ + คำพรีเมียม + พลังของตัวเลข',
    items: [
      { num: 'บท 15', title: 'คำที่คนอ่านแล้วรู้สึกว่า "พูดถึงฉัน" : Call-out Words' },
      { num: 'บท 16', title: 'คำที่เปลี่ยนคนลังเล เป็นคนกล้าโอน' },
      { num: 'บท 17', title: 'ภาษา Premium : อัปราคาให้แพง แต่คนแย่งกันจ่าย' },
      { num: 'บท 18', title: 'พลังแห่งตัวเลข: เปลี่ยนคำลอยๆ ให้กลายเป็นความน่าเชื่อ' },
    ],
  },
  {
    icon: '🎯',
    part: 'ภาค 6',
    title: 'ปิดการขายในข้อความเดียว',
    summary: 'หลักฐาน 7 แบบที่นักขายตัวเล็กก็ใช้ได้ + Offer ที่ปฏิเสธยาก + 12 ประโยคปิดท้ายโดยไม่ต้องพูดว่า "ซื้อเลย"',
    items: [
      { num: 'บท 19', title: 'หลักฐาน 7 ชิ้น ที่แบรนด์เล็กก็ชนะแบรนด์ใหญ่ได้' },
      { num: 'บท 20', title: 'เขียน Offer ข้อเสนอสุดต้านทาน : ไม่ซื้อตอนนี้คือพลาด!' },
      { num: 'บท 21', title: '12 ประโยคปิดท้าย โดยไม่ต้องพูดว่า "ซื้อเลย"' },
    ],
  },
  {
    icon: '🤖',
    part: 'ภาค 7',
    title: 'AI เป็นผู้ช่วย',
    summary: 'Prompt 5 ขั้นที่ทำให้ AI เขียนระดับมือโปร + Workflow ครบลูปตั้งแต่ไอเดียจนถึงปิดยอด',
    items: [
      { num: 'บท 22', title: 'สูตร Prompt 5 ขั้น การใช้ AI เปลี่ยนมือใหม่ เป็น มือโปร' },
      { num: 'บท 23', title: '5 ชุด Prompt ที่นักขายต้องมี : Hook / Script / Landing / QC / คู่แข่ง' },
      { num: 'บท 24', title: 'Workflow ใช้ AI ตั้งแต่ไอเดีย จนถึง ปิดยอด' },
    ],
  },
  {
    icon: '📎',
    part: 'ภาคผนวก',
    title: '5 เครื่องมือพร้อมใช้',
    summary: 'เปิดมาก็ใช้ได้เลย — ไม่ต้องอ่านจบทั้งเล่มก่อน',
    isAppendix: true,
    items: [
      { num: 'A.', title: 'เช็กลิสต์ตรวจงานก่อนปล่อย (Hook / Proof / CTA)' },
      { num: 'B.', title: '100+ Template ครบทุกฟอร์แมต กรอกคำได้ทันที' },
      { num: 'C.', title: '50+ Hook Formulas พร้อมตัวอย่างไทย' },
      { num: 'D.', title: 'Prompt Library 30 ชุด พร้อมตัวอย่างใช้จริง' },
      { num: 'E.', title: 'ตารางคำต้องห้าม vs คำที่ควรใช้ (100+ คู่)' },
    ],
  },
]

export default function S6Curriculum() {
  return (
    <section
      className="py-9 sm:py-14 px-5"
      style={{ borderTop: '1px solid var(--rule)' }}
      aria-labelledby="curriculum-headline"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Section head */}
        <div className="mb-8">
          <span className="section-label">สารบัญ</span>
          <h2
            id="curriculum-headline"
            className="font-bold leading-snug mb-2"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--ink)',
              fontSize: 'clamp(24px, 4vw, 30px)',
            }}
          >
            เนื้อหา 24 บท แบ่งเป็น 7 ภาค + ภาคผนวก
          </h2>
          <p className="text-[16px]" style={{ color: 'var(--ink-soft)' }}>
            โปร่งใสเต็มที่ — เห็นทุกหัวข้อก่อนตัดสินใจ ไม่มีอะไรซ่อน
          </p>
        </div>

        {/* TOC parts */}
        <div className="mt-6" style={{ borderTop: '1px solid var(--rule)' }}>
          {sections.map((sec) => (
            <div key={sec.part} className="toc-part">

              {/* Part header */}
              <div className="flex gap-3 items-start mb-2.5">
                <span className="text-[22px] shrink-0" aria-hidden="true">{sec.icon}</span>
                <div>
                  <div
                    className="font-semibold mb-0.5"
                    style={{ fontSize: 12, color: 'var(--ink-mute)' }}
                  >
                    {sec.part}
                  </div>
                  <h3
                    className="font-bold leading-snug mb-1"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 18,
                      color: 'var(--ink)',
                    }}
                  >
                    {sec.title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.65 }}>
                    {sec.summary}
                  </p>
                </div>
              </div>

              {/* Chapter list */}
              <ul
                className="list-none p-0 flex flex-col gap-1"
                style={{ marginLeft: 36, marginTop: 12 }}
              >
                {sec.items.map((item) => (
                  <li
                    key={item.num}
                    className="flex gap-3 py-1 text-[15px]"
                    style={{ color: 'var(--ink)' }}
                  >
                    <span
                      className="font-medium shrink-0"
                      style={{ color: 'var(--ink-mute)', minWidth: 44 }}
                    >
                      {item.num}
                    </span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="mt-8">
          <p className="text-[15.5px] mb-3" style={{ color: 'var(--ink-soft)' }}>
            อยากอ่านเนื้อหาบางส่วนก่อน? → เรียนฟรี 2 บทเรียน
          </p>
          <LineCTAButton position="s7" size="md" label="เรียนฟรี 2 บทเรียน" />
        </div>

      </div>
    </section>
  )
}
