import { lineUrl } from '@/lib/constants'

const teasers = [
  { num: 'บท 01', title: 'ทำไมคนเขียนเก่งกว่าคุณ ขายได้น้อยกว่าคุณ' },
  { num: 'บท 02', title: 'คนซื้อด้วยอารมณ์ แล้วค่อยหาเหตุผลทีหลัง' },
]

export default function S4Preview() {
  return (
    <section
      className="py-9 sm:py-14 px-5"
      id="preview"
      style={{ borderTop: '1px solid var(--rule)' }}
      aria-labelledby="preview-headline"
    >
      <div className="mx-auto" style={{ maxWidth: 760 }}>

        {/* Green callout box */}
        <div
          className="callout green rounded-[10px] p-7 sm:p-9 flex-col"
          style={{ display: 'block' }}
        >
          {/* Header */}
          <div className="flex gap-3 items-start mb-3">
            <span className="text-[28px] shrink-0" aria-hidden="true">🎁</span>
            <h2
              id="preview-headline"
              className="font-bold leading-snug"
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--green-fg)',
                fontSize: 22,
              }}
            >
              ลองเรียน 2 บทแรกก่อน — ฟรี ไม่ต้องสมัคร
            </h2>
          </div>

          <p className="text-[15.5px] leading-[1.7] mb-2" style={{ color: 'var(--green-fg)' }}>
            เพราะเรามั่นใจว่าสูตรในเล่มนี้ใช้ได้กับธุรกิจไทยจริง — ไม่ใช่ตำราฝรั่งที่แปลตรง ๆ มา
          </p>
          <p className="text-[15.5px] leading-[1.7] mb-4" style={{ color: 'var(--green-fg)' }}>
            <strong>กดแอด LINE OA</strong> → รับ 2 บทแรกทันที
            <br />
            อ่านแล้วเอาไปลองปรับงานคุณก่อน — ถ้าเห็นผล ค่อยมาเรียนต่อ
          </p>

          {/* CTA link */}
          <a
            href={lineUrl('s5')}
            target="_blank"
            rel="noopener noreferrer"
            data-cta-position="s5"
            className="cta cta-block"
          >
            <span
              className="grid place-items-center rounded font-black text-[11px] shrink-0"
              style={{
                width: 22,
                height: 22,
                background: 'white',
                color: 'var(--line-green)',
              }}
              aria-hidden="true"
            >
              LINE
            </span>
            เรียนฟรี 2 บทเรียน
          </a>

          {/* Chapter teasers */}
          <div
            className="rounded-lg p-4 mt-4 flex flex-col gap-1"
            style={{ background: 'rgba(255,255,255,0.55)' }}
          >
            {teasers.map((t) => (
              <div
                key={t.num}
                className="text-[14.5px] leading-[1.55]"
                style={{ color: 'var(--green-fg)' }}
              >
                <span className="font-medium mr-2" style={{ color: 'var(--green-fg)', opacity: 0.7 }}>{t.num}</span>
                {t.title}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
