import curriculum from '@/data/curriculum.json'
import LineCTAButton from '@/components/LineCTAButton'

interface Chapter {
  ch: number
  section: string
  title: string
  summary: string
}

const GROUPS: { label: string; icon: string; section: string }[] = [
  { icon: '🎯', label: 'ภาค 1 — จิตวิทยาการขาย', section: 'ภาค 1' },
  { icon: '📊', label: 'ภาค 2 — วัดผลคำที่ใช้', section: 'ภาค 2' },
  { icon: '🪝', label: 'ภาค 3 — Hook สับไก', section: 'ภาค 3' },
  { icon: '🏗', label: 'ภาค 4 — โครงสร้างที่ปิดได้', section: 'ภาค 4' },
  { icon: '💎', label: 'ภาค 5 — คำเฉพาะกลุ่ม', section: 'ภาค 5' },
  { icon: '🎯', label: 'ภาค 6 — ปิดการขาย', section: 'ภาค 6' },
  { icon: '🤖', label: 'ภาค 7 — AI x Copywriting', section: 'ภาค 7' },
  { icon: '📋', label: 'ภาคผนวก — Template + Checklist', section: 'ภาคผนวก' },
]

export default function S6Curriculum() {
  const bySection = (section: string) =>
    (curriculum as Chapter[]).filter((c) => c.section === section)

  return (
    <section className="bg-gray-50 py-16 px-4" aria-labelledby="curriculum-headline">
      <div className="max-w-3xl mx-auto">
        <h2
          id="curriculum-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3"
        >
          เนื้อหาแบ่งเป็น 7 ภาค + ภาคผนวก
        </h2>
        <p className="text-center text-gray-500 mb-8">24 บท + Template + Checklist + Swipe File</p>

        <div className="space-y-3">
          {GROUPS.map(({ icon, label, section }) => {
            const chapters = bySection(section)
            return (
              <details
                key={section}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none select-none font-semibold text-gray-900">
                  <span>
                    <span className="mr-2" aria-hidden="true">{icon}</span>
                    {label}
                    <span className="ml-2 text-sm font-normal text-gray-400">
                      ({chapters.length} บท)
                    </span>
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <ul className="border-t border-gray-100 divide-y divide-gray-50">
                  {chapters.map((ch) => (
                    <li key={ch.ch} className="px-5 py-3">
                      <p className="font-medium text-gray-800 text-sm">
                        บทที่ {ch.ch}. {ch.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{ch.summary}</p>
                    </li>
                  ))}
                </ul>
              </details>
            )
          })}
        </div>

        {/* Mini CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">แอดมาดู ToC ฉบับเต็มใน LINE</p>
          <LineCTAButton position="curriculum" size="md" label="ดู ToC ฉบับเต็ม → แอด LINE" />
        </div>
      </div>
    </section>
  )
}
