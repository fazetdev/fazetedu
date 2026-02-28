'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface DashboardStats {
  totalSchools: number;
  pendingSchools: number;
  totalTeachers: number;
  pendingVerification: number;
  totalRevenue: number;
  pendingPayouts: number;
  activeJobs: number;
  resourcesUploaded: number;
}

interface School {
  id: string;
  name: string;
  domain: string;
  email: string;
  phone: string;
  adminName: string;
  status: 'pending' | 'active' | 'suspended';
  joinedAt: string;
}

interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  verified: boolean;
  createdAt: string;
}

interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  children: Array<{ name: string; class: string }>;
  verified: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalSchools: 0,
    pendingSchools: 0,
    totalTeachers: 0,
    pendingVerification: 0,
    totalRevenue: 0,
    pendingPayouts: 0,
    activeJobs: 0,
    resourcesUploaded: 0
  });

  const [schools, setSchools] = useState<School[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [parents, setParents] = useState<Parent[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{type: string, id: string, name: string} | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Load data from localStorage
  const loadData = () => {
    // Load schools
    const schoolsData = JSON.parse(localStorage.getItem('schools') || '[]');
    setSchools(schoolsData);
    
    // Load teachers
    const teachersData = JSON.parse(localStorage.getItem('teachers') || '[]');
    setTeachers(teachersData);
    
    // Load parents
    const parentsData = JSON.parse(localStorage.getItem('parents') || '[]');
    setParents(parentsData);

    // Calculate stats
    const pendingSchools = schoolsData.filter((s: School) => s.status === 'pending').length;
    const pendingTeachers = teachersData.filter((t: Teacher) => !t.verified).length;

    setStats({
      totalSchools: schoolsData.length,
      pendingSchools: pendingSchools,
      totalTeachers: teachersData.length,
      pendingVerification: pendingTeachers,
      totalRevenue: schoolsData.length * 15000, // ₦15k per school
      pendingPayouts: pendingTeachers * 5000, // ₦5k per pending teacher
      activeJobs: 4, // Placeholder
      resourcesUploaded: 15 // Placeholder
    });

    setLastUpdated(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    loadData();
  }, []);

  // Delete functions
  const deleteSchool = (schoolId: string) => {
    // Remove from schools
    const updatedSchools = schools.filter(s => s.id !== schoolId);
    localStorage.setItem('schools', JSON.stringify(updatedSchools));
    
    // Remove associated users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter((u: any) => u.schoolId !== schoolId);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    loadData(); // Reload data
    setShowDeleteModal(false);
  };

  const deleteTeacher = (teacherId: string) => {
    // Remove from teachers
    const updatedTeachers = teachers.filter(t => t.id !== teacherId);
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
    
    // Remove associated user
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter((u: any) => u.id !== teacherId);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    loadData();
    setShowDeleteModal(false);
  };

  const deleteParent = (parentId: string) => {
    // Remove from parents
    const updatedParents = parents.filter(p => p.id !== parentId);
    localStorage.setItem('parents', JSON.stringify(updatedParents));
    
    // Remove associated user
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter((u: any) => u.id !== parentId);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    loadData();
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    if (!itemToDelete) return;
    
    switch(itemToDelete.type) {
      case 'school':
        deleteSchool(itemToDelete.id);
        break;
      case 'teacher':
        deleteTeacher(itemToDelete.id);
        break;
      case 'parent':
        deleteParent(itemToDelete.id);
        break;
    }
  };

  const confirmDelete = (type: string, id: string, name: string) => {
    setItemToDelete({ type, id, name });
    setShowDeleteModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Manage your platform</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={loadData}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200"
              >
                🔄 Refresh
              </button>
              <p className="text-xs text-gray-400">
                Last updated: {lastUpdated || 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Total Schools</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalSchools}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Total Teachers</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalTeachers}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Total Parents</p>
            <p className="text-2xl font-bold text-gray-900">{parents.length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">
              {stats.totalSchools + stats.totalTeachers + parents.length}
            </p>
          </div>
        </div>

        {/* Alert Banner */}
        {(stats.pendingSchools > 0 || stats.pendingVerification > 0) && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-xl">📋</span>
                <p className="text-sm text-yellow-800">
                  {stats.pendingSchools > 0 && (
                    <span className="font-semibold">{stats.pendingSchools} pending schools</span>
                  )}
                  {stats.pendingSchools > 0 && stats.pendingVerification > 0 && (
                    <span> and </span>
                  )}
                  {stats.pendingVerification > 0 && (
                    <span className="font-semibold">{stats.pendingVerification} unverified teachers</span>
                  )}
                  {' '}need attention
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Schools List */}
        <div className="bg-white rounded-xl border border-gray-200 mb-8">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Registered Schools</h2>
            <span className="text-sm text-gray-500">{schools.length} total</span>
          </div>
          <div className="divide-y divide-gray-100">
            {schools.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No schools registered yet
              </div>
            ) : (
              schools.map((school) => (
                <div key={school.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
                      {school.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{school.name}</p>
                      <p className="text-sm text-gray-500">{school.domain} • {school.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      school.status === 'active' ? 'bg-green-100 text-green-700' :
                      school.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {school.status}
                    </span>
                    <Link
                      href={`/${school.domain}/dashboard`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View →
                    </Link>
                    <button
                      onClick={() => confirmDelete('school', school.id, school.name)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Teachers List */}
        <div className="bg-white rounded-xl border border-gray-200 mb-8">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Registered Teachers</h2>
            <span className="text-sm text-gray-500">{teachers.length} total</span>
          </div>
          <div className="divide-y divide-gray-100">
            {teachers.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No teachers registered yet
              </div>
            ) : (
              teachers.map((teacher) => (
                <div key={teacher.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold">
                      {teacher.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{teacher.name}</p>
                      <p className="text-sm text-gray-500">{teacher.subject} • {teacher.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      teacher.verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {teacher.verified ? 'Verified' : 'Pending'}
                    </span>
                    <button
                      onClick={() => confirmDelete('teacher', teacher.id, teacher.name)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Parents List */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Registered Parents</h2>
            <span className="text-sm text-gray-500">{parents.length} total</span>
          </div>
          <div className="divide-y divide-gray-100">
            {parents.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No parents registered yet
              </div>
            ) : (
              parents.map((parent) => (
                <div key={parent.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold">
                      {parent.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{parent.name}</p>
                      <p className="text-sm text-gray-500">
                        {parent.children.length} {parent.children.length === 1 ? 'child' : 'children'} • {parent.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => confirmDelete('parent', parent.id, parent.name)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && itemToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete <span className="font-semibold">{itemToDelete.name}</span>?
              This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
