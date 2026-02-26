'use client';

import Link from 'next/link';

const schoolModules = [
  { 
    id: 'products', 
    name: 'Products', 
    icon: '📦', 
    link: '/dashboard/school-dashboard/products',
    count: 24,
    trend: '+3 this month',
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600'
  },
  { 
    id: 'my-school', 
    name: 'My School', 
    icon: '🏫', 
    link: '/dashboard/school-dashboard/my-school',
    subtitle: 'Sunset High',
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600'
  },
  { 
    id: 'post-jobs', 
    name: 'Post Jobs', 
    icon: '📢', 
    link: '/dashboard/school-dashboard/post-jobs',
    count: 3,
    badge: '2 pending',
    urgent: true,
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600'
  },
  { 
    id: 'free-resources', 
    name: 'Free Resources', 
    icon: '📚', 
    link: '/dashboard/school-dashboard/free-resources',
    count: 156,
    color: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600'
  },
  { 
    id: 'analytics', 
    name: 'Analytics', 
    icon: '📊', 
    link: '/dashboard/school-dashboard/analytics',
    subtitle: 'Views ↑ 23%',
    color: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    textColor: 'text-indigo-600'
  },
  { 
    id: 'recent-activities', 
    name: 'Recent Activities', 
    icon: '🕒', 
    link: '/dashboard/school-dashboard/recent-activities',
    count: 12,
    badge: '5 new',
    color: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-600'
  },
];

export default function SchoolDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Bar with School Context */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Welcome back,</p>
              <h1 className="text-xl font-bold text-gray-900">Sunset High School</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <span className="text-2xl">🔔</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] p-0.5">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <img src="/vercel.svg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-500">Applications</p>
            <p className="text-lg font-bold text-gray-900">156</p>
            <p className="text-xs text-green-600">↑ 12%</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-500">Open Jobs</p>
            <p className="text-lg font-bold text-gray-900">8</p>
            <p className="text-xs text-orange-600">3 expiring</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-500">Messages</p>
            <p className="text-lg font-bold text-gray-900">12</p>
            <p className="text-xs text-blue-600">4 unread</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <p className="text-xs text-gray-500">Days Left</p>
            <p className="text-lg font-bold text-gray-900">24</p>
            <p className="text-xs text-red-600">in billing cycle</p>
          </div>
        </div>
      </div>

      {/* Main Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Quick Access</h2>
          <Link href="/dashboard/school-dashboard/all" className="text-sm text-[#F59E0B] hover:text-[#DC2626]">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {schoolModules.map((module) => (
            <Link
              key={module.id}
              href={module.link}
              className={`group relative ${module.color} rounded-xl border-2 ${module.borderColor} hover:shadow-lg transition-all duration-300 overflow-hidden`}
            >
              {/* Urgent Badge */}
              {module.urgent && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  Action needed
                </span>
              )}
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{module.icon}</span>
                  {module.badge && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      module.urgent ? 'bg-red-100 text-red-700' : 'bg-white text-gray-700'
                    }`}>
                      {module.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-1">{module.name}</h3>
                
                {module.subtitle && (
                  <p className="text-xs text-gray-600 mb-2">{module.subtitle}</p>
                )}
                
                {module.count !== undefined && (
                  <div className="flex items-baseline justify-between">
                    <p className={`text-2xl font-bold ${module.textColor}`}>{module.count}</p>
                    <p className="text-xs text-gray-500">items</p>
                  </div>
                )}
                
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                    Manage →
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-xl border border-gray-200 divide-y">
          <div className="p-3 flex items-center space-x-3">
            <span className="text-xl">📝</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">New application received</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">New</span>
          </div>
          <div className="p-3 flex items-center space-x-3">
            <span className="text-xl">📦</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Product order shipped</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
          <div className="p-3 flex items-center space-x-3">
            <span className="text-xl">📢</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Job posting expires tomorrow</p>
              <p className="text-xs text-gray-500">3 hours ago</p>
            </div>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Urgent</span>
          </div>
        </div>
      </div>
    </main>
  );
}
