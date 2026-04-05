'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    package: '',
    message: '',
    terms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - TODO: Connect to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        school: '',
        package: '',
        message: '',
        terms: false
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const packages = [
    { value: '', label: 'Select a package' },
    { value: 'starter', label: 'Starter (₦80,000 + ₦25,000/year)' },
    { value: 'smart', label: 'Smart School (₦150,000 + ₦35,000/year)' },
    { value: 'not-sure', label: 'Not sure yet - need advice' },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-white to-green-600"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-8">
              <span className="text-[#F59E0B] font-medium text-sm">📞 Free Demo Setup</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Get Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#DC2626]">
                Free Demo Today
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              See how your school website + smart tools will look. No obligation. No pressure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:07082921105"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <span className="text-xl mr-2">📞</span>
                Call 0708 292 1105
              </a>
              <a
                href="https://wa.me/2347082921105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <span className="text-xl mr-2">💬</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center mr-3">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="font-bold text-gray-900">Pricing</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800">Starter Package</p>
                  <p className="text-gray-500 text-sm">₦80,000 one-time + ₦25,000/year</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Smart School Package</p>
                  <p className="text-gray-500 text-sm">₦150,000 one-time + ₦35,000/year</p>
                </div>
                <p className="text-xs text-gray-400 mt-2">Includes domain + hosting for 1 year</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center mr-3">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900">Quick Response</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                We typically respond within 2 hours during business hours.
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-500">Office Hours</p>
                <p className="text-sm text-gray-700">Mon-Fri: 8am - 6pm</p>
                <p className="text-sm text-gray-700">Sat: 9am - 2pm</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-3">What happens next?</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span>1️⃣</span> We'll contact you within 2 hours
                </li>
                <li className="flex items-center gap-2">
                  <span>2️⃣</span> Discuss your school's needs
                </li>
                <li className="flex items-center gap-2">
                  <span>3️⃣</span> Set up a free demo
                </li>
                <li className="flex items-center gap-2">
                  <span>4️⃣</span> You decide if you want to proceed
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Request Free Demo Setup
                </h2>
                <p className="text-gray-600">
                  Fill out the form and we'll set up a demo for your school within 2 hours.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Request sent successfully!</p>
                    <p className="text-sm text-green-600">We'll contact you within 2 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@school.edu.ng"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="0708 292 1105"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="school"
                      value={formData.school}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Crown Heights School"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Package
                    </label>
                    <select
                      id="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all bg-white"
                    >
                      {packages.map(pkg => (
                        <option key={pkg.value} value={pkg.value}>{pkg.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your school or any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                    className="mt-1 h-4 w-4 text-[#F59E0B] rounded border-gray-300 focus:ring-[#F59E0B]"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                    I agree to receive communications about my demo request.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Request Free Demo Setup →'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F59E0B] font-semibold text-sm tracking-wider uppercase">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Is the demo really free?",
                a: "Yes! We'll set up a demo version of your school's website so you can see how it works before paying anything."
              },
              {
                q: "What's included in the yearly maintenance?",
                a: "Domain renewal, hosting, basic support, and small updates."
              },
              {
                q: "Can I upgrade from Starter to Smart School?",
                a: "Yes, anytime. You just pay the difference."
              },
              {
                q: "Do I own my school website?",
                a: "Yes, you own everything. We just maintain it for you."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}