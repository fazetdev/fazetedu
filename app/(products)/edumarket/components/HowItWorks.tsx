'use client';

export default function HowItWorks() {
  const steps = [
    {
      icon: '🔍',
      title: 'Browse Resources',
      description: 'Find the perfect educational materials from our marketplace'
    },
    {
      icon: '🛒',
      title: 'Purchase Securely',
      description: 'Safe and secure payments with instant download access'
    },
    {
      icon: '📥',
      title: 'Download & Use',
      description: 'Get instant access to your purchased resources'
    },
    {
      icon: '💰',
      title: 'Sell Your Work',
      description: 'Share your expertise and earn from your educational materials'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">How EduMarket Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-3">{step.icon}</div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
