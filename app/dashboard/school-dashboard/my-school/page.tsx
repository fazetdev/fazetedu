'use client';

import { useRouter } from 'next/navigation';

export default function MySchoolPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            My School
          </h1>
          <p className="text-gray-600 mt-2">
            Overview of your school structure and subscribed products.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6">

          {/* Classes */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Classes
            </h3>
            <p className="text-4xl font-bold text-[#F59E0B]">0</p>
            <p className="text-gray-500 mt-2">Total classes created</p>
          </div>

          {/* Teachers */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Teachers
            </h3>
            <p className="text-4xl font-bold text-[#10B981]">0</p>
            <p className="text-gray-500 mt-2">Total teachers registered</p>
          </div>

          {/* Students */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Students
            </h3>
            <p className="text-4xl font-bold text-[#3B82F6]">0</p>
            <p className="text-gray-500 mt-2">Total students enrolled</p>
          </div>

          {/* Add / Subscribed Products */}
          <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                School Products
              </h3>
              <p className="text-gray-500">
                No products subscribed yet.
              </p>
            </div>

            <button
              onClick={() => router.push('/smart-school')}
              className="mt-6 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              + Add Product
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
