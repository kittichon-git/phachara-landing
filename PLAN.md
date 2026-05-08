# PLAN.md — LINE-first Landing Page Rebuild
_Branch: `feat/line-first-landing` | Base: `main`_

---

## 1. Branch Strategy

```
main
└── feat/line-first-landing   ← all work here
    ├── cleanup commits (3)
    └── build commits (14)
```

- Work entirely on `feat/line-first-landing`
- Do NOT push to `main` until owner approves
- Each commit: `npm run build && npm run lint` must pass before committing
- PR to `main` after Phase 3 is complete and owner approves

---

## 2. Cleanup Commits

### C1 — `chore: remove payment/auth deps`
**Files changed:**
- `package.json` — remove `omise`, `@supabase/supabase-js`; add `framer-motion`, `posthog-js`
- Delete `pnpm-lock.yaml` (will regenerate on Vercel deploy)

### C2 — `chore: delete checkout + webhook routes, payment/db libs, test scripts`
**Delete:**
- `app/api/checkout/create/route.ts`
- `app/api/webhooks/omise/route.ts`
- `app/api/` directory (now empty)
- `lib/db/store-client.ts`
- `lib/payments/omise.ts`
- `lib/db/` directory
- `lib/payments/` directory
- `scripts/test-omise-card.ts`
- `scripts/test-omise-charge.ts`
- `scripts/` directory

### C3 — `chore: migrate legal pages to /legal/* + 301 redirects`
**Move:**
- `app/refund/page.tsx` → `app/legal/refund/page.tsx`
- `app/terms/page.tsx` → `app/legal/terms/page.tsx`
- `app/privacy/page.tsx` → `app/legal/privacy/page.tsx`
- Create `app/legal/cookie/page.tsx` (stub)

**Add redirects in `next.config.ts`:**
```ts
async redirects() {
  return [
    { source: '/refund',  destination: '/legal/refund',  permanent: true },
    { source: '/terms',   destination: '/legal/terms',   permanent: true },
    { source: '/privacy', destination: '/legal/privacy', permanent: true },
  ]
}
```

**Update:**
- `app/sitemap.ts` — replace old URLs with `/legal/*` + add `/legal/cookie`
- `components/Footer.tsx` — update legal nav links
- `app/contact/page.tsx` — update footer links

---

## 3. Build Commits

### B1 — `feat: layout shell — Noto Sans Thai Looped + Noto Serif Thai + metadata`
**Files:**
- `app/layout.tsx` — load both fonts, update metadata (new title/desc from spec), add analytics script placeholder
- `app/globals.css` — add `--font-serif` CSS var, LINE green `--line-green: #06C755`

**Fonts:**
```ts
import { Noto_Sans_Thai_Looped, Noto_Serif_Thai } from 'next/font/google'
```

### B2 — `feat: lib/constants.ts + lib/analytics.ts`
**`lib/constants.ts`** — add LINE OA vars, keep course title/price as copy values:
```ts
export const LINE = {
  link: process.env.NEXT_PUBLIC_LINE_OA_LINK ?? 'https://lin.ee/049vlbwy',
  id:   process.env.NEXT_PUBLIC_LINE_OA_ID   ?? '@049vlbwy',
} as const

export const lineUrl = (position: 'hero' | 's4' | 's9' | 'sticky' | 'contact') =>
  `${LINE.link}?utm_source=sp&utm_medium=sp_${position}`
```

**`lib/analytics.ts`** — no-op if env keys missing:
```ts
export function track(event: string, props?: Record<string, unknown>): void
// Wires PostHog, GA4 (gtag), FB Pixel, Clarity — all guarded by !!key check
// If all keys missing → silent no-op, no console noise
```

### B3 — `feat: LineCTAButton — LINE link with UTM per position`
**`components/LineCTAButton.tsx`** — reusable button component:
- Props: `position: 'hero' | 's4' | 's9' | 'sticky' | 'contact'`, `size?: 'sm' | 'md' | 'lg'`, `className?`
- Calls `track('sp_cta_click', { position })` + `track('sp_line_redirect')` on click
- LINE green `#06C755` bg, white text, LINE icon SVG

