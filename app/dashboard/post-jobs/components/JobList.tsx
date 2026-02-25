'use client';
import { useState } from 'react';

export default function JobList() {
  const [jobs] = useState([
    { id: 1, title: 'Math Teacher', status: 'Open' },
    { id: 2, title: 'English Teacher', status: 'Open' },
    { id: 3, title: 'Science Teacher', status: 'Closed' },
    { id: 4, title: 'History Teacher', status: 'Open' },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center justify-center h-36">
          <span className="text-xl font-semibold">{job.title}</span>
          <span className="text-gray-500">{job.status}</span>
        </div>
      ))}
    </div>
  );
}
