'use client';
import { useState } from 'react';

export default function StudentList() {
  const [students] = useState([
    { id: 1, name: 'John Doe', class: 'Grade 3' },
    { id: 2, name: 'Jane Smith', class: 'Grade 5' },
    { id: 3, name: 'Mary Johnson', class: 'Grade 2' },
    { id: 4, name: 'Alex Lee', class: 'Grade 4' },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {students.map((student) => (
        <div key={student.id} className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center justify-center h-36">
          <span className="text-xl font-semibold">{student.name}</span>
          <span className="text-gray-500">{student.class}</span>
        </div>
      ))}
    </div>
  );
}
