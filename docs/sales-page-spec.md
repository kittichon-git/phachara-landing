# Sales Page Spec — phachara.com (LINE-first)

> Source: Notion page "02 — Sales Page Spec" — ห้ามแต่งใหม่ ใช้ copy verbatim

## Goal
SP เป็น *education layer* ไม่ใช่ checkout — ทุก section push ไปทาง "Add LINE OA" เท่านั้น

## Design Principles
1. Mobile-first — 80%+ traffic จาก FB/TikTok mobile
2. No checkout — ปุ่มเดียวที่กดได้ตลอด = "แอด LINE"
3. Honest persuasion — ไม่มี fake countdown, no scarcity ปลอม
4. Performance: LCP < 2.0s, CLS < 0.1, TBT < 200ms
5. Accessibility: WCAG AA, body ≥ 16px

## Sticky CTA (always-on)
- ตำแหน่ง: bottom (mobile) / right floating (desktop ≥ md)
- Copy หลัก: **"แอด LINE รับ 3 บทฟรี"**
- Copy รอง: "ไม่ต้องลงทะเบียน · อ่านได้เลย"
- Icon: LINE green + ลูกศร →
- Behavior: hide เมื่อ user อยู่ใน hero (S1) — show เมื่อ scroll > 100vh
- Deep link: `${LINE_OA_LINK}?utm_source=sp&utm_medium=sp_sticky`

---

## S1 — Hero (above fold)

**Layout**: 60% copy / 40% book mockup (desktop) — stacked (mobile)

**H1**:
> เขียนแคปชั่น แอด หน้าเพจ มาทั้งปี
> ทำไมยังไม่มีคนกดซื้อ?

**Sub**:
> เพราะ "ดีไซน์สวย" ไม่ขาย — **คำที่ใช้** ต่างหากที่ทำให้ปิดได้
> คอร์ส **แค่เปลี่ยนคำ ก็ทำเงิน** — 24 บท framework + template + swipe file
> **ที่ใช้ปรับงานเดิมแล้วยอดเปลี่ยนทันที**

**Primary CTA**: 🟢 **แอด LINE รับ 3 บทแรกฟรี** (utm_medium=sp_hero)

**Secondary line**: "ไม่ต้องสมัครสมาชิก · ไม่ขอ email · อ่านได้เลย"

**Trust strip**: ⭐⭐⭐⭐⭐ จากผู้อ่าน 200+ คน · 🛡 คืนเงิน 7 วัน · 🔒 PDPA compliant

---

## S2 — Pain (3 mirrors)

**Headline**: คุณเคยรู้สึกแบบนี้ไหม?

**Cards**:
1. 📉 **"แอดยิงเงินไป engagement พุ่ง — แต่ยอดขายนิ่ง"** — ค่าโฆษณาเผาทิ้งทุกวัน
2. 😶 **"คนกดเข้าหน้าเพจแล้วเงียบ ไม่ทักไม่ซื้อ"** — traffic มาแล้ว แต่ปิดไม่ได้
3. 🤯 **"เขียนเองก็ไม่ได้ จ้าง copywriter ก็แพง"** — ติดตรงกลาง ไม่รู้ทำต่อยังไง

**Closer**: "ปัญหาไม่ใช่ที่สินค้า — ปัญหาคือ **คำ** ที่คุณใช้ยังไม่ทริกเกอร์การตัดสินใจ"

---

## S3 — Promise (5 outcomes)

**Headline**: หลังอ่านจบ คุณจะ...

**Checklist**:
- ✅ มี **Hook 30 แบบ** ที่ใช้เปิดแคปชั่น/แอด แล้วคนหยุดเลื่อน
- ✅ รู้ **สูตร 4 ส่วน** ที่ทำให้หน้าเพจขายปิดได้โดยไม่ต้องดราม่า
- ✅ มี **Power Words 100 คำ** ภาษาไทย ที่กระตุ้น action ได้จริง
- ✅ ปรับ **CTA ปุ่มเดียว** ให้ click rate เพิ่ม 2-5 เท่าได้ทันที
- ✅ มี **Swipe File** อีเมล/แคปชั่น/แอด ที่ก๊อปไปปรับชื่อสินค้าได้เลย

**Mini-CTA**: "อยากดูตัวอย่างก่อน? → แอด LINE รับ 3 บทแรก"

---

## S4 — Free Preview Teaser 🎁 (mid-page CTA)

**Layout**: callout box สีเขียว LINE

**Headline**: ลองอ่าน 3 บทแรกก่อน — ฟรี ไม่ต้องสมัคร

**Body**:
> เพราะเรามั่นใจว่า framework ในเล่มนี้ใช้ได้กับธุรกิจไทยจริง
> **กดแอด LINE OA** → รับ PDF 3 บทแรกทันที (~30 หน้า)
> อ่านแล้วลองนำไปปรับงานคุณก่อน — ถ้าเห็นผล ค่อยมาเรียนต่อ

**Big button**: 🎁 **แอด LINE รับ 3 บทฟรี (PDF)** (utm_medium=sp_s4)

