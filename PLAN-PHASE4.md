# PLAN-PHASE4.md — Phase 4 Copy Revision

> Source of truth: Notion "02 — Sales Page Spec" (updated 9 พ.ค. 02:00)
> Branch: `feat/copy-revision-phase4` (new — สร้างก่อน B18)
> Rules: 1 commit / section, STOP ทุก 2-3 commits, ห้าม push จนถึง Phase D

---

## Section Renumber Map

| เดิม (Phase 1-3) | ใหม่ (Phase 4) | Component file |
|---|---|---|
| Hero | S1 Hero | `components/Hero.tsx` ✏️ |
| S2Pain | S2 Pain | `components/sections/S2Pain.tsx` ✏️ |
| — | **S3 FitCheck (NEW)** | `components/sections/S3FitCheck.tsx` 🆕 |
| S3Promise | S4 Promise | `components/sections/S3Promise.tsx` ✏️ |
| S4Preview | S5 Preview | `components/sections/S4Preview.tsx` ✏️ |
| S5Author | ~~S5 Author~~ → **S6 Differentiator** | `components/sections/S5Author.tsx` 🗑️ → `S6Differentiator.tsx` 🆕 |
| S6Curriculum | S7 Curriculum | `components/sections/S6Curriculum.tsx` ✏️ |
| FAQ | S9 FAQ | `components/FAQ.tsx` ✏️ |
| S9FinalCTA | S10 Final CTA | `components/sections/S9FinalCTA.tsx` ✏️ |

**`app/page.tsx` order after Phase 4:**
```
Hero → S2Pain → S3FitCheck → S3Promise → S4Preview → S6Differentiator → S6Curriculum → FAQ → S9FinalCTA
```
> Note: component filenames ไม่เปลี่ยน (ป้องกัน git confusion) — ชื่อ function ภายในเปลี่ยน

---

## ⚠️ Notes ก่อนเริ่ม

1. **"คอร์ส"** ใน S6 headline "แล้วเล่มนี้ต่างจากคอร์สอื่นยังไง?" — spec ใช้ตั้งใจ (refer competitors) ไม่เปลี่ยน
2. **"ทริกเกอร์"** ใน S2 closer — verbatim จาก spec ใช้ได้ ไม่เปลี่ยน
3. **CTA position strings** ต้องอัปเดต `analytics.ts` type: `'hero' | 's5' | 's10' | 'sticky' | 'curriculum'`
4. **pnpm** ไม่ใช่ npm — build command: `pnpm run build`
5. S8 Testimonials ยังคง comment out (ไม่แตะ)

---

## B18 — Global tone pass + "คอร์ส" → "บทเรียน"

**Files:** `components/Hero.tsx`, `components/FAQ.tsx`, `lib/constants.ts`

| File | Line | จาก | เป็น |
|---|---|---|---|
| `components/Hero.tsx` | 25 | `คอร์ส **แค่เปลี่ยนคำ ก็ทำเงิน**` | `**บทเรียน "แค่เปลี่ยนคำ ก็ทำเงิน"**` |
| `components/FAQ.tsx` | 16 | `คอร์สออกแบบให้คนทำธุรกิจ...` | `บทเรียนออกแบบให้คนทำธุรกิจ...` |
| `components/FAQ.tsx` | 24 | `สินค้า, บริการ, คอร์ส, e-commerce` | `สินค้า, บริการ, บทเรียนออนไลน์, e-commerce` |
| `lib/constants.ts` | 16 | `"คอร์สเขียนคำขายของออนไลน์..."` | `"บทเรียนเขียนคำขายของออนไลน์..."` |

**Commit:** `refactor(B18): global tone — "คอร์ส" → "บทเรียน" per style guide`
→ STOP. show diff. รอ approve.

---

## B19 — S1 Hero rewrite

**File:** `components/Hero.tsx`

**H1 (Noto Serif Thai, font-black):**
```
โพสต์ทุกวัน ยิงแอดทุกคืน
ทำไมยังไม่มีคนกดซื้อ?
```

**Sub (body weight):**
```
ปัญหาไม่ได้อยู่ที่สินค้า ไม่ได้อยู่ที่กราฟิก
ปัญหาอยู่ที่ "คำ" ที่คุณใช้ — แค่เปลี่ยนคำให้ตรงจุด ยอดขายเปลี่ยนทันที
บทเรียน "แค่เปลี่ยนคำ ก็ทำเงิน" — 24 บท + ภาคผนวก 5 ส่วน ที่กรอกคำได้ทันที
```

