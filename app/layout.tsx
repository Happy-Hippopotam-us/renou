import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renou Homes - Estate Transition Services',
  description: 'Helping families downsize, organize, and transition with dignity and care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
                  <Image
                    src="/renou-logo.png"
                    alt="Renou Homes"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/services" className="text-renou-gray hover:text-renou-gold transition">
                  Services
                </a>
                <a href="/how-it-works" className="text-renou-gray hover:text-renou-gold transition">
                  How It Works
                </a>
                <a href="/about" className="text-renou-gray hover:text-renou-gold transition">
                  About
                </a>
                <a href="/contact" className="text-renou-gray hover:text-renou-gold transition">
                  Contact
                </a>
              </div>
              <div className="md:hidden">
                <button className="text-renou-gray">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-renou-charcoal text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/renou-icon.png"
                    alt="Renou Homes Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <h3 className="text-xl font-bold text-renou-gold">Renou Homes</h3>
                </div>
                <p className="text-renou-cream/80">
                  Helping families transition with dignity and care
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-renou-cream/80">
                  <li><a href="/services" className="hover:text-renou-gold transition">Services</a></li>
                  <li><a href="/how-it-works" className="hover:text-renou-gold transition">How It Works</a></li>
                  <li><a href="/about" className="hover:text-renou-gold transition">About</a></li>
                  <li><a href="/contact" className="hover:text-renou-gold transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-renou-cream/80">
                  Email: info@renouhomes.com<br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </div>
            <div className="border-t border-renou-gray/30 mt-8 pt-8 text-center text-renou-cream/60">
              <p>&copy; {new Date().getFullYear()} Renou Homes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
