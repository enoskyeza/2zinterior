import { Users, Award, Heart, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-brand-hero bg-cover bg-bottom bg-fixed">
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 mix-blend-multiply"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-28">
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">
            About 2Z City Interiors
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Crafting exceptional furniture with authentic Ugandan craftsmanship. 
            Each piece tells a story of tradition, quality, and excellence.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-4xl text-brand-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded with a passion for exceptional craftsmanship, 2Z City Interiors has become 
                  a trusted name in premium furniture manufacturing in Uganda. We blend traditional 
                  woodworking techniques with modern design aesthetics to create pieces that stand 
                  the test of time.
                </p>
                <p>
                  Every piece of furniture we create is handcrafted by skilled artisans who have 
                  honed their craft over years of dedication. We take pride in using high-quality 
                  materials and paying attention to every detail, ensuring that each item we produce 
                  meets the highest standards of quality and durability.
                </p>
                <p>
                  From elegant dining sets to comfortable living room furniture, our collection 
                  reflects our commitment to excellence and our deep respect for the art of 
                  furniture making.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop" 
                alt="Craftsmanship" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=600&h=600&fit=crop" 
                alt="Workshop" 
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-4xl text-brand-dark mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-brand-dark mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every piece is crafted with premium materials 
                and meticulous attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-brand-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-brand-dark mb-3">Skilled Artisans</h3>
              <p className="text-gray-600">
                Our team of experienced craftsmen brings years of expertise and passion 
                to every project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-brand-dark mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We work closely with you to ensure 
                your vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop" 
                alt="Quality furniture" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-bold text-4xl text-brand-dark mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-brand-dark">Premium Materials</h3>
                    <p className="text-gray-600">We use only the finest wood and materials for lasting quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-brand-dark">Custom Designs</h3>
                    <p className="text-gray-600">Tailored furniture solutions to match your unique style and needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-brand-dark">Expert Craftsmanship</h3>
                    <p className="text-gray-600">Decades of combined experience in furniture making.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-brand-dark">Reliable Delivery</h3>
                    <p className="text-gray-600">Timely delivery and professional installation services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-brand-dark">Affordable Pricing</h3>
                    <p className="text-gray-600">Competitive prices without compromising on quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
