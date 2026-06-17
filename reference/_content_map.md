# Content Map — Spec V3 × Reference HTML Layout

> กฎ: ข้อความ = Spec V3 verbatim | Layout/โครง = Reference HTML 1:1
> สร้างโดย: STEP 1 ก่อน rebuild

---

## S1 — Hero

### Reference layout
```
hero-badge (pill border radius 999px, ::before "+")
h1.hero-headline  (em สำหรับ highlight สีส้ม)
p.hero-sub
.chip-row  (3 .chip + 2 .chip-arrow "→")
a.btn-primary
.hero-trust  (3 items แบบ inline, ใช้ "·" separator)
```

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| hero-badge | สำหรับคนขายของออนไลน์ที่โพสต์ทุกวัน... แต่ยอดขายยังเงียบ |
| h1 | เปลี่ยนคำธรรมดา ให้ลูกค้า "อยากซื้อ" ตั้งแต่ประโยคแรก |
| hero-sub | สูตรลับการใช้ "คำ" ที่ช่วยให้ปิดการขายได้ แม้ไม่เคยเขียนโฆษณามาก่อน |
| chip 1 | สะกดสายตา |
| chip 2 | สร้างความเชื่อใจ |
| chip 3 | ลูกค้าอยากซื้อเอง |
| btn-primary | เริ่มอ่านฟรี 2 บทแรกใน LINE |

### ⚠️ GAP-1: hero-trust text
Reference มี trust row: **"คืนเงิน 100% ภายใน 7 วัน" · "เข้าถึงตลอดชีพ" · "เปิดอ่านบน LINE ได้ทุกที่"**
Spec ไม่ระบุ trust row นี้เลย
→ **ต้องถาม: ใช้ข้อความจาก reference ได้ไหม หรือจะให้กำหนดเอง หรือตัดออก?**

---

## S2 — Problem & Relevance

### Reference layout
```
.container (max-width 760px)
.text-center: section-label "ปัญหา" + h2 + p.problem-intro
.problem-list: 4x .problem-card (.problem-icon วงกลมแดง "✕" + p)
.problem-callout (bg orange-lt, center, em)
```

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| section-label | ปัญหา |
| h2 | ถ้าโพสต์ยังเงียบ... ปัญหาไม่ได้อยู่ที่สินค้า |
| problem-intro ¶1 | คุณขยันโพสต์ทุกวัน สินค้าก็ดีจริง แต่ยอดขายกลับลดลงเรื่อยๆ |
| problem-intro ¶2 | ไม่ใช่เพราะคุณขายไม่เก่ง แต่เพราะตลาดเปลี่ยนไป และ **"คำเดิม"** ไม่ทำงานอีกแล้ว: |
| card 1 | **ยิงแอดแพง แต่คนเลื่อนผ่านใน 1 วิ** — เพราะคำเปิดโพสต์ ไม่เกี่ยวอะไรกับเขา |
| card 2 | **คนหยุดอ่าน แต่จบแล้วก็เงียบ** — เพราะคำที่คุณใช้ แค่ "อธิบาย" แต่ไม่ได้ทำให้ "อยากซื้อ" |
| card 3 | **อธิบายจนเหนื่อย แต่ลูกค้าตอบ "ขอดูก่อน"** — เพราะไม่มีคำที่ช่วยตัดความลังเล |
| card 4 | **สินค้าดีกว่าคู่แข่ง แต่ไม่มีใครถาม** — เพราะคุณไม่ได้เปิดช่องให้เขาเริ่มคุย |
| callout | คุณคุมตลาดและคู่แข่งไม่ได้ แต่คุณเปลี่ยน **"คำ"** ในโพสต์ของคุณได้ และนี่คือวิธีแก้ |

> NOTE: Reference HTML callout ต่างจาก Spec: reference พูดถึง "คุมอัลกอริทึม" แต่ Spec พูดถึง "คุมตลาดและคู่แข่ง" → **ใช้ Spec verbatim**

> NOTE: Reference card 1 ใช้ "คนปัดทิ้ง" แต่ Spec ใช้ "คนเลื่อนผ่าน" → **ใช้ Spec verbatim**

---

## S3 — Mechanism

### Reference layout
```
.container-wide (max-width 960px)
.text-center: section-label "วิธีใหม่" + h2
.steps-grid (3-column grid)
  .step-card:
    .step-num-bg (เลขใหญ่ 90px โปร่งแสง 8% สีส้ม absolute positioned)
    .step-icon (emoji 36px)
    .step-num (เลข 22px orange bold)
    .step-title (18px bold)
    p.step-desc (15px muted)
```