**Primary CTA button:** `🟢 แอด LINE รับ 3 บทแรกฟรี`

**Secondary line:** `ไม่ต้องสมัครสมาชิก · ไม่ขอ email · อ่านได้เลย`

**Trust strip:** `📚 24 บท + ภาคผนวก 5 ส่วน · 🛡 คืนเงิน 7 วัน · 🔒 PDPA`

**Commit:** `feat(B19): S1 Hero — new pain headline "โพสต์ทุกวัน ยิงแอดทุกคืน"`

---

## B20 — S2 Pain 3→5 cards

**File:** `components/sections/S2Pain.tsx`

**Cards array (replace ทั้งหมด):**
```
1. 📉 "ยิงแอดมาทั้งเดือน คนทักเยอะ — แต่ยอดเงินยังนิ่ง"
   body: ค่าโฆษณาเผาทุกวัน Engagement สวย แต่กล่องเงินไม่ขยับ

2. 😶 "คนกดเข้าหน้าเพจแล้วเงียบ ไม่ทักไม่ซื้อ"
   body: Traffic เข้ามาแล้ว แต่เลื่อนผ่านไปเฉย ๆ ไม่มีอะไรให้หยุด

3. 🤯 "เขียนเองก็ไม่ได้ จ้างคนเขียนก็แพง"
   body: ติดตรงกลาง — ไม่รู้จะเริ่มจากตรงไหน ใช้คำไหนดี

4. 💸 "ลดราคาแล้วเงียบ จัดโปรแล้วก็ยังเงียบ"
   body: ลดจน margin บางแล้วยังขายไม่ออก เพราะปัญหาไม่ใช่ราคา

5. 🔄 "เคยซื้อคอร์สมาแล้วหลายตัว แต่ยังเขียนไม่เป็น"
   body: เรียนแล้วทำตามไม่ได้ — เพราะตำราเป็นภาษาฝรั่ง ไม่เข้ากับตลาดไทย
```
> Card 5: "คอร์ส" คงไว้ (refer competitors — ตาม spec)

**Grid:** เปลี่ยนจาก `sm:grid-cols-3` → `sm:grid-cols-2 lg:grid-cols-3` (5 cards)

**Closer (verbatim):**
```
ปัญหาไม่ใช่ที่คุณ — ปัญหาคือ "คำ" ที่ใช้ยังไม่ทริกเกอร์การตัดสินใจของคนซื้อ
และเราจะเปลี่ยนตรงนี้ทั้งหมด
```

**Commit:** `feat(B20): S2 Pain — expand 3→5 cards per spec`
→ STOP หลัง B20 (B18+B19+B20 = 3 commits). รอ approve.

---

## B21 — S3 FitCheck (NEW component)

**สร้างไฟล์ใหม่:** `components/sections/S3FitCheck.tsx`

**Headline:** `บทเรียนนี้เหมาะกับใคร?`

**✅ เหมาะกับคุณถ้า... (6 items):**
- ขายของออนไลน์อยู่แล้ว แต่ยอดไม่นิ่ง — เดือนนี้ดี เดือนหน้าหาย
- เป็นเจ้าของแบรนด์เล็ก ไม่มีงบจ้าง copywriter เดือนละ 30,000+
- ยิงแอด FB/TikTok เอง อยากให้ ROAS ดีขึ้นด้วยการเปลี่ยนคำ ไม่ใช่เพิ่มงบ
- อยากเขียนแคปชั่นที่คนอ่านแล้วทักมาเอง ไม่ต้องไล่ตามลูกค้า
- เปิดร้านใหม่ อยากปิดยอดแรกใน 30 วัน
- ใช้ AI ช่วยเขียนอยู่แล้ว แต่ output ยัง "ดูเป็น AI" คนอ่านปุ๊บรู้ทันที

