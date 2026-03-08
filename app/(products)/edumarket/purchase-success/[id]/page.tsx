'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import EduMarketLayout from '../../components/EduMarketLayout';
import { Resource } from '../../types';

export default function PurchaseSuccessPage() {
  const params = useParams();
  const router = useRouter();
  const [resource, setResource] = useState<Resource | null>(null);
  const [purchase, setPurchase] = useState<any>(null);

  useEffect(() => {
    if (params.id) {
      // Get resource
      const resources = JSON.parse(localStorage.getItem('edumarket_resources') || '[]');
      const found = resources.find((r: Resource) => r.id === params.id);
      setResource(found || null);

      // Get purchase
      const purchases = JSON.parse(localStorage.getItem('edumarket_purchases') || '[]');
      const foundPurchase = purchases.find((p: any) => p.resourceId === params.id);
      setPurchase(foundPurchase || null);
    }
  }, [params.id]);

  const handleDownload = () => {
    alert('Download functionality will be available when file storage is implemented.');
  };

  if (!resource || !purchase) {
    return (
      <EduMarketLayout>
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B5CF6] mx-auto mb-6"></div>
          <p className="text-gray-600">Loading purchase details...</p>
        </div>
      </EduMarketLayout>
    );
  }

  return (
    <EduMarketLayout>
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-5xl">✅</span>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Purchase Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your resource is ready to download.
        </p>

        {/* Purchase Details */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 text-left">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Purchase Details</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Resource:</span>
              <span className="font-medium text-gray-900">{resource.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount paid:</span>
              <span className="font-bold text-[#8B5CF6]">₦{purchase.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment method:</span>
              <span className="font-medium text-gray-900 capitalize">{purchase.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium text-gray-900">
                {new Date(purchase.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction ID:</span>
              <span className="font-medium text-gray-900 text-sm">{purchase.id}</span>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white font-bold rounded-xl hover:shadow-lg transition-all mb-4"
        >
          📥 Download Resource
        </button>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/edumarket"
            className="py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Browse More
          </Link>
          <Link
            href={`/edumarket/resource/${resource.id}`}
            className="py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            View Resource
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          A receipt has been sent to your email. You can access your purchases anytime from your dashboard.
        </p>
      </div>
    </EduMarketLayout>
  );
}
