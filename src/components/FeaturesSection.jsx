import { Award, Heart, Shield, Truck } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-sm text-gray-600">Finest materials selected</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-accent-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Handcrafted</h3>
            <p className="text-sm text-gray-600">Made with passion</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Built to Last</h3>
            <p className="text-sm text-gray-600">Durability guaranteed</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-accent-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">Across Uganda</p>
          </div>
        </div>
      </div>
    </section>
  )
}
