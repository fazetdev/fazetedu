'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ParentDashboard() {
  // All data starts empty - ready for Supabase

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">
                Track your child's progress and school activities
              </p>
            </div>
            
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Loading...</p>
                <p className="text-xs text-gray-500">Parent</p>
              </div>
              <Link href="/dashboard/parent-dashboard/profile">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] p-0.5 cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                    <span className="text-2xl">👪</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Children Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">My Children</h2>
            <Link 
              href="/dashboard/parent-dashboard/children/add" 
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              + Add Child
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Child Card */}
            <Link href="/dashboard/parent-dashboard/children" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    👧
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">No child added yet</h3>
                    <p className="text-xs text-gray-500">Add your child to get started</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Add Child Card */}
            <Link
              href="/dashboard/parent-dashboard/children/add"
              className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-5 flex flex-col items-center justify-center hover:border-[#F59E0B] transition-all group"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">+</span>
              <span className="text-sm font-medium text-gray-600 group-hover:text-[#F59E0B]">Add Another Child</span>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/dashboard/parent-dashboard/bookings" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
            <span className="text-2xl mb-2 block">📅</span>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Upcoming Events</p>
          </Link>

          <Link href="/dashboard/parent-dashboard/payments" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
            <span className="text-2xl mb-2 block">💰</span>
            <p className="text-2xl font-bold text-gray-900">₦0</p>
            <p className="text-sm text-gray-500">Fees Due</p>
          </Link>

          <Link href="/dashboard/parent-dashboard/progress" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
            <span className="text-2xl mb-2 block">📊</span>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">New Reports</p>
          </Link>

          <Link href="/dashboard/parent-dashboard/messages" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
            <span className="text-2xl mb-2 block">📢</span>
            <p className="text-2xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">Announcements</p>
          </Link>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bookings Card */}
          <Link
            href="/dashboard/parent-dashboard/bookings"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📅</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Bookings</h3>
            <p className="text-sm text-gray-500 mb-4">Tutoring sessions and appointments</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Upcoming</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>

          {/* Child Progress Card */}
          <Link
            href="/dashboard/parent-dashboard/progress"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📊</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Child Progress</h3>
            <p className="text-sm text-gray-500 mb-4">Academic performance and attendance</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Average</span>
              <span className="font-medium text-gray-900">0%</span>
            </div>
          </Link>

          {/* Goals Card */}
          <Link
            href="/dashboard/parent-dashboard/goals"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">🎯</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Learning Goals</h3>
            <p className="text-sm text-gray-500 mb-4">Track progress towards targets</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Achieved</span>
              <span className="font-medium text-gray-900">0/0</span>
            </div>
          </Link>

          {/* Guidance Card */}
          <Link
            href="/dashboard/parent-dashboard/guidance"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📝</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Guidance</h3>
            <p className="text-sm text-gray-500 mb-4">Career advice and counseling notes</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">New notes</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>

          {/* Free Resources Card */}
          <Link
            href="/dashboard/parent-dashboard/resources"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📚</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">Browse →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Free Resources</h3>
            <p className="text-sm text-gray-500 mb-4">Learning materials for your child</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">New this week</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>

          {/* Profile Card */}
          <Link
            href="/dashboard/parent-dashboard/profile"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">👤</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">Edit →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Profile</h3>
            <p className="text-sm text-gray-500 mb-4">Manage your account and preferences</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Verification</span>
              <span className="font-medium text-yellow-600">Pending</span>
            </div>
          </Link>

          {/* Payments Card */}
          <Link
            href="/dashboard/parent-dashboard/payments"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">💰</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Payments</h3>
            <p className="text-sm text-gray-500 mb-4">School fees and transaction history</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Outstanding</span>
              <span className="font-medium text-red-600">₦0</span>
            </div>
          </Link>

          {/* Messages Card */}
          <Link
            href="/dashboard/parent-dashboard/messages"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📧</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Messages</h3>
            <p className="text-sm text-gray-500 mb-4">Communications with teachers</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Unread</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>

          {/* Activities Card */}
          <Link
            href="/dashboard/parent-dashboard/activities"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">📋</span>
              <span className="text-xs text-gray-400 group-hover:text-[#F59E0B]">View all →</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Activities</h3>
            <p className="text-sm text-gray-500 mb-4">Complete history of your interactions</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Recent</span>
              <span className="font-medium text-gray-900">0</span>
            </div>
          </Link>
        </div>

        {/* Recent Activity Feed */}
        <div className="mt-8">
          <Link href="/dashboard/parent-dashboard/activities" className="block">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Recent Activity</h3>
                <span className="text-sm text-[#F59E0B]">View all →</span>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="p-4 flex items-start space-x-3">
                  <span className="text-2xl">📊</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New report available</p>
                    <p className="text-xs text-gray-500">Mid-term results for your child</p>
                  </div>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
                
                <div className="p-4 flex items-start space-x-3">
                  <span className="text-2xl">💰</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Fee payment reminder</p>
                    <p className="text-xs text-gray-500">Second term fees due in 5 days</p>
                  </div>
                  <span className="text-xs text-gray-400">Yesterday</span>
                </div>
                
                <div className="p-4 flex items-start space-x-3 opacity-50">
                  <span className="text-2xl">📅</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">No more activities</p>
                    <p className="text-xs text-gray-500">Start using the platform to see more</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            href="/dashboard/parent-dashboard/payments"
            className="p-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-center hover:shadow-md"
          >
            💰 Pay Fees
          </Link>
          <Link
            href="/dashboard/parent-dashboard/messages"
            className="p-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-center hover:shadow-md"
          >
            📧 Contact Teacher
          </Link>
          <Link
            href="/dashboard/parent-dashboard/bookings"
            className="p-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-center hover:shadow-md"
          >
            📅 View Schedule
          </Link>
          <Link
            href="/parent/find-tutor"
            className="p-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-center hover:shadow-md"
          >
            🔍 Find Tutor
          </Link>
        </div>

        {/* Need Help? */}
        <div className="mt-8 bg-gradient-to-r from-[#F59E0B]/10 to-[#DC2626]/10 rounded-xl p-5 border border-[#F59E0B]/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">❓</span>
              <div>
                <h4 className="font-medium text-gray-900">Need help with the platform?</h4>
                <p className="text-sm text-gray-600">Chat with our support team</p>
              </div>
            </div>
            <a 
              href="https://wa.me/234..." 
              className="px-6 py-2 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

        {/* Quick Links Footer */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <Link href="/dashboard/parent-dashboard/children" className="hover:text-[#F59E0B]">Children</Link>
          <Link href="/dashboard/parent-dashboard/bookings" className="hover:text-[#F59E0B]">Bookings</Link>
          <Link href="/dashboard/parent-dashboard/progress" className="hover:text-[#F59E0B]">Progress</Link>
          <Link href="/dashboard/parent-dashboard/goals" className="hover:text-[#F59E0B]">Goals</Link>
          <Link href="/dashboard/parent-dashboard/guidance" className="hover:text-[#F59E0B]">Guidance</Link>
          <Link href="/dashboard/parent-dashboard/resources" className="hover:text-[#F59E0B]">Resources</Link>
          <Link href="/dashboard/parent-dashboard/payments" className="hover:text-[#F59E0B]">Payments</Link>
          <Link href="/dashboard/parent-dashboard/messages" className="hover:text-[#F59E0B]">Messages</Link>
          <Link href="/dashboard/parent-dashboard/activities" className="hover:text-[#F59E0B]">Activities</Link>
          <Link href="/dashboard/parent-dashboard/profile" className="hover:text-[#F59E0B]">Profile</Link>
        </div>
      </div>
    </main>
  );
}
