'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
  onAddToCart: (resource: Resource) => void;
}

export default function ResourceCard({ resource, onAddToCart }: ResourceCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaved(!isSaved);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart(resource);
  };

  // Safety checks with default values
  const seller = resource?.seller || {
    id: 'unknown',
    name: 'Unknown Seller',
    avatar: '',
    rating: 0,
    totalSales: 0,
    verified: false
  };
  
  const fileType = resource?.file?.type || 'pdf';
  const category = resource?.category || 'other';
  const reviewCount = resource?.stats?.reviewCount || 0;
  const downloads = resource?.stats?.downloads || 0;
  const tags = resource?.tags || [];

  const getCategoryIcon = (cat: string) => {
    const icons: Record<string, string> = {
      'lesson-plan': '📝',
      'lesson-note': '📋',
      'worksheet': '📄',
      'past-question': '📊',
      'textbook': '📖',
      'scheme-of-work': '📅',
      'exam': '✍️',
      'project': '🎯',
      'flashcard': '🃏',
      'other': '📁'
    };
    return icons[cat] || '📄';
  };

  const getCategoryName = (cat: string) => {
    return cat.split('-').join(' ');
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
      {/* Preview Image - Clickable to resource */}
      <Link href={`/edumarket/resource/${resource.id}`}>
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl overflow-hidden cursor-pointer">
          {resource.preview?.images?.[0] ? (
            <img
              src={resource.preview.images[0]}
              alt={resource.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl opacity-30">{getCategoryIcon(category)}</span>
            </div>
          )}

          {/* Category Badge */}
          <span className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
            {getCategoryIcon(category)} {getCategoryName(category)}
          </span>

          {/* Class Badge */}
          {resource.class_ && (
            <span className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs rounded-full shadow-sm">
              {resource.class_}
            </span>
          )}

          {/* File Type Icon */}
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium">
            {fileType.toUpperCase()}
          </div>

          {/* Bestseller Badge */}
          {resource.bestseller && (
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
              ⭐ Bestseller
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Seller Info - Clickable to seller profile */}
        <Link href={`/edumarket/seller/${seller.id}`}>
          <div className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#DC2626] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {seller.avatar ? (
                <img src={seller.avatar} alt={seller.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                seller.name.charAt(0)
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-medium text-sm truncate">{seller.name}</span>
                {seller.verified && (
                  <span className="text-blue-500 text-xs">✓</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>⭐ {seller.rating}</span>
                <span>•</span>
                <span>{seller.totalSales} sales</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Title - Clickable to resource */}
        <Link href={`/edumarket/resource/${resource.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#F59E0B] transition-colors">
            {resource.title}
          </h3>
        </Link>

        {/* Subject */}
        {resource.subject && (
          <div className="mb-2">
            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">
              {resource.subject}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">
          {resource.description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 2).map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Stats & Price */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span title="Downloads" className="flex items-center gap-1">
              ⬇️ {downloads}
            </span>
            <span title="Reviews" className="flex items-center gap-1">
              💬 {reviewCount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">₦{resource.price?.toLocaleString() || '0'}</span>
            <button
              onClick={handleAddToCart}
              className="px-3 py-1.5 bg-[#F59E0B] text-white text-xs rounded-lg hover:bg-[#DC2626] transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={toggleSave}
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <span className={`text-lg ${isSaved ? 'text-red-500' : 'text-gray-400'}`}>
            {isSaved ? '❤️' : '🤍'}
          </span>
        </button>
      </div>
    </div>
  );
}
