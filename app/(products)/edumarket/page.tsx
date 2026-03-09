'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { resourceService } from './services';
import { Resource } from './types';

export default function EduMarketPage() {
  const router = useRouter();
  const [resources, setResources] = useState<Resource[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewResource, setPreviewResource] = useState<Resource | null>(null);

  // Load resources
  useEffect(() => {
    const loaded = resourceService.getAll();
    setResources(loaded);
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('edumarket_cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const addToCart = (resource: Resource) => {
    const newCart = [...cart, {
      resourceId: resource.id,
      title: resource.title,
      price: resource.price,
      sellerName: resource.sellerName
    }];
    setCart(newCart);
    localStorage.setItem('edumarket_cart', JSON.stringify(newCart));
  };

  const removeFromCart = (resourceId: string) => {
    const newCart = cart.filter(item => item.resourceId !== resourceId);
    setCart(newCart);
    localStorage.setItem('edumarket_cart', JSON.stringify(newCart));
  };

  const deleteResource = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Delete this resource?')) {
      resourceService.delete(id);
      setResources(resourceService.getAll());
    }
  };

  const categories = [
    'all', 'lesson-plan', 'lesson-note', 'worksheet', 
    'past-question', 'textbook', 'scheme-of-work', 'other'
  ];

  const filtered = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    const icons: Record<string, string> = {
      'lesson-plan': '📝', 
      'lesson-note': '📋', 
      'worksheet': '📄',
      'past-question': '📊', 
      'textbook': '📖', 
      'scheme-of-work': '📅', 
      'other': '📁'
    };
    return icons[cat] || '📄';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/edumarket" className="text-xl font-bold">EduMarket</Link>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowCart(!showCart)} className="relative p-2">
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F59E0B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={() => router.push('/edumarket/sell')}
              className="px-4 py-2 bg-[#F59E0B] text-white rounded-lg text-sm"
            >
              + Sell Resource
            </button>
          </div>
        </div>
      </header>

      {showCart && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-4 border-b flex justify-between">
              <h2 className="font-semibold">Cart ({cart.length})</h2>
              <button onClick={() => setShowCart(false)}>✕</button>
            </div>
            <div className="p-4">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Cart is empty</p>
              ) : (
                <>
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between items-center mb-3 pb-3 border-b">
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500">₦{item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.resourceId)} className="text-red-500 text-xs">
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="mt-4">
                    <div className="flex justify-between font-bold mb-3">
                      <span>Total:</span>
                      <span>₦{cart.reduce((sum, item) => sum + item.price, 0)}</span>
                    </div>
                    <button className="w-full py-2 bg-[#F59E0B] text-white rounded-lg">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === cat 
                  ? 'bg-[#F59E0B] text-white' 
                  : 'bg-white border hover:border-[#F59E0B]'
              }`}
            >
              {cat === 'all' ? '📚 All' : `${getCategoryIcon(cat)} ${cat.replace('-', ' ')}`}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2">No resources yet</h3>
            <p className="text-gray-500 mb-4">Be the first to sell a resource</p>
            <button
              onClick={() => router.push('/edumarket/sell')}
              className="px-6 py-3 bg-[#F59E0B] text-white rounded-lg"
            >
              Sell Your First Resource
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(resource => (
              <div key={resource.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all">
                <div 
                  className="relative aspect-[4/3] bg-gray-100 rounded-t-xl overflow-hidden cursor-pointer"
                  onClick={() => setPreviewResource(resource)}
                >
                  {resource.fileData?.preview?.[0] ? (
                    <img 
                      src={resource.fileData.preview[0]} 
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                      {getCategoryIcon(resource.category)}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
                    {resource.fileData?.type?.split('/')[1] || 'PDF'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 line-clamp-2">{resource.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{resource.sellerName}</p>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">₦{resource.price}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(resource)}
                        className="px-3 py-1.5 bg-[#F59E0B] text-white text-sm rounded-lg hover:bg-[#DC2626]"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={(e) => deleteResource(resource.id, e)}
                        className="px-3 py-1.5 border border-red-500 text-red-500 text-sm rounded-lg hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setPreviewResource(null)} />
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h2 className="font-semibold">{previewResource.title}</h2>
              <button onClick={() => setPreviewResource(null)} className="text-gray-500">✕</button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">{previewResource.description}</p>
              <div className="flex gap-4 text-sm text-gray-500 mb-4">
                <span>Category: {previewResource.category}</span>
                <span>Price: ₦{previewResource.price}</span>
                <span>Seller: {previewResource.sellerName}</span>
              </div>
              {previewResource.fileData?.preview?.map((page, i) => (
                <div key={i} className="border rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2">Page {i + 1}</p>
                  <img src={page} alt={`Preview page ${i + 1}`} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
