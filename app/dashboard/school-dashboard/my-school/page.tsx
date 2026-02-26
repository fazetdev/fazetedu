'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MySchoolPage() {
  // This will connect to Supabase later
  // For now, showing real-looking data that makes sense to a school owner

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Clean and professional */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My School</h1>
              <p className="text-sm text-gray-500 mt-1">Manage your school profile and products</p>
            </div>
            <Link
              href="/dashboard/school-dashboard/settings"
              className="px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all"
            >
              Edit School Info
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* School Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex items-start space-x-4">
            {/* School Logo Placeholder */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
              SH
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-xl font-bold text-gray-900">Sunset High School</h2>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Active</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Since 2024</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">contact@sunset.edu.ng</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium">070 1234 5678</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium">Kano, Nigeria</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Registration</p>
                  <p className="text-sm font-medium">RC1234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats - What school owners actually care about */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">👥</span>
              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+12 this term</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">456</p>
            <p className="text-sm text-gray-500">Total Students</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">👨‍🏫</span>
              <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">3 pending</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">24</p>
            <p className="text-sm text-gray-500">Teachers</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">📚</span>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">8 classes</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-500">Arms/Streams</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">💰</span>
              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">₦2.4M this term</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₦4.2M</p>
            <p className="text-sm text-gray-500">Expected Fees</p>
          </div>
        </div>

        {/* Two Column Layout - Products and Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Your School Products</h3>
              <Link
                href="/smart-school"
                className="text-sm text-[#F59E0B] hover:text-[#DC2626] font-medium"
              >
                + Add Product
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Digital Register Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">📋</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Digital Register</h4>
                      <p className="text-xs text-gray-500">Used by 18 teachers</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Last sync: 2 mins ago</span>
                  <Link href="/dashboard/school-dashboard/products/register" className="text-[#F59E0B] hover:text-[#DC2626]">
                    Manage →
                  </Link>
                </div>
              </div>

              {/* Fee Manager Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">💰</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fee Manager</h4>
                      <p className="text-xs text-gray-500">₦1.8M collected</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">45 payments pending</span>
                  <Link href="/dashboard/school-dashboard/products/fees" className="text-[#F59E0B] hover:text-[#DC2626]">
                    Manage →
                  </Link>
                </div>
              </div>

              {/* Lesson Planner Card - Trial */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">📚</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Lesson Planner</h4>
                      <p className="text-xs text-gray-500">8 teachers using</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">5 days left</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Trial ending soon</span>
                    <Link href="/dashboard/school-dashboard/products/planner" className="text-[#F59E0B] hover:text-[#DC2626]">
                      Upgrade →
                    </Link>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

              {/* Add Product Card */}
              <Link
                href="/smart-school"
                className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-5 flex flex-col items-center justify-center text-gray-400 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all group"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">+</span>
                <span className="text-sm font-medium">Add New Product</span>
                <span className="text-xs mt-1 text-center">Digital Register, Fee Manager, Lesson Planner</span>
              </Link>
            </div>

            {/* TeacherEarn for School */}
            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl">💰</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Your Teachers on TeacherEarn</h4>
                    <p className="text-sm text-gray-600 mt-1">8 teachers from your school have earned ₦124,500 total</p>
                    <p className="text-xs text-gray-500 mt-2">They earn extra. You keep good teachers.</p>
                  </div>
                </div>
                <Link
                  href="/teacherearn/school"
                  className="px-4 py-2 bg-white text-green-600 rounded-lg text-sm font-medium border border-green-200 hover:bg-green-50"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Recent */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 flex items-center space-x-3">
                  <span>📧</span>
                  <span>Message all parents</span>
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 flex items-center space-x-3">
                  <span>📊</span>
                  <span>Generate term report</span>
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 flex items-center space-x-3">
                  <span>📅</span>
                  <span>Create event</span>
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 flex items-center space-x-3">
                  <span>👨‍🏫</span>
                  <span>Invite teacher</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm">
                  <span className="text-green-500">✓</span>
                  <div>
                    <p className="text-gray-900">New teacher joined</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <span className="text-blue-500">💰</span>
                  <div>
                    <p className="text-gray-900">Fee payment received</p>
                    <p className="text-xs text-gray-500">Form 3A · ₦45,000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <span className="text-orange-500">📚</span>
                  <div>
                    <p className="text-gray-900">Lesson plans submitted</p>
                    <p className="text-xs text-gray-500">8 teachers · 1 hour ago</p>
                  </div>
                </div>
              </div>
              <Link href="/dashboard/school-dashboard/activities" className="block text-center text-sm text-[#F59E0B] mt-4 hover:text-[#DC2626]">
                View all →
              </Link>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-xl p-5 text-white">
              <span className="text-3xl mb-2 block">🎓</span>
              <h4 className="font-semibold mb-1">Need help?</h4>
              <p className="text-sm text-white/90 mb-3">I'm here to help you set up. Former teacher, now building this for you.</p>
              <a href="https://wa.me/234..." className="block text-center bg-white text-gray-900 rounded-lg py-2 text-sm font-medium hover:bg-gray-100">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
