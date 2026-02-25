'use client'

import { useState } from 'react'
import Link from 'next/link'
import PilotModal from './PilotModal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPilotModal, setShowPilotModal] = useState(false)

  return (
    <>
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">

            <Link href="/" className="flex items-center">
              <span className="text-[#10B981] font-bold text-xl">Fazet Edu</span>
              <span className="text-gray-500 text-sm ml-1">.ng</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-[#10B981]">Products</Link>
              <Link href="/edumarket" className="text-gray-700 hover:text-[#10B981]">EduMarket</Link>
              <Link href="/teacherearn" className="text-[#10B981] font-bold hover:text-[#059669]">TeacherEarn</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-[#10B981]">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#10B981]">About</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-[#10B981]">Testimonials</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#10B981]">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/login" 
                className="hidden sm:block text-gray-600 hover:text-[#10B981] font-medium"
              >
                Sign In
              </Link>

              <Link
                href="/auth/register"
                className="hidden sm:block bg-[#10B981] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#059669]"
              >
                Start Free Trial
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4">
              <Link href="/products" className="block text-gray-700 hover:text-[#10B981]">Products</Link>
              <Link href="/edumarket" className="block text-gray-700 hover:text-[#10B981]">EduMarket</Link>
              <Link href="/teacherearn" className="block text-[#10B981] font-bold hover:text-[#059669]">TeacherEarn</Link>
              <Link href="/pricing" className="block text-gray-700 hover:text-[#10B981]">Pricing</Link>
              <Link href="/about" className="block text-gray-700 hover:text-[#10B981]">About</Link>
              <Link href="/testimonials" className="block text-gray-700 hover:text-[#10B981]">Testimonials</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-[#10B981]">Contact</Link>

              <div className="pt-2 mt-2 border-t">
                <Link 
                  href="/auth/login" 
                  className="block text-gray-700 hover:text-[#10B981] py-2"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="block bg-[#10B981] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#059669] text-center mt-2"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <PilotModal 
        isOpen={showPilotModal} 
        onClose={() => setShowPilotModal(false)} 
      />
    </>
  )
}
