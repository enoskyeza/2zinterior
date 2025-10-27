import { useState } from 'react'

const PhoneIcon = ({ className = 'h-6 w-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.6"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 7.318 5.932 13.25 13.25 13.25h1.143a2.357 2.357 0 0 0 2.357-2.357v-1.38a1.571 1.571 0 0 0-1.167-1.52l-2.89-.723a1.571 1.571 0 0 0-1.518.403l-.916.916a12.028 12.028 0 0 1-5.318-5.318l.916-.916a1.571 1.571 0 0 0 .403-1.518l-.723-2.89a1.571 1.571 0 0 0-1.52-1.167H4.607A2.357 2.357 0 0 0 2.25 6.75Z"
    />
  </svg>
)

const MailIcon = ({ className = 'h-6 w-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.6"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25v7.5A2.25 2.25 0 0 1 18.75 18H5.25A2.25 2.25 0 0 1 3 15.75v-7.5M21 8.25a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 8.25m18 0-9 5.25L3 8.25"
    />
  </svg>
)

const LocationIcon = ({ className = 'h-6 w-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.6"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
)

const InstagramIcon = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7Zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3Zm10 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
  </svg>
)

const FacebookIcon = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.563 9.874v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.244 0-1.63.772-1.63 1.563V12h2.773l-.443 2.886h-2.33v6.988A10 10 0 0 0 22 12Z" />
  </svg>
)

const LinkedInIcon = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M4.983 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h3.967v12H3V9Zm6.486 0h3.805v1.64h.054c.53-1.004 1.83-2.062 3.77-2.062 4.03 0 4.775 2.62 4.775 6.028V21H18v-5.324c0-1.27-.023-2.9-1.765-2.9-1.767 0-2.036 1.38-2.036 2.805V21h-3.817V9Z" />
  </svg>
)

const WhatsAppIcon = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.002 5.333c-5.866 0-10.665 4.8-10.665 10.668 0 1.884.494 3.723 1.435 5.35L5.33 26.668l5.473-1.427a10.61 10.61 0 0 0 5.199 1.332h.002c5.865 0 10.664-4.8 10.664-10.668 0-2.85-1.11-5.528-3.127-7.547a10.6 10.6 0 0 0-7.54-3.025Zm-.002 1.999c4.778 0 8.666 3.89 8.666 8.669 0 4.78-3.888 8.669-8.664 8.669h-.002a8.64 8.64 0 0 1-4.283-1.146l-.307-.18-3.254.848.87-3.175-.2-.325a8.65 8.65 0 0 1-1.314-4.791c0-4.78 3.89-8.669 8.668-8.669Zm-4.27 2.887a.547.547 0 0 0-.408.21c-.134.166-.87.852-.87 2.077 0 1.224.893 2.408 1.018 2.574.134.166 1.76 2.693 4.284 3.776 1.592.69 2.214.775 2.59.775.406 0 .898-.183 1.024-.371.125-.187.125-.35.09-.386-.035-.036-.134-.083-.282-.166-.148-.083-1.76-.908-2.03-1.01-.27-.101-.467-.153-.664.083-.197.235-.765.909-.94 1.095-.173.187-.346.205-.63.07-.282-.134-1.19-.438-2.267-1.397-.837-.75-1.401-1.676-1.567-1.958-.173-.287-.018-.443.118-.526.122-.073.282-.295.423-.444.141-.148.188-.25.282-.416.094-.166.047-.309-.024-.442-.07-.134-.623-1.5-.853-2.054-.224-.538-.454-.464-.63-.47Z" />
  </svg>
)

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setSubmitted(true)
    setEmail('')
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-12 bg-brand-hero bg-cover bg-center bg-fixed px-6 py-12 text-white">
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-12">
        <img
          src="/logo-white.png"
          alt="2Z Interiors logo"
          className="w-36 drop-shadow-2xl sm:w-48"
          width="192"
          height="192"
        />

        <section className="max-w-xl text-center" aria-labelledby="hero-title">
          <h1 id="hero-title" className="text-shadow-glow text-3xl font-bold uppercase tracking-[0.3em] sm:text-4xl">
            Website under construction
          </h1>
          <p className="mt-3 font-light text-light text-white/85 sm:text-lg">Be the first to know when we launch.</p>
        </section>

        <section className="w-full max-w-lg" aria-labelledby="cta-title">
          <form className="flex flex-col gap-3 sm:flex-row sm:items-center" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="cta-email">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email to get notified"
              required
              className="w-full flex-1 rounded-full border border-white/30 bg-white/95 px-5 py-3 text-gray-900 placeholder:text-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-blue-600 px-8 py-3 font-semibold text-gray-100 transition hover:bg-red-400/90 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Notify me
            </button>
          </form>
          {submitted && (
            <p className="mt-3 text-center text-sm font-semibold text-white" role="status">
              Thank you! We will be in touch shortly.
            </p>
          )}
        </section>

        <section className="w-full max-w-2xl space-y-6 mt-12" aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-center text-sm font-medium uppercase tracking-[0.3em] text-white/70">
            Get in touch
          </h2>

          <div className="flex flex-wrap gap-4">
            {/* <div className='flex gap-4'>
              <a
                className="flex items-center gap-3 text-white/90 transition hover:text-white"
                href="https://maps.app.goo.gl/?q=Gayaza+Town,+Wakiso"
                target="_blank"
                rel="noreferrer"
              >
                <LocationIcon className="h-5 w-5 flex-none text-white/70" />
                <div className="text-sm flex gap-2">
                  <p className="font-medium">Gayaza Town</p>
                  <p className="text-white/60">Gayaza, Wakiso</p>
                </div>
              </a>
              <a
                className="flex items-center gap-3 text-white/90 transition hover:text-white"
                href="https://maps.app.goo.gl/?q=Maganjo+Bombo+Road,+Kabs+Hotel"
                target="_blank"
                rel="noreferrer"
              >
                <LocationIcon className="h-5 w-5 flex-none text-white/70" />
                <div className="text-sm flex gap-2">
                  <p className="font-medium">Maganjo Bombo Rd.</p>
                  <p className="text-white/60">Opp Kabs Hotel</p>
                </div>
              </a>
            </div> */}

            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a
                className="flex items-center gap-3 text-white/90 transition hover:text-white"
                href="tel:+256758794396"
              >
                <PhoneIcon className="h-5 w-5 flex-none text-white/70" />
                <span className="text-sm font-medium">+256 758 794396</span>
              </a>

              <a
                className="flex items-center gap-3 text-white/90 transition hover:text-white"
                href="mailto:wilberwilliamz.ww@gmail.com"
              >
                <MailIcon className="h-5 w-5 flex-none text-white/70" />
                <span className="text-sm font-medium">wilberwilliamz.ww@gmail.com</span>
              </a>

              <div className="flex justify-center gap-4" aria-label="Social media">
                <a
                  className="text-white/70 transition hover:text-white"
                  href="https://www.instagram.com/2zinteriors"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  className="text-white/70 transition hover:text-white"
                  href="https://www.facebook.com/2zinteriors"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  className="text-white/70 transition hover:text-white"
                  href="https://www.linkedin.com/company/2zinteriors"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <span className="text-sm font-medium">@2zinteriors</span>
              </div>
            </div>
          </div>

        </section>

        <footer className="text-sm text-white/70">
          <p>© {new Date().getFullYear()} 2Z Interiors Uganda. All rights reserved.</p>
        </footer>
      </div>

      <a
        href="https://wa.me/256758794396"
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-6 right-6 z-20 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/40 transition hover:scale-[1.04] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with 2Z Interiors on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </main>
  )
}

export default App
