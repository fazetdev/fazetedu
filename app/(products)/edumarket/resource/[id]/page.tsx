'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { resourceService } from '../../services';
import { Resource, Review } from '../../types';
import SellerCard from '../../components/SellerCard';

export default function ResourceDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [resource, setResource] = useState<Resource | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      loadResource();
    }
  }, [id]);

  const loadResource = async () => {
    setLoading(true);
    const result = await resourceService.getResourceById(id as string);
    if (result.data) {
      setResource(result.data);
      // Load related resources (same category/subject)
      const related = await resourceService.getResources({
        category: result.data.category,
        class_: result.data.class_,
        sellerId: result.data.seller.id
      }, 1, 4);
      setRelatedResources(related.data?.filter(r => r.id !== result.data?.id) || []);
    }
    setLoading(false);
  };

  const handleAddToCart = () => {
    if (!resource) return;
    const cart = JSON.parse(localStorage.getItem('edumarket_cart') || '[]');
    cart.push({
      resourceId: resource.id,
      title: resource.title,
      price: resource.price,
      sellerName: resource.seller.name,
      sellerId: resource.seller.id
    });
    localStorage.setItem('edumarket_cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/edumarket/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-200 rounded-2xl h-96 mb-4"></div>
              </div>
              <div className="bg-gray-200 rounded-2xl h-96"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">📚</span>
          <h1 className="text-2xl font-bold mb-2">Resource Not Found</h1>
          <p className="text-gray-600 mb-4">The resource you're looking for doesn't exist.</p>
          <Link href="/edumarket" className="text-[#F59E0B] hover:text-[#DC2626]">
            ← Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
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
    return icons[category] || '📄';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <Link href="/edumarket" className="text-gray-500 hover:text-[#F59E0B]">
            Marketplace
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={`/edumarket?category=${resource.category}`} className="text-gray-500 hover:text-[#F59E0B]">
            {resource.category.replace('-', ' ')}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium truncate">{resource.title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              {/* Preview Area */}
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                {resource.preview?.images?.[0] ? (
                  <img
                    src={resource.preview.images[0]}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-8xl opacity-30">{getCategoryIcon(resource.category)}</span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                    {getCategoryIcon(resource.category)} {resource.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Preview Button */}
                {resource.file.previewUrl && (
                  <button className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white transition-colors">
                    🔍 Preview
                  </button>
                )}
              </div>

              {/* Tabs */}
              <div className="border-b">
                <div className="flex px-6">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === 'details'
                        ? 'border-[#F59E0B] text-[#F59E0B]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === 'reviews'
                        ? 'border-[#F59E0B] text-[#F59E0B]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Reviews ({resource.stats.reviewCount})
                  </button>
                  <button
                    onClick={() => setActiveTab('qa')}
                    className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === 'qa'
                        ? 'border-[#F59E0B] text-[#F59E0B]'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Q&A
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">{resource.title}</h2>
                      <p className="text-gray-700 leading-relaxed">{resource.description}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Class</div>
                        <div className="font-medium">{resource.class_}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Subject</div>
                        <div className="font-medium">{resource.subject}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Pages</div>
                        <div className="font-medium">{resource.file.pages || 'N/A'}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">File Type</div>
                        <div className="font-medium uppercase">{resource.file.type}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {resource.tags.map(tag => (
                          <Link
                            key={tag}
                            href={`/edumarket?tag=${tag}`}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="text-center py-8 text-gray-500">
                    <span className="text-4xl block mb-2">💬</span>
                    <p>Reviews coming soon</p>
                  </div>
                )}

                {activeTab === 'qa' && (
                  <div className="text-center py-8 text-gray-500">
                    <span className="text-4xl block mb-2">❓</span>
                    <p>Questions & answers coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ₦{resource.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                  + VAT if applicable
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-medium">{resource.stats.rating}</span>
                  <span className="text-gray-400 text-sm">({resource.stats.reviewCount})</span>
                </div>
                <div className="text-gray-400">•</div>
                <div className="text-sm text-gray-600">
                  {resource.stats.downloads} downloads
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={handleBuyNow}
                  className="w-full py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3 border-2 border-[#F59E0B] text-[#F59E0B] rounded-xl font-semibold hover:bg-[#F59E0B] hover:text-white transition-all"
                >
                  Add to Cart
                </button>
              </div>

              {/* Seller Info */}
              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-4">Seller Information</h3>
                <SellerCard seller={resource.seller} compact />
                
                <div className="mt-4 space-y-2 text-sm">
                  <button className="w-full py-2 text-[#F59E0B] hover:text-[#DC2626] font-medium">
                    Contact Seller
                  </button>
                  <Link
                    href={`/edumarket?seller=${resource.seller.id}`}
                    className="block w-full text-center py-2 text-gray-600 hover:text-gray-900"
                  >
                    View All Resources
                  </Link>
                </div>
              </div>

              {/* Guarantee */}
              <div className="mt-6 pt-6 border-t text-xs text-gray-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">✓</span>
                  <span>Instant download after purchase</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500">✓</span>
                  <span>Secure payment with Paystack</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">More from this Seller</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedResources.map(item => (
                <Link key={item.id} href={`/edumarket/resource/${item.id}`}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all">
                    <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-3xl">
                      {getCategoryIcon(item.category)}
                    </div>
                    <h3 className="font-medium text-sm mb-1 line-clamp-2">{item.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold">₦{item.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">⭐ {item.stats.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
