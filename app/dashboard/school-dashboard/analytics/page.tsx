'use client';

import { useState } from 'react';
import Link from 'next/link';

type TimeRange = 'today' | 'week' | 'month' | 'term';

export default function SchoolAnalyticsPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>('month');

  // These will come from your database
  // All start at 0 - no fake data

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
              <p className="text-sm text-gray-500 mt-1">
                Track your school's performance
              </p>
            </div>

            {/* Time Range Selector */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setTimeRange('today')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === 'today'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Today
              </button>
              <button
                onClick={() => setTimeRange('week')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === 'week'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                This Week
              </button>
              <button
                onClick={() => setTimeRange('month')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === 'month'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                This Month
              </button>
              <button
                onClick={() => setTimeRange('term')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === 'term'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                This Term
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">Total Students</span>
              <span className="text-xs text-gray-400">All time</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <span className="text-gray-400">vs last {timeRange}:</span>
              <span className="ml-1 text-gray-400">0</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">Total Teachers</span>
              <span className="text-xs text-gray-400">All time</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <span className="text-gray-400">vs last {timeRange}:</span>
              <span className="ml-1 text-gray-400">0</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">Total Classes</span>
              <span className="text-xs text-gray-400">All time</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <span className="text-gray-400">vs last {timeRange}:</span>
              <span className="ml-1 text-gray-400">0</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500">Active Products</span>
              <span className="text-xs text-gray-400">Current</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <div className="flex items-center mt-2 text-xs">
              <Link href="/smart-school" className="text-[#F59E0B] hover:text-[#DC2626]">
                Browse Products →
              </Link>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Attendance Chart Placeholder */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Attendance Overview</h2>
              <span className="text-xs text-gray-400">Last 30 days</span>
            </div>
            
            <div className="h-64 flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-200 rounded-lg bg-gray-50">
              <span className="text-4xl mb-3">📊</span>
              <p className="text-sm font-medium">No attendance data yet</p>
              <p className="text-xs text-center mt-1 max-w-xs">
                Attendance records will appear once you start using the digital register
              </p>
              <Link 
                href="/smart-school/register"
                className="mt-4 text-sm text-[#F59E0B] hover:text-[#DC2626]"
              >
                Set up Digital Register →
              </Link>
            </div>
          </div>

          {/* Revenue Chart Placeholder */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Fee Collection</h2>
              <span className="text-xs text-gray-400">This term</span>
            </div>
            
            <div className="h-64 flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-200 rounded-lg bg-gray-50">
              <span className="text-4xl mb-3">💰</span>
              <p className="text-sm font-medium">No payment data yet</p>
              <p className="text-xs text-center mt-1 max-w-xs">
                Fee collections will appear once you start using Fee Manager
              </p>
              <Link 
                href="/smart-school/fees"
                className="mt-4 text-sm text-[#F59E0B] hover:text-[#DC2626]"
              >
                Set up Fee Manager →
              </Link>
            </div>
          </div>
        </div>

        {/* Recruitment Section */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recruitment</h2>
              <Link 
                href="/dashboard/school-dashboard/post-jobs"
                className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
              >
                Post a Job →
              </Link>
            </div>
          </div>

          <div className="p-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Jobs Posted</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-400 mt-1">All time</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-400 mt-1">Currently hiring</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Applications</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-400 mt-1">Total received</p>
              </div>
            </div>

            {/* Quick tips when no data */}
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">💡</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Start recruiting teachers</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Post your first job to start receiving applications from qualified teachers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Usage */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Resource Usage</h2>
              <Link 
                href="/dashboard/school-dashboard/free-resources"
                className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
              >
                View Resources →
              </Link>
            </div>
          </div>

          <div className="p-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Resources Uploaded</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Downloads</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Active Contributors</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Analytics are updated in real-time. Last updated: just now
          </p>
        </div>
      </div>
    </main>
  );
}
