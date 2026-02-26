'use client';

export default function SchoolAnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            School Analytics
          </h1>
          <p className="text-gray-600 mt-2">
            Performance overview for your school.
          </p>
        </div>

        {/* Metrics Grid - 2x2 Fixed */}
        <div className="grid grid-cols-2 gap-6 mb-12">

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-gray-500">Total Students</p>
            <h2 className="text-4xl font-bold text-[#3B82F6] mt-2">0</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-gray-500">Total Teachers</p>
            <h2 className="text-4xl font-bold text-[#10B981] mt-2">0</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-gray-500">Total Classes</p>
            <h2 className="text-4xl font-bold text-[#F59E0B] mt-2">0</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-gray-500">Active Products</p>
            <h2 className="text-4xl font-bold text-[#DC2626] mt-2">0</h2>
          </div>

        </div>

        {/* Activity Overview Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Activity Overview
          </h2>

          <div className="h-64 flex items-center justify-center text-gray-400 border border-dashed border-gray-300 rounded-xl">
            Chart Area (Connect later to real data)
          </div>
        </div>

        {/* Job Metrics */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Recruitment Summary
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-500">Jobs Posted</p>
              <h3 className="text-3xl font-bold mt-2">0</h3>
            </div>

            <div>
              <p className="text-gray-500">Active Applications</p>
              <h3 className="text-3xl font-bold mt-2">0</h3>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
