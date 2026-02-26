'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AddChildPage() {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    admissionNumber: '',
    dateOfBirth: '',
    school: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will connect to Supabase
    alert('Ready to add child to database');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Add Child</h1>
              <p className="text-sm text-gray-500 mt-1">
                Register your child to track their progress
              </p>
            </div>
            <Link
              href="/dashboard/parent-dashboard/children"
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              ← Back to Children
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Child's Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g. Amina Abubakar"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Class/Grade
            </label>
            <input
              type="text"
              value={formData.class}
              onChange={(e) => setFormData({...formData, class: e.target.value})}
              placeholder="e.g. JSS 2"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admission Number
            </label>
            <input
              type="text"
              value={formData.admissionNumber}
              onChange={(e) => setFormData({...formData, admissionNumber: e.target.value})}
              placeholder="e.g. STU-2024-001"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              School Name
            </label>
            <input
              type="text"
              value={formData.school}
              onChange={(e) => setFormData({...formData, school: e.target.value})}
              placeholder="e.g. Sunset High School"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium hover:shadow-lg transition-all"
          >
            Add Child
          </button>
        </form>
      </div>
    </main>
  );
}
