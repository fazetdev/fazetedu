'use client';

import { useSchool } from '@/app/hooks/useSchool';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SchoolDashboardPage() {
  const { school, loading, error, domain } = useSchool();
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F59E0B]"></div>
      </div>
    );
  }

  if (error || !school) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md w-full">
          <span className="text-6xl mb-4 block">🏫</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">School Not Found</h1>
          <p className="text-gray-600">{error || 'Unable to load school data'}</p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 px-6 py-3 bg-[#F59E0B] text-white rounded-lg hover:bg-[#DC2626] transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const modules = [
    { id: 'my-school', name: 'My School', icon: '🏫', link: `/${domain}/my-school`, color: 'from-blue-500 to-cyan-500' },
    { id: 'products', name: 'Products', icon: '📦', link: `/${domain}/products`, color: 'from-green-500 to-emerald-500' },
    { id: 'post-jobs', name: 'Post Jobs', icon: '📢', link: `/${domain}/post-jobs`, color: 'from-purple-500 to-pink-500' },
    { id: 'free-resources', name: 'Free Resources', icon: '📚', link: `/${domain}/free-resources`, color: 'from-yellow-500 to-orange-500' },
    { id: 'analytics', name: 'Analytics', icon: '📊', link: `/${domain}/analytics`, color: 'from-red-500 to-rose-500' },
    { id: 'activities', name: 'Activities', icon: '🕒', link: `/${domain}/activities`, color: 'from-indigo-500 to-purple-500' },
  ];

  // Stats for quick overview (optional)
  const stats = [
    { label: 'Students', value: '245', icon: '👥', change: '+12' },
    { label: 'Teachers', value: '18', icon: '👨‍🏫', change: '+2' },
    { label: 'Revenue', value: '₦2.4M', icon: '💰', change: '+18%' },
    { label: 'Resources', value: '48', icon: '📚', change: '+5' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Dynamic School Name - Responsive */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {school.name}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Welcome back, {school.adminName}
              </p>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-4">
              {/* Mobile Status Badge - Always Visible */}
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm rounded-full font-medium">
                {school.status === 'active' ? '✅ Active' : school.status}
              </span>
              
              {/* School Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md">
                  {school.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats - Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Modules - Fully Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-12">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
          Quick Access
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.link}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-xl border border-gray-200 transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${module.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl sm:text-3xl lg:text-4xl">{module.icon}</span>
                </div>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1">
                  {module.name}
                </h3>
                
                <p className="text-xs text-gray-500 hidden sm:block">
                  Manage {module.name.toLowerCase()}
                </p>
                
                {/* Mobile-only hint */}
                <span className="text-[10px] text-[#F59E0B] sm:hidden">
                  Tap to open
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Section - Optional but nice for larger screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          
          <div className="space-y-3">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-full flex items-center justify-center text-white text-sm sm:text-base">
                  {['📝', '💰', '👥'][i]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-medium text-gray-900 truncate">
                    {['New student enrolled', 'Fee payment received', 'Teacher added'][i]}
                  </p>
                  <p className="text-xs text-gray-500">
                    {['2 hours ago', 'Yesterday', '3 days ago'][i]}
                  </p>
                </div>
                <button className="text-xs sm:text-sm text-[#F59E0B] hover:text-[#DC2626] transition-colors whitespace-nowrap">
                  View →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}