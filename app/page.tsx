import Hero from '@/components/Hero'
import S2Pain from '@/components/sections/S2Pain'
import S3Promise from '@/components/sections/S3Promise'
import S4Preview from '@/components/sections/S4Preview'
import S5Author from '@/components/sections/S5Author'
import S6Curriculum from '@/components/sections/S6Curriculum'
import FAQ from '@/components/FAQ'
import S9FinalCTA from '@/components/sections/S9FinalCTA'
import Footer from '@/components/Footer'
import StickyLineCTA from '@/components/StickyLineCTA'
import AnalyticsInit from '@/components/AnalyticsInit'

// S7 Testimonials — commented out until soft launch with real testimonials
// {/* TODO: enable after soft launch with real testimonials — ห้ามใช้ fake/stock */}
// {/* <TestimonialsSection /> */}

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <S2Pain />
        <S3Promise />
        <S4Preview />
        <S5Author />
        <S6Curriculum />
        <FAQ />
        <S9FinalCTA />
      </main>
      <Footer />
      <StickyLineCTA />
      <AnalyticsInit />
    </>
  )
}
