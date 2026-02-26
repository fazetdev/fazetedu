'use client';

export default function PostJobsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Post Job
          </h1>
          <p className="text-gray-600 mt-2">
            Create job opportunities for teachers and staff.
          </p>
        </div>

        {/* Create Job Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Create New Job
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Job Title (e.g. Mathematics Teacher)"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <input
              type="text"
              placeholder="Subject / Role"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <select
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            >
              <option>Employment Type</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>

            <input
              type="text"
              placeholder="Required Qualification"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <input
              type="text"
              placeholder="Years of Experience"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <input
              type="text"
              placeholder="Salary (Optional)"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <input
              type="text"
              placeholder="Location"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <textarea
              placeholder="Job Description"
              rows={4}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            />

            <button
              type="button"
              className="bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Publish Job
            </button>

          </form>
        </div>

        {/* Posted Jobs Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Posted Jobs
          </h2>

          <div className="text-center py-12 text-gray-500">
            No jobs posted yet.
          </div>

        </div>

      </div>
    </main>
  );
}
