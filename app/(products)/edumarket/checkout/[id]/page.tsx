'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import EduMarketLayout from '../../components/EduMarketLayout';
import { Resource } from '../../types';

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      router.push('/auth/login');
      return;
    }
    setUser(JSON.parse(currentUser));

    // Load resource
    if (params.id) {
      const resources = JSON.parse(localStorage.getItem('edumarket_resources') || '[]');
      const found = resources.find((r: Resource) => r.id === params.id);
      if (found) {
        setResource(found);
      } else {
        router.push('/edumarket');
      }
      setLoading(false);
    }
  }, [params.id, router]);

  const handlePayment = () => {
    if (!resource || !user) return;
    
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Create purchase record
      const purchases = JSON.parse(localStorage.getItem('edumarket_purchases') || '[]');
      
      const purchase = {
        id: Date.now().toString(),
        resourceId: resource.id,
        resourceTitle: resource.title,
        buyerId: user.id,
        buyerName: user.name,
        amount: resource.price,
        paymentMethod: paymentMethod,
        status: 'completed',
        createdAt: new Date().toISOString(),
        downloadUrl: '#', // Will be actual URL when file storage is ready
      };

      purchases.push(purchase);
      localStorage.setItem('edumarket_purchases', JSON.stringify(purchases));

      // Update resource download count
      const resources = JSON.parse(localStorage.getItem('edumarket_resources') || '[]');
      const updatedResources = resources.map((r: Resource) => {
        if (r.id === resource.id) {
          return {
            ...r,
            stats: {
              ...r.stats,
              downloads: (r.stats?.downloads || 0) + 1
            }
          };
        }
        return r;
      });
      localStorage.setItem('edumarket_resources', JSON.stringify(updatedResources));

      setProcessing(false);
      
      // Redirect to success page
      router.push(`/edumarket/purchase-success/${resource.id}`);
    }, 2000);
  };

  if (loading || !resource) {
    return (
      <EduMarketLayout>
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B5CF6] mb-6"></div>
          <h3 className="text-xl font-semibold text-gray-900">Loading Checkout...</h3>
        </div>
      </EduMarketLayout>
    );
  }

  return (
    <EduMarketLayout title="Checkout" subtitle="Complete your purchase">
      <div className="max-w-3xl mx-auto">
        {/* Purchase Summary */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Purchase Summary</h2>
          
          <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
            <div className="w-16 h-16 bg-gradient-to-br from-[#EDE9FE] to-[#FCE7F3] rounded-xl flex items-center justify-center text-2xl">
              {resource.file?.type === 'pdf' ? '📄' : '📝'}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{resource.title}</h3>
              <p className="text-sm text-gray-500">By {resource.author?.name}</p>
            </div>
            <div className="text-right">
              <span className="font-bold text-gray-900">₦{resource.price}</span>
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₦{resource.price}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600">Platform fee</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
          <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-bold text-xl text-[#8B5CF6]">₦{resource.price}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h2>
          
          <div className="space-y-3">
            <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <div className="flex-1">
                <span className="font-medium text-gray-900">Card Payment</span>
                <p className="text-xs text-gray-500">Pay with Visa, Mastercard, Verve</p>
              </div>
              <span className="text-2xl">💳</span>
            </label>

            <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={paymentMethod === 'transfer'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <div className="flex-1">
                <span className="font-medium text-gray-900">Bank Transfer</span>
                <p className="text-xs text-gray-500">Pay directly from your bank</p>
              </div>
              <span className="text-2xl">🏦</span>
            </label>

            <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="ussd"
                checked={paymentMethod === 'ussd'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <div className="flex-1">
                <span className="font-medium text-gray-900">USSD</span>
                <p className="text-xs text-gray-500">Pay using USSD code</p>
              </div>
              <span className="text-2xl">📱</span>
            </label>
          </div>
        </div>

        {/* Billing Info */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={user?.name || ''}
                readOnly
                className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={user?.email || ''}
                readOnly
                className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handlePayment}
            disabled={processing}
            className="flex-1 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
          >
            {processing ? 'Processing Payment...' : `Pay ₦${resource.price}`}
          </button>
          <Link
            href={`/edumarket/resource/${resource.id}`}
            className="flex-1 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors text-center"
          >
            Cancel
          </Link>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          🔒 Your payment information is secure. This is a demo checkout with localStorage.
        </p>
      </div>
    </EduMarketLayout>
  );
}
