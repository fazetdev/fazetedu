'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/app/utils/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { user } = auth.login(email);
      
      // Get the correct dashboard URL based on role
      let dashboardUrl = '/';
      
      if (user.role === 'admin') {
        dashboardUrl = '/admin';
      } else if (user.role === 'school') {
        // School users go to their domain dashboard
        dashboardUrl = `/${user.schoolDomain}/dashboard`;
      } else if (user.role === 'teacher') {
        dashboardUrl = '/dashboard/teacher-dashboard';
      } else if (user.role === 'parent') {
        dashboardUrl = '/dashboard/parent-dashboard';
      }
      
      console.log('Redirecting to:', dashboardUrl); // For debugging
      router.push(dashboardUrl);
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Demo accounts for testing
  const demoLogin = (role: string) => {
    if (role === 'admin') {
      setEmail('admin@fazetedu.ng');
    } else if (role === 'school') {
      setEmail('admin@sunset.edu.ng');
    } else if (role === 'teacher') {
      setEmail('teacher@school.ng');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
        </div>

        <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-xs text-blue-600 font-medium mb-2">⚡ Demo Accounts (Click to fill)</p>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => demoLogin('admin')}
              className="text-xs px-3 py-1 bg-white rounded-full text-blue-600 hover:bg-blue-100"
            >
              Admin
            </button>
            <button 
              onClick={() => demoLogin('school')}
              className="text-xs px-3 py-1 bg-white rounded-full text-blue-600 hover:bg-blue-100"
            >
              School
            </button>
            <button 
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

        <p className="text-xs text-gray-400 text-center mt-4">
          📝 MVP Note: No password required for testing. Just enter email.
        </p>
      </div>
    </div>
  );
}
