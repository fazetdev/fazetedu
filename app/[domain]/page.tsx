'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface School {
  id: string;
  name: string;
  domain: string;
  email: string;
  phone: string;
  address?: string;
}

export default function SchoolPortalPage() {
  const params = useParams();
  const domain = params.domain as string;
  const [school, setSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get school from localStorage by domain
    const schools = JSON.parse(localStorage.getItem('schools') || '[]');
    const found = schools.find((s: School) => s.domain === domain);
    setSchool(found || null);
    setLoading(false);
  }, [domain]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F59E0B]"></div>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <span className="text-6xl mb-4 block">🏫</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">School Not Found</h1>
          <p className="text-gray-600 mb-6">
            The school portal "{domain}" doesn't exist. Please check the domain and try again.
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // Safely get initials
  const getInitials = (name: string) => {
    if (!name) return 'S';
    return name.split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* School Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                {getInitials(school.name)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{school.name || 'School Portal'}</h1>
                <p className="text-sm text-gray-500 mt-1">
                  {school.address || 'No address provided'} · {school.email || 'No email provided'}
                </p>
              </div>
            </div>
            <Link
              href={`/${domain}/dashboard`}
              className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Portal Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Welcome to {school.name || 'Your School'} Portal</h2>
              <p className="text-gray-600">
                This is your school's private portal. Use the dashboard to manage teachers, 
                students, classes, and fees.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href={`/${domain}/dashboard`}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl block mb-2">📊</span>
                  <span className="font-medium">Dashboard</span>
                </Link>
                <Link
                  href={`/${domain}/my-school`}
                  className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl block mb-2">🏫</span>
                  <span className="font-medium">School Info</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-500">Email:</span> {school.email || 'N/A'}</p>
                <p><span className="text-gray-500">Phone:</span> {school.phone || 'N/A'}</p>
                <p><span className="text-gray-500">Address:</span> {school.address || 'N/A'}</p>
                <p><span className="text-gray-500">Domain:</span> {school.domain}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
