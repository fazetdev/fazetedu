'use client';

import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B] bg-opacity-10 border border-[#F59E0B] border-opacity-20 mb-6">
            <span className="text-[#F59E0B] font-medium text-sm">Simple & Transparent Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            One-Time Setup.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#DC2626]">
              Small Yearly Fee.
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No per-student fees. No hidden costs. Pay once, then a small yearly maintenance fee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Starter Tier */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Starter</h2>
              <p className="text-gray-500 mb-4">.co.ng domain</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#F59E0B]">₦80,000</span>
                <span className="text-gray-500"> one-time</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">+ ₦25,000/year maintenance</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Professional school website
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Fee tracker
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Admission form
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Results publishing
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Announcements
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Mobile friendly
                </li>
              </ul>
              
              <Link
                href="/contact"
                className="block text-center bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                Get Starter
              </Link>
            </div>
          </div>

          {/* Smart School Tier */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#F59E0B] relative hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 bg-[#F59E0B] text-white px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Smart School</h2>
              <p className="text-gray-500 mb-4">.ng or .com.ng domain</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#F59E0B]">₦150,000</span>
                <span className="text-gray-500"> one-time</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">+ ₦35,000/year maintenance</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Everything in Starter
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Student management
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Teacher dashboard
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Attendance tracking
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Report card generator
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F59E0B]">✓</span> Priority support
                </li>
              </ul>
              
              <Link
                href="/contact"
                className="block text-center bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Get Smart School
              </Link>
            </div>
          </div>
        </div>

        {/* What's Included in Maintenance */}
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">What's Included in Yearly Maintenance</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <p className="font-semibold text-gray-800">Domain Renewal</p>
              <p className="text-sm text-gray-500">Your domain stays active</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold text-gray-800">Hosting</p>
              <p className="text-sm text-gray-500">Fast, reliable hosting</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <p className="font-semibold text-gray-800">Support</p>
              <p className="text-sm text-gray-500">Small fixes and updates</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'Is there a free trial?',
                a: 'Yes! We offer a free demo setup so you can see how it works before paying.'
              },
              {
                q: 'What happens if I don\'t pay the yearly maintenance?',
                a: 'Your website will be taken down after a grace period. The domain will expire, and hosting will stop.'
              },
              {
                q: 'Can I upgrade from Starter to Smart School later?',
                a: 'Yes! You can upgrade anytime by paying the difference.'
              },
              {
                q: 'Do I own the website?',
                a: 'Yes. You own everything. The maintenance fee just covers hosting, domain, and support.'
              },
              {
                q: 'How long does setup take?',
                a: 'Starter websites are ready in 3-5 days. Smart School takes 5-7 days.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors bg-white">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B] bg-opacity-10 border border-[#F59E0B] border-opacity-20 mb-6">
            <span className="text-[#F59E0B] font-medium text-sm">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get a Free Demo Setup
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105"
            >
              Request Free Demo
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#F59E0B] text-[#F59E0B] font-bold rounded-xl hover:bg-[#F59E0B] hover:bg-opacity-5 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
          
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            No pressure. No hidden fees. Just a simple demo to show you how it works.
          </p>
        </div>

      </div>
    </main>
  );
}