'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/app/utils/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registeredSchools, setRegisteredSchools] = useState<any[]>([]);

  useEffect(() => {
    const schools = JSON.parse(localStorage.getItem('schools') || '[]');
    setRegisteredSchools(schools);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { user } = auth.login(email);

      if (!user) {
        setError('User not found. Please register first.');
        setLoading(false);
        return;
      }

      const dashboardUrl = auth.getDashboardUrl(user);
      console.log('Redirecting to:', dashboardUrl);
      router.push(dashboardUrl);

    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const demoLogin = (role: string) => {
    if (role === 'admin') {
      setEmail('admin@fazetedu.ng');
    } else if (role === 'school') {
      const schools = JSON.parse(localStorage.getItem('schools') || '[]');
      if (schools.length > 0) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const schoolUser = users.find((u: any) => u.schoolId === schools[0].id);
        setEmail(schoolUser?.email || '');
      }
    } else if (role === 'teacher') {
      const teachers = JSON.parse(localStorage.getItem('teachers') || '[]');
      if (teachers.length > 0) {
        setEmail(teachers[0].email);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
        </div>

        {/* Admin Quick Access - Only shown in development */}
        <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
          <p className="text-xs text-purple-600 font-medium mb-2">👑 Admin Access</p>
          <div className="flex flex-wrap gap-2">
            <button 
              type="button"
              onClick={() => demoLogin('admin')}
              className="text-xs px-3 py-1 bg-white rounded-full text-purple-600 hover:bg-purple-100"
            >
              Login as Admin
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Email: admin@fazetedu.ng
          </p>
        </div>

        {registeredSchools.length > 0 && (
          <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-100">
            <p className="text-xs text-green-600 font-medium mb-2">✅ Registered Schools:</p>
            <div className="space-y-1 max-h-24 overflow-y-auto">
              {registeredSchools.map((school) => (
                <div key={school.id} className="text-xs text-gray-600">
                  • {school.name}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-xs text-blue-600 font-medium mb-2">⚡ Quick Login</p>
          <div className="flex flex-wrap gap-2">
            <button 
              type="button"
              onClick={() => demoLogin('admin')}
              className="text-xs px-3 py-1 bg-white rounded-full text-blue-600 hover:bg-blue-100"
            >
              Admin
            </button>
            <button 
              type="button"
              onClick={() => demoLogin('school')}
              className="text-xs px-3 py-1 bg-white rounded-full text-blue-600 hover:bg-blue-100"
            >
              School
            </button>
            <button 
              type="button"
              onClick={() => demoLogin('teacher')}
              className="text-xs px-3 py-1 bg-white rounded-full text-blue-600 hover:bg-blue-100"
            >
              Teacher
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              placeholder="you@school.ng"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-[#F59E0B] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
