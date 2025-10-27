import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import { MessageCircle } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LandingPage />
      <Footer />
      
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
