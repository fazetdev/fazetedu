'use client';

import Link from 'next/link';

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Students</h1>
              <p className="text-sm text-gray-500 mt-1">
                Track your mentees and their progress
              </p>
            </div>
            <Link
              href="/dashboard/teacher-dashboard"
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Active Students</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Completed Sessions</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Upcoming Sessions</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Your Students</h2>
          </div>

          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">👥</span>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students yet</h3>
            <p className="text-gray-500 mb-6">
              Start offering tutoring services to get students
            </p>
            <Link
              href="/teacher/post-service"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium"
            >
              Offer Tutoring Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
