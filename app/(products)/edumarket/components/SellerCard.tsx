'use client';

import { Seller } from '../types';
import Link from 'next/link';

interface SellerCardProps {
  seller: Seller;
  compact?: boolean;
}

export default function SellerCard({ seller, compact = false }: SellerCardProps) {
  const getBadgeColor = (badge: string) => {
    switch(badge) {
      case 'top-seller': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'expert': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'verified': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (compact) {
    return (
      <Link href={`/edumarket/seller/${seller.id}`}>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#DC2626] flex items-center justify-center text-white font-bold">
            {seller.avatar ? (
              <img src={seller.avatar} alt={seller.name} className="w-full h-full rounded-full object-cover" />
            ) : (
              seller.name.charAt(0)
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm truncate">{seller.name}</h4>
              {seller.verified && <span className="text-blue-500 text-xs">✓</span>}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>⭐ {seller.rating}</span>
              <span>•</span>
              <span>{seller.totalSales} sales</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/edumarket/seller/${seller.id}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#DC2626] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
            {seller.avatar ? (
              <img src={seller.avatar} alt={seller.name} className="w-full h-full rounded-full object-cover" />
            ) : (
              seller.name.charAt(0)
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">{seller.name}</h3>
              {seller.verified && (
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Verified</span>
              )}
            </div>
            
            {seller.school && (
              <p className="text-sm text-gray-600 mb-2">{seller.school}</p>
            )}
            
            <div className="flex flex-wrap gap-1 mb-2">
              {seller.badges?.map(badge => (
                <span key={badge} className={`px-2 py-0.5 text-xs rounded-full border ${getBadgeColor(badge)}`}>
                  {badge.replace('-', ' ')}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{seller.bio}</p>

            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="font-semibold text-gray-900">⭐ {seller.rating}</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="font-semibold text-gray-900">{seller.totalSales}</div>
                <div className="text-xs text-gray-500">Sales</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="font-semibold text-gray-900">{seller.totalResources}</div>
                <div className="text-xs text-gray-500">Resources</div>
              </div>
            </div>

            {seller.subjects && seller.subjects.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {seller.subjects.slice(0, 3).map(subject => (
                  <span key={subject} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {subject}
                  </span>
                ))}
                {seller.subjects.length > 3 && (
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{seller.subjects.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
