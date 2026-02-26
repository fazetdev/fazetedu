'use client';

import Link from 'next/link';

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Materials</h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your teaching resources
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard/teacher-dashboard"
                className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
              >
                ← Back
              </Link>
              <Link
                href="/dashboard/teacher-dashboard/materials/upload"
                className="px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl text-sm font-medium hover:shadow-lg"
              >
                + Upload New
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Total Materials</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Total Downloads</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Total Earned</p>
            <p className="text-2xl font-bold text-gray-900">₦0</p>
          </div>
        </div>

        {/* Materials List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Your Resources</h2>
          </div>

          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">📚</span>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No materials yet</h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
              Upload your first teaching resource and start earning
            </p>
            <Link
              href="/dashboard/teacher-dashboard/materials/upload"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium"
            >
              Upload Your First Material
            </Link>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
          <p className="text-sm text-gray-700">
            <span className="font-medium">💡 Pro tip:</span> Materials with cover images and detailed descriptions get 3x more downloads.
          </p>
        </div>
      </div>
    </main>
  );
}
