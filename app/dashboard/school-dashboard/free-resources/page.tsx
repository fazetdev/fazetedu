'use client';

import { useState } from 'react';

export default function FreeResourcesPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !file) {
      alert('Title and file are required.');
      return;
    }

    console.log({
      title,
      description,
      category,
      file,
    });

    // Later: integrate Supabase storage + database

    alert('Resource added (frontend only for now)');
    setTitle('');
    setDescription('');
    setCategory('');
    setFile(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Free Resources
          </h1>
          <p className="text-gray-600 mt-2">
            Upload and manage free learning materials.
          </p>
        </div>

        {/* Add Resource Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Add Free Resource
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Resource Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <textarea
              placeholder="Resource Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <input
              type="text"
              placeholder="Category (e.g. Mathematics, Science)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <input
              type="file"
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
              className="w-full"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Upload Resource
            </button>

          </form>
        </div>

        {/* View Resources Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Available Free Resources
          </h2>

          {/* Static example list for now */}
          <div className="space-y-4">

            <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4">
              <div>
                <p className="font-semibold text-gray-800">
                  Sample Math Worksheet
                </p>
                <p className="text-sm text-gray-500">
                  Category: Mathematics
                </p>
              </div>

              <button className="text-[#10B981] font-semibold hover:underline">
                Download
              </button>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
