# Design Tokens — salepage_v3_reference.html

Visual source of truth. ทุกค่าดึงจาก CSS ของ reference HTML ตรงๆ

---

## Colors

| Token | Hex | ใช้ที่ไหน |
|---|---|---|
| `--bg` | `#FDFBF7` | พื้นหลัง section หลัก (Hero, Mechanism, Curriculum, Offer) |
| `--bg2` | `#F4EFEA` | พื้นหลัง section สลับ (Problem, Proof, Fit, FAQ) |
| `--bg-dark` | `#1A1A1A` | Final CTA section + Footer |
| `--text` | `#1A1A1A` | ข้อความหลัก / heading |
| `--text-muted` | `#666666` | ข้อความ muted / body |
| `--orange` | `#E87A3D` | Accent หลัก (section label, heading highlight, CTA button, border) |
| `--orange-lt` | `#FFF0E6` | พื้นหลัง orange-tinted (hero badge area, offer price box, loss-aversion) |
| `--green` | `#3A9E5F` | Success / ✅ / fit-box / guarantee / final CTA button |
| `--green-lt` | `#EAF7EE` | พื้นหลัง green-tinted (fit-yes box, guarantee box) |
| `--red` | `#D94040` | Problem / ❌ icon / not-fit |
| `--red-lt` | `#FDEAEA` | พื้นหลัง red-tinted (fit-no box) |
| `--border` | `#E5DDD5` | เส้น border ทั่วไป |
| `--white` | `#FFFFFF` | Card background |

## Typography

| รายการ | ค่า |
|---|---|
| Font family | `'Sarabun', sans-serif` (ทั้ง heading + body) |
| Weights available | 300, 400, 500, 600, 700, 800 + italic 400, 700 |
| Body font-size | `17px` |
| Body line-height | `1.65` |
| H1 hero | `clamp(36px, 6vw, 58px)` weight 800, letter-spacing -1px |
| H2 section | `clamp(26px, 4vw, 34px)` weight 800, letter-spacing -0.5px |
| Section label | `13px` weight 600, uppercase, letter-spacing 0.5px, orange |

## Spacing

| รายการ | ค่า |
|---|---|
| Section padding | `80px 24px` (padding: 80px vertical, 24px horizontal) |
| Container max-width | `760px` (main), `960px` (wide — curriculum, proof) |
| Card padding | `18px 22px` (problem/curriculum) · `32px` (proof) · `28px 24px` (fit) |
| Nav height | `60px`, padding `0 40px` |

## Border Radius & Shadow

| รายการ | ค่า |
|---|---|
| `--radius` | `12px` (cards, buttons) |
| Proof card radius | `16px` |
| Pricing card radius | `16px` |
| `--shadow` | `0 2px 12px rgba(0,0,0,0.07)` |
| Pricing card shadow | `0 8px 40px rgba(232,122,61,.15)` |

## Buttons

| Class | Style |
|---|---|
| `.btn-primary` | bg `#E87A3D`, white text, padding `16px 40px`, radius 10px, shadow `0 4px 16px rgba(232,122,61,.3)` |
| `.btn-line` (offer) | bg `#E87A3D`, same as primary, full width |
| `.btn-line-green` (final CTA) | bg `#3A9E5F`, green glow shadow |
| Nav CTA | bg `#E87A3D`, padding `9px 22px`, radius 8px |

## Section Backgrounds (in order)

| Section | Background |
|---|---|
| Nav | `#FDFBF7` sticky, border-bottom `#E5DDD5` |
| Hero | `#FDFBF7` |
| Problem | `#F4EFEA` |
| Mechanism | `#FDFBF7` |
| Proof | `#F4EFEA` |
| Curriculum | `#FDFBF7` |
| Fit | `#F4EFEA` |
| Loss Aversion | `linear-gradient(135deg, #FFF0E6 0%, #FFE8DC 100%)` |
| Offer | `#FDFBF7` |
| FAQ | `#F4EFEA` |
| Final CTA | `#1A1A1A` |
| Footer | `#1A1A1A` |

## Component Styles

### Section Label
```css
font-size: 13px; font-weight: 600; color: #E87A3D;
letter-spacing: .5px; text-transform: uppercase; margin-bottom: 14px;
::before, ::after { content: '—'; margin: 0 6px; opacity: .5; }
```

### Hero Badge
```css
border: 1.5px solid #E5DDD5; border-radius: 999px; padding: 6px 16px;
font-size: 14px; color: #666666; font-weight: 500;
::before { content: '+'; color: #E87A3D; font-weight: 800; }
```

### Problem Card
```css
background: #FFFFFF; border-radius: 12px; padding: 18px 22px;
display: flex; align-items: flex-start; gap: 14px;
box-shadow: 0 2px 12px rgba(0,0,0,0.07);
.problem-icon: 32px circle, bg #D94040, white bold text
```

### Proof Card
```css
background: #FFFFFF; border-radius: 16px; padding: 32px;
box-shadow: 0 2px 12px rgba(0,0,0,0.07);
.proof-quote: border-left 3px solid #E87A3D; italic; padding-left: 16px
```

### Curriculum Row
```css
background: #FFFFFF; border-radius: 12px; padding: 18px 22px;
display: flex; align-items: center; gap: 18px;
box-shadow: 0 2px 12px rgba(0,0,0,0.07);
border-left: 4px solid transparent; hover: border-left-color #E87A3D
.curriculum-badge: bg #E87A3D, white, rounded 8px, 14px bold
```

### Fit Box
```css
Yes: background #EAF7EE; border 1.5px solid #A8D8B9; radius 12px; padding 28px 24px
No: background #FDEAEA; border 1.5px solid #F0AAAA; radius 12px; padding 28px 24px
Header: yes = green bg; no = red bg; white text; padding 10px 16px; radius 8px
```

### Pricing Card
```css
background: #FFFFFF; border: 2px solid #E87A3D; border-radius: 16px;
padding: 40px 36px; max-width 480px; box-shadow: 0 8px 40px rgba(232,122,61,.15)
```

### Offer Price Box
```css
background: #FFF0E6; border: 2px dashed #E87A3D; border-radius: 12px;
padding: 24px; text-align center;
.price-main: 48px font-size, weight 800, color #E87A3D
```

### FAQ Accordion
```css
.faq-item: border 1px solid #E5DDD5; border-radius 8px; overflow hidden
.faq-question: padding 16px; font 16px bold; bg #FDFBF7; cursor pointer
::after { content: '+'; color #E87A3D; }
.faq-item.active ::after { content: '−'; }
.faq-answer: padding 0 16px 16px; display none; .active → display block
```

### Loss Aversion
```css
background: linear-gradient(135deg, #FFF0E6 0%, #FFE8DC 100%)
.loss-aversion-item: bg #FFFFFF; border-left: 5px solid #E87A3D; radius 8px; padding 20px 24px
.loss-aversion-highlight: bg linear-gradient(135deg, #FFF0E6, #FFEBE0); border-left 5px solid #E87A3D; radius 8px; padding 24px 28px
```
