'use client';
import React from 'react';

export default function ParentHubDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Parent Hub</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">Child Progress</div>
        <div className="bg-white shadow rounded-lg p-6">Bookings</div>
        <div className="bg-white shadow rounded-lg p-6">Goals & Guidance</div>
        <div className="bg-white shadow rounded-lg p-6">Communication</div>
      </div>
    </div>
  );
}