**ไม่มี before/after** ใน reference → before/after ที่อยู่ใน code เดิม = ผม่ใส่ตาม reference

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| section-label | วิธีใหม่ |
| h2 | 3 ขั้นตอนเปลี่ยน "คำธรรมดา" เป็น "คำทำเงิน" |
| step 1 icon/num | 👁️ / 01 |
| step 1 title | สะกดสายตา (Hook) |
| step 1 desc | เปลี่ยนประโยคแรกให้ดึงดูด จนลูกค้าไม่อยากเลื่อนผ่าน |
| step 2 icon/num | 🤝 / 02 |
| step 2 title | สร้างความเชื่อใจ (Trust) |
| step 2 desc | ใช้คำอธิบายที่เห็นภาพ ตัดความลังเล และทำให้ลูกค้าเชื่อมั่น |
| step 3 icon/num | ⚡ / 03 |
| step 3 title | กระตุ้นการตัดสินใจ (Action) |
| step 3 desc | วางประโยคปิดการขายให้เนียน จนลูกค้าโอนเงินโดยไม่ต้องยัดเยียด |

---

## S4 — Proof

### Reference layout
```
.container-wide (max-width 960px)
.text-center: section-label "เสียงตอบรับจริง" + h2
.proof-grid (1-column, max-width 800px center):
  .proof-card (radius 16px, padding 32px):
    .proof-quote (italic, border-left orange 3px, ::before/after quotes)
    .proof-meta (mb 20px pb 20px border-bottom):
      .proof-name (16px bold)
      .proof-profession (14px muted)
      .proof-description (14px muted)  ← ⚠️ Spec ไม่มี
      .proof-result (14px orange)      ← ⚠️ Spec ไม่มี (dummy text ใน reference)
    img.proof-image (100% width)
```

### Spec V3 content (verbatim)
| proof-quote | proof-name | proof-profession |
|---|---|---|
| เปลี่ยนแค่มุมเปิดคอนเทนต์ คนก็หยุดดูและเข้าใจง่ายขึ้นทันที | Nutty | ทนายความ / ครีเอเตอร์ |
| ใช้คำสั้นแต่โดนใจ เอาสูตรไปจับกับโพสต์เดิม ยอดก็เปลี่ยน | เตะ พนมไพร | ข้าราชการ / ทำช่องปักตะกร้า |
| คุ้มมาก อ่านไป 4-5 บท ก็หยิบมาใช้ได้เลย ไม่ต้องรออ่านจบ | nim | เจ้าของช่อง TikTok สอนทำใบงาน |
| เปลี่ยนจากการแค่อธิบายสินค้า เป็นการเขียนให้คนอยากซื้อต่อ | พนักงานบริษัท | พนักงานบริษัท / ทำรายได้เสริม |
| คำพูดเดียวกัน ถ้าเลือกใช้ต่างกัน ผลลัพธ์ยอดขายก็ต่างกันได้จริง | นักศึกษา | นักศึกษา / ทำรายได้เสริม |

### ⚠️ GAP-2: proof-description และ proof-result
Reference layout มี 2 fields พิเศษ:
- `.proof-description` — ข้อความ dummy ใน reference เช่น "ทำคอนเนื้อหาความรู้กฎหมาย"
- `.proof-result` — ข้อความ dummy เช่น "▼ สามารถสร้างคอนเนื้อที่หอมคน"

Spec ไม่มีข้อความสำหรับ 2 fields นี้
→ **ต้องถาม: (a) ตัด 2 fields นี้ออก หรือ (b) ให้กำหนดข้อความมาเอง?**
หาก (a) → layout proof-card จะสั้นลง ไม่มี border-bottom ใต้ meta และไม่มี proof-image area ที่เป็น description/result

---

## S5 — Fit / Not-Fit

### Reference layout
```
.container (760px)
.text-center: h2 (ไม่มี section-label ใน reference!)
.fit-grid (2-column):
  .fit-box.yes: .fit-header (bg green) + .fit-items (4x .fit-item ✅ icon)
  .fit-box.no: .fit-header (bg red) + .fit-items (4x .fit-item ❌ icon)
```

