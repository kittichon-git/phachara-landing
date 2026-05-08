import LineCTAButton from '@/components/LineCTAButton'

const groups = [
  {
    icon: '🧠',
    label: 'ภาค 1 — จิตวิทยาผู้ซื้อ',
    range: 'บท 1-4',
    summary: 'เข้าใจว่าทำไมคนถึงยอมจ่าย "ปม" อะไรในใจที่ทำให้กดซื้อ และทำไมคนซื้อด้วยอารมณ์ก่อนเหตุผล',
  },
  {
    icon: '📊',
    label: 'ภาค 2 — วัดผลคำที่เขียน',
    range: 'บท 5-6',
    summary: 'รู้วิธีตรวจว่าคำของคุณ "ใช้ได้จริง" หรือแค่คิดไปเอง ด้วย 4 ตัวเลขที่บอกผลทันที',
  },
  {
    icon: '🎣',
    label: 'ภาค 3 — Hook ที่หยุดคนเลื่อน',
    range: 'บท 7-11',
    summary: 'คลัง Hook 12 ตระกูล + 50 สูตร พร้อมตัวอย่างแคมเปญไทยจริง — ผสม Hook 2-3 แบบให้แรงทวีคูณ',
  },
  {
    icon: '📐',
    label: 'ภาค 4 — โครงเขียนเต็มฟอร์แมต',
    range: 'บท 12-14',
    summary: 'สูตรเขียน 3 รูปแบบ: โพสต์ขาย / สคริปต์คลิปสั้น 60 วิ / Landing Page 9 ส่วน',
  },
  {
    icon: '✨',
    label: 'ภาค 5 — คำที่ทรงพลัง',
    range: 'บท 15-18',
    summary: 'Call-out Words ที่ทำให้คน "รู้สึกว่าพูดถึงตัวเอง" + คำลดแรงต้านมือใหม่ + คำพรีเมียม + พลังของตัวเลข',
  },
  {
    icon: '🎯',
    label: 'ภาค 6 — ปิดการขายในข้อความเดียว',
    range: 'บท 19-21',
    summary: 'หลักฐาน 7 แบบที่นักขายตัวเล็กก็ใช้ได้ + Offer ที่ปฏิเสธยาก + 12 ประโยคปิดท้ายโดยไม่ต้องพูดว่า "ซื้อเลย"',
  },
  {
    icon: '🤖',
    label: 'ภาค 7 — AI เป็นผู้ช่วย',
    range: 'บท 22-24',
    summary: 'Prompt 5 ขั้นที่ทำให้ AI เขียนระดับมือโปร + Workflow ครบลูปตั้งแต่ไอเดียจนถึงปิดยอด',
  },
  {
    icon: '📎',
    label: 'ภาคผนวก (5 เครื่องมือพร้อมใช้)',
    range: 'A–E',
    summary: 'A. เช็กลิสต์ตรวจงานก่อนปล่อย / B. 100+ Template ครบทุกฟอร์แมต / C. 50+ Hook Formulas / D. Prompt Library 30 ชุด / E. ตารางคำต้องห้าม 120 คู่',
  },
]

export default function S6Curriculum() {
  return (
    <section className="bg-gray-50 py-16 px-4" aria-labelledby="curriculum-headline">
      <div className="max-w-4xl mx-auto">
        <h2
          id="curriculum-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3"
        >
          เนื้อหา 24 บท แบ่งเป็น 7 ภาค + ภาคผนวก
        </h2>
        <p className="text-center text-gray-500 mb-10">
          แต่ละภาคสร้างบนของเดิม — อ่านตามลำดับหรือข้ามไปภาคที่ต้องการก็ได้
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((g) => (
            <div
              key={g.label}
              className="bg-white rounded-2xl border border-gray-200 p-5 flex gap-4 shadow-sm"
            >
              <span className="text-3xl shrink-0 mt-0.5" aria-hidden="true">{g.icon}</span>
              <div>
                <p className="font-bold text-gray-900 leading-snug">{g.label}</p>
                <p className="text-xs text-gray-400 mt-0.5 mb-2">{g.range}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{g.summary}</p>
              </div>
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
