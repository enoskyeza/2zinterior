import { useState, useEffect, useRef, useMemo } from 'react'
import { Plus, Search, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import DeleteDialog from './DeleteDialog'

const categories = ['All', 'Living Room', 'Dining Room', 'Bedroom', 'Office']

export default function ProductsTab({ products, loading, pagination, onFetchProducts, onAddProduct, onUpdateProduct, onDeleteProduct }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [deleteProduct, setDeleteProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [deleting, setDeleting] = useState(false)
  const initialFetchDone = useRef(false)

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery)
    }, 500) // Wait 500ms after user stops typing

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Reset to page 1 when debounced search changes (but not on initial mount)
  useEffect(() => {
    if (!initialFetchDone.current) return
    if (debouncedSearch === searchQuery) return // Only reset when debounce completes
    setCurrentPage(1)
  }, [debouncedSearch])

  // Fetch products when filters change
  useEffect(() => {
    const filters = {
      page: currentPage,
      per_page: 6,
    }
    
    // Only add category filter if not "All"
    if (selectedCategory && selectedCategory !== 'All') {
      filters.category = selectedCategory
    }
    
    // Only add search filter if there's a search query
    if (debouncedSearch && debouncedSearch.trim()) {
      filters.search = debouncedSearch
    }
    
    onFetchProducts(filters)
    initialFetchDone.current = true
  }, [currentPage, selectedCategory, debouncedSearch])

  const handleEdit = (product) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

  const handleDelete = (product) => {
    setDeleteProduct(product)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when category changes
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleFormSubmit = async (productData) => {
    let result
    if (editingProduct) {
      result = await onUpdateProduct(editingProduct.id, productData)
    } else {
      result = await onAddProduct(productData)
    }
    
    return result
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingProduct(null)
  }

  const handleDeleteConfirm = async () => {
    if (deleteProduct) {
      setDeleting(true)
      await onDeleteProduct(deleteProduct.id)
      setDeleting(false)
      setDeleteProduct(null)
    }
  }

  // Calculate display values from pagination
  const totalProducts = pagination?.total || 0
  const fromProduct = pagination?.from || 0
  const toProduct = pagination?.to || 0
  const totalPages = pagination?.last_page || 1
  const currentPageFromApi = pagination?.current_page || 1

  // Memoize pagination controls to prevent unnecessary re-renders
  const paginationNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    
    if (currentPage <= 3) {
      return Array.from({ length: 5 }, (_, i) => i + 1)
    }
    
    if (currentPage >= totalPages - 2) {
      return Array.from({ length: 5 }, (_, i) => totalPages - 4 + i)
    }
    
    return Array.from({ length: 5 }, (_, i) => currentPage - 2 + i)
  }, [currentPage, totalPages])

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
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {totalProducts > 0 && (
        <div className="text-sm text-gray-600">
          Showing {fromProduct}-{toProduct} of {totalProducts} products
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-red-600" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">No products found</p>
        </div>
      ) : (
        <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {totalPages > 1 && !loading && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button 
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} 
            disabled={currentPage === 1} 
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-1">
            {paginationNumbers.map((pageNumber) => (
              <button 
                key={pageNumber} 
                onClick={() => setCurrentPage(pageNumber)} 
                className={`px-4 py-2 rounded-lg transition-colors ${currentPageFromApi === pageNumber ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))} 
            disabled={currentPage === totalPages} 
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      <ProductForm isOpen={isFormOpen} onClose={handleFormClose} onSubmit={handleFormSubmit} editProduct={editingProduct} />

      <DeleteDialog 
        isOpen={!!deleteProduct} 
        onClose={() => setDeleteProduct(null)} 
        onConfirm={handleDeleteConfirm} 
        productName={deleteProduct?.name || ''} 
        loading={deleting}
      />
    </div>
  )
}
