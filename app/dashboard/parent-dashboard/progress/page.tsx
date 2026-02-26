'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProgressPage() {
  const [selectedChild, setSelectedChild] = useState('all');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Academic Progress</h1>
              <p className="text-sm text-gray-500 mt-1">
                Track your child's performance and attendance
              </p>
            </div>
            <Link
              href="/dashboard/parent-dashboard"
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Child Selector */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <select
            value={selectedChild}
            onChange={(e) => setSelectedChild(e.target.value)}
            className="w-full md:w-64 border border-gray-300 rounded-lg px-4 py-2 text-sm"
          >
            <option value="all">All Children</option>
            <option value="1">Amina Abubakar - JSS 2</option>
            <option value="2">Ibrahim Abubakar - SS 1</option>
          </select>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Average Score</p>
            <p className="text-2xl font-bold text-gray-900">--</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Attendance</p>
            <p className="text-2xl font-bold text-gray-900">--%</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Tests Taken</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Rank in Class</p>
            <p className="text-2xl font-bold text-gray-900">--</p>
          </div>
        </div>

        {/* Subjects Performance */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Subject Performance</h2>
          </div>

          <div className="text-center py-12">
            <span className="text-4xl mb-3 block">📊</span>
            <p className="text-gray-500">No data available yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Progress reports will appear once your child is enrolled
            </p>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
          </div>

          <div className="text-center py-8">
            <p className="text-gray-500">No reports available</p>
          </div>
        </div>
      </div>
    </main>
  );
}
