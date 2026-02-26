'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FreeResourcesPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - will come from Supabase
  const resources = [
    {
      id: 1,
      title: "JSS 1 Mathematics Worksheet - Fractions",
      description: "Practice problems on fractions, decimals, and percentages",
      category: "Mathematics",
      type: "PDF",
      size: "2.4 MB",
      downloads: 245,
      uploadedBy: "Mr. Adebayo",
      date: "2 days ago",
      popular: true
    },
    {
      id: 2,
      title: "Basic Science Lesson Notes - Term 1",
      description: "Complete lesson notes for JSS 2 Basic Science",
      category: "Science",
      type: "DOCX",
      size: "1.8 MB",
      downloads: 189,
      uploadedBy: "Mrs. Eze",
      date: "5 days ago",
      popular: false
    },
    {
      id: 3,
      title: "English Grammar Exercises - SS1",
      description: "Comprehensive grammar exercises with answers",
      category: "English",
      type: "PDF",
      size: "3.1 MB",
      downloads: 312,
      uploadedBy: "Mr. Okonkwo",
      date: "1 week ago",
      popular: true
    },
    {
      id: 4,
      title: "National Values - Primary 6",
      description: "Civic education materials for primary schools",
      category: "Social Studies",
      type: "PDF",
      size: "1.2 MB",
      downloads: 98,
      uploadedBy: "Ms. Wanjiku",
      date: "2 weeks ago",
      popular: false
    }
  ];

  const categories = ['All', 'Mathematics', 'Science', 'English', 'Social Studies', 'Hausa', 'Lesson Notes', 'Worksheets'];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

    alert('Resource uploaded successfully!');
    setTitle('');
    setDescription('');
    setCategory('');
    setFile(null);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Free Resources</h1>
              <p className="text-sm text-gray-500 mt-1">Upload and manage learning materials for teachers</p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-gray-500">Total Resources</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">844</p>
                <p className="text-xs text-gray-500">Downloads</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-600">8</p>
                <p className="text-xs text-gray-500">New This Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Upload New Resource</h2>
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              Max file size: 10MB
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resource Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. JSS 1 Mathematics Worksheet"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                >
                  <option value="">Select category</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="Social Studies">Social Studies</option>
                  <option value="Hausa">Hausa</option>
                  <option value="Lesson Notes">Lesson Notes</option>
                  <option value="Worksheets">Worksheets</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                placeholder="Brief description of the resource..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                File <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#F59E0B] transition-colors">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-3xl mb-2 block">📎</span>
                  <span className="text-[#F59E0B] font-medium">Click to upload</span>
                  <span className="text-gray-500 text-sm block mt-1">
                    {file ? file.name : 'PDF, DOC, PPT, Excel up to 10MB'}
                  </span>
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium hover:shadow-lg transition-all"
              >
                Upload Resource
              </button>
              <button
                type="button"
                onClick={() => {
                  setTitle('');
                  setDescription('');
                  setCategory('');
                  setFile(null);
                }}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Browse Resources Section */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-900">Available Resources</h2>
              
              {/* Search */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#F59E0B] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.slice(1).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat.toLowerCase()
                      ? 'bg-[#F59E0B] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="divide-y divide-gray-200">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">
                          {resource.type === 'PDF' ? '📄' : resource.type === 'DOCX' ? '📝' : '📊'}
                        </span>
                        <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                        {resource.popular && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                      
                      <div className="flex items-center space-x-6 text-xs">
                        <span className="text-gray-500">Category: {resource.category}</span>
                        <span className="text-gray-500">Type: {resource.type}</span>
                        <span className="text-gray-500">Size: {resource.size}</span>
                        <span className="text-gray-500">Downloads: {resource.downloads}</span>
                        <span className="text-gray-500">By: {resource.uploadedBy}</span>
                        <span className="text-gray-400">{resource.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="px-4 py-2 bg-[#10B981] text-white rounded-lg text-sm hover:bg-[#059669] transition-colors flex items-center space-x-2">
                        <span>⬇️</span>
                        <span>Download</span>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <span className="text-6xl mb-4 block">📚</span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>

          {/* Load More */}
          {filteredResources.length > 0 && (
            <div className="p-6 border-t border-gray-200 text-center">
              <button className="text-[#F59E0B] hover:text-[#DC2626] font-medium">
                Load More Resources →
              </button>
            </div>
          )}
        </div>

        {/* Stats & Insights */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
            <span className="text-2xl mb-2 block">🔥</span>
            <h4 className="font-medium text-gray-900 mb-1">Most Downloaded</h4>
            <p className="text-sm text-gray-600">English Grammar Exercises</p>
            <p className="text-xs text-gray-500 mt-1">312 downloads this month</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
            <span className="text-2xl mb-2 block">📊</span>
            <h4 className="font-medium text-gray-900 mb-1">Top Category</h4>
            <p className="text-sm text-gray-600">Mathematics</p>
            <p className="text-xs text-gray-500 mt-1">45% of all resources</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100">
            <span className="text-2xl mb-2 block">👨‍🏫</span>
            <h4 className="font-medium text-gray-900 mb-1">Top Contributor</h4>
            <p className="text-sm text-gray-600">Mr. Adebayo</p>
            <p className="text-xs text-gray-500 mt-1">8 resources uploaded</p>
          </div>
        </div>

        {/* Teacher Tip */}
        <div className="mt-8 bg-[#F59E0B]/10 rounded-xl p-5 border border-[#F59E0B]/20">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">From a Fellow Teacher</h4>
              <p className="text-sm text-gray-600">
                "Upload your lesson notes here and help other teachers. The more you share, the more downloads your resources get. Popular resources get featured!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
