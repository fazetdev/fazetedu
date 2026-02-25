'use client';
import { useState } from 'react';

export default function MetricsSummary() {
  const [metrics] = useState([
    { id: 1, name: 'Attendance', value: '92%' },
    { id: 2, name: 'Student Progress', value: '85%' },
    { id: 3, name: 'Teacher Performance', value: '88%' },
    { id: 4, name: 'Jobs Filled', value: '70%' },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((m) => (
        <div key={m.id} className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center justify-center h-36">
          <span className="text-xl font-semibold">{m.name}</span>
          <span className="text-gray-500">{m.value}</span>
        </div>
      ))}
    </div>
  );
}
