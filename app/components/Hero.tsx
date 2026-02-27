'use client';

import { useState } from 'react';
import Link from 'next/link';
import PilotModal from './PilotModal';

export default function Hero() {
  const [showPilotModal, setShowPilotModal] = useState(false);

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

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Problem Statement - Eye-catching */}
            <div className="inline-flex items-center bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-4 py-2 mb-8">
              <span className="text-red-500 text-xl mr-2">⚠️</span>
              <span className="text-red-400 font-medium">
                80% of Nigerian schools still use paper, WhatsApp, and Excel
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform{' '}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">
                Nigerian Education
              </span>
              <br />
              with Smart Solutions
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The complete platform for Nigerian schools. 
              <span className="block mt-2 text-gray-400">
                Admin tools, curriculum resources, and teacher income — all in one place.
              </span>
            </p>

            {/* TeacherEarn Highlight Card */}
            <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#DC2626]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] rounded-xl p-3">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg mb-1">Introducing TeacherEarn</h3>
                  <p className="text-gray-300 text-sm">
                    Your teachers can now earn extra income by tutoring or selling educational resources. 
                    <span className="block text-[#F59E0B] font-medium mt-1">Keep your best teachers happy.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setShowPilotModal(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Join Our Pilot Program</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <Link
                href="/smart-school"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
              >
                See How It Works →
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center space-x-8">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] border-2 border-gray-800"></div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-bold">20+ schools</span> already piloting
                <span className="block text-xs text-gray-500">Join them today</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      <PilotModal 
        isOpen={showPilotModal} 
        onClose={() => setShowPilotModal(false)} 
      />
    </>
  );
}
