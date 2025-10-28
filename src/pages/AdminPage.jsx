import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import Sidebar from '../admin/Sidebar'
import MobileNav from '../admin/MobileNav'
import ProductsTab from '../admin/ProductsTab'
import OrdersTab from '../admin/OrdersTab'
import SettingsTab from '../admin/SettingsTab'
import { sampleProducts } from '../data/sampleProducts'

export default function AdminPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('products')
  const [products, setProducts] = useState(sampleProducts)
  const [user, setUser] = useState({ name: 'Admin User', email: 'admin@example.com' })

  const handleAddProduct = (productData) => {
    const newProduct = { ...productData, id: Date.now().toString() }
    setProducts([newProduct, ...products])
    toast.success('Product added successfully')
  }

  const handleUpdateProduct = (id, productData) => {
    setProducts(products.map((p) => (p.id === id ? { ...productData, id } : p)))
    toast.success('Product updated successfully')
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id))
    toast.success('Product deleted successfully')
  }

  const handleLogout = () => {
    toast.success('Logged out')
    if (onNavigate) onNavigate('login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" richColors />

      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout} />

      <div className="lg:pl-64 pb-20 lg:pb-0">
        <header className="bg-white border-b border-gray-200 px-4 py-4 lg:px-8 lg:py-6">
          <div className="lg:hidden">
            <img src="/logo-dark.png" alt="2Z Interiors" className="h-8 w-auto" />
          </div>
        </header>

        <main className="px-4 py-6 lg:px-8 lg:py-8">
          {activeTab === 'products' ? (
            <ProductsTab
              products={products}
              onAddProduct={handleAddProduct}
              onUpdateProduct={handleUpdateProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          ) : activeTab === 'orders' ? (
            <OrdersTab />
          ) : (
            <SettingsTab user={user} onUpdateUser={setUser} onLogout={handleLogout} />
          )}
        </main>
      </div>

      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout} />
    </div>
  )
}
