
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Hero Section - UPDATED to brand green */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#10B981] bg-opacity-10 border border-[#10B981] border-opacity-20 mb-6">
            <span className="text-[#10B981] font-medium text-sm">Our Story & Mission</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669]">
              Education in Northern Nigeria
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We started with a simple observation: while technology transforms education globally, 
            Northern Nigerian schools were being left behind.
          </p>
        </div>

        {/* The Problem Section - Keep red for warning (good as is) */}
        <div className="mb-16 p-8 bg-red-50 rounded-2xl border border-red-100">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-red-100 rounded-xl mr-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">The Reality We Saw</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg mr-3">
                  <span className="text-red-500">📄</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Paper & Spreadsheets</h3>
                  <p className="text-gray-600 text-sm">Schools drowning in manual records</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg mr-3">
                  <span className="text-red-500">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp Chaos</h3>
                  <p className="text-gray-600 text-sm">Important communications lost in group chats</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg mr-3">
                  <span className="text-red-500">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Missing Data</h3>
                  <p className="text-gray-600 text-sm">No centralized student tracking system</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-white rounded-lg mr-3">
                  <span className="text-red-500">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Inefficient Processes</h3>
                  <p className="text-gray-600 text-sm">Teachers spending hours on administrative tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solution - UPDATED to brand green */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Solution: Built for Local Realities
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#10B981] transition-colors">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable</h3>
              <p className="text-gray-600">Pay-as-you-go pricing that fits school budgets</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#10B981] transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile-First</h3>
              <p className="text-gray-600">Works on any smartphone, no computers needed</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#10B981] transition-colors">
              <div className="text-4xl mb-4">👩‍🏫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teacher-Centric</h3>
              <p className="text-gray-600">Designed by teachers, for teachers</p>
            </div>
          </div>
        </div>

        {/* The Platform - UPDATED to match actual section colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            More Than Just Tools - An Ecosystem
          </h2>
          
          <div className="space-y-6">
            {/* Smart School Tools - Brand green */}
            <div className="p-6 bg-gradient-to-r from-[#10B981] bg-opacity-5 to-[#059669] bg-opacity-5 rounded-xl border border-[#10B981] border-opacity-20">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart School Tools</h3>
              <p className="text-gray-700">
                Digital registers, automated reports, fee management - all the essential tools schools need to run efficiently.
              </p>
            </div>
            
            {/* TeacherEarn - Orange (matches TeacherEarn section) */}
            <div className="p-6 bg-gradient-to-r from-[#F59E0B] bg-opacity-5 to-[#DC2626] bg-opacity-5 rounded-xl border border-[#F59E0B] border-opacity-20">
              <h3 className="text-xl font-bold text-gray-900 mb-2">TeacherEarn</h3>
              <p className="text-gray-700">
                Creating new income opportunities for teachers through content creation, tutoring, and resource sharing.
              </p>
            </div>
            
            {/* EduMarket - Purple (matches EduMarket section) */}
            <div className="p-6 bg-gradient-to-r from-[#8B5CF6] bg-opacity-5 to-[#DB2777] bg-opacity-5 rounded-xl border border-[#8B5CF6] border-opacity-20">
              <h3 className="text-xl font-bold text-gray-900 mb-2">EduMarket</h3>
              <p className="text-gray-700">
                A marketplace for educational resources, connecting teachers with quality materials they can actually use.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement - UPDATED to brand green */}
        <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission in Three Parts</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white text-[#10B981] rounded-full p-3 mr-4">
                  <span className="font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Digital Transition</h3>
                  <p>Help Northern schools move from paper to practical digital solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white text-[#10B981] rounded-full p-3 mr-4">
                  <span className="font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Improved Management</h3>
                  <p>Make school administration simpler, faster, and more effective</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white text-[#10B981] rounded-full p-3 mr-4">
                  <span className="font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Teacher Empowerment</h3>
                  <p>Create new income and growth opportunities for educators</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pilot Phase - UPDATED to brand green */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#10B981] bg-opacity-10 border border-[#10B981] border-opacity-20 mb-6">
            <span className="text-[#10B981] font-medium text-sm">🚀 Currently in Pilot Phase</span>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fazet Edu is currently being tested with select schools in Kano and the North-West. 
            We're working directly with teachers and administrators to build solutions that 
            truly work for their unique challenges.
          </p>
          
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105">
            Join Our Pilot Program
          </button>
        </div>

      </div>
    </main>
  );
}