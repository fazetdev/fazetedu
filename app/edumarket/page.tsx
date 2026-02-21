'use client';

import { useState } from 'react';

export default function EduMarketPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'lesson', name: 'Lesson Plans', icon: '📝' },
    { id: 'worksheet', name: 'Worksheets', icon: '📄' },
    { id: 'exam', name: 'Exam Questions', icon: '📊' },
    { id: 'curriculum', name: 'Curriculum', icon: '🎯' },
    { id: 'other', name: 'Other', icon: '💡' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setResources([]);
    }, 500);
  };

  const handleSellResource = () => {
    alert('Sell resource functionality coming soon!');
  };

  const handleBrowseResources = () => {
    alert('Browse resources functionality coming soon!');
  };

  // EduMarket section colors (purple family)
  const eduPurple = {
    light: '#8B5CF6',  // Purple-500
    dark: '#7C3AED',    // Purple-600
    lighter: '#EDE9FE', // Purple-100
    gradient: 'from-[#8B5CF6] to-[#DB2777]' // Purple to Pink (keep this unique)
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - CHANGED: purple-50 to use consistent purple */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#EDE9FE] border border-[#8B5CF6] border-opacity-20 mb-6">
            <span className="text-[#8B5CF6] font-medium text-sm">Teachers Marketplace</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            EduMarket
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#DB2777]">
              Buy & Sell Teaching Resources
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A marketplace created by teachers, for teachers. Find quality educational resources 
            or earn extra income by sharing your materials.
          </p>
        </div>

        {/* Search Bar - CHANGED: focus ring purple-500 to consistent purple */}
        <div className="mb-12">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for lesson plans, worksheets, exam questions..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-4 pl-12 focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] outline-none shadow-sm"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-400">🔍</span>
              </div>
              <button
                type="submit"
                // CHANGED: purple to pink gradient to consistent purple-pink
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white px-6 py-2 rounded-xl hover:shadow-md transition-shadow"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Categories - CHANGED: purple-500 to consistent purple */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white shadow'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="text-lg mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Resources' : 
               categories.find(c => c.id === selectedCategory)?.name}
              <span className="text-gray-500 text-lg font-normal ml-2">
                (0 items)
              </span>
            </h2>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Sort by: Popular</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Price: Low to High</option>
              <option>Sort by: Price: High to Low</option>
            </select>
          </div>

          {isLoading ? (
            <div className="text-center py-16">
              {/* CHANGED: purple-500 spinner to consistent purple */}
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B5CF6] mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Searching Resources...</h3>
              <p className="text-gray-600">Looking for educational materials</p>
            </div>
          ) : resources.length === 0 ? (
            <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-200">
              <div className="text-6xl mb-6">📭</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                No Resources Yet
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Be the first to share your teaching resources or check back soon for new materials.
              </p>
              <button
                onClick={handleSellResource}
                // CHANGED: purple to pink gradient to consistent
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white font-semibold rounded-xl hover:shadow-lg transition-all mb-4"
              >
                <span>Share Your First Resource</span>
              </button>
              <p className="text-gray-500 text-sm">
                Earn money when other teachers use your materials
              </p>
            </div>
          ) : (
            <div className="text-center py-8">
              {/* This would show actual resources when data exists */}
            </div>
          )}
        </div>

        {/* Sell Resources Section - CHANGED: purple-50 to consistent purple light */}
        <div className="bg-gradient-to-r from-[#EDE9FE] to-[#FCE7F3] rounded-2xl p-8 md:p-12 border border-[#8B5CF6] border-opacity-20 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#8B5CF6] border-opacity-20 mb-6">
              <span className="text-[#8B5CF6] font-medium text-sm">Earn Extra Income</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Have Great Teaching Resources?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#DB2777]">
                Start Selling on EduMarket
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-[#8B5CF6] border-opacity-20">
                <div className="text-3xl mb-4">📤</div>
                <h3 className="font-bold text-gray-900 mb-2">Upload Resources</h3>
                <p className="text-gray-600 text-sm">Share your lesson plans, worksheets, and materials</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-[#8B5CF6] border-opacity-20">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Set Your Price</h3>
                <p className="text-gray-600 text-sm">Earn money from other teachers using your resources</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-[#8B5CF6] border-opacity-20">
                <div className="text-3xl mb-4">👨‍🏫</div>
                <h3 className="font-bold text-gray-900 mb-2">Build Reputation</h3>
                <p className="text-gray-600 text-sm">Get rated and become a trusted resource creator</p>
              </div>
            </div>
            
            <button
              onClick={handleSellResource}
              // CHANGED: purple to pink gradient to consistent
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105"
            >
              <span>Start Selling Resources</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            How EduMarket Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Buyers</h3>
              <div className="flex items-start">
                {/* CHANGED: purple-100 to consistent purple light */}
                <div className="w-10 h-10 bg-[#EDE9FE] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#8B5CF6]">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Search & Browse</h4>
                  <p className="text-gray-600">Find quality resources by category or keyword</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#EDE9FE] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#8B5CF6]">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Purchase Securely</h4>
                  <p className="text-gray-600">Buy resources with safe payment methods</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#EDE9FE] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#8B5CF6]">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Download & Use</h4>
                  <p className="text-gray-600">Get instant access to purchased materials</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Sellers</h3>
              <div className="flex items-start">
                {/* CHANGED: pink-100 to pink light (keep pink for sellers) */}
                <div className="w-10 h-10 bg-[#FCE7F3] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#DB2777]">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Create Account</h4>
                  <p className="text-gray-600 text-sm">Sign up as a seller (verification required)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#FCE7F3] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#DB2777]">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Upload Materials</h4>
                  <p className="text-gray-600 text-sm">Share your best teaching resources</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#FCE7F3] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-[#DB2777]">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Earn Income</h4>
                  <p className="text-gray-600 text-sm">Get paid when other teachers buy your resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Find or Share Teaching Resources?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBrowseResources}
              // CHANGED: purple to pink gradient to consistent
              className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105"
            >
              Browse Resources
            </button>
            <button
              onClick={handleSellResource}
              // CHANGED: purple border to consistent
              className="px-8 py-4 border-2 border-[#8B5CF6] text-[#8B5CF6] font-bold rounded-xl hover:bg-[#EDE9FE] transition-colors"
            >
              Become a Seller
            </button>
          </div>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Join our growing community of Nigerian teachers sharing quality educational resources
          </p>
        </div>

      </div>
    </main>
  );
}