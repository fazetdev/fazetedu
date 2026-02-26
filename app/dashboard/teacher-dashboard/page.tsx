'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TeacherDashboard() {
  // All data starts empty - ready for Supabase

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your earnings, materials, and teaching activities
              </p>
            </div>
            
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Loading...</p>
                <p className="text-xs text-gray-500">Verified Teacher</p>
              </div>
              <Link href="/teacher/profile">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] p-0.5 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Profile Completion Banner - Only show if incomplete */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">📋</span>
              <div>
                <h2 className="font-semibold text-gray-900">Complete Your Profile</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Verified teachers earn 3x more. Complete your profile to get verified.
                </p>
              </div>
            </div>
            <Link
              href="/teacher/verify-profile"
              className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all text-center"
            >
              Complete Profile →
            </Link>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Profile Strength</span>
              <span className="font-medium text-gray-900">0%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] h-2.5 rounded-full" 
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Key Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/dashboard/teacher-dashboard/earnings" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
            <span className="text-2xl mb-2 block">💰</span>
            <p className="text-2xl font-bold text-gray-900">₦0</p>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <p className="text-xs text-gray-400 mt-1">This month: ₦0</p>
          </Link>

          <Link href="/dashboard/teacher-dashboard/materials" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
            <span className="text-2xl mb-2 block">📚</span>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Materials Sold</p>
            <p className="text-xs text-gray-400 mt-1">0 active listings</p>
          </Link>

          <Link href="/dashboard/teacher-dashboard/bookings" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
            <span className="text-2xl mb-2 block">📅</span>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Bookings</p>
            <p className="text-xs text-gray-400 mt-1">0 pending</p>
          </Link>

          <Link href="/dashboard/teacher-dashboard/students" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
            <span className="text-2xl mb-2 block">👥</span>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Students</p>
            <p className="text-xs text-gray-400 mt-1">0 active mentees</p>
          </Link>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Earnings Card */}
          <Link
            href="/dashboard/teacher-dashboard/earnings"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">💰</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Earnings</h3>
            <p className="text-sm text-gray-500 mb-4">Track your income from sales and tutoring</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Available balance</span>
              <span className="font-medium text-gray-900">₦0</span>
            </div>
          </Link>

          {/* Materials Card */}
          <Link
            href="/dashboard/teacher-dashboard/materials"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📚</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">My Materials</h3>
            <p className="text-sm text-gray-500 mb-4">Upload and sell your teaching resources</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total downloads</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>

          {/* Bookings Card */}
          <Link
            href="/dashboard/teacher-dashboard/bookings"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📅</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Bookings</h3>
            <p className="text-sm text-gray-500 mb-4">Manage your tutoring sessions</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Upcoming</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>

          {/* Students Card */}
          <Link
            href="/dashboard/teacher-dashboard/students"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">👩‍🎓</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">My Students</h3>
            <p className="text-sm text-gray-500 mb-4">Track your mentees and their progress</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Active students</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>

          {/* Free Resources Card */}
          <Link
            href="/dashboard/teacher-dashboard/free-resources"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📂</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">Upload →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Free Resources</h3>
            <p className="text-sm text-gray-500 mb-4">Share helpful materials with other teachers</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Your uploads</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>

          {/* Jobs Card */}
          <Link
            href="/dashboard/teacher-dashboard/jobs"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📢</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">Browse →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Teaching Jobs</h3>
            <p className="text-sm text-gray-500 mb-4">Find new teaching opportunities</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">New this week</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>
        </div>

        {/* Quick Actions for New Teachers */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="font-semibold text-gray-900 mb-4">Get Started as a Teacher</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/teacher/verify-profile"
              className="bg-white rounded-lg p-4 text-sm hover:shadow-md transition-all"
            >
              <span className="text-2xl mb-2 block">✅</span>
              <span className="font-medium text-gray-900">1. Verify your profile</span>
              <p className="text-xs text-gray-500 mt-1">Build trust with students</p>
            </Link>
            
            <Link
              href="/dashboard/teacher-dashboard/materials/upload"
              className="bg-white rounded-lg p-4 text-sm hover:shadow-md transition-all"
            >
              <span className="text-2xl mb-2 block">📤</span>
              <span className="font-medium text-gray-900">2. Upload first material</span>
              <p className="text-xs text-gray-500 mt-1">Start earning from your resources</p>
            </Link>
            
            <Link
              href="/dashboard/teacher-dashboard/jobs"
              className="bg-white rounded-lg p-4 text-sm hover:shadow-md transition-all"
            >
              <span className="text-2xl mb-2 block">🔍</span>
              <span className="font-medium text-gray-900">3. Find teaching jobs</span>
              <p className="text-xs text-gray-500 mt-1">Apply to schools hiring now</p>
            </Link>
          </div>
        </div>

        {/* Recent Activity - Empty State */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="text-center py-8">
            <span className="text-4xl mb-3 block">📭</span>
            <p className="text-gray-500">No recent activity</p>
            <p className="text-sm text-gray-400 mt-1">
              Your activities will appear here once you start using the platform
            </p>
          </div>
        </div>

        {/* Quick Links Footer */}
        <div className="mt-6 flex justify-center space-x-6 text-sm text-gray-400">
          <Link href="/dashboard/teacher-dashboard/earnings" className="hover:text-[#F59E0B]">Earnings</Link>
          <Link href="/dashboard/teacher-dashboard/materials" className="hover:text-[#F59E0B]">Materials</Link>
          <Link href="/dashboard/teacher-dashboard/bookings" className="hover:text-[#F59E0B]">Bookings</Link>
          <Link href="/dashboard/teacher-dashboard/students" className="hover:text-[#F59E0B]">Students</Link>
          <Link href="/dashboard/teacher-dashboard/free-resources" className="hover:text-[#F59E0B]">Free Resources</Link>
          <Link href="/dashboard/teacher-dashboard/jobs" className="hover:text-[#F59E0B]">Jobs</Link>
        </div>
      </div>
    </main>
  );
}
