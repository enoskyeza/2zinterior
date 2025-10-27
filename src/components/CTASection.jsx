import { ArrowRight } from 'lucide-react'

export default function CTASection({ onNavigate }) {
  return (
    <section className="py-20 bg-primary-700 text-white" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get in touch with us today for custom furniture solutions tailored to your needs
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg inline-flex items-center"
        >
          Contact Us Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
