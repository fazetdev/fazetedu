'use client';

import Link from 'next/link';

export default function SellerPromo() {
  return (
    <div className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] rounded-2xl p-8 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Start Selling Your Educational Resources</h2>
        <p className="text-white/90 mb-6">
          Join thousands of educators earning passive income by sharing their lesson notes, 
          worksheets, and educational materials with schools across Nigeria.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/edumarket/sell"
            className="px-6 py-3 bg-white text-[#DC2626] rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Start Selling Today
          </Link>
          <Link
            href="/edumarket"
            className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all"
          >
            Browse Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
