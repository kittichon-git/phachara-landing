import LineCTAButton from '@/components/LineCTAButton'

const sections = [
  {
    icon: '🧠',
    label: 'ภาค 1 — จิตวิทยาผู้ซื้อ',
    summary: 'เข้าใจว่าทำไมคนถึงยอมจ่าย "ปม" อะไรในใจที่ทำให้กดซื้อ และทำไมคนซื้อด้วยอารมณ์ก่อนเหตุผล',
    items: [
      'บท 1 — คนซื้อด้วยอารมณ์ แล้วค่อยหาเหตุผลทีหลัง: Buyer Psychology',
      'บท 2 — 4 ปมในใจ ทำให้คนยอมจ่าย โดยไม่ทันคิด',
      'บท 3 — สูตรขายอายุ 100 ปี ที่ยังได้ผลในยุค tiktok',
      'บท 4 — จงให้คำสัญญากับลูกค้า แต่อย่าโกหก',
    ],
  },
  {
    icon: '📊',
    label: 'ภาค 2 — วัดผลคำที่เขียน',
    summary: 'รู้วิธีตรวจว่าคำของคุณ "ใช้ได้จริง" หรือแค่คิดไปเอง ด้วย 4 ตัวเลขที่บอกผลทันที',
    items: [
      'บท 5 — 5 จุดที่สมองคนตัดสินว่า "ดูต่อ" หรือ "เลื่อนผ่าน"',
      'บท 6 — "คำ" ที่คุณเขียน ใช้ได้แล้วหรือยัง',
    ],
  },
  {
    icon: '🎣',
    label: 'ภาค 3 — Hook ที่หยุดคนเลื่อน',
    summary: 'คลัง Hook 12 ตระกูล + 50 สูตร พร้อมตัวอย่างแคมเปญไทยจริง — ผสม Hook 2-3 แบบให้แรงทวีคูณ',
    items: [
      'บท 7 — อย่าเปิดประโยคด้วย "สวัสดีครับ"',
      'บท 8 — Hook คือเหยื่อล่อปลา ไม่ใช่บทเกริ่นนำ แยกให้ออก',
      'บท 9 — 12 สูตร Hook สับไก เปิดใจคนปี 2026',
      'บท 10 — เคล็ดผสม Hook 2-3 แบบใน 1 ประโยค ให้แรงทะลุจอ',
      'บท 11 — ประโยคที่ 2 ของเนื้อหา พาให้คนอ่านต่อ',
    ],
  },
  {
    icon: '📐',
    label: 'ภาค 4 — โครงเขียนเต็มฟอร์แมต',
    summary: 'สูตรเขียน 3 รูปแบบ: โพสต์ขาย / สคริปต์คลิปสั้น 60 วิ / Landing Page 9 ส่วน',
    items: [
      'บท 12 — 8 โครงโพสต์สะกดจิตคน ที่ทำให้อ่านจบและทำตาม',
      'บท 13 — คลิปสั้น 60 วิ: สคริปต์แบบไหน ที่คนยอมหยุดดู',
      'บท 14 — หน้าเดียวทำเงิน : ชำแหละ Landing Page ที่ปิดยอดได้จริง',
    ],
  },
  {
    icon: '✨',
    label: 'ภาค 5 — คำที่ทรงพลัง',
    summary: 'Call-out Words ที่ทำให้คน "รู้สึกว่าพูดถึงตัวเอง" + คำลดแรงต้านมือใหม่ + คำพรีเมียม + พลังของตัวเลข',
    items: [
      'บท 15 — คำที่คนอ่านแล้วรู้สึกว่า "พูดถึงฉัน" : Call-out Words',
      'บท 16 — คำที่เปลี่ยนคนลังเล เป็นคนกล้าโอน',
      'บท 17 — ภาษา Premium : อัปราคาให้แพง แต่คนแย่งกันจ่าย',
      'บท 18 — พลังแห่งตัวเลข: เปลี่ยนคำลอยๆ ให้กลายเป็นความน่าเชื่อ',
    ],
  },
  {
    icon: '🎯',
    label: 'ภาค 6 — ปิดการขายในข้อความเดียว',
    summary: 'หลักฐาน 7 แบบที่นักขายตัวเล็กก็ใช้ได้ + Offer ที่ปฏิเสธยาก + 12 ประโยคปิดท้ายโดยไม่ต้องพูดว่า "ซื้อเลย"',
    items: [
      'บท 19 — หลักฐาน 7 ชิ้น ที่แบรนด์เล็กก็ชนะแบรนด์ใหญ่ได้',
      'บท 20 — เขียน Offer ข้อเสนอสุดต้านทาน : ไม่ซื้อตอนนี้คือพลาด!',
      'บท 21 — 12 ประโยคปิดท้าย โดยไม่ต้องพูดว่า "ซื้อเลย"',
    ],
  },
  {
    icon: '🤖',
    label: 'ภาค 7 — AI เป็นผู้ช่วย',
    summary: 'Prompt 5 ขั้นที่ทำให้ AI เขียนระดับมือโปร + Workflow ครบลูปตั้งแต่ไอเดียจนถึงปิดยอด',
    items: [
      'บท 22 — สูตร Prompt 5 ขั้น การใช้ AI เปลี่ยนมือใหม่ เป็น มือโปร',
      'บท 23 — 5 ชุด Prompt ที่นักขายต้องมี : Hook / Script / Landing / QC / คู่แข่ง',
      'บท 24 — Workflow ใช้ AI ตั้งแต่ไอเดีย จนถึง ปิดยอด',
    ],
  },
  {
    icon: '📎',
    label: 'ภาคผนวก',
    summary: '5 เครื่องมือพร้อมใช้ — แค่กรอกคำลงไป ไม่ต้องเริ่มจากศูนย์',
    items: [
      'A. เช็กลิสต์ตรวจงานก่อนปล่อย (Hook / Proof / CTA)',
      'B. 100+ Template ครบทุกฟอร์แมต กรอกคำได้ทันที',
      'C. 50+ Hook Formulas พร้อมตัวอย่างไทย',
      'D. Prompt Library 30 ชุด พร้อมตัวอย่างใช้จริง',
      'E. ตารางคำต้องห้าม vs คำที่ควรใช้',
    ],
  },
]

export default function S6Curriculum() {
  return (
    <section className="bg-gray-50 py-16 px-4" aria-labelledby="curriculum-headline">
      <div className="max-w-3xl mx-auto">
        <h2
          id="curriculum-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3"
        >
          เนื้อหา 24 บท แบ่งเป็น 7 ภาค + ภาคผนวก
        </h2>
        <p className="text-center text-gray-500 mb-10">
          แต่ละภาคสร้างบนของเดิม — อ่านตามลำดับหรือข้ามไปภาคที่ต้องการก็ได้
        </p>

        <div className="space-y-6">
          {sections.map((sec) => (
            <div
              key={sec.label}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <span aria-hidden="true">{sec.icon}</span>
                {sec.label}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{sec.summary}</p>
              <ul className="space-y-1.5">
                {sec.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-gray-300 mt-0.5 shrink-0" aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">อยากดูสารบัญฉบับเต็ม? → แอดมา ส่งให้ใน LINE</p>
          <LineCTAButton position="s7" size="md" label="แอด LINE ดูสารบัญฉบับเต็ม" />
        </div>
      </div>
    </section>
  )
}
