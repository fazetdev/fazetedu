'use client';

import { useState } from 'react';

export default function TeacherEarnPage() {
  const [activeTab, setActiveTab] = useState('tutor');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    { id: 'tutor', name: 'Tutoring Jobs', icon: '👨‍🏫' },
    { id: 'materials', name: 'Sell Materials', icon: '📚' },
    { id: 'mentor', name: 'Mentorship', icon: '🎓' },
    { id: 'webinar', name: 'Webinars', icon: '📹' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, this would fetch from your backend
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handlePostOpportunity = () => {
    alert('Post opportunity functionality coming soon!');
  };

  const handleBrowseOpportunities = () => {
    alert('Browse opportunities functionality coming soon!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-6">
            <span className="text-orange-600 font-medium text-sm">Extra Income for Teachers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            TeacherEarn
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              Extra Income for Educators
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A platform exclusively for teachers to earn extra income through tutoring, 
            selling educational materials, mentorship, and webinars.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="text-xl mr-3">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {tabs.find(t => t.id === activeTab)?.name}
              </h2>
              <button
                onClick={handlePostOpportunity}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-md transition-all"
              >
                Post Opportunity
              </button>
            </div>

            {/* Search Bar - FIXED: Removed the onChange from form and kept it on input */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder={`Search ${tabs.find(t => t.id === activeTab)?.name.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-4 pl-12 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </form>

            {/* Content Area */}
            {isLoading ? (
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h3>
                <p className="text-gray-600">Finding opportunities for you</p>
              </div>
            ) : (
              <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-200">
                <div className="text-6xl mb-6">
                  {activeTab === 'tutor' ? '👨‍🏫' : 
                   activeTab === 'materials' ? '📚' :
                   activeTab === 'mentor' ? '🎓' : '📹'}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  No {tabs.find(t => t.id === activeTab)?.name} Yet
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Be the first to post an opportunity or check back soon for new listings.
                </p>
                <button
                  onClick={handlePostOpportunity}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  <span>Post First Opportunity</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            How TeacherEarn Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Create Profile</h3>
              <p className="text-gray-600 text-sm">Set up your teacher profile with qualifications</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Find Opportunities</h3>
              <p className="text-gray-600 text-sm">Browse tutoring jobs, material sales, and more</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Connect & Agree</h3>
              <p className="text-gray-600 text-sm">Connect with clients and agree on terms</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Earn Income</h3>
              <p className="text-gray-600 text-sm">Get paid securely through the platform</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Use TeacherEarn?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Teachers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Extra Income</h4>
                    <p className="text-gray-600 text-sm">Earn additional money using your teaching skills</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Schedule</h4>
                    <p className="text-gray-600 text-sm">Work on your own time and terms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verified Platform</h4>
                    <p className="text-gray-600 text-sm">All clients are verified and safe</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Students/Parents</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Teachers</h4>
                    <p className="text-gray-600 text-sm">Access verified, qualified educators</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safe Payments</h4>
                    <p className="text-gray-600 text-sm">Secure transaction system with protection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reviews & Ratings</h4>
                    <p className="text-gray-600 text-sm">Choose based on other users' experiences</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Teacher Requirements
          </h2>
          
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-gray-100">
            <p className="text-gray-700 mb-6">
              To ensure quality, all teachers on TeacherEarn must meet these requirements:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">1</span>
                </div>
                <span className="text-gray-700">Valid teaching qualification/certificate</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">2</span>
                </div>
                <span className="text-gray-700">Minimum 2 years teaching experience</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">3</span>
                </div>
                <span className="text-gray-700">Clean background check</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">4</span>
                </div>
                <span className="text-gray-700">Professional references</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Earning?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBrowseOpportunities}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105"
            >
              Browse Opportunities
            </button>
            <button
              onClick={handlePostOpportunity}
              className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors"
            >
              Start Earning Now
            </button>
          </div>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Join our community of verified Nigerian teachers earning extra income
          </p>
        </div>

      </div>
    </main>
  );
}