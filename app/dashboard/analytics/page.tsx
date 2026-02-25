'use client';
import MetricsSummary from './components/MetricsSummary';

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics</h1>
      <MetricsSummary />
    </main>
  );
}
