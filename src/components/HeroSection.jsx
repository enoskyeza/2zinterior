import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const navigate = useNavigate()
  const slides = [
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1740&auto=format&fit=crop&q=80",
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 min-h-[600px] flex items-center overflow-hidden">
      {/* Slides (fading background images) */}
      {slides.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('${src}')` }}
            aria-hidden="true"
          />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Handcrafted Excellence from the Heart of{' '}
            <span className="text-primary-700">Uganda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Discover timeless furniture pieces crafted by skilled artisans using premium Ugandan materials. Each creation tells a story of tradition, quality, and authentic craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/shop')}
              className="bg-primary-700 text-white px-8 py-4 rounded-lg hover:bg-primary-800 transition-all hover:shadow-lg font-semibold text-lg flex items-center justify-center group"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-primary-700 border-2 border-primary-700 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg text-center"
            >
              Custom Orders
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              idx === current ? 'w-6 bg-primary-700' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
