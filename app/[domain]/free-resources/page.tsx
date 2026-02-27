'use client';

import { useSchool } from '@/app/hooks/useSchool';

export default function FreeResourcesPage() {
  const { school, loading, domain } = useSchool();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F59E0B]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Free Resources - {school?.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <span className="text-3xl mb-2 block">📚</span>
            <h3 className="font-semibold">Lesson Notes</h3>
            <p className="text-xs text-gray-500 mt-1">Coming soon</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <span className="text-3xl mb-2 block">📝</span>
            <h3 className="font-semibold">Worksheets</h3>
            <p className="text-xs text-gray-500 mt-1">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
