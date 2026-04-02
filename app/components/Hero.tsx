'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Nigerian Flag Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-white to-green-600"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Main Headline - Direct, no negative intro */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Professional{' '}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">
                Website + Smart Tools
              </span>
              <br />
              for Your School
            </h1>

            {/* Subheadline - Clean and simple */}
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Fee tracking • Admission forms • Results • Announcements
            </p>
            
            {/* Price - Clear and bold */}
            <p className="text-gray-400 mb-6">
              From <span className="text-[#F59E0B] font-bold text-2xl">₦80,000</span> one-time
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pricing"
                className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-lg font-semibold hover:shadow-lg transition"
              >
                View Packages →
              </Link>
              
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition"
              >
                Free Demo Setup
              </Link>
            </div>

            {/* Small note */}
            <p className="text-gray-500 text-xs mt-4">
              Includes domain + hosting for 1 year • ₦25,000/year renewal
            </p>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>
    </>
  );
}