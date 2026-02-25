'use client';
import React from 'react';

export default function SmartSchoolDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Smart School Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded shadow">Students</div>
        <div className="p-6 bg-white rounded shadow">Teachers</div>
        <div className="p-6 bg-white rounded shadow">Attendance</div>
        <div className="p-6 bg-white rounded shadow">Grades</div>
        <div className="p-6 bg-white rounded shadow">Fees</div>
        <div className="p-6 bg-white rounded shadow">Reports</div>
      </div>
    </div>
  );
}
