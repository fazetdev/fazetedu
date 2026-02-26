'use client';

export default function RecentActivitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Recent Activities
          </h1>
          <p className="text-gray-600 mt-2">
            Latest actions performed in your school.
          </p>
        </div>

        {/* Activity Timeline Card */}
        <div className="bg-white rounded-2xl p-6 shadow-md">

          <div className="space-y-6">

            {/* Activity Item */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-[#10B981] rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-800">
                  New Teacher Added
                </p>
                <p className="text-sm text-gray-500">
                  A teacher was added to the Mathematics department.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  2 hours ago
                </p>
              </div>
            </div>

            {/* Activity Item */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-[#3B82F6] rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-800">
                  Student Enrolled
                </p>
                <p className="text-sm text-gray-500">
                  A new student was enrolled in Grade 3.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  5 hours ago
                </p>
              </div>
            </div>

            {/* Activity Item */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-[#F59E0B] rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-800">
                  Job Posted
                </p>
                <p className="text-sm text-gray-500">
                  Mathematics Teacher position published.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Yesterday
                </p>
              </div>
            </div>

            {/* Empty state ready for dynamic data later */}
            {/* Remove static items when backend is connected */}

          </div>

        </div>

      </div>
    </main>
  );
}
