'use client';

import Link from 'next/link';

export default function GuidancePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Guidance & Counseling</h1>
          <p className="text-sm text-gray-500 mt-1">
            Career advice and counseling notes for your child
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Career Guidance */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <span className="text-3xl mb-3 block">🎓</span>
            <h3 className="font-semibold text-gray-900 mb-2">Career Guidance</h3>
            <p className="text-sm text-gray-500 mb-4">Career recommendations based on performance</p>
            <div className="text-center py-4">
              <p className="text-gray-400">No recommendations yet</p>
            </div>
          </div>

          {/* Counseling Notes */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <span className="text-3xl mb-3 block">📝</span>
            <h3 className="font-semibold text-gray-900 mb-2">Counseling Notes</h3>
            <p className="text-sm text-gray-500 mb-4">Notes from counseling sessions</p>
            <div className="text-center py-4">
              <p className="text-gray-400">No notes available</p>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <span className="text-3xl mb-3 block">📚</span>
            <h3 className="font-semibold text-gray-900 mb-2">Career Resources</h3>
            <p className="text-sm text-gray-500 mb-4">Articles and guides for career planning</p>
            <div className="text-center py-4">
              <p className="text-gray-400">No resources yet</p>
            </div>
          </div>
        </div>

        {/* Request Counseling */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Need counseling support?</h3>
              <p className="text-sm text-gray-600">Request a session with our guidance counselor</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium">
              Request Session
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