**❌ ยังไม่เหมาะถ้า... (4 items):**
- มองหาบทเรียนสอนยิงแอด FB Ads / Google Ads (เล่มนี้ไม่ได้สอน)
- มองหาบทเรียนทำเว็บ / SEO / Analytics
- คาดหวังจะรวยใน 7 วัน — เล่มนี้ให้ "สูตร" ที่ต้องลงมือทำ
- ไม่พร้อมเปิดโพสต์ขึ้นมาลองเขียนอย่างน้อยสัปดาห์ละ 3 ครั้ง

**Mini-CTA:** `ตรงกับคุณข้อใดข้อหนึ่งใช่ไหม? → แอด LINE รับ 3 บทฟรี`

**Layout:** 2 col desktop (✅ left | ❌ right), stack mobile

**Update `app/page.tsx`:** insert `<S3FitCheck />` ระหว่าง S2Pain และ S3Promise

**Commit:** `feat(B21): S3 FitCheck — "เหมาะกับใคร" ✅/❌ qualifier section`
→ STOP. รอ user preview.

---

## B22 — S4 Promise update (5→6 outcomes)

**File:** `components/sections/S3Promise.tsx`

**Headline:** `หลังอ่านจบ 24 บท คุณจะ...`

**Outcomes (6 items — replace ทั้งหมด):**
```
✅ มี Hook 12 ตระกูล + 50 สูตร พร้อมใช้กับสินค้าตัวเอง
✅ รู้ โครง 4 ส่วน ที่ทำให้โพสต์/หน้าเพจ/Landing Page ปิดได้
✅ มี คำเฉพาะ 100+ คำ ภาษาไทย ที่กระตุ้น action ได้จริง
✅ ปรับ CTA ให้ click rate เพิ่ม 2-5 เท่าได้ทันทีจากบทที่ 9
✅ มี Swipe File อีเมล/แคปชั่น/Landing Page ที่ก๊อปไปปรับชื่อสินค้าได้เลย
✅ ใช้ AI Prompt 30 ชุด ให้เขียนงานคุณภาพมือโปรในเวลา 15 นาที
```

**Commit:** `feat(B22): S4 Promise — 5→6 outcomes, add AI Prompt bullet`

---

## B23 — S5 Preview rewrite

**File:** `components/sections/S4Preview.tsx`

**Body (replace):**
```
เพราะเรามั่นใจว่าสูตรในเล่มนี้ใช้ได้กับธุรกิจไทยจริง — ไม่ใช่ตำราฝรั่งที่แปลตรง ๆ มา
กดแอด LINE OA → รับ 3 บทแรกทันที (~30 หน้า)
อ่านแล้วเอาไปลองปรับงานคุณก่อน — ถ้าเห็นผล ค่อยมาเรียนต่อ ถ้าไม่ใช่ก็ไม่เป็นไร
```

**Sub (3 chapter teasers — replace):**
```
บท 1 "ทำไมคนเขียนเก่งกว่าคุณ ขายได้น้อยกว่าคุณ"
บท 2 "คนซื้อด้วยอารมณ์ แล้วค่อยหาเหตุผลทีหลัง"
บท 3 "4 ปมในใจ ทำให้คนยอมจ่าย โดยไม่ทันคิด"
```

**Commit:** `feat(B23): S5 Preview — updated body copy + real chapter teaser titles`
→ STOP หลัง B23 (B21+B22+B23). รอ approve.

---

## B24 — S6 Differentiator (REPLACE S5Author)

**ลบ content ใน:** `components/sections/S5Author.tsx` → replace ด้วย `S6Differentiator` function
(ไม่ rename file — เปลี่ยน function name + export)

**Headline:** `แล้วเล่มนี้ต่างจากคอร์สอื่นยังไง?`

**4 Cards (icon + headline + body):**

```
🇹🇭 1. ตัวอย่างทุกอันเป็น "ภาษาไทย" จริง
ไม่ใช่ Apple / Tesla / Coca-Cola — แต่เป็นเซรั่มสิว ครีมกันแดด อาหารหมา
รับสร้างบ้าน คอร์สออนไลน์ ทุกตัวอย่างจากตลาดไทยที่คุณขายอยู่จริง

📐 2. มี "สูตร" ให้กรอกคำได้ทันที
ไม่ใช่แนวคิดลอย ๆ — ทุกบทมีโครงให้กรอก เปิดมาก็ใช้ได้เลย
ไม่ต้องตีความ ไม่ต้องคิดเอง

🤖 3. เขียนคู่กับ AI ได้
24 บทออกแบบให้ใช้ร่วมกับ ChatGPT/Claude — มี Prompt 30 ชุดที่ทดสอบจริง
ไม่ใช่บอกแค่ "ลองถาม AI ดูสิ"

💸 4. ลงทุนครั้งเดียว ใช้ได้ตลอดชีพ
ไม่ใช่ subscription รายเดือน — จ่าย 990 บาทครั้งเดียว
อัปเดต lifetime เพิ่มบทใหม่ฟรี
```

