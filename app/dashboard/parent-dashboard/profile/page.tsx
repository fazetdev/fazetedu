'use client';

import Link from 'next/link';

export default function ParentProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your account information
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] rounded-full flex items-center justify-center text-3xl text-white">
                👤
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Loading...</h2>
                <p className="text-sm text-gray-500">Parent</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Full Name</label>
                <p className="font-medium text-gray-900">--</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="font-medium text-gray-900">--</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <p className="font-medium text-gray-900">--</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Address</label>
                <p className="font-medium text-gray-900">--</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Verification Status</h3>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Pending</span>
                <p className="text-sm text-gray-500">Verify your account to access all features</p>
              </div>
            </div>

            <div className="pt-4 flex space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium">
                Edit Profile
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-xl font-medium">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
