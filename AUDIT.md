# AUDIT.md — phachara-landing (LINE-first edition)
_Generated: 2026-05-08_

---

## Summary

- Repo is a Next.js 15 App Router project (Tailwind v4, React 19, TypeScript strict) deployed on Vercel — stack is **fully compatible** with the rebuild target.
- Previous funnel was **direct checkout via Omise** (PromptPay + card): two API routes, Supabase service-role client, and a DB-backed order/enrollment system exist. All of this must be removed.
- Current landing page has **5 components** (Hero, About, Instructor, FAQ, Footer) plus a `NotifyButton` that links to `mailto:` — the entire CTA destination changes to LINE OA.
- No `public/` directory exists — all images are placeholder/emoji; OG image and hero image need to be created.
- Legal pages (`/privacy`, `/terms`, `/refund`) contain real Thai-language PDPA/policy content and are worth keeping (URL may need to move to `/legal/*`).

---

## Dependencies to remove

| Package | Reason |
|---------|--------|
| `omise` | Payment gateway — entire checkout removed |
| `@supabase/supabase-js` | Only used by `store-client.ts` for order/enrollment DB; no DB needed on landing page |

**New dependencies to add** (Phase 3):
| Package | Purpose |
|---------|---------|
| `framer-motion` | Hero entrance + sticky CTA reveal animation |
| `posthog-js` | Analytics (client-side event tracking) |

---

## Files to KEEP

| Path | Reason |
|------|--------|
| `app/globals.css` | Minimal — just `@import "tailwindcss"` + 3 CSS vars; keep as-is |
| `app/robots.ts` | Correct, no changes needed |
| `next.config.ts` | Blank config — fine for landing page |
| `tsconfig.json` | Standard Next.js 15 config — no changes |
| `vercel.json` | `{"framework":"nextjs"}` — keep |
| `.env.local.example` | Update with new LINE/analytics vars, remove Omise/Supabase |

---

## Files to REWRITE

| Path | New purpose |
|------|------------|
| `app/layout.tsx` | Update metadata (new title/desc/OG), load Noto Sans Thai Looped + Noto Serif Thai, add analytics bootstrap |
| `app/page.tsx` | Wire all 9 sections (S1–S9) + sticky LINE CTA |
| `app/sitemap.ts` | Add `/legal/refund`, `/legal/privacy`, `/legal/terms`, `/legal/cookie`; remove old paths if URLs move |
| `app/contact/page.tsx` | Simplify — remove email-only CTA, add LINE OA link as primary contact |
| `lib/constants.ts` | Add `LINE_OA_LINK`, remove payment-only fields (`COURSE.price`/`anchorPrice` stay as copy values); add analytics key stubs |
| `components/Hero.tsx` | S1 Hero — new headline/sub from spec, LINE CTA, hero image via `next/image`, no pricing box |
| `components/About.tsx` | Split: becomes S2 Pain (3 mirror cards) + S3 Promise (5 outcomes checklist) |
| `components/Instructor.tsx` | S5 Author/authority — real bio, photo placeholder, social proof numbers |
| `components/FAQ.tsx` | S8 FAQ — 8 items from spec, native `<details>`, LINE CTA at bottom |
| `components/Footer.tsx` | Add LINE link, remove payment/VAT registration mention, update legal links to `/legal/*` |
| `components/NotifyButton.tsx` | Rename → `LineCTAButton.tsx` — href becomes `NEXT_PUBLIC_LINE_OA_LINK` with UTM params |

---

## Files to DELETE

| Path | Reason |
|------|--------|
| `app/api/checkout/create/route.ts` | Entire checkout flow removed — no payment on landing page |
| `app/api/webhooks/omise/route.ts` | No payment, no webhook needed |
| `lib/db/store-client.ts` | Supabase order/enrollment DB — not needed on landing page |
| `lib/payments/omise.ts` | Omise payment wrapper — removed with checkout |
| `scripts/test-omise-card.ts` | Payment test script |
| `scripts/test-omise-charge.ts` | Payment test script |

---

## Files to CREATE

| Path | Purpose |
|------|---------|
| `lib/analytics.ts` | `track()` helper — PostHog + GA4 + FB Pixel; no-op if env keys missing |
| `components/StickyLineCTA.tsx` | Fixed bottom bar, appears after 100vh scroll, hides in hero viewport |
| `components/sections/S2Pain.tsx` | 3 mirror "pain" cards |
| `components/sections/S3Promise.tsx` | 5 outcomes checklist |
| `components/sections/S4Preview.tsx` | Free preview teaser + mid-page CTA |
| `components/sections/S6Curriculum.tsx` | 3 collapsible groups, 24 chapters from `data/curriculum.json` |
| `components/sections/S7Testimonials.tsx` | Testimonials carousel (placeholder data until real ones provided) |
| `components/sections/S9FinalCTA.tsx` | Final CTA + guarantee box |
| `data/curriculum.json` | 24-chapter curriculum data (user will paste before S6 commit) |
| `app/legal/refund/page.tsx` | Move existing refund policy (or stub if path changes) |
| `app/legal/privacy/page.tsx` | Move existing privacy policy |
| `app/legal/terms/page.tsx` | Move existing terms |
| `app/legal/cookie/page.tsx` | New cookie policy stub |
| `public/og.jpg` | OG image 1200×630 (to be designed/provided) |
| `public/hero.jpg` | Hero image (to be provided) |
| `PLAN.md` | Phase 2 output |
| `QUESTIONS.md` | Ambiguous copy items (if any) |

---

## Risks / Questions

1. **Legal page URLs**: Existing pages are at `/refund`, `/terms`, `/privacy`. Phase 3 spec says `/legal/refund`, `/legal/privacy`, `/legal/terms`, `/legal/cookie`. Moving URLs breaks existing sitemap/footer links and any external links. **Should the old URLs redirect (301) to `/legal/*`, or keep at root?**

2. **Sales Page Spec document**: The task says to use copy from "02 — Sales Page Spec" verbatim for H1, sub, all section headlines, CTAs, FAQ Q&A, guarantee box. **This document has not been pasted yet.** Phase 3 cannot start writing S1–S9 copy without it.

3. **LINE OA link (`NEXT_PUBLIC_LINE_OA_LINK`)**: The actual `https://lin.ee/<BOT_BASIC_ID>` value is not in `.env.local` yet. **What is the LINE OA link?**

4. **Analytics keys**: PostHog project key, GA4 measurement ID, FB Pixel ID are not in current env. **Are these ready, or should `track()` be wired but left as no-ops until keys are added?**

5. **Hero image**: No `public/` directory exists and no images are present. **Will a photo/illustration be provided, or should Phase 3 use a CSS gradient placeholder?**

6. **Testimonials (S7)**: Task says "placeholder data". **Are real testimonials available, or should Phase 3 ship 3–5 fabricated-looking placeholders?** (Hard rule 3 bans fake social proof — this needs clarification.)

7. **`/contact` page**: Currently links email as primary contact. With LINE-first pivot, should contact page become LINE-first too, or remain email-only for formal business inquiries?

8. **Curriculum JSON**: User will paste `data/curriculum.json` before the S6 commit. Confirmed schema: `[{ "ch": 1, "section": "ภาค 1", "title": "...", "summary": "..." }]`. **Ready to proceed once file is pasted.**
