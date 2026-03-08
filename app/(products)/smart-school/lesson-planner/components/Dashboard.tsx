'use client';
import React from 'react';

export default function LessonPlannerDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Lesson Planner</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">Weekly Planning</div>
        <div className="bg-white shadow rounded-lg p-6">Monthly Planning</div>
        <div className="bg-white shadow rounded-lg p-6">Resource Organization</div>
        <div className="bg-white shadow rounded-lg p-6">Scheduling</div>
      </div>
    </div>
  );
}
