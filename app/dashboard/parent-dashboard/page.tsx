'use client';

export default function ParentDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your parent portal</p>
        
        {/* Quick Stats Placeholder */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Children</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Pending Fees</p>
            <p className="text-2xl font-bold text-gray-900">₦0</p>
          </div>
        </div>
      </div>
    </main>
  );
}
