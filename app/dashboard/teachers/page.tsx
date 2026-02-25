'use client';
import TeacherList from './components/TeacherList';

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Teachers</h1>
      <TeacherList />
    </main>
  );
}
