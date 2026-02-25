'use client';

import { useState } from 'react';

const schoolModules = [
  { id: 'products', name: 'Products', description: 'Manage and access school products', icon: '📦' },
  { id: 'students', name: 'Students', description: 'Manage your students', icon: '👨‍🎓' },
  { id: 'teachers', name: 'Teachers', description: 'Manage your teachers', icon: '👩‍🏫' },
  { id: 'post-jobs', name: 'Post Jobs', description: 'Post teaching opportunities', icon: '📢' },
  { id: 'free-resources', name: 'Free Resources', description: 'Add or view free educational materials', icon: '📚' },
  { id: 'analytics', name: 'Analytics', description: 'View school performance metrics', icon: '📊' },
];

export default function SchoolDashboardPage() {
  const [profileProgress, setProfileProgress] = useState(70); // Example progress

  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">School Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-gray-700 font-semibold">School Name</p>
            <p className="text-gray-500 text-sm">Admin</p>
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F59E0B]">
            <img src="/vercel.svg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Profile Progress */}
      <div className="mb-12">
        <p className="text-gray-700 font-medium mb-2">Profile Completion</p>
        <div className="w-full bg-[#FEF3C7] rounded-full h-4">
          <div
            className="h-4 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626]"
            style={{ width: `${profileProgress}%` }}
          />
        </div>
      </div>

      {/* Dashboard Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schoolModules.map((module) => (
          <div
            key={module.id}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all flex flex-col"
          >
            <div className="text-4xl mb-4">{module.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{module.name}</h3>
            <p className="text-gray-600 flex-1">{module.description}</p>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white font-semibold rounded-xl hover:shadow-md transition-all">
              Open
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