> NOTE: reference ไม่มี section-label สำหรับ S5 Fit

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| h2 | เช็คก่อนว่าบทเรียนนี้เหมาะกับคุณไหม? |
| fit-header yes | ✅ เหมาะมาก ถ้าคุณ: |
| yes 1 | มีสินค้าดี แต่โพสต์ขายแล้วยอดขายไม่นิ่ง |
| yes 2 | ขยันโพสต์ แต่รู้สึกว่าตัวเองกำลัง "อธิบายสินค้า" มากกว่า "ทำให้อยากซื้อ" |
| yes 3 | อยากได้สูตรและ Template ไปปรับใช้ทันที ไม่อยากเริ่มจากกระดาษเปล่า |
| yes 4 | อยากให้ลูกค้าทักมาด้วยความอยากได้ ไม่ใช่ทักมาเพราะโดนตื๊อ |
| fit-header no | ❌ ไม่เหมาะเลย ถ้าคุณ: |
| no 1 | แค่อยากก๊อปปี้วาง โดยไม่คิดจะปรับให้เข้ากับสินค้าของตัวเอง |
| no 2 | หวังสูตรรวยทางลัด หรือต้องการการันตียอดขายข้ามคืนโดยไม่ลงมือทำ |
| no 3 | ไม่สนใจว่าทำไมลูกค้าถึงซื้อ ขอแค่ตั้งหน้าตั้งตาขายอย่างเดียว |
| no 4 | ไม่อยากลงมือแก้โพสต์ หรือไม่ชอบทดลองปรับคำ |

✅ ตรงกัน ไม่มี gap

---

## S6 — Curriculum

### Reference layout
```
.container (760px)
.text-center: section-label "เนื้อหา" + h2
.curriculum-list:
  7x .curriculum-row: .curriculum-badge (orange) + .curriculum-content (title+desc) + .curriculum-arrow "›"
```

**ไม่มี bonus section ใน reference S6** → Bonuses อยู่ใน S8 Offer เท่านั้น

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| section-label | เนื้อหา |
| h2 | 7 ภาค 24 บท + โบนัสชุดสูตร Template และ Prompt หยิบไปทำเงินได้ทันที |
| ภาค 1 | แกะรอยลูกค้า — เจาะ 4 ปมในใจ ที่ทำให้ลูกค้ายอมจ่ายเงิน |
| ภาค 2 | วัดผลคำ — ระบบเช็คประโยคต่อประโยค คำไหนพัง คำไหนทำเงิน |
| ภาค 3 | ประโยคหยุดนิ้ว — 12 สูตร Hook และ "ประโยคที่ 2" ที่คนมักมองข้าม |
| ภาค 4 | โครงสร้างสะกดจิต — 8 โครงสร้างโพสต์ ที่ลากสายตาให้อ่านจนจบ |
| ภาค 5 | อัพราคาด้วยคำ — 50+ คำพรีเมียม ที่ทำให้สินค้าดูแพงแต่คนแย่งกันซื้อ |
| ภาค 6 | ปิดการขายเนียนตา — 12 ประโยคปิดการขาย ที่ทำให้ลูกค้าตัดสินใจซื้อโดยไม่ต้องง้อ |
| ภาค 7 | เร่งสปีดด้วย AI — สูตร Prompt 5 ขั้น สั่ง AI ให้เขียนเหมือนมือโปร |

> NOTE: reference h2 = "7 ภาค 24 บท หยิบสูตรไปใช้ทำเงินได้ทันที" แต่ Spec = "7 ภาค 24 บท + โบนัสชุดสูตร Template และ Prompt หยิบไปทำเงินได้ทันที" → **ใช้ Spec verbatim**

---

## S7 — Loss Aversion

### Reference layout
```
#loss-aversion (gradient bg, ไม่มี section-label!)
  h2 (ตรงๆ ไม่ wrap ใน text-center)
  .loss-aversion-content:
    3x .loss-aversion-item: p (icon emoji + text)
    .loss-aversion-highlight: p (orange bold, ❓)
```

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| h2 | ค่าเสียโอกาสที่คุณกำลังจ่ายอยู่ทุกวัน |
| item 1 | 💸 ค่าโฆษณาที่คุณยิงทิ้งไปฟรีๆ เพราะคนเลื่อนผ่าน... |
| item 2 | ⏰ ค่าเวลาที่คุณนั่งคิดคอนเทนต์เป็นชั่วโมง แต่จบด้วยความเงียบ... |
| item 3 | 👥 ลูกค้ากี่คนที่หลุดมือไปซื้อกับคู่แข่ง เพียงเพราะเขาใช้ "คำ" ที่โดนใจกว่า? |
| highlight | ความสูญเสียเหล่านี้ แพงกว่า 890 บาทที่คุณจะลงทุนเพื่อแก้ปัญหานี้อย่างถาวรหรือไม่? |

