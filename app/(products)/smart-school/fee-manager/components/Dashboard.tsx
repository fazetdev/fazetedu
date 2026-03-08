'use client';
import React from 'react';

export default function FeeManagerDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Fee Manager</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">Transaction Tracking</div>
        <div className="bg-white shadow rounded-lg p-6">Payment Reminders</div>
        <div className="bg-white shadow rounded-lg p-6">Flexible Payment Options</div>
        <div className="bg-white shadow rounded-lg p-6">Reports & Receipts</div>
      </div>
    </div>
  );
}