### B4 — `feat: StickyLineCTA — bottom bar reveal after 100vh`
**`components/StickyLineCTA.tsx`** — client component:
- `useEffect` + `IntersectionObserver` on hero element → hide when hero in view
- Framer Motion `AnimatePresence` + `motion.div` slide-up
- Mobile: full-width bottom bar | Desktop (md+): right floating pill
- Copy: "แอด LINE รับ 3 บทฟรี" / sub: "ไม่ต้องลงทะเบียน · อ่านได้เลย"

### B5 — `feat: S1 Hero`
**`components/Hero.tsx`** — rewrite:
- H1: Noto Serif Thai, 2 lines from spec
- Sub: 3-line copy from spec
- Primary CTA: `<LineCTAButton position="hero" size="lg" />`
- Secondary line: "ไม่ต้องสมัครสมาชิก · ไม่ขอ email · อ่านได้เลย"
- Trust strip: ⭐×5 + 200+ คน · 🛡 คืนเงิน 7 วัน · 🔒 PDPA
- Book mockup: inline SVG placeholder (TODO comment for real PNG)
- Layout: stacked mobile → 60/40 grid desktop
- Framer Motion: `fadeInUp` entrance on mount (hero text + mockup)
- Background: `from-emerald-50 via-white to-emerald-50`
- `id="hero"` for IntersectionObserver in StickyLineCTA

### B6 — `feat: S2 Pain + S3 Promise`
**`components/sections/S2Pain.tsx`:**
- Headline: "คุณเคยรู้สึกแบบนี้ไหม?"
- 3 cards: emoji + bold quote + sub from spec
- Closer paragraph

**`components/sections/S3Promise.tsx`:**
- Headline: "หลังอ่านจบ คุณจะ..."
- 5-item checklist (green checkmarks)
- Mini-CTA: inline text link → `<LineCTAButton position="s4" size="sm" />`

### B7 — `feat: S4 free preview teaser`
**`components/sections/S4Preview.tsx`:**
- LINE-green callout box (`bg-[#06C755]` or `bg-emerald-500`)
- Headline + body copy verbatim from spec
- `<LineCTAButton position="s4" size="lg" />`
- Sub-text: 3 chapter titles

### B8 — `feat: S5 author/authority`
**`components/sections/S5Author.tsx`:**
- Avatar placeholder (circle gradient + initial "พ")
- Bio paragraphs with `[X]` placeholders from spec
- Proof strip: 3 stat badges with `[N]` placeholders
- TODO comment referencing QUESTIONS.md

### B9 — `feat: S6 curriculum — 7 collapsible groups`
**`components/sections/S6Curriculum.tsx`** — Server Component:
- Import `data/curriculum.json` directly (no fetch, static)
- Group by `section` field, sort by `ch`
- 7 main groups + ภาคผนวก as special group
- Each group: native `<details><summary>` with group icon + name + chapter count
- Each chapter: `ch` number + `title` + collapsed `summary` on hover/expand
- Mini-CTA at bottom: `<LineCTAButton position="s4" size="sm" />`
- Section icons mapped from spec:
  ```ts
  const ICONS: Record<string, string> = {
    'ภาค 1': '🎯', 'ภาค 2': '📊', 'ภาค 3': '🪝',
    'ภาค 4': '🏗', 'ภาค 5': '💎', 'ภาค 6': '🎯',
    'ภาค 7': '🤖', 'ภาคผนวก': '📋',
  }
  ```

### B11 — `feat: S8 FAQ — 8 items native details`
**`components/FAQ.tsx`** — rewrite (keep filename):
- 8 Q&A from spec verbatim
- Native `<details><summary>` (no JS needed)
- Plus/minus icon toggle via CSS `group-open`
- LINE CTA at bottom: `<LineCTAButton position="s9" size="md" />`

### B12 — `feat: S9 final CTA + guarantee box`
**`components/sections/S9FinalCTA.tsx`:**
- Headline: "พร้อมเริ่มหรือยัง?"
- Recap 3 bullets
- `<LineCTAButton position="s9" size="lg" />`
- Guarantee box: shield icon + guarantee copy verbatim from spec
- Dark bg (`bg-gray-900`) for contrast

