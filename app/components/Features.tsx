'use client';

import Link from 'next/link';

export default function Features() {
  const features = [
    {
      title: "Smart School System (Core Product)",
      description: "Complete administrative control for Nigerian schools",
      icon: "🏫",
      // REMOVED: color: "bg-blue-100"
      href: "/products",
      linkText: "View Products"
    },
    {
      title: "EduMarket Resources",
      description: "Curriculum-aligned materials for Nigerian syllabus",
      icon: "📚",
      // REMOVED: color: "bg-green-100"
      href: "/edumarket",
      linkText: "Browse Resources"
    },
    {
      title: "TeacherEarn Platform",
      description: "Teachers earn extra income through tutoring & resources",
      icon: "💰",
      // REMOVED: color: "bg-yellow-100"
      href: "/teacherearn",
      linkText: "Start Earning"
    },
    {
      title: "Pay-as-you-use",
      description: "Only pay for what you need, no large upfront costs",
      icon: "💳",
      // REMOVED: color: "bg-purple-100"
      href: "/pricing",
      linkText: "See Pricing"
    },
    {
      title: "Mobile First",
      description: "Works perfectly on all devices, optimized for Nigeria",
      icon: "📱",
      // REMOVED: color: "bg-red-100"
      href: "/products",
      linkText: "Learn More"
    },
    {
      title: "Nigerian Curriculum",
      description: "All resources aligned with Nigerian educational system",
      icon: "🎯",
      // REMOVED: color: "bg-indigo-100"
      href: "/about",
      linkText: "About Us"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Everything Nigerian Schools Need
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our complete ecosystem designed specifically for Nigerian education
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              // CHANGED: from {feature.color} to bg-white + brand green border-top
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] group border-t-4 border-[#10B981]"
            >
              {/* Icon container - added brand green background */}
              <div className="w-14 h-14 bg-[#10B981] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <Link 
                href={feature.href}
                // CHANGED: text-blue-600 → text-[#10B981]
                className="inline-flex items-center text-[#10B981] font-semibold hover:text-[#059669] transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>{feature.linkText}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Links Row */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* CHANGED: All buttons to brand green with variations */}
            <Link 
              href="/products"
              className="px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors"
            >
              Smart School Tools
            </Link>
            <Link 
              href="/edumarket"
              className="px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors"
            >
              EduMarket
            </Link>
            <Link 
              href="/teacherearn"
              className="px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors"
            >
              TeacherEarn
            </Link>
            <Link 
              href="/pricing"
              className="px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}