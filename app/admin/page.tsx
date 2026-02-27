'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DashboardStats {
  // Schools
  totalSchools: number;
  pendingSchools: number;
  
  // Teachers
  totalTeachers: number;
  pendingVerification: number;
  
  // Financial
  totalRevenue: number;
  pendingPayouts: number;
  
  // Jobs & Resources
  activeJobs: number;
  resourcesUploaded: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalSchools: 0,
    pendingSchools: 0,
    totalTeachers: 0,
    pendingVerification: 0,
    totalRevenue: 0,
    pendingPayouts: 0,
    activeJobs: 0,
    resourcesUploaded: 0
  });

  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Fix hydration error by setting time on client only
  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
    
    // TODO: Connect to Supabase
    // For now, show realistic but ACHIEVABLE starter numbers
    setStats({
      totalSchools: 5,        // Your first 5 schools in Kano
      pendingSchools: 2,       // 2 more waiting approval
      totalTeachers: 18,       // Average 3-4 teachers per school
      pendingVerification: 6,  // Teachers needing document review
      totalRevenue: 75000,     // ₦15k per school average
      pendingPayouts: 25000,   // Teacher earnings waiting
      activeJobs: 4,           // Jobs posted by schools
      resourcesUploaded: 15    // Resources in library
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Manage your platform</p>
            </div>
            
            {/* Last Updated - Client side only */}
            <p className="text-xs text-gray-400">
              Last updated: {lastUpdated || 'Loading...'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Alert Banner - Only show if there are pending items */}
        {(stats.pendingSchools > 0 || stats.pendingVerification > 0) && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-xl">📋</span>
                <p className="text-sm text-yellow-800">
                  {stats.pendingSchools > 0 && (
                    <span className="font-semibold">{stats.pendingSchools} schools</span>
                  )}
                  {stats.pendingSchools > 0 && stats.pendingVerification > 0 && (
                    <span> and </span>
                  )}
                  {stats.pendingVerification > 0 && (
                    <span className="font-semibold">{stats.pendingVerification} teachers</span>
                  )}
                  {' '}need attention
                </p>
              </div>
              <button className="text-sm text-yellow-700 hover:text-yellow-900 font-medium">
                Review →
              </button>
            </div>
          </div>
        )}

        {/* 2x2 Grid - Same on Mobile and Desktop */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          
          {/* Schools Card */}
          <Link href="/admin/schools" className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-all group aspect-square flex flex-col">
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
                  🏫
                </div>
                {stats.pendingSchools > 0 && (
                  <span className="text-xs font-medium px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                    {stats.pendingSchools}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stats.totalSchools}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3">Total Schools</p>
              
              <div className="mt-auto">
                <div className="flex items-center text-blue-600 text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Manage <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Teachers Card */}
          <Link href="/admin/teachers" className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-all group aspect-square flex flex-col">
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
                  👥
                </div>
                {stats.pendingVerification > 0 && (
                  <span className="text-xs font-medium px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                    {stats.pendingVerification}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stats.totalTeachers}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3">Total Teachers</p>
              
              <div className="mt-auto">
                <div className="flex items-center text-green-600 text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Verify <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Revenue Card */}
          <Link href="/admin/transactions" className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-all group aspect-square flex flex-col">
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
                  💰
                </div>
                {stats.pendingPayouts > 0 && (
                  <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    ₦{(stats.pendingPayouts/1000).toFixed(0)}k
                  </span>
                )}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">₦{(stats.totalRevenue/1000).toFixed(0)}k</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3">Total Revenue</p>
              
              <div className="mt-auto">
                <div className="flex items-center text-purple-600 text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform">
                  View <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Jobs & Resources Card */}
          <Link href="/admin/reports" className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-all group aspect-square flex flex-col">
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
                  📊
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {stats.activeJobs}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stats.resourcesUploaded}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3">Resources</p>
              
              <div className="mt-auto">
                <div className="flex items-center text-amber-600 text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Reports <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Actions - 2x2 Grid on Mobile, 4x1 on Desktop */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button className="p-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              📋 Approve Schools
            </button>
            <button className="p-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              ✓ Verify Teachers
            </button>
            <button className="p-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              💸 Process Payouts
            </button>
            <button className="p-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              📊 View Reports
            </button>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 flex items-center justify-between text-xs text-gray-400 border-t border-gray-200 pt-6">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> 
              System OK
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span> 
              Supabase Ready
            </span>
          </div>
          <p>Last updated: {lastUpdated || 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
}
