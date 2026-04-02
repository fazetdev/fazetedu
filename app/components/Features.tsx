'use client';

import Link from 'next/link';

export default function Features() {
  const features = [
    {
      title: "Professional Website",
      description: "Mobile-friendly school website",
      icon: "🏫",
    },
    {
      title: "Fee Tracker",
      description: "Track payments, see who owes",
      icon: "💰",
    },
    {
      title: "Admission Form",
      description: "Online applications",
      icon: "📝",
    },
    {
      title: "Results & News",
      description: "Publish results and announcements",
      icon: "📄",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header - Smaller */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Everything Your{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">
              School Needs
            </span>
          </h2>
          <p className="text-gray-600 text-sm mt-2">Website + smart tools. One package.</p>
        </div>

        {/* Features Grid - 4 items, smaller cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-bold text-gray-800 text-sm">{feature.title}</h3>
              <p className="text-gray-500 text-xs mt-1">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Simple CTA - No pricing */}
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Get Free Demo →
          </Link>
        </div>
      </div>
    </section>
  );
}