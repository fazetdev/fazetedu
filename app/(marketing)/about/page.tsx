'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-6">
            <span className="text-[#F59E0B] font-medium text-sm">Our Story & Mission</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Helping Nigerian Schools
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#DC2626]">
              Work Smarter
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build professional websites and smart tools that help schools manage fees, admissions, and results — all in one place.
          </p>
        </section>

        {/* The Problem Section */}
        <section className="bg-red-50 rounded-2xl p-8 border border-red-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Challenges Schools Face</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: '📄', title: 'Paper & Spreadsheets', desc: 'Schools drowning in manual records and lost paperwork' },
              { icon: '📱', title: 'WhatsApp Chaos', desc: 'Important parent communications lost in group chats' },
              { icon: '💰', title: 'Fee Tracking Headaches', desc: 'No clear view of who has paid and who owes' },
              { icon: '📊', title: 'No Online Presence', desc: 'Schools lack professional websites parents expect' },
            ].map((item, i) => (
              <div key={i} className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-red-100 rounded-lg mr-4 text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Solution */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Solution: Simple, Affordable, Effective
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏫', title: 'Professional Website', desc: 'Beautiful, mobile-friendly website for your school' },
              { icon: '💰', title: 'Fee Tracker', desc: 'Know exactly who has paid and who owes' },
              { icon: '📝', title: 'Admission & Results', desc: 'Online applications and instant result publishing' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#F59E0B] transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About the Company */}
        <section className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            FazetEdu is a Nigerian edtech startup dedicated to helping schools go digital.
            We provide professional websites and smart tools that simplify fee tracking,
            admissions, and result publishing — trusted by schools across Abuja and Kano.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { num: '1', title: 'Help Schools Go Digital', desc: 'Make it easy and affordable for Nigerian schools to have a professional online presence' },
              { num: '2', title: 'Simplify Administration', desc: 'Save time on fee tracking, admissions, and result publishing' },
              { num: '3', title: 'Keep It Simple', desc: 'No complex software. Just tools that work and are easy to use' },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="bg-white text-[#DC2626] rounded-full p-3 mr-4 font-bold text-xl">{item.num}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to give your school a professional website and smart tools?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105"
            >
              Get Free Demo Setup
            </a>
            <a
              href="/pricing"
              className="inline-block px-8 py-4 border-2 border-[#F59E0B] text-[#F59E0B] font-semibold rounded-xl hover:bg-[#F59E0B] hover:text-white transition"
            >
              View Pricing
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}