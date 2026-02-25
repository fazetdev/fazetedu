'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const smartSchoolModules = [
  { id: 'digital-register', name: 'Digital Register', description: 'Track student attendance and records', icon: '📝', link: '/smart-school/digital-register' },
  { id: 'lesson-planner', name: 'Lesson Planner', description: 'Organize lessons and timetable', icon: '📚', link: '/smart-school/lesson-planner' },
  { id: 'fee-manager', name: 'Fee Manager', description: 'Manage school fees and payments', icon: '💰', link: '/smart-school/fee-manager' },
  { id: 'report-generator', name: 'Report Generator', description: 'Generate detailed student reports', icon: '📊', link: '/smart-school/report-generator' },
  { id: 'parent-hub', name: 'Parent Hub', description: 'Communicate with parents easily', icon: '👨‍👩‍👧', link: '/smart-school/parent-hub' },
];

export default function SmartSchoolPage() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF] p-6 sm:p-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0369A1] mb-4">
          Smart School Hub
        </h1>
        <p className="text-[#0369A1] text-lg sm:text-xl">
          Access and manage all your school products in one place
        </p>
      </header>

      <section className="grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-8">
        {smartSchoolModules.map((module) => (
          <div
            key={module.id}
            onClick={() => router.push(module.link)}
            onMouseEnter={() => setHovered(module.id)}
            onMouseLeave={() => setHovered(null)}
            className={`
              bg-white rounded-3xl shadow-lg p-6 flex flex-col items-start justify-between cursor-pointer
              transition-all transform hover:scale-105 hover:shadow-2xl
            `}
          >
            <div className={`text-5xl mb-4 ${hovered === module.id ? 'animate-pulse' : ''}`}>
              {module.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#0C4A6E] mb-2">{module.name}</h3>
            <p className="text-[#0C4A6E] text-sm">{module.description}</p>
            <button className="mt-4 bg-[#0EA5E9] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#0284C7] transition-colors">
              Open
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
