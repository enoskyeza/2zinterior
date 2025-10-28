import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.jsx'
import ProtectedRoute from './components/ProtectedRoute'
import GuestRoute from './components/GuestRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import { MessageCircle } from 'lucide-react'

function AppContent() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen bg-white">
      {!isAdminRoute && <Header />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        
        <Route 
          path="/login" 
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          } 
        />
        
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
      
      {!isAdminRoute && <Footer />}
      
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

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
