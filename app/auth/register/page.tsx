'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/app/utils/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<'school' | 'teacher' | 'parent'>('school');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    subject: '',
    childName: '',
    childClass: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (userType === 'school') {
        const { school, user, redirectUrl } = auth.registerSchool({
          schoolName: formData.schoolName,
          adminName: formData.name,
          email: formData.email,
          phone: formData.phone
        });

        setSuccess(`✅ School registered! Redirecting to your dashboard...`);
        
        // Use the redirectUrl from auth
        setTimeout(() => {
          router.push(redirectUrl);
        }, 1500);
        
      } else if (userType === 'teacher') {
        const { teacher, user } = auth.registerTeacher({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject
        });

        setSuccess(`✅ Teacher registered! Redirecting...`);
        
        setTimeout(() => {
          router.push('/dashboard/teacher-dashboard');
        }, 1500);

      } else if (userType === 'parent') {
        const { parent, user } = auth.registerParent({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          children: [formData.childName]
        });

        setSuccess(`✅ Parent registered! Redirecting...`);
        
        setTimeout(() => {
          router.push('/dashboard/parent-dashboard');
        }, 1500);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const generateDomain = (schoolName: string) => {
    return schoolName
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[^a-z0-9]/g, '') + '.fazetedu.ng';
  };

  const domainPreview = userType === 'school' && formData.schoolName
    ? generateDomain(formData.schoolName)
    : 'yourschool.fazetedu.ng';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-green-700">{success}</p>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
        
        <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
          <button
            onClick={() => setUserType('school')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              userType === 'school' ? 'bg-white shadow-md' : ''
            }`}
          >
            🏫 School
          </button>
          <button
            onClick={() => setUserType('teacher')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              userType === 'teacher' ? 'bg-white shadow-md' : ''
            }`}
          >
            👨‍🏫 Teacher
          </button>
          <button
            onClick={() => setUserType('parent')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              userType === 'parent' ? 'bg-white shadow-md' : ''
            }`}
          >
            👪 Parent
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            required
          />

          {userType === 'school' && (
            <>
              <input
                type="text"
                placeholder="School Name"
                value={formData.schoolName}
                onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                required
              />
              
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                <p className="text-xs text-gray-500 mb-1">Your school portal:</p>
                <p className="text-sm font-mono text-[#F59E0B]">{domainPreview}</p>
              </div>
            </>
          )}

          {userType === 'teacher' && (
            <input
              type="text"
              placeholder="Subject Specialization"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              required
            />
          )}

          {userType === 'parent' && (
            <>
              <input
                type="text"
                placeholder="Child's Name"
                value={formData.childName}
                onChange={(e) => setFormData({...formData, childName: e.target.value})}
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                required
              />
              <input
                type="text"
                placeholder="Child's Class"
                value={formData.childClass}
                onChange={(e) => setFormData({...formData, childClass: e.target.value})}
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                required
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <Link href="/auth/login" className="text-[#F59E0B] hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
