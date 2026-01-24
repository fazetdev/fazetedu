'use client';

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const smartSchoolModules = [
    {
      title: 'Digital Register',
      description: 'Track student attendance, manage grades, and get analytics for better student performance.',
      features: ['Attendance Tracking', 'Grade Management', 'Analytics & Reports'],
      icon: '📊',
      gradient: 'from-blue-500 to-cyan-400',
      badge: 'Most Popular'
    },
    {
      title: 'Report Generator',
      description: 'Create professional report cards and transcripts with customizable templates and automated calculations.',
      features: ['Customizable Templates', 'Automatic Calculations', 'Multiple Report Formats'],
      icon: '📈',
      gradient: 'from-purple-500 to-pink-500',
      badge: 'AI-Powered'
    },
    {
      title: 'Fee Manager',
      description: 'Manage student payments, track transactions, and send reminders with ease.',
      features: ['Transaction Tracking', 'Automatic Reminders', 'Flexible Payment Options'],
      icon: '💰',
      gradient: 'from-green-500 to-emerald-400',
      badge: 'Secure'
    },
    {
      title: 'Lesson Planner',
      description: 'Plan lessons, organize teaching schedules, and manage resources efficiently.',
      features: ['Daily/Weekly Planner', 'Resource Organization', 'Easy Scheduling'],
      icon: '📚',
      gradient: 'from-orange-500 to-yellow-400',
      badge: 'Time Saver'
    },
    {
      title: 'Parent Hub',
      description: 'Communicate with parents, send SMS updates, and provide key information about their children.',
      features: ['SMS Notifications', 'Parent Communication', 'Student Progress Updates'],
      icon: '👨‍👩‍👧',
      gradient: 'from-red-500 to-rose-400',
      badge: 'Engagement+'
    },
  ];

  return (
    <main className={`min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <span className="text-blue-600 font-medium text-sm">Our Product Suite</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Transform Your School with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Smart Digital Tools
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Complete school management ecosystem designed for Nigerian schools.  
          Streamline administration, enhance teaching, and improve parent engagement 
          with our pay-as-you-go modules.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {smartSchoolModules.map((module, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${module.gradient}`}></div>
              
              <div className="p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{module.icon}</div>
                  {module.badge && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200">
                      {module.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {module.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Features</div>
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group">
                    <span className="flex items-center justify-center">
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Features Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100 transform transition-all duration-500 hover:shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Built for Enterprise Reliability
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Secure & Compliant',
                  desc: 'GDPR-ready with end-to-end encryption and regular security audits',
                  icon: '🛡️'
                },
                {
                  title: 'Scalable Infrastructure',
                  desc: 'Handles from 10 to 10,000+ users with consistent performance',
                  icon: '⚡'
                },
                {
                  title: '24/7 Support',
                  desc: 'Dedicated Nigerian support team with 2-hour response time SLA',
                  icon: '👨‍💼'
                }
              ].map((feature, idx) => (
                <div key={idx} className="text-center transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group">
                <span>Start Free Trial - No Credit Card Required</span>
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-gray-500 text-sm mt-4">All features included • Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}