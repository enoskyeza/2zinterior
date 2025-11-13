import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ProductsSection from '../components/ProductsSection'
import TraditionSection from '../components/TraditionSection'
import CTASection from '../components/CTASection'
import OffersSection from '../components/offers/OffersSection'

export default function LandingPage() {
  return (
    <div className="pt-16 md:pt-20">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <OffersSection />
      <TraditionSection />
      <CTASection />
    </div>
  )
}
