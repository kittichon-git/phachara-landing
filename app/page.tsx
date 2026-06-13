import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import S3Relevance from '@/components/sections/S3Relevance'
import S4Mechanism from '@/components/sections/S4Mechanism'
import S5Outcome from '@/components/sections/S5Outcome'
import S7Curriculum from '@/components/sections/S7Curriculum'
import S6Fit from '@/components/sections/S6Fit'
import SLossAversion from '@/components/sections/SLossAversion'
import S8Offer from '@/components/sections/S8Offer'
import S9FAQ from '@/components/sections/S9FAQ'
import S10FinalCTA from '@/components/sections/S10FinalCTA'
import Footer from '@/components/Footer'
import ClientShell from '@/components/ClientShell'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="hero">
        <Hero />
        <S3Relevance />
        <S4Mechanism />
        <S5Outcome />
        <S7Curriculum />
        <S6Fit />
        <SLossAversion />
        <S8Offer />
        <S9FAQ />
        <S10FinalCTA />
      </main>
      <Footer />
      <ClientShell />
    </>
  )
}
