import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'นโยบายคุกกี้ | phachara.com',
  description: 'นโยบายการใช้คุกกี้และการจัดการความยินยอม',
  alternates: { canonical: 'https://phachara.com/legal/cookie' },
}

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors mb-6 inline-block">
            ← กลับหน้าหลัก
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold">นโยบายคุกกี้</h1>
          <p className="text-gray-400 mt-2 text-sm">อัปเดตล่าสุด: 19 พฤษภาคม 2569</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">

          <p>
            phachara.com (&ldquo;เรา&rdquo;)
            ใช้คุกกี้และเทคโนโลยีคล้ายคลึงเพื่อให้บริการดียิ่งขึ้น
            นโยบายนี้อธิบายว่าเราใช้คุกกี้อย่างไร และคุณจัดการได้อย่างไร
          </p>

          <h2>1. คุกกี้คืออะไร</h2>
          <p>
            คุกกี้คือไฟล์ข้อความขนาดเล็กที่เว็บไซต์ฝากไว้บนอุปกรณ์ของคุณ
            เพื่อจดจำการตั้งค่า บันทึกการใช้งาน และวิเคราะห์ประสิทธิภาพ
          </p>

          <h2>2. ประเภทของคุกกี้ที่เราใช้</h2>

          <aside className="not-prose my-4 rounded-lg border-l-4 border-blue-400 bg-blue-50 p-4 text-sm text-blue-900">
            <p>
              <strong>📢 หมายเหตุ</strong>:{' '}
              เราใช้ Analytics และ Marketing cookies เพื่อปรับปรุงบริการและวัด
              conversion โฆษณา คุณจัดการได้ผ่านการตั้งค่า browser
            </p>
          </aside>

          <h3>🍪 Essential Cookies — จำเป็น (ไม่ต้องขอ consent)</h3>
          <p>
            ใช้สำหรับการทำงานพื้นฐานของเว็บไซต์ ได้แก่ session login ผ่าน LINE,
            ป้องกัน CSRF attack และจดจำการตั้งค่า consent ของคุณ
            ไม่สามารถปิดได้โดยไม่กระทบการใช้งาน
          </p>

          <h3>📊 Analytics Cookies — active</h3>
          <p>ใช้วัด traffic และพฤติกรรมการใช้งานเพื่อปรับปรุงบริการ</p>
          <ul>
            <li>
              <strong>_ga, _gid</strong> — Google Analytics 4 · วัด page view,
              scroll depth, conversion · อายุ 2 ปี / 24 ชม.
            </li>
            <li>
              <strong>_clck, _clsk</strong> — Microsoft Clarity (session recording ·
              heatmap) · อายุ 1 ปี / session
            </li>
            <li>
              <strong>va_* (Vercel Analytics)</strong> — page view counter ·
              ไม่ระบุตัวตน · session
            </li>
          </ul>

          <h3>🎯 Marketing Cookies — active</h3>
          <p>ใช้วัด ad conversion และสร้าง Custom Audience สำหรับโฆษณา</p>
          <ul>
            <li>
              <strong>_fbp</strong> — Meta Platforms (Facebook Pixel) · retargeting
              + conversion tracking · อายุ 90 วัน
            </li>
          </ul>

          <h2>3. Cookie Consent Banner</h2>
          <p>เมื่อคุณเข้าเว็บครั้งแรก คุณจะเห็น banner ขออนุญาตใช้คุกกี้:</p>
          <ul>
            <li><strong>ยอมรับทั้งหมด</strong> — เปิดทั้ง 3 ประเภท</li>
            <li><strong>จำเป็นเท่านั้น</strong> — เปิดแค่ Essential cookies</li>
            <li><strong>ตั้งค่าเอง</strong> — เลือกเปิด/ปิดแต่ละหมวด</li>
          </ul>
          <p>การเลือกของคุณจะถูกบันทึก 12 เดือน คุณเปลี่ยนใจได้ตลอดเวลา</p>

          <h2>4. การจัดการคุกกี้</h2>
          <p><strong>เปลี่ยนการตั้งค่าใน phachara.com</strong>:</p>
          <ul>
            <li>คลิกลิงก์ &ldquo;ตั้งค่าคุกกี้&rdquo; ที่ footer (เปิด banner ใหม่)</li>
          </ul>
          <p><strong>บล็อกคุกกี้ทั้งหมดใน browser</strong>:</p>
          <ul>
            <li>Chrome: Settings → Privacy and security → Cookies</li>
            <li>Safari: Preferences → Privacy → Block all cookies</li>
            <li>Firefox: Settings → Privacy &amp; Security → Cookies</li>
          </ul>

          <aside className="not-prose my-6 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 text-sm text-orange-900">
            <p>
              <strong>⚠️ คำเตือน</strong>: หากบล็อก Essential cookies ทั้งหมด
              คุณจะไม่สามารถ login หรือใช้งานบางส่วนของเว็บได้
            </p>
          </aside>

          <h2>5. คุกกี้ของบุคคลที่สาม</h2>
          <p>เราใช้บริการของบุคคลที่สามที่อาจวางคุกกี้ของตัวเอง:</p>
          <ul>
            <li>
              <strong>Google (Analytics)</strong>:{' '}
              <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
                policies.google.com/technologies/cookies
              </a>
            </li>
            <li>
              <strong>Meta (Facebook Pixel)</strong>:{' '}
              <a href="https://facebook.com/policy/cookies" target="_blank" rel="noopener noreferrer">
                facebook.com/policy/cookies
              </a>
            </li>
            <li>
              <strong>Stripe (Payment)</strong>:{' '}
              <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer">
                stripe.com/cookies-policy
              </a>
            </li>
            <li>
              <strong>Vercel (Hosting)</strong>:{' '}
              <a href="https://vercel.com/legal/cookies" target="_blank" rel="noopener noreferrer">
                vercel.com/legal/cookies
              </a>
            </li>
          </ul>

          <h2>6. การเปลี่ยนแปลงนโยบาย</h2>
          <p>
            เราอาจปรับนโยบายนี้เมื่อมีการเพิ่ม/ลบ tools ที่ใช้คุกกี้
            การเปลี่ยนแปลงสำคัญจะแจ้งผ่าน banner และในหน้านี้
          </p>

          <h2>7. ติดต่อเรา</h2>
          <p>
            ดูช่องทางติดต่อที่ <a href="/contact">หน้าติดต่อเรา</a> ·
            รายละเอียดการประมวลผลข้อมูลดูที่{' '}
            <a href="/legal/privacy">นโยบายความเป็นส่วนตัว</a>
          </p>

        </div>
      </main>

      <div className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <a href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">← หน้าหลัก</a>
          <span className="text-gray-300">|</span>
          <a href="/legal/refund" className="text-gray-500 hover:text-gray-700">คืนเงิน</a>
          <a href="/legal/terms" className="text-gray-500 hover:text-gray-700">ข้อกำหนด</a>
          <a href="/legal/privacy" className="text-gray-500 hover:text-gray-700">ความเป็นส่วนตัว</a>
          <a href="/contact" className="text-gray-500 hover:text-gray-700">ติดต่อ</a>
        </div>
      </div>
    </div>
  )
}
