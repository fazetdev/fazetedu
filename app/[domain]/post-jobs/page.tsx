'use client';

import { useSchool } from '@/app/hooks/useSchool';
import { useState } from 'react';

export default function PostJobsPage() {
  const { school, loading, domain } = useSchool();
  const [showForm, setShowForm] = useState(false);

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
          <h1 className="text-2xl font-bold text-gray-900">Post Jobs - {school?.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium"
        >
          + Post New Job
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-gray-500 text-center py-12">
            No jobs posted yet. Click the button above to create your first job posting.
          </p>
        </div>
      </div>
    </div>
  );
}
