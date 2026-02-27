'use client';

export default function ParentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple header for parent dashboard */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Parent Portal</h2>
        </div>
      </header>
      {children}
    </div>
  );
}
