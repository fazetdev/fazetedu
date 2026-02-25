'use client';

import { useState } from 'react';

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState({
    name: 'John Doe',
    profilePic: '/default-teacher.png',
    profileCompletion: 70,
  });

  const amberGradient = 'from-[#F59E0B] to-[#DC2626]';

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-col sm:flex-row sm:items-center sm:space-x-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
            Teacher Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-end">
              <span className="font-semibold text-gray-700">{teacher.name}</span>
              <div className="w-40 bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${amberGradient}`}
                  style={{ width: `${teacher.profileCompletion}%` }}
                ></div>
              </div>
            </div>
            <img
              src={teacher.profilePic}
              alt="Teacher Profile"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#F59E0B]"
            />
          </div>
        </div>

        {/* 2x3 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-gray-900">Earning</h2>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-gray-900">Materials for Selling</h2>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-gray-900">Bookings</h2>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-gray-900">Students / Mentees</h2>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-gray-900">Posted Jobs</h2>
          </div>

          {/* New container: Add Free Materials */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add Free Materials</h2>
            <button
              className="px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Upload Material
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
