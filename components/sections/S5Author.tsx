// TODO: replace placeholder values with real data — see QUESTIONS.md
// Pending: years of experience, campaign count, ROAS, profile photo

export default function S5Author() {
  return (
    <section className="bg-white py-16 px-4" aria-labelledby="author-headline">
      <div className="max-w-3xl mx-auto">
        <h2
          id="author-headline"
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          ใครคือคนแปล?
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Avatar placeholder */}
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-yellow-100 border-4 border-yellow-300 shrink-0 flex items-center justify-center text-5xl"
            aria-label="รูปผู้แปล"
          >
            👤
          </div>

          {/* Bio */}
          <div className="flex-1 text-gray-700 leading-relaxed space-y-4 text-center sm:text-left">
            <p>
              ทำธุรกิจ/การตลาดออนไลน์มา{' '}
              <strong>[X] ปี</strong> — เคยเผางบโฆษณาเพราะเขียนแอดผิดมาก่อน
            </p>
            <p>
              หลังศึกษา copywriting ฝั่งตะวันตก + ทดลองกับ campaign ไทยจริง —
              เห็นว่า framework ใช้ได้ ถ้าแปลให้ตรงสำนวนไทย
            </p>
            <p>
              โครงการนี้ใช้เวลา <strong>[X] เดือน</strong> รวบรวม framework +
              เขียน template + ทดลองกับ campaign จริง <strong>[X]+ ตัว</strong>
            </p>

            {/* Proof strip */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-2 text-sm text-gray-500">
              <span>💼 [N] campaign ที่ทดสอบ</span>
              <span>📈 ROAS เฉลี่ย [X]</span>
              <span>💬 [N]+ early reader feedback</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
