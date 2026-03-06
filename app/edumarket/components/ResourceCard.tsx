'use client';

import { useRouter } from 'next/navigation';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  author: {
    name: string;
  };
  fileType: string;
  downloads: number;
  rating: number;
  tags: string[];
}

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const router = useRouter();

  const handlePreview = () => {
    router.push(`/edumarket/resource/${resource.id}`);
  };

  const handleBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/edumarket/checkout/${resource.id}`);
  };

  return (
    <div 
      onClick={handlePreview}
      className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all overflow-hidden cursor-pointer"
    >
      <div className="h-32 bg-gradient-to-br from-[#EDE9FE] to-[#FCE7F3] flex items-center justify-center text-4xl">
        {resource.fileType === 'pdf' ? '📄' : '📝'}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1">{resource.title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{resource.description}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500">👤 {resource.author.name}</span>
          <span className="text-xs text-gray-500">⭐ {resource.rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#8B5CF6]">₦{resource.price}</span>
          <button
            onClick={handleBuy}
            className="px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white rounded-lg text-sm hover:shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