**Closer:**
```
ถ้าอยากได้ "คู่มือเขียนคำที่ทำให้คนซื้อ ในบริบทตลาดไทย" — เล่มนี้คือเล่มที่คุณกำลังหา
```

**Update `app/page.tsx`:** เปลี่ยน `import S5Author` → ยังคง import จาก S5Author แต่ component ข้างในเปลี่ยน

**Commit:** `feat(B24): S6 Differentiator — replace Author placeholder with 4 product-trust cards`
→ STOP. รอ user preview.

---

## B25 — S7 Curriculum simplify

**File:** `components/sections/S6Curriculum.tsx`

**Headline:** `เนื้อหา 24 บท แบ่งเป็น 7 ภาค + ภาคผนวก`

**เปลี่ยน group descriptions (replace emoji+label เดิม ด้วย spec version):**

| Section | Label | Description |
|---|---|---|
| ภาค 1 | 🧠 ภาค 1 — จิตวิทยาผู้ซื้อ | เข้าใจว่าทำไมคนถึงยอมจ่าย "ปม" อะไรในใจที่ทำให้กดซื้อ และทำไมคนซื้อด้วยอารมณ์ก่อนเหตุผล |
| ภาค 2 | 📊 ภาค 2 — วัดผลคำที่เขียน | รู้วิธีตรวจว่าคำของคุณ "ใช้ได้จริง" หรือแค่คิดไปเอง ด้วย 4 ตัวเลขที่บอกผลทันที |
| ภาค 3 | 🎣 ภาค 3 — Hook ที่หยุดคนเลื่อน | คลัง Hook 12 ตระกูล + 50 สูตร พร้อมตัวอย่างแคมเปญไทยจริง |
| ภาค 4 | 📐 ภาค 4 — โครงเขียนเต็มฟอร์แมต | สูตรเขียน 3 รูปแบบ: โพสต์ขาย / สคริปต์คลิปสั้น 60 วิ / Landing Page 9 ส่วน |
| ภาค 5 | ✨ ภาค 5 — คำที่ทรงพลัง | Call-out Words + คำลดแรงต้าน + คำพรีเมียม + พลังของตัวเลข |
| ภาค 6 | 🎯 ภาค 6 — ปิดการขายในข้อความเดียว | หลักฐาน 7 แบบ + Offer ที่ปฏิเสธยาก + 12 ประโยคปิดท้าย |
| ภาค 7 | 🤖 ภาค 7 — AI เป็นผู้ช่วย | Prompt 5 ขั้น + Workflow ครบลูปตั้งแต่ไอเดียจนถึงปิดยอด |
| ภาคผนวก | 📎 ภาคผนวก (5 เครื่องมือพร้อมใช้) | A. เช็กลิสต์ / B. 100+ Template / C. 50+ Hook / D. Prompt 30 ชุด / E. ตารางคำต้องห้าม 120 คู่ |

**เปลี่ยน render:** ซ่อน chapter list ข้างใน — แสดงแค่ group description (ไม่ list บทย่อย)
**Mini-CTA:** `อยากดูสารบัญฉบับเต็ม? → แอดมา ส่งให้ใน LINE`

**Commit:** `refactor(B25): S7 Curriculum — group descriptions only, remove chapter detail list`

---

## B26 — S9 FAQ rewrite (conversational)

**File:** `components/FAQ.tsx`

