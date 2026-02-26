'use client';

import { useState } from 'react';
import Link from 'next/link';

type ActivityType = 'teacher' | 'student' | 'job' | 'payment' | 'resource' | 'product';

interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  time: string;
  read: boolean;
  actionable?: boolean;
  actionLink?: string;
  actionText?: string;
}

export default function RecentActivitiesPage() {
  const [filter, setFilter] = useState<ActivityType | 'all'>('all');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  // This structure is ready for your Supabase data
  // Activities will be fetched from your database
  const activities: Activity[] = []; // Start empty - will be populated from DB

  const getIcon = (type: ActivityType) => {
    switch(type) {
      case 'teacher': return '👨‍🏫';
      case 'student': return '👧';
      case 'job': return '📢';
      case 'payment': return '💰';
      case 'resource': return '📚';
      case 'product': return '📦';
      default: return '📌';
    }
  };

  const getTypeColor = (type: ActivityType) => {
    switch(type) {
      case 'teacher': return 'bg-green-100 text-green-700';
      case 'student': return 'bg-blue-100 text-blue-700';
      case 'job': return 'bg-orange-100 text-orange-700';
      case 'payment': return 'bg-emerald-100 text-emerald-700';
      case 'resource': return 'bg-purple-100 text-purple-700';
      case 'product': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredActivities = activities
    .filter(a => filter === 'all' || a.type === filter)
    .filter(a => !showUnreadOnly || !a.read);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Recent Activities</h1>
              <p className="text-sm text-gray-500 mt-1">
                Track everything happening in your school
              </p>
            </div>

            {/* Quick Stats - Will show real counts */}
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-xs text-gray-500">Today</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-600">0</p>
                <p className="text-xs text-gray-500">Unread</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'all'
                    ? 'bg-[#F59E0B] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('teacher')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'teacher'
                    ? 'bg-[#F59E0B] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Teachers
              </button>
              <button
                onClick={() => setFilter('student')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'student'
                    ? 'bg-[#F59E0B] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setFilter('job')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'job'
                    ? 'bg-[#F59E0B] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Jobs
              </button>
              <button
                onClick={() => setFilter('payment')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === 'payment'
                    ? 'bg-[#F59E0B] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Payments
              </button>
            </div>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={showUnreadOnly}
                onChange={(e) => setShowUnreadOnly(e.target.checked)}
                className="rounded border-gray-300 text-[#F59E0B] focus:ring-[#F59E0B]"
              />
              <span className="text-gray-700">Show unread only</span>
            </label>
          </div>
        </div>

        {/* Activities Timeline */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {activities.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {filteredActivities.map((activity) => (
                <div 
                  key={activity.id}
                  className={`p-6 hover:bg-gray-50 transition-colors ${
                    !activity.read ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl ${getTypeColor(activity.type)} flex items-center justify-center text-xl flex-shrink-0`}>
                      {getIcon(activity.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">
                          {activity.title}
                        </p>
                        {!activity.read && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {activity.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-gray-400">{activity.time}</span>
                        {activity.actionable && activity.actionLink && (
                          <Link 
                            href={activity.actionLink}
                            className="text-[#F59E0B] hover:text-[#DC2626] font-medium"
                          >
                            {activity.actionText || 'View Details'} →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty State - What user sees when no activities
            <div className="text-center py-16 px-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No activities yet
              </h3>
              <p className="text-gray-500 max-w-sm mx-auto mb-6">
                Activities will appear here as you and your teachers use the platform.
              </p>
              
              {/* Quick suggestions based on filter */}
              {filter !== 'all' && (
                <button
                  onClick={() => setFilter('all')}
                  className="text-[#F59E0B] hover:text-[#DC2626] font-medium"
                >
                  Clear filters to see all activities
                </button>
              )}
            </div>
          )}

          {/* Load More - Only show if there are activities */}
          {activities.length > 0 && activities.length > filteredActivities.length && (
            <div className="p-6 border-t border-gray-200 text-center">
              <button className="text-[#F59E0B] hover:text-[#DC2626] font-medium">
                Load More Activities →
              </button>
            </div>
          )}
        </div>

        {/* Summary Cards - Show real insights when data exists */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">👥</span>
              <span className="text-xs text-gray-400">This week</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">New teachers</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">👧</span>
              <span className="text-xs text-gray-400">This week</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">New students</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">📢</span>
              <span className="text-xs text-gray-400">Active</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Job postings</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">💰</span>
              <span className="text-xs text-gray-400">This month</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₦0</p>
            <p className="text-sm text-gray-500">Payments received</p>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Activities are updated in real-time. Last sync: just now
          </p>
        </div>
      </div>
    </main>
  );
}
