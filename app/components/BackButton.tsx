'use client';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
  fallbackUrl?: string; // Optional fallback if no history
  className?: string;
}

export default function BackButton({ fallbackUrl = '/', className = '' }: BackButtonProps) {
  const router = useRouter();

  const handleGoBack = () => {
    // Try to go back, if no history, go to fallback
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackUrl);
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className={`flex items-center text-gray-600 hover:text-[#10B981] transition-colors group ${className}`}
      aria-label="Go back"
    >
      <svg 
        className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 19l-7-7m0 0l7-7m-7 7h18" 
        />
      </svg>
      <span>Back</span>
    </button>
  );
}