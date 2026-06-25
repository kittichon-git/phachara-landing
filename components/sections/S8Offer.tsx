import LineCTAButton from '@/components/LineCTAButton'
import { COURSE } from '@/lib/constants'

const valueRows = [
  { label: 'บทเรียน "แค่เปลี่ยนคำ ก็ทำเงิน" 7 ภาค 24 บท', value: 990, bold: true },
  { label: '100+ Template ครบทุกฟอร์แมต กรอกคำได้ทันที', value: 490, bold: false },
  { label: '50+ Hook Formulas พร้อมตัวอย่างไทย', value: 390, bold: false },
  { label: 'Prompt Library 30 ชุด พร้อมตัวอย่างใช้จริง', value: 290, bold: false },
  { label: 'เช็คลิสต์ตรวจงานก่อนปล่อย (Hook / Proof / CTA)', value: 190, bold: false },
  { label: 'ตารางคำต้องห้าม vs คำที่ควรใช้', value: 140, bold: false },
]

export default function S8Offer() {
  return (
    <section id="offer" style={{ padding: '80px 24px', background: '#FDFBF7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        <div className="text-center">
          <span className="section-label">ราคา</span>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 34px)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              marginBottom: 12,
            }}
          >
            ทั้งหมดที่คุณจะได้รับ{' '}
            <span style={{ whiteSpace: 'nowrap' }}>ใน {COURSE.price.toLocaleString()} บาท</span>
          </h2>
          <p className="thai-pretty" style={{ fontSize: 16, color: '#666666', marginBottom: 32, lineHeight: 1.65 }}>
            ไม่ใช่แค่บทเรียนอ่านอย่างเดียว แต่เป็นชุดสูตร + Template + Prompt ที่หยิบไปใช้ตอนเขียนโพสต์จริงได้ทันที
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="offer-table">
            <thead>
              <tr>
                <th>รายการ</th>
                <th style={{ textAlign: 'right' }}>มูลค่า</th>
              </tr>
            </thead>
            <tbody>
              {valueRows.map((row) => (
                <tr key={row.label}>
                  <td style={row.bold ? { fontWeight: 700 } : undefined}>{row.label}</td>
                  <td className="offer-price" style={row.bold ? { fontWeight: 700 } : undefined}>{row.value.toLocaleString()}{'\u00A0'}฿</td>
                </tr>
              ))}
              <tr className="offer-total">
                <td>รวมมูลค่าทั้งหมด</td>
                <td className="offer-price">{COURSE.anchorPrice.toLocaleString()}{'\u00A0'}฿</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="offer-price-box">
          <div className="price-label">วันนี้:</div>
          <div className="price-strike">{COURSE.anchorPrice.toLocaleString()} ฿</div>
          <div className="price-main">{COURSE.price.toLocaleString()}</div>
          <div className="price-desc">จ่ายครั้งเดียว · เข้าถึงตลอดชีพ · เปิดอ่านบน LINE ได้ทุกที่</div>
          <LineCTAButton
            position="offer"
            className="w-full"
          />
          <p className="thai-pretty" style={{ fontSize: 14, color: '#888888', marginTop: 16, lineHeight: 1.6 }}>
            🛡️ ถ้าภายใน 7 วันรู้สึกว่าไม่ช่วยให้คำของคุณขายดีขึ้น
            ทักแอดมินรับเงินคืนเต็ม 100% ไม่ถามเหตุผล
          </p>
        </div>

        <div className="trust-row">
          <div className="trust-item">🛡️ คืนเงิน 100%</div>
          <div className="trust-item">📲 เข้าถึงทันทีผ่าน LINE</div>
          <div className="trust-item">∞ ใช้งานตลอดชีพ</div>
        </div>
      </div>
    </section>
  )
}
