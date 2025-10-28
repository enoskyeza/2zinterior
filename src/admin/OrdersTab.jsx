import { MessageCircle } from 'lucide-react'

export default function OrdersTab() {
  const whatsappNumber = '256752018782'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full">
            <MessageCircle size={48} className="text-blue-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders Management</h2>
        <p className="text-gray-600 mb-8">
          The orders management feature is currently not activated. Please contact the admin to enable this functionality for your account.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <MessageCircle size={20} />
          <span>Contact Admin on WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
