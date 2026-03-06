'use client';

export default function HowItWorks() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        How EduMarket Works
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* For Buyers */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Buyers</h3>
          {[
            { number: 1, title: 'Search & Browse', desc: 'Find quality resources by category or keyword', bg: 'bg-[#EDE9FE]', text: 'text-[#8B5CF6]' },
            { number: 2, title: 'Purchase Securely', desc: 'Buy resources with safe payment methods', bg: 'bg-[#EDE9FE]', text: 'text-[#8B5CF6]' },
            { number: 3, title: 'Download & Use', desc: 'Get instant access to purchased materials', bg: 'bg-[#EDE9FE]', text: 'text-[#8B5CF6]' }
          ].map((item) => (
            <div key={item.number} className="flex items-start">
              <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                <span className={item.text}>{item.number}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* For Sellers */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Sellers</h3>
          {[
            { number: 1, title: 'Create Account', desc: 'Sign up as a seller (verification required)', bg: 'bg-[#FCE7F3]', text: 'text-[#DB2777]' },
            { number: 2, title: 'Upload Materials', desc: 'Share your best teaching resources', bg: 'bg-[#FCE7F3]', text: 'text-[#DB2777]' },
            { number: 3, title: 'Earn Income', desc: 'Get paid when other teachers buy your resources', bg: 'bg-[#FCE7F3]', text: 'text-[#DB2777]' }
          ].map((item) => (
            <div key={item.number} className="flex items-start">
              <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                <span className={item.text}>{item.number}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
