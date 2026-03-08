'use client';

import { useState } from 'react';

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('schools');

  const schoolPricing = [
    {
      name: 'Digital Register',
      description: 'Track student attendance and manage grades',
      price: '₦50',
      period: '/student/month',
      features: [
        'Unlimited attendance tracking',
        'Grade management',
        'Student performance analytics',
        'Class-level insights',
        'Export to Excel'
      ],
      // REMOVED: color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Report Generator',
      description: 'Automated report cards and transcripts',
      price: '₦50',
      period: '/report sheet',
      features: [
        'Custom school templates',
        'Automatic calculations',
        'Multiple report formats (PDF, Word)',
        'Bulk generation',
        'Teacher comments'
      ],
      // REMOVED: color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Fee Manager',
      description: 'Track and manage school fee payments',
      price: '₦2,000',
      period: '/school/month',
      features: [
        'Unlimited student accounts',
        'Payment tracking dashboard',
        'Automated SMS reminders',
        'Receipt generation',
        'Financial reports'
      ],
      // REMOVED: color: 'from-green-500 to-emerald-500'
      popular: true
    },
    {
      name: 'Lesson Planner',
      description: 'Plan lessons and organize teaching schedules',
      price: 'Free',
      period: 'with any paid tool',
      features: [
        'Weekly/Monthly planning',
        'Curriculum alignment',
        'Resource library access',
        'Teacher collaboration',
        'Progress tracking'
      ],
      // REMOVED: color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Parent Hub',
      description: 'Communicate with parents via SMS',
      price: '₦3,000',
      period: '/school/month',
      features: [
        'Unlimited SMS notifications',
        'Student progress updates',
        'Event reminders',
        'Attendance alerts',
        'Bulk messaging'
      ],
      // REMOVED: color: 'from-red-500 to-rose-500'
    }
  ];

  const enterpriseFeatures = [
    'Custom school management system',
    'API integration with existing systems',
    'Dedicated account manager',
    'On-site training for staff',
    'Custom reporting dashboard',
    'White-label solution available',
    'Priority 24/7 support',
    'Scalable infrastructure'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - CHANGED: green-50 to brand green light */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#10B981] bg-opacity-10 border border-[#10B981] border-opacity-20 mb-6">
            <span className="text-[#10B981] font-medium text-sm">Clear & Transparent Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Simple Pricing for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669]">
              Nigerian Schools
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pay only for what you need. No hidden fees. Designed specifically for 
            Nigerian schools with transparent per-student and per-school pricing.
          </p>
        </div>

        {/* Category Selection - CHANGED: green to brand green, blue to brand green darker */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full border border-gray-200 p-1">
            <button
              onClick={() => setSelectedCategory('schools')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'schools'
                  ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              For Schools
            </button>
            <button
              onClick={() => setSelectedCategory('enterprise')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'enterprise'
                  ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Enterprise Solutions
            </button>
          </div>
        </div>

        {/* Schools Pricing */}
        {selectedCategory === 'schools' && (
          <>
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {schoolPricing.map((tool, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:shadow-xl transition-shadow ${
                    tool.popular ? 'relative border-[#10B981]' : ''
                  }`}
                >
                  {tool.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      {/* CHANGED: green gradient to amber (kept gold for "Most Popular") */}
                      <div className="px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* CHANGED: from dynamic color to brand green top border */}
                  <div className="h-2 w-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-t-lg -mx-6 -mt-6 mb-6"></div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">{tool.price}</span>
                      <span className="text-gray-500 ml-2">{tool.period}</span>
                    </div>
                    {tool.price === 'Free' && (
                      <div className="text-[#10B981] text-sm font-medium mt-1">
                        Included with any paid tool
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tool.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-gray-700">
                        {/* CHANGED: green-500 to brand green */}
                        <svg className="w-5 h-5 text-[#10B981] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CHANGED: from dynamic color to brand green gradient */}
                  <button className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold py-3 rounded-lg hover:shadow-md transition-all">
                    Select This Tool
                  </button>
                </div>
              ))}
            </div>

            {/* Example Calculation - CHANGED: blue gradient to green gradient */}
            <div className="bg-gradient-to-r from-[#10B981] bg-opacity-5 to-[#059669] bg-opacity-5 rounded-2xl p-6 border border-[#10B981] border-opacity-20 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Example Cost Calculation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For a School with 200 Students:</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Digital Register:</span>
                      <span className="font-semibold">₦10,000/month</span>
                    </div>
                    <div className="text-sm text-gray-600">(₦50 × 200 students)</div>
                    
                    <div className="flex justify-between">
                      <span>Report Generator:</span>
                      <span className="font-semibold">~₦2,500/month</span>
                    </div>
                    <div className="text-sm text-gray-600">(₦50 × ~50 report sheets/month)</div>
                    
                    <div className="flex justify-between">
                      <span>Fee Manager:</span>
                      <span className="font-semibold">₦2,000/month</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Parent Hub:</span>
                      <span className="font-semibold">₦3,000/month</span>
                    </div>
                    
                    <div className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Monthly Cost:</span>
                        <span>₦17,500</span>
                      </div>
                      <div className="text-sm text-gray-600">Less than ₦90 per student/month</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What You Get:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      {/* CHANGED: green-500 to brand green */}
                      <span className="text-[#10B981] mr-2">✓</span>
                      Complete digital transformation
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#10B981] mr-2">✓</span>
                      Time savings for teachers (10+ hours/week)
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#10B981] mr-2">✓</span>
                      Improved parent communication
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#10B981] mr-2">✓</span>
                      Professional reporting system
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#10B981] mr-2">✓</span>
                      Financial management included
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bundle Option - CHANGED: green gradient to brand green */}
            <div className="bg-gradient-to-r from-[#10B981] bg-opacity-5 to-[#059669] bg-opacity-5 rounded-2xl p-8 border border-[#10B981] border-opacity-20 text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Want All Tools?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get all 5 tools at a discounted bundle price. Perfect for schools wanting 
                complete digital management.
              </p>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">Custom Bundle Pricing</div>
                <div className="text-gray-600">Based on your school size and needs</div>
              </div>
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105">
                <span>Get Custom Quote</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </>
        )}

        {/* Enterprise Solutions - CHANGED: blue to brand green */}
        {selectedCategory === 'enterprise' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#10B981] bg-opacity-5 to-[#059669] bg-opacity-5 rounded-2xl p-8 border border-[#10B981] border-opacity-20 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
              <p className="text-gray-700 mb-6">
                Custom school management systems for educational institutions, government bodies, 
                and organizations managing multiple schools.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Who It's For:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      {/* CHANGED: blue-100 to green bg-opacity */}
                      <div className="w-8 h-8 bg-[#10B981] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-[#10B981]">🏢</span>
                      </div>
                      <span>Large private school chains</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-[#10B981] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-[#10B981]">🏛️</span>
                      </div>
                      <span>Government education departments</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-[#10B981] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-[#10B981]">🎓</span>
                      </div>
                      <span>Educational NGOs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-[#10B981] bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-[#10B981]">📚</span>
                      </div>
                      <span>University-affiliated schools</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing Model:</h3>
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="text-3xl font-bold text-gray-900 mb-2">Custom Pricing</div>
                    <p className="text-gray-600 mb-4">
                      Based on number of schools, students, and required features
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Annual subscription model</li>
                      <li>• Volume discounts available</li>
                      <li>• Custom development included</li>
                      <li>• Dedicated support team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enterprise Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {enterpriseFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center">
                      {/* CHANGED: blue-100 to green bg-opacity */}
                      <div className="w-8 h-8 bg-[#10B981] bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-[#10B981]">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact for Enterprise - CHANGED: blue gradient to green */}
            <div className="text-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105 mb-4">
                <span>Schedule Enterprise Demo</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="text-gray-600">
                Our team will contact you within 24 hours to discuss your requirements
              </p>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How is the per-student pricing calculated?',
                a: 'We count active students enrolled in your school. You only pay for students who are actively using the system.'
              },
              {
                q: 'Can I try before I pay?',
                a: 'Yes! All new schools get a 30-day free trial of any tool. No credit card required.'
              },
              {
                q: 'What happens if my student count changes?',
                a: 'Your billing updates automatically each month based on actual student count.'
              },
              {
                q: 'Do you offer discounts for public schools?',
                a: 'Yes, special discounted rates are available for government schools. Contact us for details.'
              },
              {
                q: 'Is internet required?',
                a: 'Basic features work offline, but internet is needed for SMS notifications and cloud backups.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - CHANGED: green to brand green */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#10B981] bg-opacity-10 border border-[#10B981] border-opacity-20 mb-6">
            <span className="text-[#10B981] font-medium text-sm">Start Your Digital Journey</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your School?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105">
              Start 30-Day Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-[#10B981] text-[#10B981] font-bold rounded-xl hover:bg-[#10B981] hover:bg-opacity-5 transition-colors">
              Book a Demo
            </button>
          </div>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            No setup fees • Cancel anytime • Nigerian support team • Mobile-friendly
          </p>
        </div>

      </div>
    </main>
  );
}