**8 คำถาม (replace ทั้งหมด — verbatim จาก spec):**
```
1. Q: เป็นไฟล์ PDF หรือมีแอป?
   A: อ่านใน LINE (Web LIFF) + ดาวน์โหลด PDF ได้ — เปิดอ่านบนมือถือได้เลย ไม่ต้องลงแอปเพิ่ม

2. Q: ราคา 990 บาท รวมอะไรบ้าง?
   A: 24 บท + 5 ภาคผนวก (Template + Hook + Prompt + คำต้องห้าม + แผน 30 วัน) + อัปเดต lifetime

3. Q: คืนเงินได้ไหม?
   A: ได้ภายใน 7 วัน ถ้าอ่านไม่ถึง 3 บท — ส่งคำว่า "คืนเงิน" ใน LINE คืนให้ภายใน 24 ชม.

4. Q: ต้องเขียนเป็นมาก่อนไหม?
   A: ไม่ต้อง — ออกแบบมาให้คนทำธุรกิจที่ไม่ใช่นักเขียนเรียนได้ ทุกบทมีสูตรให้กรอก

5. Q: ใช้เวลาเรียนนานแค่ไหน?
   A: 24 บท × 10-15 นาที/บท = ประมาณ 5 ชม. เรียนเสร็จใน 1 สัปดาห์ + เริ่มลองใช้ได้ตั้งแต่บท 7

6. Q: ใช้กับธุรกิจอะไรได้บ้าง?
   A: สินค้า, บริการ, บทเรียนออนไลน์, e-commerce, B2B — ทุกอย่างที่ต้องเขียนขาย
      ตัวอย่างในเล่มมีทั้งสกินแคร์ อาหารหมา รับสร้างบ้าน บทเรียนออนไลน์

7. Q: จ่ายผ่านอะไรได้บ้าง?
   A: PromptPay (QR) หรือ บัตรเครดิต/เดบิต ผ่าน Stripe — ปลอดภัยตามมาตรฐาน PCI

8. Q: ข้อมูลส่วนตัวเก็บอะไรบ้าง?
   A: เก็บแค่ LINE userId (ไม่มี email/เบอร์/บัตรประชาชน) — ลบได้ทุกเมื่อ ส่งคำว่า "ลบข้อมูล" ใน LINE
```

**Commit:** `refactor(B26): S9 FAQ — conversational rewrite per spec (8 questions)`
→ STOP หลัง B26 (B25+B26). รอ approve.

---

## B27 — S10 Final CTA + Guarantee

**File:** `components/sections/S9FinalCTA.tsx`

**Headline:** `พร้อมเริ่มหรือยัง?`

**Recap (3 lines — replace):**
```
24 บท + ภาคผนวก 5 ส่วน — ใช้ได้ตลอดชีพ
คืนเงินภายใน 7 วัน ไม่ถามเหตุผล
เริ่มจาก 3 บทฟรีก่อน — แอด LINE
```

**Big button:** `🟢 แอด LINE รับ 3 บทฟรี` (position: 's10')

**Guarantee box (replace):**
```
ถ้าอ่านแล้วไม่คุ้ม คืนเงินเต็ม 990 บาท ภายใน 7 วัน
แค่ส่งคำว่า "คืนเงิน" ใน LINE — ไม่ต้องอธิบายเหตุผล โอนคืนภายใน 24 ชั่วโมง
```

**Also:** อัปเดต `lib/constants.ts` type `LinePosition` เพิ่ม `'s10'` แทน `'s9'`
และ `lib/analytics.ts` type `EventProps`

**Commit:** `feat(B27): S10 Final CTA — updated recap + guarantee with 24h refund promise`

---

## Phase D — Verification Gate

หลัง B27:
1. `pnpm run build` — ต้องผ่าน 0 errors
2. Lighthouse mobile production build — ≥ 95 ทุกหมวด
3. Screenshots 5 sections: S1, S3(new), S6(new), S7(simplified), S10
4. อัปเดต `QUESTIONS.md`
5. STOP — ห้าม push จนกว่า user สั่ง

---

## File Touch Summary

```
components/Hero.tsx                    B18, B19
components/sections/S2Pain.tsx         B20
components/sections/S3FitCheck.tsx     B21 (NEW)
components/sections/S3Promise.tsx      B22
components/sections/S4Preview.tsx      B23
components/sections/S5Author.tsx       B24 (REPLACE content)
components/sections/S6Curriculum.tsx   B25
components/FAQ.tsx                     B18, B26
components/sections/S9FinalCTA.tsx     B27
app/page.tsx                           B21 (add S3FitCheck)
lib/constants.ts                       B18, B27
lib/analytics.ts                       B27 (type update)
```
