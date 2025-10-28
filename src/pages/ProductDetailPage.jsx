import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProduct, useProducts } from '../hooks/useProducts'
import { ArrowLeft, Check, Package, Ruler, Star, Shield, Loader2 } from 'lucide-react'

export default function ProductDetailPage() {
  const { id: productId } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)

  // Fetch product by ID
  const { product, loading: productLoading, error: productError } = useProduct(productId)

  // Fetch related products from the same category
  const { products: relatedProducts } = useProducts({
    category: product?.category,
    per_page: 4,
  })

  // Filter out current product from related products
  const filteredRelatedProducts = relatedProducts.filter(p => p.id !== productId)

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImage(0)
  }, [productId])

  if (productLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-brand-primary" />
      </div>
    )
  }

  if (productError || !product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">
            {productError || "The product you're looking for doesn't exist."}
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-accent transition-colors"
          >
            Browse All Products
          </button>
        </div>
      </div>
    )
  }

  // Handle product images
  const productImages = product.images || (product.image_url ? [product.image_url] : [])

  return (
    <div className="pt-16 md:pt-20">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-brand-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-brand-primary shadow-md'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
                  </div>
                </div>
                <h1 className="font-bold text-4xl md:text-5xl text-brand-dark mt-4">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-brand-primary">
                  UGX {product.price.toLocaleString()}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-lg text-brand-dark mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.materials && product.dimensions && (
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-lg text-brand-dark mb-4">Product Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Package className="h-5 w-5 text-brand-primary mr-3 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-brand-dark">Materials:</span>
                        <span className="text-gray-600 ml-2">{product.materials}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Ruler className="h-5 w-5 text-brand-primary mr-3 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-brand-dark">Dimensions:</span>
                        <span className="text-gray-600 ml-2">
                          W: {product.dimensions.width}cm × H: {product.dimensions.height}cm × D: {product.dimensions.depth}cm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-lg p-4">
                <div className="flex items-center text-brand-dark mb-2">
                  <Shield className="h-5 w-5 mr-2 text-brand-accent" />
                  <span className="font-semibold">Made in Uganda</span>
                </div>
                <p className="text-sm text-gray-700">
                  Handcrafted by skilled Ugandan artisans using premium local materials and traditional techniques.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-brand-primary text-white px-8 py-4 rounded-lg hover:bg-brand-accent transition-all hover:shadow-lg font-semibold text-lg"
                >
                  Contact for Order
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-white text-brand-primary border-2 border-brand-primary px-8 py-4 rounded-lg hover:bg-brand-primary/5 transition-all font-semibold text-lg"
                >
                  Request Custom Design
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-lg text-brand-dark mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    'Premium quality Ugandan hardwood',
                    'Handcrafted with attention to detail',
                    'Sustainable and eco-friendly materials',
                    'Free delivery within Kampala',
                    'Custom sizes and finishes available',
                    'Expert craftsmanship guaranteed',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <Check className="h-5 w-5 text-brand-primary mr-3 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {filteredRelatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl md:text-4xl text-brand-dark mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredRelatedProducts.slice(0, 3).map((relatedProduct) => (
                <button
                  key={relatedProduct.id}
                  onClick={() => {
                    navigate(`/product/${relatedProduct.id}`)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-left"
                >
                  <div className="aspect-4/3 bg-gray-200 overflow-hidden">
                    <img
                      src={relatedProduct.image_url || relatedProduct.images?.[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                      {relatedProduct.category}
                    </span>
                    <h3 className="font-bold text-xl text-brand-dark mt-3 mb-2 group-hover:text-brand-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold text-brand-primary">
                        UGX {relatedProduct.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
