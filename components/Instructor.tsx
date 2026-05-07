import { INSTRUCTOR } from '@/lib/constants'

const achievements = [
  { number: '3+', label: 'ปีประสบการณ์' },
  { number: '500+', label: 'โพสที่ผ่านมือ' },
  { number: '2–5x', label: 'เพิ่ม Conversion' },
]

export default function Instructor() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50" aria-labelledby="instructor-heading">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">วิทยากร</p>
          <h2 id="instructor-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">
            แนะนำวิทยากร
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Avatar placeholder */}
            <div className="md:w-64 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 p-10 min-h-56">
              <div
                className="w-36 h-36 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg"
                role="img"
                aria-label={`ภาพโปรไฟล์ของ ${INSTRUCTOR.name}`}
              >
                <span className="text-6xl font-bold text-white select-none">
                  {INSTRUCTOR.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">
              <div className="mb-2">
                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {INSTRUCTOR.title}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{INSTRUCTOR.name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{INSTRUCTOR.bio}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                {achievements.map((a) => (
                  <div key={a.label} className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">{a.number}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <figure className="mt-10 text-center">
          <blockquote className="text-xl sm:text-2xl font-medium text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;คำที่ถูกต้อง ในเวลาที่ใช่ เปลี่ยนคนผ่านมาเป็นลูกค้าได้เลย&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-gray-400 text-sm font-medium">— {INSTRUCTOR.name}</figcaption>
        </figure>
      </div>
    </section>
  )
}
