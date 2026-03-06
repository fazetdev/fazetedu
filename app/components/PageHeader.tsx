'use client';

import { ReactNode } from 'react';
import BackButton from './BackButton';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  backFallbackUrl?: string;
  actions?: ReactNode;
  className?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  showBack = true, 
  backFallbackUrl,
  actions,
  className = ''
}: PageHeaderProps) {
  return (
    <div className={`bg-white border-b border-gray-200 sticky top-0 z-10 ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {showBack && <BackButton fallbackUrl={backFallbackUrl} />}
            <div className="ml-2">
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              {subtitle && (
                <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
              )}
            </div>
          </div>
          {actions && (
            <div className="flex items-center space-x-3">
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}