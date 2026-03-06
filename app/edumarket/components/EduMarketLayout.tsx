'use client';

import { ReactNode } from 'react';

interface EduMarketLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function EduMarketLayout({ children, title, subtitle }: EduMarketLayoutProps) {
  const eduPurple = {
    light: '#8B5CF6',
    dark: '#7C3AED',
    lighter: '#EDE9FE',
    gradient: 'from-[#8B5CF6] to-[#DB2777]'
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#EDE9FE] border border-[#8B5CF6] border-opacity-20 mb-6">
                <span className="text-[#8B5CF6] font-medium text-sm">{subtitle}</span>
              </div>
            )}
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
                {title?.includes('EduMarket') && (
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#DB2777]">
                    Buy & Sell Teaching Resources
                  </span>
                )}
              </h1>
            )}
          </div>
        )}
        {children}
      </div>
    </main>
  );
}