**Sub**: บท 1 "ทำไมคำเดิมขายไม่ได้" + บท 2 "Hook 30 แบบ ที่หยุดคนเลื่อน" + บท 3 "สูตร 4 ส่วน ของหน้าเพจที่ปิดได้"

---

## S5 — Author/Authority

**Headline**: ใครคือคนแปล?

**Layout**: avatar + 2 paragraphs

**Body** (placeholder — ดู QUESTIONS.md ขอข้อมูลจริง):
- ทำธุรกิจ/การตลาดออนไลน์มา [X] ปี — เคยเผางบโฆษณาเพราะเขียนแอดผิดมาก่อน
- หลังศึกษา copywriting ฝั่งตะวันตก + ทดลองกับ campaign ไทยจริง — เห็นว่า framework ใช้ได้ ถ้าแปลให้ตรงสำนวนไทย
- โครงการนี้ใช้เวลา [X] เดือน รวบรวม framework + เขียน template + ทดลองกับ campaign จริง [X]+ ตัว

**Proof strip**: 💼 [N] campaign ที่ทดสอบ · 📈 ROAS เฉลี่ย [X] · 💬 [N]+ early reader feedback

---

## S6 — Curriculum (7 collapsible groups, 29 items)

**Headline**: เนื้อหาแบ่งเป็น 7 ภาค + ภาคผนวก

**Render**: อ่านจาก `data/curriculum.json` → group by `section` field → render เป็น 7+1 collapsible groups (ปิดทั้งหมด default)

**Group order**:
1. 🎯 ภาค 1 — จิตวิทยาการขาย (บท 1-4)
2. 📊 ภาค 2 — วัดผลคำที่ใช้ (บท 5-6)
3. 🪝 ภาค 3 — Hook สับไก (บท 7-11)
4. 🏗 ภาค 4 — โครงสร้างที่ปิดได้ (บท 12-14)
5. 💎 ภาค 5 — คำเฉพาะกลุ่ม (บท 15-18)
6. 🎯 ภาค 6 — ปิดการขาย (บท 19-21)
7. 🤖 ภาค 7 — AI x Copywriting (บท 22-24)
8. 📋 ภาคผนวก — Template + Checklist (A-E)

**Mini-CTA**: "แอดมาดู ToC ฉบับเต็มใน LINE"

---

## S7 — Testimonials

**Status**: 🔒 COMMENT OUT จนกว่ามี real testimonials หลัง soft launch

```
{/* TODO: enable after soft launch with real testimonials — ห้ามใช้ fake/stock */}
{/* <TestimonialsSection /> */}
```

---

## S8 — FAQ (8 questions, native `<details>`)

1. **เป็นไฟล์ PDF หรือมีแอป?** — เป็น Web LIFF (อ่านใน LINE) + ดาวน์โหลด PDF ได้
2. **ราคา 990 รวมอะไรบ้าง?** — 24 บท + Swipe File + Template ทุกหมวด + อัปเดต lifetime
3. **คืนเงินได้ไหม?** — ได้ภายใน 7 วัน ถ้าอ่านไม่ถึง 3 บท
4. **ต้องเขียนเป็นมาก่อนไหม?** — ไม่ต้อง คอร์สออกแบบให้คนทำธุรกิจที่ไม่ใช่นักเขียนเรียนได้
5. **ใช้เวลาเรียนนานแค่ไหน?** — 24 บท ~10-15 นาที/บท + เริ่มลองใช้กับงานจริงได้ทันทีจากบท 9
6. **ใช้กับธุรกิจอะไรได้บ้าง?** — สินค้า, บริการ, คอร์ส, e-commerce, B2B — ทุกอย่างที่ต้องเขียนขาย
7. **จ่ายผ่านอะไรได้บ้าง?** — PromptPay (QR) หรือ บัตรเครดิต/เดบิต ผ่าน Stripe (ในอนาคต ผ่านจ่ายใน LINE)
8. **ข้อมูลส่วนตัวเก็บอะไรบ้าง?** — เก็บแค่ LINE userId (ไม่มี email/เบอร์)

---

## S9 — Final CTA + Guarantee

**Headline**: พร้อมเริ่มหรือยัง?

**Recap**:
- 24 บท + Swipe File + Template ครบทุกหมวด
- คืนเงิน 7 วัน ไม่ถาม
- เริ่มจาก 3 บทฟรีก่อน — แอด LINE

**Big button**: 🟢 **แอด LINE รับ 3 บทฟรี** (utm_medium=sp_s9)

**Guarantee box**: 🛡 "ถ้าอ่านแล้วไม่คุ้ม คืนเงินเต็ม 990 ภายใน 7 วัน — แค่ส่งคำว่า *คืนเงิน* ใน LINE"

---

## Tracking Events
- `sp_view` — page load
- `sp_scroll_50`, `sp_scroll_90` — scroll depth
- `sp_cta_click` — `{ position: 'hero' | 's4' | 's9' | 'sticky' }`
- `sp_line_redirect` — เมื่อ user เด้งออกไป LINE

## Tech Stack
- Next.js 15 App Router (RSC default)
- Tailwind v4
- Fonts: Noto Sans Thai Looped (body) + Noto Serif Thai (H1)
- next/image + AVIF
- Framer Motion: hero entrance + sticky reveal เท่านั้น
