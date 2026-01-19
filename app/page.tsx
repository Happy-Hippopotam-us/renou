import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px]">
        <Image
          src="/images/hero/home-transition.jpg"
          alt="Family organizing home transition"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-renou-forest/80 to-renou-forest/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-renou-forest text-4xl md:text-6xl font-bold text-white mb-6">
              Transition Your Home with Dignity!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional estate management for downsizing, divorce, and life transitions.
              We catalog, value, and help you preserve family legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-renou-gold text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-renou-gold/90 transition shadow-lg"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="bg-transparent text-white px-8 py-3 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-renou-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-renou-charcoal">
            How We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-renou-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-renou-charcoal">Catalog Everything</h3>
              <p className="text-renou-gray">
                We photograph and document every item in your home, room by room
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-renou-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-renou-charcoal">Value & Organize</h3>
              <p className="text-renou-gray">
                Professional appraisal and categorization for sale, donation, or heirlooms
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-renou-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-renou-charcoal">Manage the Process</h3>
              <p className="text-renou-gray">
                From repairs to sales to distribution, we handle the details
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-renou-forest py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Transition?
          </h2>
          <p className="text-xl text-renou-cream/90 mb-8">
            Schedule a free consultation to discuss your needs
          </p>
          <a
            href="/contact"
            className="bg-renou-gold text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-renou-gold/90 transition inline-block shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
