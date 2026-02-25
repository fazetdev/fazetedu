'use client';
import React from 'react';

export default function DigitalRegisterDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Digital Register</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">Attendance Tracking</div>
        <div className="bg-white shadow rounded-lg p-6">Grade Management</div>
        <div className="bg-white shadow rounded-lg p-6">Analytics & Reports</div>
        <div className="bg-white shadow rounded-lg p-6">Student Profiles</div>
      </div>
    </div>
  );
}
