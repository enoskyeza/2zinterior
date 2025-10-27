import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">2Z City Interiors</h3>
            <p className="text-sm leading-relaxed text-white/80">
              Handcrafting premium furniture with authentic Ugandan craftsmanship. Each piece tells a story of tradition and excellence.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block">Gayaza Town</span>
                  <span className="block text-white/60">Gayaza, Wakiso</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block">Maganjo Bombo Rd.</span>
                  <span className="block text-white/60">Opp Kabs Hotel</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span>+256 758 794396</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <span>wilberwilliamz.ww@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="text-white/80 hover:text-brand-accent transition-colors">Our Products</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-brand-accent transition-colors">Custom Orders</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-brand-accent transition-colors">Delivery Info</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg">Follow Us</h4>
            <p className="text-sm text-white/80">Stay connected for latest designs and updates</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/2zinteriors" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-brand-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/2zinteriors" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-brand-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/2zinteriors" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-brand-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 2Z City Interiors. All rights reserved. Handcrafted in Uganda.</p>
        </div>
      </div>
    </footer>
  )
}
