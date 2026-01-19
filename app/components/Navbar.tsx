'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-blue-600 font-bold text-xl">Fazet Edu</span>
            <span className="text-gray-500 text-sm ml-1">.ng</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>

            <Link href="/edumarket" className="text-gray-700 hover:text-blue-600">
              EduMarket
            </Link>

            <Link
              href="/teacherearn"
              className="text-green-600 font-bold hover:text-green-700"
            >
              TeacherEarn
            </Link>

            <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>

            <Link href="/testimonials" className="text-gray-700 hover:text-blue-600">
              Testimonials
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700">
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
            <Link href="/products" className="block text-gray-700 hover:text-blue-600">
              Products
            </Link>

            <Link href="/edumarket" className="block text-gray-700 hover:text-blue-600">
              EduMarket
            </Link>

            <Link
              href="/teacherearn"
              className="block text-green-600 font-bold hover:text-green-700"
            >
              ✨ TeacherEarn
            </Link>

            <Link href="/pricing" className="block text-gray-700 hover:text-blue-600">
              Pricing
            </Link>

            <Link href="/about" className="block text-gray-700 hover:text-blue-600">
              About
            </Link>

            <Link href="/testimonials" className="block text-gray-700 hover:text-blue-600">
              Testimonials
            </Link>

            <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
              Contact
            </Link>

            <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 sm:hidden">
              Join pilot
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
