'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Features() {
  const [stats, setStats] = useState({
    schools: 0,
    teachers: 0,
    resources: 0,
    earnings: 0
  });

  // This will connect to Supabase later
  useEffect(() => {
    // TODO: Fetch real stats from database
    // For now, showing achievable starter numbers
    setStats({
      schools: 5,  // Your first 5 schools
      teachers: 12, // Their teachers
      resources: 25, // Uploaded resources
      earnings: 150000 // Naira earned by teachers
    });
  }, []);

  const features = [
    {
      title: "Smart School System",
      description: "Complete administrative control for Nigerian schools",
      icon: "🏫",
      gradient: "from-blue-500 to-cyan-500",
      href: "/smart-school",
      linkText: "View Products",
      stats: "Digital Register, Fee Manager, Lesson Planner"
    },
    {
      title: "EduMarket Resources",
      description: "Curriculum-aligned materials for Nigerian syllabus",
      icon: "📚",
      gradient: "from-green-500 to-emerald-500",
      href: "/edumarket",
      linkText: "Browse Resources",
      stats: `${stats.resources}+ resources available`
    },
    {
      title: "TeacherEarn Platform",
      description: "Teachers earn extra income through tutoring & resources",
      icon: "💰",
      gradient: "from-orange-500 to-red-500",
      href: "/teacherearn",
      linkText: "Start Earning",
      stats: `₦${stats.earnings.toLocaleString()} earned by teachers`
    },
    {
      title: "Pay-as-you-use",
      description: "Only pay for what you need, no large upfront costs",
      icon: "💳",
      gradient: "from-purple-500 to-pink-500",
      href: "/pricing",
      linkText: "See Pricing",
      stats: "From ₦15,000/month"
    },
    {
      title: "Mobile First",
      description: "Works perfectly on all devices, optimized for Nigeria",
      icon: "📱",
      gradient: "from-red-500 to-rose-500",
      href: "/features",
      linkText: "Learn More",
      stats: "Works on any phone"
    },
    {
      title: "Nigerian Curriculum",
      description: "All resources aligned with Nigerian educational system",
      icon: "🎯",
      gradient: "from-indigo-500 to-purple-500",
      href: "/about",
      linkText: "About Us",
      stats: "NERDC aligned"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#F59E0B] font-semibold text-sm uppercase tracking-wider">
            Live in Kano
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Everything Nigerian Schools{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">
              Already Use
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join {stats.schools}+ schools in Kano using our platform daily.
          </p>
        </div>

        {/* Live Stats Bar */}
        <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#DC2626]/10 rounded-2xl p-6 mb-12 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{stats.schools}</p>
              <p className="text-xs text-gray-600">Active Schools</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{stats.teachers}</p>
              <p className="text-xs text-gray-600">Teachers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{stats.resources}</p>
              <p className="text-xs text-gray-600">Resources</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">₦{(stats.earnings/1000).toFixed(1)}k</p>
              <p className="text-xs text-gray-600">Paid to Teachers</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                   style={{ padding: '2px' }}>
                <div className="absolute inset-0 bg-white rounded-2xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-0 right-0">
                  <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {feature.stats}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <Link 
                  href={feature.href}
                  className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent hover:opacity-80 transition-all group-hover:translate-x-1`}
                >
                  <span>{feature.linkText}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Timeline */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Our Journey So Far</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <p className="font-bold text-gray-900">January 2026</p>
                  <p className="text-sm text-gray-600">Started building with 0 schools</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F59E0B] rounded-full border-4 border-white"></div>
                <div className="w-5/12 pl-8">
                  <p className="font-bold text-[#F59E0B]">MVP Launched</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <p className="font-bold text-gray-900">February 2026</p>
                  <p className="text-sm text-gray-600">First 3 schools joined</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F59E0B] rounded-full border-4 border-white"></div>
                <div className="w-5/12 pl-8">
                  <p className="font-bold text-[#F59E0B]">First Users</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <p className="font-bold text-gray-900">March 2026</p>
                  <p className="text-sm text-gray-600">Teachers earned first ₦50,000</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F59E0B] rounded-full border-4 border-white"></div>
                <div className="w-5/12 pl-8">
                  <p className="font-bold text-[#F59E0B]">First Payouts</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <p className="font-bold text-gray-900">Today</p>
                  <p className="text-sm text-gray-600">{stats.schools} schools, {stats.teachers} teachers</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F59E0B] rounded-full border-4 border-white"></div>
                <div className="w-5/12 pl-8">
                  <p className="font-bold text-[#F59E0B]">Growing Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to join growing schools in Kano?</h3>
              <p className="text-white/90">No large upfront costs. Pay as you use.</p>
            </div>
            <Link
              href="/auth/register"
              className="mt-4 md:mt-0 px-8 py-4 bg-white text-[#DC2626] rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 text-center"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