> NOTE: reference มี ❓ นำหน้า highlight แต่ Spec ไม่มี → **ใช้ Spec verbatim (ไม่ใส่ ❓)**

---

## S8 — Offer & Price

### Reference layout
```
.container (760px)
.text-center: section-label "ราคา" + h2 + p.offer-intro
table.offer-table (thead + tbody + total row):
  thead: "รายการ" | "มูลค่า"
  7 rows + total row (bg orange-lt)
.offer-price-box (bg orange-lt, dashed border orange):
  .price-label, .price-strike, .price-main, .price-desc
  a.btn-line
.trust-row (3x .trust-item with icon circle)
```

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| section-label | (ไม่ระบุ แต่ reference = "ราคา") |
| h2 | ทั้งหมดที่คุณจะได้รับใน 890 บาท |
| offer-intro | ไม่ใช่แค่บทเรียนอ่านอย่างเดียว แต่เป็นชุดสูตร + Template + Prompt ที่หยิบไปใช้ตอนเขียนโพสต์จริงได้ทันที |
| row 1 | 📕 บทเรียน "แค่เปลี่ยนคำ ก็ทำเงิน" 7 ภาค 24 บท | 990 ฿ |
| row 2 | 100+ Template ครบทุกฟอร์แมต กรอกคำได้ทันที | 490 ฿ |
| row 3 | 50+ Hook Formulas พร้อมตัวอย่างไทย | 390 ฿ |
| row 4 | Prompt Library 30 ชุด พร้อมตัวอย่างใช้จริง | 290 ฿ |
| row 5 | เช็คลิสต์ตรวจงานก่อนปล่อย (Hook / Proof / CTA) | 190 ฿ |
| row 6 | ตารางคำต้องห้าม vs คำที่ควรใช้ | 140 ฿ |
| total | รวมมูลค่าทั้งหมด | **2,490 ฿** |
| price-strike | ~~2,490 ฿~~ |
| price-main | **890 ฿** |
| price-desc | จ่ายครั้งเดียว · เข้าถึงตลอดชีพ · เปิดอ่านบน LINE ได้ทุกที่ |
| btn-line | เริ่มอ่านฟรี 2 บทแรกใน LINE |

### ⚠️ GAP-3: trust-row ใต้ price box
Reference มี trust row: "🛡️ คืนเงิน 100%", "⬇️ ดาวน์โหลดทันที", "∞ ใช้งานตลอดชีวิต"
Spec ไม่มี trust row นี้
→ **ต้องถาม: ใช้จาก reference ได้ไหม หรือตัดออก?**

---

## S9 — FAQ & Guarantee

### Reference layout
```
.container (760px)
h2.section-title "คำถามที่พบบ่อย" (ไม่มี section-label!)
.faq-guarantee (bg green-lt): .faq-guarantee-title + .faq-guarantee-text
.faq-list: 6x .faq-item (JS accordion: .faq-question + .faq-answer)
```

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| h2 | คำถามที่พบบ่อย (implied, reference ใช้นี้) |
| guarantee title | 🛡️ พิสูจน์ด้วยตัวเอง ⬇️ ทดลองอ่านฟรี ∞ ไม่ต้องเสี่ยงจ่ายก่อน |
| guarantee text | คุณไม่ต้องรับความเสี่ยงใดๆ เริ่มต้นอ่าน 2 บทแรกได้ฟรี เพื่อพิสูจน์ว่า "คำ" ช่วยเพิ่มยอดขายได้จริง ก่อนตัดสินใจ |
| FAQ 1 Q | เป็นวิดีโอ หรือเนื้อหาอ่าน? |
| FAQ 1 A | เป็นเนื้อหาอ่านออนไลน์ ออกแบบให้อ่านสั้นๆ และหยิบ Template ไปใช้ได้เร็วกว่าการเปิดดูวิดีโอยาวๆ |
| FAQ 2 Q | ไม่มีพื้นฐานเขียนหรือการตลาด เรียนได้ไหม? |
| FAQ 2 A | ได้ครับ เนื้อหาให้สูตร + ตัวอย่างก่อน–หลัง เพื่อให้เริ่มปรับคำกับสินค้าของตัวเองได้ทันที |
| FAQ 3 Q | อ่านบนมือถือได้ไหม มีวันหมดอายุไหม? |
| FAQ 3 A | อ่านได้บนมือถือผ่าน LINE / Browser และเข้าถึงได้ตลอดชีพ |
| FAQ 4 Q | มีตัวอย่างให้เอาไปใช้เลยไหม? |
| FAQ 4 A | มีครบ ทั้ง 100+ Template, 50+ Hook Formulas และ Prompt Library 30 ชุด |
| FAQ 5 Q | ใช้กับลูกค้าคนไทยได้จริงไหม? |
| FAQ 5 A | ตัวอย่างเขียนจากบริบทการขายของออนไลน์ในไทย เน้นภาษาที่คนไทยอ่านแล้วเข้าใจง่าย |
| FAQ 6 Q | เป็นหนังสือจัดส่งหรือไม่? |
| FAQ 6 A | ไม่ใช่หนังสือจัดส่ง เป็นบทเรียนออนไลน์ อ่านได้ทันทีหลังเข้าถึง |

