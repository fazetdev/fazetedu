'use client';

import { useSchool } from '@/app/hooks/useSchool';
import { useState } from 'react';

export default function MySchoolPage() {
  const { school, loading, error, domain } = useSchool();
  const [isEditing, setIsEditing] = useState(false);
  const [editedSchool, setEditedSchool] = useState(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F59E0B]"></div>
      </div>
    );
  }

  if (error || !school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block">🏫</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">School Not Found</h1>
          <p className="text-gray-600">{error || 'Unable to load school data'}</p>
        </div>
      </div>
    );
  }

  // Initialize edited school with current school data when editing starts
  if (isEditing && !editedSchool) {
    setEditedSchool({
      name: school.name || '',
      email: school.email || '',
      phone: school.phone || '',
      address: school.address || '',
      motto: school.motto || ''
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSchool(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving school data:', editedSchool);
    setIsEditing(false);
    setEditedSchool(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedSchool(null);
  };

  // Format date safely
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'Recently';
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return 'Recently';
    }
  };

  // Mock stats - these will come from database
  const stats = {
    students: 0,
    teachers: 0,
    classes: 0,
    pendingInvites: 0
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">My School</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl text-sm font-medium"
            >
              {isEditing ? 'Save Changes' : 'Edit School'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* School Profile */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F59E0B] to-[#DC2626] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
              {school.name ? school.name.split(' ').map(n => n[0]).join('').slice(0, 2) : 'S'}
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{school.name}</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">{school.email || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-medium">{school.phone || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Domain</p>
                  <p className="text-sm font-medium text-[#F59E0B]">{school.domain || domain}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Joined</p>
                  <p className="text-sm font-medium">{formatDate(school.joinedAt)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <p className="text-sm text-gray-500">Students</p>
            <p className="text-2xl font-bold text-gray-900">{stats.students}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <p className="text-sm text-gray-500">Teachers</p>
            <p className="text-2xl font-bold text-gray-900">{stats.teachers}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <p className="text-sm text-gray-500">Classes</p>
            <p className="text-2xl font-bold text-gray-900">{stats.classes}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <p className="text-sm text-gray-500">Pending</p>
            <p className="text-2xl font-bold text-orange-600">{stats.pendingInvites}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
