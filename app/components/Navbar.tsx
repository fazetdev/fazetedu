'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-blue-600 font-bold text-xl">Fazet Edu</div>
            <span className="text-gray-500 text-sm ml-1">.ng</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">EduMarket</a>
            <a href="#" className="text-green-600 font-bold hover:text-green-700">
             TeacherEarn
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Right Side: Button + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700">
              Join pilot
            </button>
            
            {/* Mobile Menu Button */}
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

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4">
            <a href="#" className="block text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">EduMarket</a>
            <a href="#" className="block text-green-600 font-bold hover:text-green-700">✨ TeacherEarn</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
            <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 sm:hidden">
              Join pilot
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
