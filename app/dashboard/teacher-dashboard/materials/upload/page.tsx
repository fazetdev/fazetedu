'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UploadMaterialPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will connect to Supabase
    alert('Upload ready for Supabase integration');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Upload Material</h1>
              <p className="text-sm text-gray-500 mt-1">
                Sell your teaching resources to other educators
              </p>
            </div>
            <Link
              href="/dashboard/teacher-dashboard/materials"
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              ← Back to Materials
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. JSS 2 Mathematics Lesson Notes"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what's included in this resource..."
              rows={4}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              >
                <option value="">Select category</option>
                <option value="mathematics">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="social-studies">Social Studies</option>
                <option value="hausa">Hausa</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (₦)
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g. 500"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              File <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
                id="file-upload"
                required
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-4xl mb-3 block">📎</span>
                <span className="text-[#F59E0B] font-medium">Click to upload</span>
                <p className="text-sm text-gray-500 mt-1">
                  {file ? file.name : 'PDF, DOC, PPT (Max 25MB)'}
                </p>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium hover:shadow-lg transition-all"
          >
            Upload Material
          </button>
        </form>

        <div className="mt-6 bg-yellow-50 rounded-xl p-4 border border-yellow-100">
          <p className="text-sm text-yellow-800">
            <span className="font-medium">Note:</span> You'll earn 80% of each sale. Payments are sent to your bank account monthly.
          </p>
        </div>
      </div>
    </main>
  );
}
