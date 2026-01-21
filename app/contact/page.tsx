import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We handle everything from sorting belongings to coordinating with realtors, movers, and family — so you can focus on what truly matters.
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-renou-charcoal">Email</h3>
            <p className="text-renou-gray">hello@renou.homes</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-renou-charcoal">Phone</h3>
            <p className="text-renou-gray">(215) 416-7955</p>
          </div>
        </div>
      </div>
    </div>
  )
}
