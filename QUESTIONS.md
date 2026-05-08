# QUESTIONS.md — ข้อมูลที่รอผู้เขียนส่งมา

## S5 — Author/Authority

~~ข้อมูลเหล่านี้ไม่ต้องการแล้ว~~ — S5Author component ถูก **ลบออก** ใน Phase 4 (B24)
แทนด้วย S6Differentiator ซึ่งใช้ copy จาก spec แทน author credentials

## Hero Image
- รูปปกหนังสือจริง (PNG/JPG ความละเอียดสูง) สำหรับแทน SVG placeholder ใน S1
- ปัจจุบัน: ใช้ SVG inline ที่ออกแบบด้วย Tailwind + TODO comment

## OG Image
- ภาพสำหรับ og:image ขนาด 1200×630px
- ปัจจุบัน: ยังไม่มี (Vercel OG หรือ static JPG ก็ได้)

## S8 — Testimonials (Phase 4 carry-over)
- Section ยังคง comment out รอ real customer quotes ≥ 5 รายการ
- ต้องการ: ชื่อ + quote + consent จาก early reader จริง ก่อน restore

## Analytics position strings (Phase 4 change)
- LinePosition type อัปเดตแล้วตาม spec: `hero | s3 | s4 | s5 | s7 | s10 | sticky`
- ลบ: `s9`, `curriculum` (ไม่มีใน spec tracking list)
- ถ้า PostHog มี historical events ด้วย position "s9"/"curriculum" → ต้อง remap ใน dashboard แยก
