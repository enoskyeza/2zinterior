import { X } from 'lucide-react'

export default function DeleteDialog({ isOpen, onClose, onConfirm, productName, loading }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Delete Product</h2>
          <button onClick={onClose} disabled={loading} className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-700">
            Are you sure you want to delete <strong>{productName}</strong>? This action cannot be undone.
          </p>
        </div>
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button 
            onClick={onClose} 
            disabled={loading}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            disabled={loading}
            className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}
