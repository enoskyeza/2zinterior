import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Handcrafted Excellence from the Heart of{' '}
            <span className="text-primary-700">Uganda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Discover timeless furniture pieces crafted by skilled artisans using premium Ugandan materials. Each creation tells a story of tradition, quality, and authentic craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg hover:bg-primary-800 transition-all hover:shadow-lg font-semibold text-lg flex items-center justify-center group"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-white text-primary-700 border-2 border-primary-700 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg text-center"
            >
              Custom Orders
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
