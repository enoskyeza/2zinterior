import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'

export default function Header({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Shop', page: 'shop' },
    { name: 'Contact Us', page: 'contact' },
  ]

  const handleNavClick = (page) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-3">
            <img
              src="/logo-dark.png"
              alt="2Z City Interiors logo"
              className="h-12 w-auto"
              height="48"
            />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-base font-medium transition-colors ${
                  currentPage === item.page 
                    ? 'text-brand-primary' 
                    : 'text-brand-dark hover:text-brand-primary'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('login')}
              aria-label="Account"
              className={`rounded-full p-2 transition-colors ${
                currentPage === 'login'
                  ? 'text-brand-primary bg-brand-primary/10'
                  : 'text-brand-dark hover:text-brand-primary hover:bg-gray-100'
              }`}
            >
              <User className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-accent transition-colors font-medium"
            >
              Get in Touch
            </button>
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
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'text-brand-dark hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('login')}
              className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'login'
                  ? 'bg-brand-primary/10 text-brand-primary'
                  : 'text-brand-dark hover:bg-gray-100'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent transition-colors font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
