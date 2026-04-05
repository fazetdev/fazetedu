'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  if (!mounted) {
    return (
      <nav className="bg-white py-4">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">Fazet Edu</span>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white py-4'
      }`}>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-600 via-white to-green-600"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex justify-between items-center">

            {/* Logo - Left side */}
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">
                Fazet Edu
              </span>
              <span className="text-gray-400 text-sm ml-1 font-medium">.ng</span>
            </Link>

            {/* Desktop Navigation - Right side */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all relative group ${
                    pathname === link.href
                      ? 'text-[#F59E0B]'
                      : 'text-gray-600 hover:text-[#F59E0B]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] transition-all group-hover:w-full ${
                    pathname === link.href ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {isOpen ? (
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-4 space-y-1 border border-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-[#F59E0B] bg-white'
                      : 'text-gray-600 hover:bg-white hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  )
}