# Tracking Inventory — phachara-landing

> สร้างโดย STEP 1 audit ก่อน build หน้าใหม่
> **ห้ามเปลี่ยน ID ห้ามลบ event ใดๆ ในรายการนี้**

---

## 1. Google Analytics 4 (GA4)

| รายการ | ค่า |
|---|---|
| Measurement ID | `G-F4471H5WVN` |
| Env var | `NEXT_PUBLIC_GA4_ID` |
| วิธีวาง | inline `<script>` ใน `app/layout.tsx` (head) |
| Component | `components/analytics/GoogleAnalytics.tsx` |

**Events ที่ยิง:**

| Event name | ที่ยิง | หมายเหตุ |
|---|---|---|
| `LineAddIntent` | `lib/analytics.ts → trackCtaClick()` | ทุกปุ่ม CTA |
| `line_add` | `lib/track.ts → trackSpEvent()` | tiktok bridge |
| `generate_lead` | `lib/track.ts → trackSpEvent()` | tiktok bridge |
| `view_tiktok_bridge` | `app/tiktok/TikTokBridgeContent.tsx` | on mount |
| `view_line_qr` | `app/tiktok/TikTokBridgeContent.tsx` | IntersectionObserver 50% |
| `copy_line_id` | `app/tiktok/TikTokBridgeContent.tsx` | คลิกก๊อป LINE ID |
| `click_open_line` | `app/tiktok/TikTokBridgeContent.tsx` | คลิก direct LINE link |
| `LineAddIntent` | `app/tiktok/TikTokBridgeCta.tsx` | CTA ใน bridge |

---

## 2. Meta Pixel

| รายการ | ค่า |
|---|---|
| Pixel ID | `1693255701962812` |
| Env var | `NEXT_PUBLIC_META_PIXEL_ID` |
| วิธีวาง | `<noscript>` + `<Script>` ใน `components/analytics/MetaPixel.tsx` |
| โหลดใน | `app/layout.tsx` (body) |

**Events ที่ยิง:**

| Event | ที่ยิง |
|---|---|
| `LINE_ADD` (Custom) | `lib/analytics.ts → trackCtaClick()` → `fbqEvent()` |

---

## 3. TikTok Pixel

| รายการ | ค่า |
|---|---|
| Pixel ID | `D8K4OAJC77UFK9KE2UU0` |
| Env var | `NEXT_PUBLIC_TIKTOK_PIXEL_ID` |
| วิธีวาง | `components/analytics/TikTokPixel.tsx` |
| โหลดใน | `app/layout.tsx` (body) + `app/tiktok/page.tsx` (page-specific) |

**Events ที่ยิง:**

| Event | ที่ยิง | เงื่อนไข |
|---|---|---|
| `ClickButton` | `lib/analytics.ts → trackCtaClick()` | ทุกปุ่ม CTA หลัก |
| `ClickButton` | `app/tiktok/TikTokBridgeContent.tsx` | once per session (sessionStorage guard) |
| `ClickButton` | `app/tiktok/TikTokBridgeCta.tsx` | ทุกครั้งที่คลิก CTA ใน bridge |

**TikTok Attribution:**
- `ttclid` รับจาก URL param → เก็บใน `localStorage['tt_attribution']` (ครั้งแรกเท่านั้น)
- ใช้ sessionStorage key `ttq_cb_fired` guard ไม่ให้ ClickButton ยิงซ้ำใน session เดียวกัน

---

## 4. Microsoft Clarity

| รายการ | ค่า |
|---|---|
| Project ID | `wtacot6wz5` |
| Env var | `NEXT_PUBLIC_CLARITY_PROJECT_ID` |
| วิธีวาง | `components/analytics/MicrosoftClarity.tsx` |
| โหลดใน | `app/layout.tsx` (body) |

**Events ที่ยิง:**
- `trackSpEvent()` ใน `lib/track.ts` จะ call `window.clarity("event", eventName)` สำหรับทุก sp event

---

## 5. Google Tag Manager

ไม่มี GTM ใน project นี้

---

## 6. PostHog

| รายการ | ค่า |
|---|---|
| Env var | `NEXT_PUBLIC_POSTHOG_KEY` |
| Component | `components/AnalyticsInit.tsx` → โหลดผ่าน `components/ClientShell.tsx` |

**Events ที่ยิง:**

| Event | ที่ยิง |
|---|---|
| `sp_view` | pageview |
| `sp_scroll_50` / `sp_scroll_90` | scroll depth |
| `sp_cta_click` | ทุกปุ่ม CTA |
| `sp_line_redirect` | ก่อน redirect ไป LINE |

---

## 7. LINE Attribution

| รายการ | ค่า |
|---|---|
| LINE OA (หน้าหลัก) | `https://lin.ee/oMmZLf7Z` |
| LINE OA (tiktok bridge) | `https://line.me/R/oaMessage/%40049vlbwy/?อ่านฟรีจาก%20TikTok` |
| LINE ID | `@phachara` |
| UTM pattern | `utm_source=sp&utm_medium=sp_{position}` |

---

## 8. ENV vars ที่ต้องมีใน `.env.local`

```env
NEXT_PUBLIC_GA4_ID=G-F4471H5WVN
NEXT_PUBLIC_CLARITY_PROJECT_ID=wtacot6wz5
NEXT_PUBLIC_META_PIXEL_ID=1693255701962812
NEXT_PUBLIC_TIKTOK_PIXEL_ID=D8K4OAJC77UFK9KE2UU0
```

> **หมายเหตุ:** ไฟล์ `.env.local` อยู่ใน `.gitignore` ไม่ถูก commit ขึ้น repo
