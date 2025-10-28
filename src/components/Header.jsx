import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'
import { Menu, X, User, LogOut } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuth()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const isActivePath = (path) => {
    return location.pathname === path
  }

  const handleLogout = async () => {
    await logout()
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo-dark.png"
              alt="2Z City Interiors logo"
              className="h-12 w-auto"
              height="48"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-brand-primary' 
                    : 'text-brand-dark hover:text-brand-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/admin"
                  className={`flex items-center gap-2 rounded-full px-3 py-2 transition-colors ${
                    isActivePath('/admin')
                      ? 'text-brand-primary bg-brand-primary/10'
                      : 'text-brand-dark hover:text-brand-primary hover:bg-gray-100'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-brand-dark hover:text-red-600 transition-colors"
                  aria-label="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                aria-label="Login"
                className={`rounded-full p-2 transition-colors ${
                  isActivePath('/login')
                    ? 'text-brand-primary bg-brand-primary/10'
                    : 'text-brand-dark hover:text-brand-primary hover:bg-gray-100'
                }`}
              >
                <User className="h-5 w-5" />
              </Link>
            )}
            
            <Link
              to="/contact"
              className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-accent transition-colors font-medium"
            >
              Get in Touch
            </Link>
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
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'text-brand-dark hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActivePath('/admin')
                      ? 'bg-brand-primary/10 text-brand-primary'
                      : 'text-brand-dark hover:bg-gray-100'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActivePath('/login')
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'text-brand-dark hover:bg-gray-100'
                }`}
              >
                Login
              </Link>
            )}
            
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent transition-colors font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