### B13 — `feat: app/page.tsx — wire S1-S9 + sticky CTA`
**`app/page.tsx`** — assemble all sections:
```tsx
<StickyLineCTA />   {/* client, always rendered */}
<Hero />            {/* S1 — id="hero" */}
<S2Pain />
<S3Promise />
<S4Preview />
<S5Author />
<S6Curriculum />
{/* S7 Testimonials — commented out until soft launch */}
{/* TODO: enable after soft launch with real testimonials */}
<FAQ />             {/* S8 */}
<S9FinalCTA />
<Footer />
```

### B14 — `feat: contact page — LINE-first redesign`
**`app/contact/page.tsx`** — simplify:
- Heading: "ติดต่อเรา"
- Primary: `<LineCTAButton position="contact" size="lg" />` + "ทักผ่าน LINE OA ตอบทุกวัน 9:00–21:00"
- Secondary: email for formal/billing inquiries (keep `BUSINESS.email`)
- Remove large company info block (move to Footer)

### B15 — `feat: SEO — sitemap, robots, metadata, next/og, manifest`
- `app/sitemap.ts` — all routes including `/legal/*`
- `app/robots.ts` — keep as-is (already correct)
- `app/layout.tsx` — title template, description, openGraph with dynamic OG URL
- `app/opengraph-image.tsx` — `next/og` ImageResponse 1200×630
- `public/manifest.json` — basic PWA manifest (name, icons, theme_color LINE green)

### B16 — `feat: analytics events — scroll depth + cta click wiring`
- Client component `components/AnalyticsProvider.tsx` mounted in layout
- `sp_view` on mount
- `sp_scroll_50` / `sp_scroll_90` via `IntersectionObserver` on sentinel divs in `app/page.tsx`
- `sp_cta_click` + `sp_line_redirect` already wired in `LineCTAButton`

### B17 (conditional) — `perf: Lighthouse fixes`
- Only created if Lighthouse mobile < 95 after B16
- Typical fixes: font-display, image lazy/eager tuning, unused CSS purge

---

## 4. Env Var Diff

### Remove
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
OMISE_PUBLIC_KEY
OMISE_SECRET_KEY
OMISE_WEBHOOK_SECRET
```

### Add
```
NEXT_PUBLIC_LINE_OA_LINK=https://lin.ee/049vlbwy
NEXT_PUBLIC_LINE_OA_ID=@049vlbwy
NEXT_PUBLIC_POSTHOG_KEY=          # empty → no-op
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
NEXT_PUBLIC_GA4_ID=               # empty → no-op
NEXT_PUBLIC_FB_PIXEL_ID=          # empty → no-op
NEXT_PUBLIC_CLARITY_ID=           # empty → no-op
```

### Keep
```
NEXT_PUBLIC_SITE_URL=https://phachara.com
```

---

## 5. Lighthouse Target

| Metric | Target | Notes |
|--------|--------|-------|
| Performance (mobile) | ≥ 95 | AVIF hero, no layout shift, minimal JS |
| Accessibility | ≥ 95 | WCAG AA, body ≥ 16px, keyboard nav |
| Best Practices | ≥ 95 | HTTPS, no console errors |
| SEO | ≥ 95 | meta, OG, sitemap, robots |
| LCP | < 2.0s | Hero image `priority` + preload |
| CLS | < 0.1 | Explicit image dimensions, no dynamic injection |
| TBT | < 200ms | Framer Motion only for hero + sticky |

---

## 6. Definition of Done Checklist

- [ ] `npm run build` clean (0 errors, 0 warnings)
- [ ] `npm run lint` clean
- [ ] All 9 sections present and rendering at 375px / 768px / 1280px
- [ ] Sticky CTA appears after 100vh, hidden in hero viewport
- [ ] All CTAs link to LINE with correct UTM
- [ ] 4 legal pages exist at `/legal/*`
- [ ] 301 redirects work: `/refund` → `/legal/refund` etc.
- [ ] `AUDIT.md`, `PLAN.md`, `QUESTIONS.md` committed
- [ ] `data/curriculum.json` committed (29 items)
- [ ] `docs/sales-page-spec.md` committed
- [ ] S7 commented out with TODO
- [ ] S5 uses placeholders + QUESTIONS.md references
- [ ] `track()` is no-op when env keys are empty
