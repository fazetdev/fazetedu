'use client';

import { useState } from 'react';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PilotModal({ isOpen, onClose }: PilotModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email collected:', email);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
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
              onClick={onClose}
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
  );
}