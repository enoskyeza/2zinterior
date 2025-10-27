import { useState } from 'react'
import { Menu, X, Armchair } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-brand-accent transition-colors">
              <Armchair className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-2xl font-bold text-brand-primary">
              2Z City Interiors
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium transition-colors text-brand-dark hover:text-brand-primary"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-accent transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>

          <button
            className="md:hidden text-brand-dark hover:text-brand-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors text-brand-dark hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
