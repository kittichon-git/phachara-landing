# AUDIT-PHASE4.md — Phase 4 Copy Revision Pre-flight

> Generated: 2026-05-09 | Branch: main (post-merge feat/line-first-landing)

---

## 1. Section File Inventory

| Current file | Component | Maps to (Phase 4 target) |
|---|---|---|
| `components/Hero.tsx` | `<Hero>` | S1 Hero — rewrite H1 |
| `components/sections/S2Pain.tsx` | `<S2Pain>` | S2 Pain — expand 3→5 cards |
| `components/sections/S3Promise.tsx` | `<S3Promise>` | **→ becomes S4 Promise** (renumber) |
| `components/sections/S4Preview.tsx` | `<S4Preview>` | **→ becomes S5 Preview** (renumber) |
| `components/sections/S5Author.tsx` | `<S5Author>` | **DELETE** — replaced by S6 Differentiator |
| `components/sections/S6Curriculum.tsx` | `<S6Curriculum>` | **→ becomes S7 Curriculum** (renumber) |
| `components/FAQ.tsx` | `<FAQ>` | S9 FAQ — conversational rewrite |
| `components/sections/S9FinalCTA.tsx` | `<S9FinalCTA>` | S10 Final CTA — update copy |

**New components to create:**
- `components/sections/S3SectionFitCheck.tsx` — "เหมาะกับใคร" ✅/❌
- `components/sections/S6SectionDifferentiator.tsx` — "ทำไมบทเรียนนี้ต่าง" 4 cards

**`app/page.tsx` section order after Phase 4:**
```
S1  Hero
S2  Pain (3→5 cards)
S3  FitCheck (NEW)
S4  Promise (was S3Promise)
S5  Preview (was S4Preview)
S6  Differentiator (NEW — replaces S5Author)
S7  Curriculum (was S6Curriculum, simplified)
[S8 Testimonials — still commented out]
S9  FAQ
S10 FinalCTA
```

---

## 2. คำว่า "คอร์ส" ที่ต้องเปลี่ยน → "บทเรียน" (with file:line)

> ขอบเขต: ไฟล์ใน `components/` + `app/` ที่ user-visible copy เท่านั้น
> ไม่แตะ: legal pages, metadata title tag (SEO), manifest description

| File | Line | Current | Action |
|---|---|---|---|
| `components/Hero.tsx` | 25 | `คอร์ส **แค่เปลี่ยนคำ ก็ทำเงิน**` | → `**บทเรียน แค่เปลี่ยนคำ ก็ทำเงิน**` |
| `components/FAQ.tsx` | 16 | `คอร์สออกแบบให้คนทำธุรกิจที่ไม่ใช่นักเขียนเรียนได้` | → `บทเรียนออกแบบให้คนทำธุรกิจที่ไม่ใช่นักเขียนเรียนได้` |
| `components/FAQ.tsx` | 24 | `สินค้า, บริการ, คอร์ส, e-commerce` | → `สินค้า, บริการ, บทเรียน, e-commerce` |
| `lib/constants.ts` | 16 | `subtitle: "คอร์สเขียนคำขายของออนไลน์..."` | → `"บทเรียนเขียนคำขายของออนไลน์..."` |

**ไม่เปลี่ยน (justification):**
| File | Line | Reason |
|---|---|---|
| `app/layout.tsx` | 22 | `<title>` tag — SEO; "คอร์ส" ใน title กว้างกว่าจะกระทบ SERP |
| `app/manifest.ts` | 7 | PWA manifest description — ไม่ใช่ user-facing copy |
| `app/opengraph-image.tsx` | 46 | OG image text — ต้องสั้น; ถ้าอยากเปลี่ยนต้องแยก decision |
| `components/NotifyButton.tsx` | 4 | Email subject line — old component, ไม่ได้ใช้ใน page.tsx แล้ว |
| `components/About.tsx` | 69 | Old component ไม่ได้ใช้ใน page.tsx |
| `app/legal/*` | various | Legal docs — เป็น formal language, "คอร์ส" ยังคง acceptable |

---

## 3. S5Author Component — สถานะปัจจุบัน

**File:** `components/sections/S5Author.tsx`
**สถานะ:** placeholder ทั้งหมด — ยังไม่มี real data

```
[X] ปี / [X] เดือน / [X]+ ตัว / [N] campaign / ROAS [X] / [N]+ early reader
```

**Action Phase 4:** DELETE ไฟล์นี้ + remove import จาก page.tsx
→ แทนด้วย `S6SectionDifferentiator.tsx` ใหม่

---

## 4. data/curriculum.json — Detail Level Assessment

**ปัจจุบัน:** 29 items, แต่ละ item มี `"summary"` field ที่ละเอียดมาก
ตัวอย่าง ch.1: `"หลักจิตวิทยาการตัดสินใจซื้อ: สมอง 2 ระบบ (เร็ว vs ช้า) / อารมณ์ที่ทำให้คนกดซื้อ..."`

**Component ปัจจุบัน (`S6Curriculum.tsx`):** render `ch.summary` ใน `<p>` ใต้แต่ละ chapter title

**B25 action:** เอา `summary` ออกจาก rendered UI — แสดงแค่ชื่อ section (7 ภาค + ภาคผนวก) แบบ high-level
→ ทำใน component เท่านั้น ไม่ลบ field จาก JSON (เก็บไว้เผื่อใช้)

---

## 5. Notation Gap (copy ที่ยังขาด)

spec order2320.md ให้ copy บางส่วนแต่ไม่ครบ:

| Commit | ขาด |
|---|---|
| B19 S1 | Sub copy + trust strip exact wording (มีแค่ H1 ใน spec) |
| B21 S3 FitCheck | ✅ vs ❌ full list (spec บอกแค่โครงสร้าง) |
| B22 S4 Promise | bullet 1-5 wording update + bullet 6 exact (AI Prompt 30 ชุด) |
| B23 S5 Preview | 3 chapter teaser titles v.2 จริง |
| B24 S6 Differentiator | 4 card titles + copy ทั้งหมด |
| B26 S9 FAQ | 8 คำถาม conversational version ใหม่ |
| B27 S10 FinalCTA | guarantee copy ใหม่ |

→ บันทึกไว้ใน QUESTIONS.md แล้ว — Phase B จะระบุว่า commit ไหนรอ Notion copy

---

## 6. Style Guide / คำต้องห้าม — Pre-scan

ไม่มี Notion-207 โดยตรง แต่จาก pattern ที่รู้:
- ❌ "ทริกเกอร์" (S2Pain line 46) → ต้องหา Thai equivalent: **"กระตุ้น"**
- ❌ "framework" (Hero, S4Preview) — spec อาจต้องการ "สูตร/แนวทาง" check กับ notion-207
- ❌ "conversion" — check กับ notion-207
- ⚠️ `<dangerouslySetInnerHTML>` ใน S3Promise — ถ้าเปลี่ยน copy ต้องระวัง HTML tags

---

## Summary

| Category | Count |
|---|---|
| Files แตะใน Phase 4 | 10 files |
| คำ "คอร์ส" ที่เปลี่ยน | 4 occurrences |
| Components ลบ | 1 (S5Author) |
| Components สร้างใหม่ | 2 (S3FitCheck, S6Differentiator) |
| Copy ที่รอจาก Notion | 7 sections |
