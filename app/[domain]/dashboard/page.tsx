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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block">🏫</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">School Not Found</h1>
          <p className="text-gray-600">{error || 'Unable to load school data'}</p>
        </div>
      </div>
    );
  }

  const modules = [
    { id: 'my-school', name: 'My School', icon: '🏫', link: `/${domain}/my-school` },
    { id: 'products', name: 'Products', icon: '📦', link: `/${domain}/products` },
    { id: 'post-jobs', name: 'Post Jobs', icon: '📢', link: `/${domain}/post-jobs` },
    { id: 'free-resources', name: 'Free Resources', icon: '📚', link: `/${domain}/free-resources` },
    { id: 'analytics', name: 'Analytics', icon: '📊', link: `/${domain}/analytics` },
    { id: 'activities', name: 'Recent Activities', icon: '🕒', link: `/${domain}/activities` },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Dynamic School Name */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{school.name}</h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back, {school.adminName}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                {school.status}
              </span>
              <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-full flex items-center justify-center text-white font-bold">
                {school.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.link}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl border border-gray-200 transition-all aspect-square flex flex-col"
            >
              <div className="flex-1 flex flex-col">
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {module.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {module.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-auto">
                  Manage your {module.name.toLowerCase()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
