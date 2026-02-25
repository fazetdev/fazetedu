'use client';
import React from 'react';

export default function ReportGeneratorDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Report Generator</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">Custom Templates</div>
        <div className="bg-white shadow rounded-lg p-6">Automatic Calculations</div>
        <div className="bg-white shadow rounded-lg p-6">Multiple Report Formats</div>
        <div className="bg-white shadow rounded-lg p-6">Student Performance Reports</div>
      </div>
    </div>
  );
}
