import { useState } from 'react'
import { Mail, Lock, ArrowLeft } from 'lucide-react'

export default function LoginPage({ onNavigate }) {
  const [form, setForm] = useState({ email: '', password: '', remember: true })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
  }

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-brand-hero bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <button
            onClick={() => onNavigate ? onNavigate('home') : null}
            className="mb-6 inline-flex items-center text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Welcome back</h1>
          <p className="mt-2 text-white/85 max-w-xl">Log in to manage your orders and requests. We keep your information secure.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Email address</label>
                  <div className="relative">
                    <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Password</label>
                  <div className="relative">
                    <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={form.remember}
                      onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    onClick={() => onNavigate ? onNavigate('contact') : null}
                    className="text-sm font-medium text-brand-primary hover:text-brand-accent"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-accent transition-colors font-semibold disabled:opacity-60"
                >
                  {loading ? 'Signing in…' : 'Sign in'}
                </button>

                <p className="text-center text-sm text-gray-600">
                  Don’t have an account?{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate ? onNavigate('contact') : null}
                    className="font-medium text-brand-primary hover:text-brand-accent"
                  >
                    Contact us to get started
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
