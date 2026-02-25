'use client';
import ResourceList from './components/ResourceList';

export default function FreeResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Free Resources</h1>
      <ResourceList />
    </main>
  );
}