> NOTE: reference guarantee = "🛡️ รับประกัน 7 วัน คืนเงิน 100%" + "หากเปิดอ่าน 3 บทแรก..." → ต่างจาก Spec → **ใช้ Spec verbatim**
> NOTE: reference FAQ 2 A มี "คุณ" เพิ่มเข้ามา: "เพื่อให้คุณเริ่มปรับคำ..." แต่ Spec ไม่มี "คุณ" → **ใช้ Spec verbatim**
> NOTE: reference FAQ 3 A ใช้ "ตลอดชีวิต" แต่ Spec ใช้ "ตลอดชีพ" → **ใช้ Spec**

---

## S10 — Final CTA

### Reference layout
```
#final-cta (bg dark #1A1A1A)
  h2 (white)
  p (color #AAAAAA, 3 ประโยคในย่อหน้าเดียว ใช้ <br>)
  a.btn-line-green (::before 🟢)
```

### Spec V3 content (verbatim)
| Element | Text |
|---|---|
| h2 | พิสูจน์ด้วยโพสต์ของคุณเอง |
| p ¶1 | คุณไม่ต้องเชื่อทั้งหมดในตอนนีั เริ่มต้นจากการทดลองอ่านฟรี 2 บทแรก |
| p ¶2 | อย่าปล่อยให้โพสต์ต่อไปของคุณ ต้องเสียลูกค้าไปฟรีๆ อีกเลย... |
| p ¶3 | ถ้าอ่านแล้วรู้สึกว่า "คำ" ของคุณทรงพลังขึ้น ค่อยตัดสินใจ |
| btn | เริ่มอ่านฟรี 2 บทแรกใน LINE |

> NOTE: Spec มีการสะกดผิด "ตอนนีั" (ไม่ใช่ "ตอนนี้") — ต้องใช้ verbatim รวมทั้งการสะกดนี้หรือไม่?

---

## Nav — ไม่อยู่ใน Spec

Reference nav มี: logo "คำทำเงิน", nav-links (ปัญหา/เนื้อหา/รีวิว/ราคา), nav-cta "เริ่มอ่านฟรี"
Spec ไม่กล่าวถึง nav เลย → ใช้ layout จาก reference

---

## Footer — ไม่อยู่ใน Spec

Reference footer มี: logo, copyright "© 2024", legal links (นโยบาย/ข้อกำหนด/ติดต่อ)
Spec ไม่กล่าวถึง footer เลย → ใช้ layout + legal links จาก reference แต่ปรับปี/ชื่อบริษัทตาม BUSINESS constant

---

## สรุป GAP ที่ต้องถามก่อนเขียนโค้ด

| # | Section | Gap | ทางเลือก |
|---|---|---|---|
| GAP-1 | S1 Hero | hero-trust text ไม่อยู่ใน Spec | (a) ใช้จาก reference HTML / (b) ตัดออก / (c) ให้กำหนดข้อความเอง |
| GAP-2 | S4 Proof | `proof-description` + `proof-result` ไม่อยู่ใน Spec | (a) ตัด 2 fields นี้ออก / (b) ให้กำหนดข้อความสำหรับแต่ละบุคคล |
| GAP-3 | S8 Offer | trust-row ใต้ price box ไม่อยู่ใน Spec | (a) ใช้จาก reference HTML / (b) ตัดออก |
| GAP-4 | S10 Final CTA | Spec มีการสะกดผิด "ตอนนีั" | ใช้ verbatim ตาม Spec (รวม typo) หรือแก้เป็น "ตอนนี้"? |
