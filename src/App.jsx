import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import { sampleProducts } from './data/sampleProducts'
import { MessageCircle } from 'lucide-react'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [NAV_STACK, setNavStack] = useState([])

  const handleNavigate = (page, productId) => {
    setNavStack(prev => [...prev, { page: currentPage, productId: selectedProductId }])
    setCurrentPage(page)
    if (typeof productId !== 'undefined') {
      setSelectedProductId(productId)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setNavStack(prev => {
      if (prev.length === 0) {
        setCurrentPage('home')
        setSelectedProductId(null)
        return prev
      }
      const last = prev[prev.length - 1]
      setCurrentPage(last.page)
      setSelectedProductId(last.productId || null)
      return prev.slice(0, -1)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const selectedProduct = selectedProductId
    ? sampleProducts.find(p => p.id === selectedProductId) || null
    : null

  const relatedProducts = selectedProduct
    ? sampleProducts.filter(p => p.category === selectedProduct.category && p.id !== selectedProduct.id)
    : []

  return (
    <div className="min-h-screen bg-white">
      {currentPage !== 'admin' && (
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'shop' && <ShopPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'admin' && <AdminPage onNavigate={handleNavigate} />}
      {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
      {currentPage === 'product-detail' && (
        <ProductDetailPage
          onNavigate={handleNavigate}
          onBack={handleBack}
          product={selectedProduct}
          relatedProducts={relatedProducts}
        />
      )}
      
      {currentPage !== 'admin' && <Footer onNavigate={handleNavigate} />}
      
      <a
        href="https://wa.me/256758794396"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}

export default App
