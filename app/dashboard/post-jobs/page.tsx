'use client';
import JobList from './components/JobList';

export default function PostJobsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Post Jobs</h1>
      <JobList />
    </main>
  );
}
