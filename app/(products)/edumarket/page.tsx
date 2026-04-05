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

  useEffect(() => {
    const loaded = resourceService.getAll();
    setResources(loaded);
  }, []);

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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/edumarket" className="text-xl font-bold text-slate-900">EduMarket</Link>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowCart(!showCart)} className="relative p-2 text-slate-700">
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={() => router.push('/edumarket/sell')}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors"
            >
              + Sell Resource
            </button>
          </div>
        </div>
      </header>

      {showCart && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowCart(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl flex flex-col">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <h2 className="font-bold text-slate-900">Your Cart ({cart.length})</h2>
              <button onClick={() => setShowCart(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-slate-500 text-center py-8">Cart is empty</p>
              ) : (
                <>
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between items-center mb-3 pb-3 border-b border-slate-100">
                      <div>
                        <p className="font-semibold text-sm text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500 font-medium">₦{item.price.toLocaleString()}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.resourceId)} className="text-red-600 text-xs font-semibold hover:underline">
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="mt-4">
                    <div className="flex justify-between font-bold text-lg text-slate-900 mb-3">
                      <span>Total:</span>
                      <span>₦{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</span>
                    </div>
                    <button className="w-full py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-600 hover:text-amber-600'
              }`}
            >
              {cat === 'all' ? '📚 All Resources' : `${getCategoryIcon(cat)} ${cat.replace('-', ' ')}`}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <div className="text-6xl mb-4">📂</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No resources found</h3>
            <p className="text-slate-500 mb-6">Start by listing your teaching materials today.</p>
            <button
              onClick={() => router.push('/edumarket/sell')}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg font-bold hover:shadow-lg"
            >
              Sell Your First Resource
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(resource => (
              <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
                <div 
                  className="relative aspect-[4/3] bg-slate-100 rounded-t-xl overflow-hidden cursor-pointer group"
                  onClick={() => setPreviewResource(resource)}
                >
                  {resource.fileData?.preview?.[0] ? (
                    <img 
                      src={resource.fileData.preview[0]} 
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl opacity-40">
                      {getCategoryIcon(resource.category)}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-slate-900/70 text-white text-[10px] font-bold rounded uppercase tracking-wider">
                    {resource.fileData?.type?.split('/')[1] || 'PDF'}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-900 mb-1 line-clamp-1">{resource.title}</h3>
                  <p className="text-xs text-amber-600 font-semibold mb-2 uppercase tracking-wide">{resource.sellerName}</p>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1 leading-relaxed">{resource.description}</p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">₦{resource.price.toLocaleString()}</span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => addToCart(resource)}
                        className="px-3 py-1.5 bg-amber-600 text-white text-xs font-bold rounded-md hover:bg-amber-700"
                      >
                        Add
                      </button>
                      <button
                        onClick={(e) => deleteResource(resource.id, e)}
                        className="p-1.5 border border-red-100 text-red-500 rounded-md hover:bg-red-50 hover:text-red-700 transition-colors"
                      >
                        🗑️
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
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setPreviewResource(null)} />
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-100 p-4 flex justify-between items-center z-10">
              <div>
                <h2 className="font-bold text-lg text-slate-900">{previewResource.title}</h2>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">{previewResource.category}</p>
              </div>
              <button onClick={() => setPreviewResource(null)} className="p-2 text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="grid md:grid-cols-1 gap-6 mb-8">
                 <div className="space-y-4">
                    <p className="leading-relaxed text-slate-700">{previewResource.description}</p>
                    <div className="p-4 bg-slate-50 rounded-lg space-y-2 border border-slate-100">
                       <div className="flex justify-between text-sm"><span className="text-slate-500 font-medium">Seller:</span> <span className="font-bold text-slate-900">{previewResource.sellerName}</span></div>
                       <div className="flex justify-between text-sm"><span className="text-slate-500 font-medium">Price:</span> <span className="font-bold text-slate-900">₦{previewResource.price.toLocaleString()}</span></div>
                    </div>
                 </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 border-l-4 border-amber-600 pl-3">Document Preview</h4>
                {previewResource.fileData?.preview?.map((page, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase">Page {i + 1}</div>
                    <img src={page} alt={`Preview page ${i + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 bg-white flex justify-end">
                 <button 
                  onClick={() => { addToCart(previewResource); setPreviewResource(null); }}
                  className="px-8 py-3 bg-amber-600 text-white font-bold rounded-xl shadow-lg hover:bg-amber-700 transition-all"
                 >
                   Add to Cart - ₦{previewResource.price.toLocaleString()}
                 </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
