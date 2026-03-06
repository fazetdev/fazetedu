'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Resource {
  id: string;
  title: string;
  category: string;
  price: number;
  author: string;
  preview: string;
}

export default function EduMarketPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [resources, setResources] = useState<Resource[]>([]);
  const [previewItem, setPreviewItem] = useState<Resource | null>(null);

  const categories = [
    { id: 'all', name: 'All', icon: '📚' },
    { id: 'lesson note', name: 'Lesson Note', icon: '📝' },
    { id: 'past question', name: 'Past Question', icon: '📊' },
    { id: 'project', name: 'Project', icon: '📄' },
    { id: 'textbook', name: 'Textbook', icon: '📖' }
  ];

  useEffect(() => {
    const stored = localStorage.getItem('edumarket_resources');
    if (stored) {
      setResources(JSON.parse(stored));
    }
  }, []);

  const filtered = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">EduMarket</h1>
          <button
            onClick={() => {
              const user = localStorage.getItem('currentUser');
              user ? router.push('/edumarket/sell') : router.push('/auth/register');
            }}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm"
          >
            Sell
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {cat.icon} {cat.name} ({resources.filter(r => r.category === cat.id || cat.id === 'all').length})
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map(item => (
            <div key={item.id} className="border rounded-lg p-3">
              <div className="aspect-square bg-gray-100 rounded mb-2 flex items-center justify-center text-2xl">
                📄
              </div>
              <h3 className="font-medium text-sm mb-1 line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{item.author}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">₦{item.price}</span>
                <button 
                  onClick={() => setPreviewItem(item)}
                  className="text-xs text-blue-600"
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-4">
            <h2 className="font-bold mb-2">{previewItem.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{previewItem.author}</p>
            <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
              {previewItem.preview}
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-black text-white rounded-lg text-sm">
                Buy ₦{previewItem.price}
              </button>
              <button 
                onClick={() => setPreviewItem(null)}
                className="px-4 py-2 border rounded-lg text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
