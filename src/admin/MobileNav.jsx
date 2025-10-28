import { Package, ShoppingCart, Settings, LogOut } from 'lucide-react'

export default function MobileNav({ activeTab, onTabChange, onLogout }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
      <div className="grid grid-cols-3">
        <button
          onClick={() => onTabChange('products')}
          className={`flex-1 flex flex-col items-center py-3 ${activeTab === 'products' ? 'text-red-600' : 'text-gray-600'}`}
        >
          <Package size={24} />
          <span className="text-xs mt-1">Products</span>
        </button>
        <button
          onClick={() => onTabChange('orders')}
          className={`flex-1 flex flex-col items-center py-3 ${activeTab === 'orders' ? 'text-red-600' : 'text-gray-600'}`}
        >
          <ShoppingCart size={24} />
          <span className="text-xs mt-1">Orders</span>
        </button>
        <div className="flex">
          <button
            onClick={() => onTabChange('settings')}
            className={`flex-1 flex flex-col items-center py-3 ${activeTab === 'settings' ? 'text-red-600' : 'text-gray-600'}`}
          >
            <Settings size={24} />
            <span className="text-xs mt-1">Settings</span>
          </button>
          <button
            onClick={onLogout}
            className="flex-1 flex flex-col items-center py-3 text-gray-600"
          >
            <LogOut size={24} />
            <span className="text-xs mt-1">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
