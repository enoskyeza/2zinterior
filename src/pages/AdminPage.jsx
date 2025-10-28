import { useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner'
import { useAuth } from '../hooks/useAuth.jsx'
import { useAdminProducts } from '../hooks/useProducts.jsx'
import Sidebar from '../admin/Sidebar'
import MobileNav from '../admin/MobileNav'
import ProductsTab from '../admin/ProductsTab'
import OrdersTab from '../admin/OrdersTab'
import SettingsTab from '../admin/SettingsTab'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('products')
  const { user, logout: authLogout } = useAuth()
  const { 
    products, 
    loading, 
    fetchProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct 
  } = useAdminProducts()
  const [pagination, setPagination] = useState(null)

  const loadProducts = async (filters = {}) => {
    const result = await fetchProducts(filters)
    if (result.success && result.pagination) {
      setPagination(result.pagination)
    }
    return result
  }

  const handleAddProduct = async (productData) => {
    const result = await createProduct(productData)
    
    if (result.success) {
      toast.success('Product added successfully')
      // Refresh with default filters to show the new product
      await loadProducts({ page: 1, per_page: 6 })
    } else {
      toast.error(result.message || 'Failed to add product')
    }
    
    return result
  }

  const handleUpdateProduct = async (id, productData) => {
    const result = await updateProduct(id, productData)
    
    if (result.success) {
      toast.success('Product updated successfully')
      // Refresh with default filters
      await loadProducts({ page: 1, per_page: 6 })
    } else {
      toast.error(result.message || 'Failed to update product')
    }
    
    return result
  }

  const handleDeleteProduct = async (id) => {
    const result = await deleteProduct(id)
    
    if (result.success) {
      toast.success('Product deleted successfully')
      // Refresh with default filters
      await loadProducts({ page: 1, per_page: 6 })
    } else {
      toast.error(result.message || 'Failed to delete product')
    }
    
    return result
  }

  const handleLogout = async () => {
    await authLogout()
    toast.success('Logged out successfully')
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
              loading={loading}
              pagination={pagination}
              onFetchProducts={loadProducts}
              onAddProduct={handleAddProduct}
              onUpdateProduct={handleUpdateProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          ) : activeTab === 'orders' ? (
            <OrdersTab />
          ) : (
            <SettingsTab user={user} onLogout={handleLogout} />
          )}
        </main>
      </div>

      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout} />
    </div>
  )
}
