'use client';

import Link from 'next/link';

export default function EarningsPage() {
  // All data starts at 0 - ready for Supabase

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
              <p className="text-sm text-gray-500 mt-1">
                Track your income from materials and tutoring
              </p>
            </div>
            <Link
              href="/dashboard/teacher-dashboard"
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-1">Available Balance</p>
            <p className="text-3xl font-bold text-gray-900">₦0</p>
            <p className="text-xs text-gray-400 mt-2">Ready to withdraw</p>
            <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-lg text-sm font-medium opacity-50 cursor-not-allowed">
              Withdraw (Min. ₦2,000)
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-1">Pending</p>
            <p className="text-3xl font-bold text-gray-900">₦0</p>
            <p className="text-xs text-gray-400 mt-2">Awaiting confirmation</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500 mb-1">Total Earned</p>
            <p className="text-3xl font-bold text-gray-900">₦0</p>
            <p className="text-xs text-gray-400 mt-2">All time</p>
          </div>
        </div>

        {/* Earnings Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Earnings Breakdown</h2>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-medium text-gray-900">Material Sales</p>
                  <p className="text-xs text-gray-500">0 items sold</p>
                </div>
              </div>
              <p className="font-semibold text-gray-900">₦0</p>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-medium text-gray-900">Tutoring Sessions</p>
                  <p className="text-xs text-gray-500">0 completed</p>
                </div>
              </div>
              <p className="font-semibold text-gray-900">₦0</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          </div>

          <div className="text-center py-12">
            <span className="text-4xl mb-3 block">💰</span>
            <p className="text-gray-500">No transactions yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Start selling materials or offering tutoring to earn
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link
                href="/dashboard/teacher-dashboard/materials/upload"
                className="text-[#F59E0B] hover:text-[#DC2626] text-sm font-medium"
              >
                Upload Material →
              </Link>
              <Link
                href="/teacher/post-service"
                className="text-[#F59E0B] hover:text-[#DC2626] text-sm font-medium"
              >
                Offer Tutoring →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
