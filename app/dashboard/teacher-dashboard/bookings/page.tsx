'use client';

import Link from 'next/link';
import { useState } from 'react';

type BookingStatus = 'upcoming' | 'completed' | 'cancelled';

export default function BookingsPage() {
  const [filter, setFilter] = useState<BookingStatus | 'all'>('all');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your tutoring sessions
              </p>
            </div>
            <Link
              href="/dashboard/teacher-dashboard"
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === 'all'
                  ? 'bg-[#F59E0B] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === 'upcoming'
                  ? 'bg-[#F59E0B] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === 'completed'
                  ? 'bg-[#F59E0B] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Your Sessions</h2>
          </div>

          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">📅</span>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-500 mb-6">
              When parents book your tutoring services, they'll appear here
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
