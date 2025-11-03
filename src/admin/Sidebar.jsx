import { Package, ShoppingCart, Settings, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar({ activeTab, onTabChange, onLogout }) {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-200 fixed left-0 top-0 h-full">
      <div className="p-6 border-b border-gray-200">
        <Link to="/">
          <img src="/logo-dark.png" alt="2Z Interiors" className="h-8 w-auto transition-transform hover:scale-105" />
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <button
          onClick={() => onTabChange('products')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
            activeTab === 'products' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Package size={20} />
          <span className="font-medium">Products</span>
        </button>
        <button
          onClick={() => onTabChange('orders')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'orders' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ShoppingCart size={20} />
          <span className="font-medium">Orders</span>
        </button>
        <button
          onClick={() => onTabChange('settings')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mt-2 transition-colors ${
            activeTab === 'settings' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </button>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          <LogOut size={18} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
