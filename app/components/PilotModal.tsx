'use client';

import { useState } from 'react';
import Link from 'next/link'; // Add this
import { useRouter } from 'next/navigation'; // Add this

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PilotModal({ isOpen, onClose }: PilotModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save email to database (optional - for marketing)
    fetch('/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ email })
    }).catch(err => console.log('Waitlist error:', err));
    
    // Direct to registration immediately
    router.push('/register');
    onClose();
  };

  const handleRegisterNow = () => {
    router.push('/register');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Start Your Pilot Today
        </h3>
        <p className="text-gray-600 mb-6">
          Join Nigerian schools already transforming their operations with Fazet Edu.
        </p>
        
        {/* Two clear options */}
        <div className="space-y-4">
          {/* Primary CTA - Register Now */}
          <button
            onClick={handleRegisterNow}
            className="w-full bg-[#10B981] text-white font-bold py-4 rounded-xl hover:bg-[#059669] transition-colors text-lg"
          >
            Create Free Account →
          </button>
          
          {/* Secondary - Email for later */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-400">or</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2 text-center">
              Not ready? Get notified when we launch
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#10B981] outline-none"
                required
              />
              <button
                type="submit"
                className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="w-full text-gray-400 text-sm mt-6 hover:text-gray-600"
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}