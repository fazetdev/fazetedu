'use client';

interface SellerPromoProps {
  onStartSelling: () => void;
}

export default function SellerPromo({ onStartSelling }: SellerPromoProps) {
  return (
    <div className="bg-gradient-to-r from-[#EDE9FE] to-[#FCE7F3] rounded-2xl p-8 md:p-12 border border-[#8B5CF6] border-opacity-20 mb-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#8B5CF6] border-opacity-20 mb-6">
          <span className="text-[#8B5CF6] font-medium text-sm">Earn Extra Income</span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Have Great Teaching Resources?
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#DB2777]">
            Start Selling on EduMarket
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: '📤', title: 'Upload Resources', desc: 'Share your lesson plans, worksheets, and materials' },
            { icon: '💰', title: 'Set Your Price', desc: 'Earn money from other teachers using your resources' },
            { icon: '👨‍🏫', title: 'Build Reputation', desc: 'Get rated and become a trusted resource creator' }
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-[#8B5CF6] border-opacity-20">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onStartSelling}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105"
        >
          <span>Start Selling Resources</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
