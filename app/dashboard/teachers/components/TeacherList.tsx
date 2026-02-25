'use client';
import { useState } from 'react';

export default function TeacherList() {
  const [teachers] = useState([
    { id: 1, name: 'Mr. Adams', subject: 'Math' },
    { id: 2, name: 'Ms. Brown', subject: 'English' },
    { id: 3, name: 'Mrs. White', subject: 'Science' },
    { id: 4, name: 'Mr. Green', subject: 'History' },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {teachers.map((t) => (
        <div key={t.id} className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center justify-center h-36">
          <span className="text-xl font-semibold">{t.name}</span>
          <span className="text-gray-500">{t.subject}</span>
        </div>
      ))}
    </div>
  );
}
