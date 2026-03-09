'use client';

import { Resource } from './types';

interface Props {
  resource: Resource;
  onAddToCart: (resource: Resource) => void;
  onDelete?: (id: string) => void;
}

export default function ResourceCard({ resource, onAddToCart, onDelete }: Props) {
  const getCategoryIcon = (cat: Resource['category']) => {
    const icons: Record<string, string> = {
      'lesson-plan': '📝', 
      'lesson-note': '📋', 
      'worksheet': '📄',
      'past-question': '📊', 
      'textbook': '📖', 
      'scheme-of-work': '📅', 
      'software': '💻',
      'course': '🎓',
      'other': '📁'
    };
    return icons[cat] || '📄';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all">
      <div className="relative aspect-[4/3] bg-gray-100 rounded-t-xl overflow-hidden flex items-center justify-center text-6xl text-gray-400">
        {resource.fileData?.preview?.[0] ? (
          <img src={resource.fileData.preview[0]} alt={resource.title} className="w-full h-full object-cover" />
        ) : (
          getCategoryIcon(resource.category)
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold mb-1 line-clamp-2">{resource.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{resource.sellerName}</p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">₦{resource.price}</span>
          <div className="flex gap-2">
            <button
              onClick={() => onAddToCart(resource)}
              className="px-3 py-1.5 bg-[#F59E0B] text-white text-sm rounded-lg hover:bg-[#DC2626]"
            >
              Add to Cart
            </button>
            {onDelete && (
              <button
                onClick={() => onDelete(resource.id)}
                className="px-3 py-1.5 border border-red-500 text-red-500 text-sm rounded-lg hover:bg-red-50"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
