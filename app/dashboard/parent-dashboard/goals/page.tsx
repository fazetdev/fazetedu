'use client';

import Link from 'next/link';

export default function GoalsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Learning Goals</h1>
          <p className="text-sm text-gray-500 mt-1">
            Set and track academic targets for your child
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Add Goal Card */}
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center min-h-[200px] hover:border-[#F59E0B] transition-all group">
            <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">+</span>
            <h3 className="text-lg font-medium text-gray-600 group-hover:text-[#F59E0B]">Set New Goal</h3>
            <p className="text-sm text-gray-400 mt-2 text-center">
              Create academic goals for your child
            </p>
          </div>

          {/* Goals List */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Current Goals</h3>
            <div className="text-center py-8">
              <p className="text-gray-500">No goals set yet</p>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Overall Progress</h3>
          <div className="text-center py-8">
            <span className="text-5xl mb-3 block">🎯</span>
            <p className="text-gray-500">Start by setting your first goal</p>
          </div>
        </div>
      </div>
    </main>
  );
}
