'use client';
import StudentList from './components/StudentList';

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Students</h1>
      <StudentList />
    </main>
  );
}
