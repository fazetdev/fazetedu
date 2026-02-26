'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ParentResourcesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Learning Resources</h1>
          <p className="text-sm text-gray-500 mt-1">
            Free materials to help your child learn
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="col-span-2 border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
            >
              <option value="all">All Categories</option>
              <option value="mathematics">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="hausa">Hausa</option>
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Free Resources</h2>
          </div>

          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">📚</span>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources yet</h3>
            <p className="text-gray-500 mb-6">
              Check back later for learning materials
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
