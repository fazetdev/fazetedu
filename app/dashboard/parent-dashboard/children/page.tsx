'use client';

import Link from 'next/link';

export default function ChildrenPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Children</h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your children's profiles and track their progress
              </p>
            </div>
            <Link
              href="/dashboard/parent-dashboard/children/add"
              className="px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl text-sm font-medium hover:shadow-lg"
            >
              + Add Child
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Child Card - Will be populated from DB */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  👧
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">No child added</h3>
                  <p className="text-sm text-gray-500">Class: --</p>
                  <p className="text-xs text-gray-400">Admission: --</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Link href="/dashboard/parent-dashboard/progress" className="text-center p-2 bg-gray-50 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                📊 Progress
              </Link>
              <Link href="/dashboard/parent-dashboard/goals" className="text-center p-2 bg-gray-50 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                🎯 Goals
              </Link>
            </div>
          </div>

          {/* Add Child Card */}
          <Link
            href="/dashboard/parent-dashboard/children/add"
            className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center hover:border-[#F59E0B] transition-all group"
          >
            <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">+</span>
            <span className="text-lg font-medium text-gray-600 group-hover:text-[#F59E0B]">Add a Child</span>
            <p className="text-sm text-gray-400 mt-2 text-center">
              Add your child to start tracking their progress
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
