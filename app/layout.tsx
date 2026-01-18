import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
                <a href="/" className="text-2xl font-bold text-gray-900">
                  Renou Homes
                </a>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/services" className="text-gray-700 hover:text-gray-900">
                  Services
                </a>
                <a href="/how-it-works" className="text-gray-700 hover:text-gray-900">
                  How It Works
                </a>
                <a href="/about" className="text-gray-700 hover:text-gray-900">
                  About
                </a>
                <a href="/contact" className="text-gray-700 hover:text-gray-900">
                  Contact
                </a>
              </div>
              <div className="md:hidden">
                <button className="text-gray-700">
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
        
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Renou Homes</h3>
                <p className="text-gray-400">
                  Helping families transition with dignity and care
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/services" className="hover:text-white">Services</a></li>
                  <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
                  <li><a href="/about" className="hover:text-white">About</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">
                  Email: info@renouhomes.com<br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Renou Homes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
