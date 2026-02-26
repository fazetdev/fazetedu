'use client';

import Link from 'next/link';

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Teaching Jobs</h1>
              <p className="text-sm text-gray-500 mt-1">
                Find opportunities at schools near you
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard/teacher-dashboard"
                className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
              >
                ← Back
              </Link>
              <Link
                href="/dashboard/teacher-dashboard/jobs/post"
                className="px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl text-sm font-medium"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="grid sm:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="col-span-2 border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
              <option>All Subjects</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>English</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
              <option>All Locations</option>
              <option>Kano</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Available Positions</h2>
          </div>

          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">📢</span>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs posted yet</h3>
            <p className="text-gray-500 mb-6">
              Check back later for teaching opportunities
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
