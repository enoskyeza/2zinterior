import { useState } from 'react'
import { Plus, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import DeleteDialog from './DeleteDialog'

const categories = ['All', 'Living Room', 'Dining Room', 'Bedroom', 'Office']

export default function ProductsTab({ products, onAddProduct, onUpdateProduct, onDeleteProduct }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [deleteProduct, setDeleteProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  const handleEdit = (product) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

  const handleDelete = (product) => {
    setDeleteProduct(product)
  }

  const handleFormSubmit = (productData) => {
    if (editingProduct) {
      onUpdateProduct(editingProduct.id, productData)
    } else {
      onAddProduct(productData)
    }
    setIsFormOpen(false)
    setEditingProduct(null)
    setCurrentPage(1)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingProduct(null)
  }

  const handleDeleteConfirm = () => {
    if (deleteProduct) {
      onDeleteProduct(deleteProduct.id)
      setDeleteProduct(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Products</h2>
        <button onClick={() => setIsFormOpen(true)} className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          <Plus size={20} />
          <span>Add Product</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-600">
        Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
      </div>

      <ProductList products={paginatedProducts} onEdit={handleEdit} onDelete={handleDelete} />

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} disabled={currentPage === 1} className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} onClick={() => setCurrentPage(page)} className={`px-4 py-2 rounded-lg transition-colors ${currentPage === page ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}>
                {page}
              </button>
            ))}
          </div>
          <button onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      <ProductForm isOpen={isFormOpen} onClose={handleFormClose} onSubmit={handleFormSubmit} editProduct={editingProduct} />

      <DeleteDialog isOpen={!!deleteProduct} onClose={() => setDeleteProduct(null)} onConfirm={handleDeleteConfirm} productName={deleteProduct?.name || ''} />
    </div>
  )
}
