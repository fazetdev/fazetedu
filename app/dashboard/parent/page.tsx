'use client';

import React from 'react';

export default function ParentDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="flex justify-end mb-8">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            {/* Profile Pic */}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#F59E0B] w-1/3"></div> {/* Example progress */}
          </div>
        </div>

        {/* Dashboard Containers 2x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">Bookings</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Child Progress</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Goals for Child</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Guidance</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Free Resources</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Notifications</div>
        </div>
      </div>
    </main>
  );
}
