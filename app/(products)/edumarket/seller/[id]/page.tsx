'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { resourceService } from '../../services';
import { Seller, Resource } from '../../types';
import ResourceCard from '../../components/ResourceCard';

export default function SellerProfilePage() {
  const { id } = useParams();
  const [seller, setSeller] = useState<Seller | null>(null);
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadSellerData();
    }
  }, [id]);

  const loadSellerData = async () => {
    setLoading(true);
    
    // Get seller info
    const sellerResult = await resourceService.getSellerById(id as string);
    if (sellerResult.data) {
      setSeller(sellerResult.data);
    }

    // Get seller's resources
    const resourcesResult = await resourceService.getResources({ sellerId: id as string }, 1, 20);
    if (resourcesResult.data) {
      setResources(resourcesResult.data);
    }

    setLoading(false);
  };

  const addToCart = (resource: Resource) => {
    const cart = JSON.parse(localStorage.getItem('edumarket_cart') || '[]');
    cart.push({
      resourceId: resource.id,
      title: resource.title,
      price: resource.price,
      authorName: resource.seller.name,
      sellerId: resource.seller.id
    });
    localStorage.setItem('edumarket_cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-32 bg-gray-200 rounded-2xl mb-6"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!seller) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">👤</span>
          <h1 className="text-2xl font-bold mb-2">Seller Not Found</h1>
          <p className="text-gray-600 mb-4">The seller you're looking for doesn't exist.</p>
          <Link href="/edumarket" className="text-[#F59E0B] hover:text-[#DC2626]">
            ← Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  const getBadgeColor = (badge: string) => {
    switch(badge) {
      case 'top-seller': return 'bg-yellow-100 text-yellow-800';
      case 'expert': return 'bg-purple-100 text-purple-800';
      case 'verified': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
          <span className="text-gray-900 font-medium">Seller Profile</span>
        </nav>

        {/* Seller Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#DC2626] flex items-center justify-center text-white text-4xl md:text-5xl font-bold mx-auto">
                {seller.avatar ? (
                  <img src={seller.avatar} alt={seller.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  seller.name.charAt(0)
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                <h1 className="text-2xl md:text-3xl font-bold">{seller.name}</h1>
                <div className="flex flex-wrap gap-2">
                  {seller.badges?.map(badge => (
                    <span key={badge} className={`px-3 py-1 text-xs rounded-full ${getBadgeColor(badge)}`}>
                      {badge.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>

              {seller.school && (
                <p className="text-gray-600 mb-2">🏫 {seller.school}</p>
              )}

              <p className="text-gray-700 mb-4 max-w-2xl">{seller.bio}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-gray-900">⭐ {seller.rating}</div>
                  <div className="text-xs text-gray-500">Seller Rating</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-gray-900">{seller.totalSales}</div>
                  <div className="text-xs text-gray-500">Total Sales</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-gray-900">{seller.totalResources}</div>
                  <div className="text-xs text-gray-500">Resources</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {new Date(seller.joinedDate).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-gray-500">Joined</div>
                </div>
              </div>

              {/* Subjects */}
              {seller.subjects && seller.subjects.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {seller.subjects.map(subject => (
                      <span key={subject} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Seller's Resources */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Resources by {seller.name}</h2>
          {resources.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl">
              <span className="text-4xl block mb-2">📚</span>
              <p className="text-gray-500">No resources yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {resources.map(resource => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
