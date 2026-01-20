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
              Making Space for What Matters Most
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A boutique, bilingual service helping seniors and empty nesters downsize and prepare for their next stage of life efficiently and with peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-renou-gold text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-renou-gold/90 transition shadow-lg"
              >
                Schedule a Consultation
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
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-renou-charcoal">Professional Home Decluttering & Organizing</h3>
              <p className="text-renou-gray">
                Carefully sorting what to keep, donate, or sell.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-renou-charcoal">Downsizing & Move Preparation</h3>
              <p className="text-renou-gray">
                Space planning, packing support, estate sale coordination.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-renou-charcoal">Concierge Coordination</h3>
              <p className="text-renou-gray">
                Real estate agents, contractors, moving companies, cleaners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-renou-charcoal">Legacy & Keepsake Support</h3>
              <p className="text-renou-gray">
                Heirloom preservation, memory archiving, photo digitizing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-renou-charcoal">Bilingual Service</h3>
              <p className="text-renou-gray">
                English / Español. Respectful communication for diverse households.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-renou-charcoal">Why Renou?</h3>
              <ul className="text-renou-gray space-y-2">
                <li>• Personalized, compassionate care</li>
                <li>• Discreet, high-end service</li>
                <li>• Trusted by families & professionals</li>
                <li>• Specialized in senior transitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-renou-forest py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Serving Families in the Philadelphia Region
          </h2>
          <p className="text-xl text-renou-cream/90 mb-8">
            With warmth, respect, and professionalism. Schedule a consultation to discuss your needs.
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
