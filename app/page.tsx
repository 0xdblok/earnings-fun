import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { MarketTicker } from "@/components/landing/market-ticker"
import { FeaturedMarkets } from "@/components/landing/featured-markets"
import { HowItWorks } from "@/components/landing/how-it-works"
import { ReputationSystem } from "@/components/landing/reputation-system"
import { SocialForecasting } from "@/components/landing/social-forecasting"
import { Competitions } from "@/components/landing/competitions"
import { CategoryExplorer } from "@/components/landing/category-explorer"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarketTicker />
        <FeaturedMarkets />
        <HowItWorks />
        <ReputationSystem />
        <SocialForecasting />
        <Competitions />
        <CategoryExplorer />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
