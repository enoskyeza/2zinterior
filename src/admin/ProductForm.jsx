import { useState, useEffect } from 'react'
import { X, AlertCircle } from 'lucide-react'
import ImageUpload from './ImageUpload'

const categories = ['Living Room', 'Dining Room', 'Bedroom', 'Office']

export default function ProductForm({ isOpen, onClose, onSubmit, editProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: categories[0],
    images: [],
    materials: '',
    width: '',
    height: '',
    depth: '',
    featured: false,
    status: 'active',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  useEffect(() => {
    if (editProduct) {
      setFormData({
        name: editProduct.name,
        description: editProduct.description,
        price: editProduct.price.toString(),
        category: editProduct.category,
        images: editProduct.images || [],
        materials: editProduct.materials || '',
        width: editProduct.dimensions?.width?.toString() || '',
        height: editProduct.dimensions?.height?.toString() || '',
        depth: editProduct.dimensions?.depth?.toString() || '',
        featured: editProduct.featured || false,
        status: editProduct.status || 'active',
      })
    } else {
      setFormData({
        name: '',
        description: '',
        price: '',
        category: categories[0],
        images: [],
        materials: '',
        width: '',
        height: '',
        depth: '',
        featured: false,
        status: 'active',
      })
    }
    // Reset errors when form opens/closes or product changes
    setError('')
    setFieldErrors({})
  }, [editProduct, isOpen])

  const safeParseFloat = (value) => {
    if (value === '' || value === null || value === undefined) return null
    const parsed = parseFloat(value)
    return Number.isNaN(parsed) ? null : parsed
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setFieldErrors({})

    const validationErrors = {}

    if (!formData.name.trim()) {
      validationErrors.name = ['Product name is required.']
    }

    if (!formData.description.trim()) {
      validationErrors.description = ['Description is required.']
    }

    const priceValue = parseFloat(formData.price)
    if (Number.isNaN(priceValue) || priceValue <= 0) {
      validationErrors.price = ['Please enter a valid price.']
    }

    if (!formData.category) {
      validationErrors.category = ['Category is required.']
    }

    if (formData.images.length === 0) {
      validationErrors.images = ['Please upload at least one product image.']
    }

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors)
      setError('Please correct the highlighted fields.')
      return
    }

    setLoading(true)

    const productData = {
      name: formData.name.trim(),
      description: formData.description.trim(),
      price: priceValue,
      category: formData.category,
      images: formData.images,
      materials: formData.materials.trim() || null,
      dimensions: {
        width: safeParseFloat(formData.width),
        height: safeParseFloat(formData.height),
        depth: safeParseFloat(formData.depth),
      },
      featured: formData.featured,
      status: formData.status,
    }

    // Call the onSubmit prop passed from parent
    const result = await onSubmit(productData)

    setLoading(false)

    if (result?.success) {
      // Close form on success
      onClose()
    } else {
      // Handle errors
      setError(result?.message || 'Failed to save product. Please try again.')
      if (result?.errors) {
        setFieldErrors(result.errors)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full my-8">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
          <h2 className="text-xl font-bold text-gray-900">{editProduct ? 'Edit Product' : 'Add New Product'}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                fieldErrors.name ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            {fieldErrors.name && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.name[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea 
              rows={4} 
              required 
              value={formData.description} 
              onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                fieldErrors.description ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            {fieldErrors.description && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.description[0]}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (UGX) <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                required 
                min="0"
                step="0.01"
                value={formData.price} 
                onChange={(e) => setFormData({ ...formData, price: e.target.value })} 
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  fieldErrors.price ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {fieldErrors.price && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.price[0]}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select 
                value={formData.category} 
                required
                onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  fieldErrors.category ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {fieldErrors.category && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.category[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Materials <span className="text-xs text-gray-500">(Optional)</span>
            </label>
            <input 
              type="text" 
              value={formData.materials} 
              onChange={(e) => setFormData({ ...formData, materials: e.target.value })} 
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                fieldErrors.materials ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="e.g., Mahogany wood, leather"
            />
            {fieldErrors.materials && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.materials[0]}</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Width (cm) <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <input 
                type="number" 
                min="0"
                step="0.1"
                value={formData.width} 
                onChange={(e) => setFormData({ ...formData, width: e.target.value })} 
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  fieldErrors['dimensions.width'] ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {fieldErrors['dimensions.width'] && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors['dimensions.width'][0]}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Height (cm) <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <input 
                type="number" 
                min="0"
                step="0.1"
                value={formData.height} 
                onChange={(e) => setFormData({ ...formData, height: e.target.value })} 
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  fieldErrors['dimensions.height'] ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {fieldErrors['dimensions.height'] && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors['dimensions.height'][0]}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Depth (cm) <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <input 
                type="number" 
                min="0"
                step="0.1"
                value={formData.depth} 
                onChange={(e) => setFormData({ ...formData, depth: e.target.value })} 
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                  fieldErrors['dimensions.depth'] ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {fieldErrors['dimensions.depth'] && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors['dimensions.depth'][0]}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Images <span className="text-red-500">*</span>
            </label>
            <ImageUpload 
              images={formData.images} 
              onChange={(images) => setFormData({ ...formData, images })} 
              maxImages={5} 
              maxSizeMB={4} 
            />
            {fieldErrors.images && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.images[0]}</p>
            )}
          </div>

          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="featured" 
              checked={formData.featured} 
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} 
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" 
            />
            <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
              Featured Product
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button 
              type="button" 
              onClick={onClose} 
              disabled={loading}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : editProduct ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
