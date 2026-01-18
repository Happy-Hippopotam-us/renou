import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to begin your transition? We're here to help. Schedule a free consultation to discuss your needs.
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600">info@renouhomes.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Hours</h3>
            <p className="text-gray-600">Mon-Fri: 9am-6pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}
