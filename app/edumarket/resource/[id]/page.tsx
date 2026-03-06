'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResourcePage() {
  const params = useParams();
  const router = useRouter();
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    const resources = JSON.parse(localStorage.getItem('edumarket_resources') || '[]');
    const found = resources.find((r: any) => r.id === params.id);
    setResource(found);
  }, [params.id]);

  if (!resource) {
    return (
      <main className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  const handleBuy = () => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      router.push('/auth/login');
      return;
    }
    alert('Purchase functionality coming soon!');
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/edumarket" className="text-[#8B5CF6] mb-4 inline-block">
          ← Back to Marketplace
        </Link>

        <div className="bg-white rounded-xl border p-6">
          <h1 className="text-2xl font-bold mb-4">{resource.title}</h1>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="mb-4">
                <span className="text-sm text-gray-500">Category</span>
                <p className="font-medium capitalize">{resource.category}</p>
              </div>
              
              <div className="mb-4">
                <span className="text-sm text-gray-500">Seller</span>
                <p className="font-medium">{resource.author}</p>
              </div>
              
              <div>
                <span className="text-sm text-gray-500">Date Added</span>
                <p className="font-medium">{new Date(resource.date).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6">
              <p className="text-3xl font-bold text-[#8B5CF6] mb-4">₦{resource.price}</p>
              <button
                onClick={handleBuy}
                className="w-full py-3 bg-[#8B5CF6] text-white rounded-xl font-semibold hover:bg-[#7C3AED]"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
