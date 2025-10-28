import { useState } from 'react'
import { Upload, X, Link as LinkIcon } from 'lucide-react'
import { toast } from 'sonner'

export default function ImageUpload({ images, onChange, maxImages = 5, maxSizeMB = 4 }) {
  const [uploadMode, setUploadMode] = useState('upload')
  const [urlInput, setUrlInput] = useState('')

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || [])

    if (images.length + files.length > maxImages) {
      toast.error(`Maximum ${maxImages} images allowed`)
      return
    }

    files.forEach((file) => {
      if (file.size > maxSizeMB * 1024 * 1024) {
        toast.error(`${file.name} is larger than ${maxSizeMB}MB`)
        return
      }
      if (!file.type.startsWith('image/')) {
        toast.error(`${file.name} is not an image file`)
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result
        onChange([...images, base64String])
      }
      reader.readAsDataURL(file)
    })

    e.target.value = ''
  }

  const handleUrlAdd = () => {
    if (!urlInput.trim()) return
    if (images.length >= maxImages) {
      toast.error(`Maximum ${maxImages} images allowed`)
      return
    }
    try {
      new URL(urlInput)
      onChange([...images, urlInput])
      setUrlInput('')
    } catch {
      toast.error('Please enter a valid URL')
    }
  }

  const handleRemoveImage = (index) => {
    onChange(images.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setUploadMode('upload')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${uploadMode === 'upload' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <Upload size={16} />
          <span>Upload</span>
        </button>
        <button
          type="button"
          onClick={() => setUploadMode('url')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${uploadMode === 'url' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <LinkIcon size={16} />
          <span>URL</span>
        </button>
      </div>

      {uploadMode === 'upload' ? (
        <div>
          <label className="block">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition-colors cursor-pointer">
              <Upload className="mx-auto mb-2 text-gray-400" size={32} />
              <p className="text-sm text-gray-600 mb-1">Click to upload images or drag and drop</p>
              <p className="text-xs text-gray-500">Max {maxImages} images, up to {maxSizeMB}MB each</p>
            </div>
            <input type="file" accept="image/*" multiple onChange={handleFileUpload} className="hidden" disabled={images.length >= maxImages} />
          </label>
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="url"
            placeholder="Enter image URL"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleUrlAdd())}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          <button type="button" onClick={handleUrlAdd} disabled={images.length >= maxImages} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Add
          </button>
        </div>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img src={image} alt={`Product ${index + 1}`} className="w-full h-32 object-cover rounded-lg border border-gray-200" />
              <button type="button" onClick={() => handleRemoveImage(index)} className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <X size={16} />
              </button>
              <div className="absolute bottom-2 left-2 px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded">{index + 1}</div>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-gray-500">{images.length} of {maxImages} images uploaded</p>
    </div>
  )
}
