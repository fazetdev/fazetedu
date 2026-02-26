'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FreeResourcesPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Free resource upload ready for Supabase');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Free Resources</h1>
          <p className="text-sm text-gray-500 mt-1">
            Share helpful materials with other teachers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Upload Form */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
              <h2 className="font-semibold text-gray-900 mb-4">Upload Free Resource</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                >
                  <option value="">Select category</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                </select>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="w-full text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-lg font-medium"
                >
                  Share for Free
                </button>
              </form>
            </div>
          </div>

          {/* Resources List */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Community Resources</h2>
              
              <div className="text-center py-12">
                <span className="text-4xl mb-3 block">📚</span>
                <p className="text-gray-500">No resources shared yet</p>
                <p className="text-sm text-gray-400 mt-1">
                  Be the first to share a free resource
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
