'use client';

import Image from 'next/image';
import profilePic from '@/public/file.svg';

export default function ParentDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#F59E0B]">
            <Image src={profilePic} alt="Profile" width={64} height={64} />
          </div>
        </div>

        {/* Profile Progress */}
        <div className="mb-8">
          <label className="text-gray-700 font-medium">Profile Completion</label>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
            <div className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] h-4 rounded-full w-3/5"></div>
          </div>
        </div>

        {/* Dashboard Containers */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-40">
            <span className="text-3xl mb-2">📅</span>
            <h2 className="font-semibold text-gray-900 text-lg">Bookings</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-40">
            <span className="text-3xl mb-2">📊</span>
            <h2 className="font-semibold text-gray-900 text-lg">Child Progress</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-40">
            <span className="text-3xl mb-2">🎯</span>
            <h2 className="font-semibold text-gray-900 text-lg">Goals</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-40">
            <span className="text-3xl mb-2">📝</span>
            <h2 className="font-semibold text-gray-900 text-lg">Guidance</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-40">
            <span className="text-3xl mb-2">📚</span>
            <h2 className="font-semibold text-gray-900 text-lg">Free Resources</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center h-40">
            <span className="text-3xl mb-2">👤</span>
            <h2 className="font-semibold text-gray-900 text-lg">Profile</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
