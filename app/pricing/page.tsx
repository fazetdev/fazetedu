'use client';

import { useState } from 'react';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('payg');

  const pricingPlans = [
    {
      id: 'payg',
      name: 'Pay-As-You-Go',
      tagline: 'Perfect for getting started',
      price: '₦500',
      period: '/month per tool',
      features: [
        'Choose any single tool',
        'No long-term commitment',
        'Pay only for what you use',
        'Cancel anytime',
        'Basic support included'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'bundle',
      name: 'School Bundle',
      tagline: 'Best for full school management',
      price: '₦2,000',
      period: '/month for all tools',
      features: [
        'All 5 smart tools included',
        'Unlimited students & teachers',
        'Priority support',
        'Custom report templates',
        'Team training sessions'
      ],
      cta: 'Get School Bundle',
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'For large institutions',
      price: 'Custom',
      period: 'tailored pricing',
      features: [
        'Custom integrations',
        'Dedicated account manager',
        'API access',
        'On-site training',
        'Custom development'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const tools = [
    {
      name: 'Digital Register',
      description: 'Track attendance and manage grades',
      paygPrice: '₦500/month',
      features: ['Attendance tracking', 'Grade management', 'Analytics dashboard']
    },
    {
      name: 'Report Generator',
      description: 'Automated report cards and transcripts',
      paygPrice: '₦500/month',
      features: ['Custom templates', 'Auto calculations', 'Multiple formats']
    },
    {
      name: 'Fee Manager',
      description: 'Track payments and send reminders',
      paygPrice: '₦500/month',
      features: ['Payment tracking', 'SMS reminders', 'Receipt generation']
    },
    {
      name: 'Lesson Planner',
      description: 'Plan and organize teaching schedules',
      paygPrice: '₦500/month',
      features: ['Weekly planner', 'Resource library', 'Curriculum alignment']
    },
    {
      name: 'Parent Hub',
      description: 'Communicate with parents easily',
      paygPrice: '₦500/month',
      features: ['SMS notifications', 'Progress updates', 'Event reminders']
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
            <span className="text-green-600 font-medium text-sm">Simple & Fair Pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Only Pay for What
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              You Actually Use
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No large upfront costs. Start with one tool, add more as you grow. 
            Designed specifically for Nigerian schools' budgets.
          </p>
        </div>

        {/* Pricing Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {pricingPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedPlan === plan.id
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Selected Plan Details */}
          <div className="max-w-2xl mx-auto">
            {pricingPlans
              .filter((plan) => plan.id === selectedPlan)
              .map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-2xl shadow-xl p-8 border-2 ${
                    plan.popular ? 'border-green-200' : 'border-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="inline-flex items-center px-4 py-1 rounded-full bg-green-50 border border-green-100 mb-6">
                      <span className="text-green-600 font-medium text-sm">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                    <p className="text-gray-600">{plan.tagline}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full bg-gradient-to-r ${plan.color} text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Individual Tools Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Individual Tools Pricing
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Each tool works independently. Mix and match based on your school's needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">{tool.paygPrice}</div>
                  <div className="text-green-600 text-sm font-medium">Pay-as-you-go price</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-gray-700 text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full border-2 border-green-500 text-green-600 font-semibold py-3 rounded-lg hover:bg-green-50 transition-colors">
                  Select This Tool
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Plan Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 text-left text-gray-900 font-semibold">Feature</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.id} className="py-4 text-center">
                      <div className={`font-semibold ${plan.popular ? 'text-green-600' : 'text-gray-900'}`}>
                        {plan.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-gray-700">Number of Tools</td>
                  <td className="py-4 text-center">1 tool</td>
                  <td className="py-4 text-center">All 5 tools</td>
                  <td className="py-4 text-center">Custom</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-gray-700">Support</td>
                  <td className="py-4 text-center">Basic</td>
                  <td className="py-4 text-center">Priority</td>
                  <td className="py-4 text-center">Dedicated</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 text-gray-700">Contract</td>
                  <td className="py-4 text-center">Monthly</td>
                  <td className="py-4 text-center">Monthly/Yearly</td>
                  <td className="py-4 text-center">Custom</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-700">Training</td>
                  <td className="py-4 text-center">Self-guided</td>
                  <td className="py-4 text-center">Group sessions</td>
                  <td className="py-4 text-center">On-site</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Can I switch between plans?',
                a: 'Yes! You can upgrade, downgrade, or cancel anytime. Changes take effect in the next billing cycle.'
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes! All new schools get a 14-day free trial of any single tool. No credit card required.'
              },
              {
                q: 'Do you offer discounts for multiple schools?',
                a: 'Yes! Contact us for group pricing if you manage multiple schools or institutions.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept bank transfers, USSD, and online payments through Nigerian banks and fintech platforms.'
              },
              {
                q: 'Can I use multiple tools at once?',
                a: 'Absolutely! You can use as many tools as you need. Each tool is billed separately in the Pay-As-You-Go plan.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Digital Transformation Today
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Join hundreds of schools already using Fazet Edu to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105">
                Start 14-Day Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                Schedule a Demo
              </button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              No credit card required • Cancel anytime • Support included
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}