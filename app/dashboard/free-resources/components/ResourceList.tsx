'use client';
import { useState } from 'react';

export default function ResourceList() {
  const [resources] = useState([
    { id: 1, name: 'Math Worksheets' },
    { id: 2, name: 'English Worksheets' },
    { id: 3, name: 'Science Guides' },
    { id: 4, name: 'History Notes' },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {resources.map((res) => (
        <div key={res.id} className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center justify-center h-36">
          <span className="text-lg font-semibold">{res.name}</span>
        </div>
      ))}
    </div>
  );
}
