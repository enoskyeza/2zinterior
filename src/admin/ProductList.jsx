import { Edit2, Trash2 } from 'lucide-react'

export default function ProductList({ products, onEdit, onDelete }) {
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', minimumFractionDigits: 0 }).format(price)

  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded">{product.category}</span>
                  {product.featured && (
                    <span className="inline-block px-2 py-1 text-xs font-medium text-red-700 bg-red-50 rounded ml-2">Featured</span>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  <button onClick={() => onEdit(product)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => onDelete(product)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xl font-bold text-red-600">{formatPrice(product.price)}</span>
                <div className="text-sm text-gray-500">
                  {product.dimensions.width}W × {product.dimensions.height}H × {product.dimensions.depth}D cm
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
