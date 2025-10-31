import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ProductsSection from '../components/ProductsSection'
import TraditionSection from '../components/TraditionSection'
import CTASection from '../components/CTASection'

export default function LandingPage() {
  return (
    <div className="pt-16 md:pt-20">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <TraditionSection />
      <CTASection />
    </div>
  )
}
