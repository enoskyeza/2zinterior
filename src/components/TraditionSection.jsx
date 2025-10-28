export default function TraditionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rooted in Ugandan Tradition
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At 2Z City Interiors, we celebrate the rich heritage of Ugandan craftsmanship. Our artisans use time-honored techniques passed down through generations, combined with contemporary design sensibilities to create furniture that's both timeless and modern.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every piece is crafted from sustainably sourced materials, including premium Ugandan hardwoods like Mahogany and Mvule. We take pride in supporting local communities and preserving traditional woodworking skills.
            </p>
            <a
              href="#contact"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg hover:bg-primary-800 transition-all font-semibold inline-block"
            >
              Learn More About Us
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden mt-8">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
