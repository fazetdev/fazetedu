'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPilotModal, setShowPilotModal] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleJoinPilot = () => {
    setShowPilotModal(true)
    setIsOpen(false) // Close mobile menu if open
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email collected:', email)
    setSubmitted(true)
    
    setTimeout(() => {
      setShowPilotModal(false)
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <>
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-[#10B981] font-bold text-xl">Fazet Edu</span>
              <span className="text-gray-500 text-sm ml-1">.ng</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-[#10B981]">
                Products
              </Link>
              <Link href="/edumarket" className="text-gray-700 hover:text-[#10B981]">
                EduMarket
              </Link>
              <Link
                href="/teacherearn"
                className="text-[#10B981] font-bold hover:text-[#059669]"
              >
                TeacherEarn
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-[#10B981]">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#10B981]">
                About
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-[#10B981]">
                Testimonials
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#10B981]">
                Contact
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleJoinPilot}
                className="hidden sm:block bg-[#10B981] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#059669]"
              >
                Join pilot
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4">
              <Link href="/products" className="block text-gray-700 hover:text-[#10B981]">
                Products
              </Link>
              <Link href="/edumarket" className="block text-gray-700 hover:text-[#10B981]">
                EduMarket
              </Link>
              <Link
                href="/teacherearn"
                className="block text-[#10B981] font-bold hover:text-[#059669]"
              >
                ✨ TeacherEarn
              </Link>
              <Link href="/pricing" className="block text-gray-700 hover:text-[#10B981]">
                Pricing
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-[#10B981]">
                About
              </Link>
              <Link href="/testimonials" className="block text-gray-700 hover:text-[#10B981]">
                Testimonials
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-[#10B981]">
                Contact
              </Link>
              <button 
                onClick={handleJoinPilot}
                className="w-full mt-2 bg-[#10B981] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#059669] sm:hidden"
              >
                Join pilot
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Modal - same as Hero */}
      {showPilotModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the Pilot Program
                </h3>
                <p className="text-gray-600 mb-6">
                  Be among the first Nigerian schools to transform education with Fazet Edu.
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#10B981] text-white font-bold py-3 rounded-lg hover:bg-[#059669] transition-colors"
                  >
                    Notify Me When Pilot Launches
                  </button>
                </form>
                <button
                  onClick={() => setShowPilotModal(false)}
                  className="w-full text-gray-500 text-sm mt-4 hover:text-gray-700"
                >
                  Maybe Later
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-600">
                  We'll notify you when the pilot program launches.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}