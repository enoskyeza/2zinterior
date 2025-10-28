import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ProductsSection from '../components/ProductsSection'
import TraditionSection from '../components/TraditionSection'
import CTASection from '../components/CTASection'

export default function LandingPage({ onNavigate }) {
  return (
    <div className="pt-16 md:pt-20">
      <HeroSection onNavigate={onNavigate} />
      <FeaturesSection />
      <ProductsSection onNavigate={onNavigate} />
      <TraditionSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  )
}
