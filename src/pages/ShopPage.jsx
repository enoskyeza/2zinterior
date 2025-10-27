import { useState } from 'react'
import { sampleProducts } from '../data/sampleProducts'
import { ShoppingCart } from 'lucide-react'

export default function ShopPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Living Room', 'Dining Room', 'Bedroom', 'Office']

  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-brand-hero bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-28">
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">
            Our Shop
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Explore our collection of handcrafted furniture. Each piece is made with 
            premium materials and exceptional craftsmanship.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-sm text-brand-primary font-medium mb-2">
                    {product.category}
                  </div>
                  <button
                    onClick={() => onNavigate('product-detail', product.id)}
                    className="font-bold text-xl text-brand-dark mb-2 hover:text-brand-primary transition-colors text-left w-full"
                  >
                    {product.name}
                  </button>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-brand-dark">
                      {formatPrice(product.price)}
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-accent transition-colors font-medium flex items-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Order
                    </button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Dimensions:</span> {product.dimensions.width}cm x {product.dimensions.depth}cm x {product.dimensions.height}cm
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">
            Need a Custom Design?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We specialize in creating custom furniture tailored to your exact specifications. 
            Let's bring your vision to life.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block bg-brand-accent text-white px-8 py-4 rounded-lg hover:bg-brand-primary transition-colors font-semibold text-lg"
          >
            Contact Us for Custom Orders
          </button>
        </div>
      </section>
    </div>
  )
}
