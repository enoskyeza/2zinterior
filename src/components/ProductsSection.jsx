import { ArrowRight, Star, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'

export default function ProductsSection() {
  const navigate = useNavigate()
  
  // Fetch featured products from backend
  const { products: featuredProducts, loading, error } = useProducts({
    featured: true,
    per_page: 6,
  })

  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium furniture pieces
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary-700" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && featuredProducts.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-4/3 bg-gray-200 overflow-hidden">
                    <img
                      src={product.image_url || product.images?.[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-700">
                        UGX {product.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="text-primary-700 group-hover:translate-x-1 transition-transform flex items-center hover:text-primary-800"
                      >
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/shop')}
                className="bg-primary-700 text-white px-8 py-3 rounded-lg hover:bg-primary-800 transition-all hover:shadow-lg font-semibold inline-flex items-center"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </>
        )}

        {!loading && !error && featuredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No featured products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
