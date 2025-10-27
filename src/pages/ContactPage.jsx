import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message_type: 'general',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitStatus('success')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message_type: 'general',
      message: '',
    })
    setIsSubmitting(false)
  }

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-brand-hero bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-28">
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Have questions or ready to order? We'd love to hear from you. Our team is here to help bring your furniture vision to life.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-brand-primary/10 to-white p-8 rounded-xl border border-brand-primary/20 text-center">
              <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-brand-dark mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us anytime</p>
              <a href="tel:+256758794396" className="text-brand-primary font-semibold hover:text-brand-accent">
                +256 758 794396
              </a>
            </div>

            <div className="bg-gradient-to-br from-brand-accent/10 to-white p-8 rounded-xl border border-brand-accent/20 text-center">
              <div className="bg-brand-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-brand-dark mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto:wilberwilliamz.ww@gmail.com" className="text-brand-accent font-semibold hover:text-brand-primary">
                wilberwilliamz.ww@gmail.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-brand-primary/10 to-white p-8 rounded-xl border border-brand-primary/20 text-center">
              <div className="bg-brand-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-brand-dark mb-2">Locations</h3>
              <p className="text-gray-600 mb-2">Visit our showrooms</p>
              <p className="text-brand-dark font-medium text-sm">
                Gayaza Town, Wakiso<br />
                Maganjo Bombo Rd. (Opp Kabs Hotel)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl text-brand-dark mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible. Whether you're interested in our products, need a custom design, or just have questions, we're here to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      placeholder="+256 700 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message_type" className="block text-sm font-semibold text-brand-dark mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="message_type"
                    required
                    value={formData.message_type}
                    onChange={(e) => setFormData({ ...formData, message_type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="custom">Custom Order</option>
                    <option value="delivery">Delivery & Shipping</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    There was an error submitting your message. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary text-white px-8 py-4 rounded-lg hover:bg-brand-accent transition-all hover:shadow-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-brand-accent mr-3" />
                  <h3 className="font-semibold text-lg text-brand-dark">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 text-brand-primary mr-3" />
                  <h3 className="font-semibold text-lg text-brand-dark">Quick Response</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  For immediate assistance, reach us on WhatsApp. We typically respond within an hour during business hours.
                </p>
                <a
                  href="https://wa.me/256758794396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </div>

              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.756739393937!2d32.582520314772545!3d0.3475964997626693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f38a6d847%3A0x9c8e5d7f1e0e8e8e!2sKampala%20Road%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="2zinteriors Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
