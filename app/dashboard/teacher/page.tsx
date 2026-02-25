'use client';

import React from 'react';

export default function TeacherDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Profile Pic & Progress */}
        <div className="flex justify-end mb-8">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            {/* Profile Pic */}
          </div>
        </div>
        <div className="mb-8">
          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#F59E0B] w-1/2"></div> {/* Example progress */}
          </div>
        </div>

        {/* Dashboard Containers 2x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">Earnings</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Materials for Sale</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Bookings</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Students/Mentees</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Ratings</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Posted Jobs</div>
          <div className="bg-white p-6 rounded-2xl shadow-md">Add Free Resources</div>
        </div>

      </div>
    </main>
  );
}
