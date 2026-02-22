'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Only real products - removed fake stats and testimonials
  const smartSchoolModules = [
    {
      title: 'Digital Register',
      description: 'Track student attendance, manage grades, and get analytics for better student performance.',
      features: ['Attendance Tracking', 'Grade Management', 'Analytics & Reports'],
      icon: '📊',
      gradient: 'from-green-600 to-emerald-500',
      badge: 'Module',
      link: '/pricing#digital-register'
    },
    {
      title: 'Report Generator',
      description: 'Create professional report cards and transcripts with customizable templates.',
      features: ['Customizable Templates', 'Automatic Calculations', 'Multiple Report Formats'],
      icon: '📈',
      gradient: 'from-green-500 to-teal-400',
      badge: 'Module',
      link: '/pricing#report-generator'
    },
    {
      title: 'Fee Manager',
      description: 'Manage student payments, track transactions, and send reminders with ease.',
      features: ['Transaction Tracking', 'Automatic Reminders', 'Flexible Payment Options'],
      icon: '💰',
      gradient: 'from-emerald-500 to-green-400',
      badge: 'Module',
      link: '/pricing#fee-manager'
    },
    {
      title: 'Lesson Planner',
      description: 'Plan lessons, organize teaching schedules, and manage resources efficiently.',
      features: ['Weekly/Monthly Planning', 'Resource Organization', 'Easy Scheduling'],
      icon: '📚',
      gradient: 'from-teal-500 to-green-400',
      badge: 'Module',
      link: '/pricing#lesson-planner'
    },
    {
      title: 'Parent Hub',
      description: 'Communicate with parents, send SMS updates, and provide key information.',
      features: ['SMS Notifications', 'Parent Communication', 'Student Progress Updates'],
      icon: '👨‍👩‍👧',
      gradient: 'from-green-500 to-lime-500',
      badge: 'Module',
      link: '/pricing#parent-hub'
    },
  ];

  return (
    <main className={`min-h-screen bg-gradient-to-b from-gray-50 to-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Simple Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
          <span className="text-green-600 font-medium text-sm">Our Products</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Tools to Run Your 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
            School Efficiently
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the modules you need. Pay only for what you use.
        </p>
      </section>

      {/* Products Grid - Simple and Honest */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {smartSchoolModules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${module.gradient}`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className="text-5xl mb-6">{module.icon}</div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.title}</h3>
                
                <p className="text-gray-600 mb-6">
                  {module.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="text-sm font-medium text-gray-400">FEATURES</div>
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  href={module.link}
                  className="block w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/pricing"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-2xl hover:shadow-xl transition-all duration-300 text-lg"
          >
            See Full Pricing
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}