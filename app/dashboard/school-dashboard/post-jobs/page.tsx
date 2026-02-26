'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PostJobsPage() {
  const [showPreview, setShowPreview] = useState(false);
  
  // This will connect to Supabase
  const jobs = [
    {
      id: 1,
      title: "Mathematics Teacher",
      subject: "Mathematics",
      type: "Full-Time",
      applicants: 8,
      newApplicants: 3,
      posted: "2 days ago",
      expires: "5 days",
      status: "active",
      urgent: true
    },
    {
      id: 2,
      title: "Physics Teacher",
      subject: "Sciences",
      type: "Part-Time",
      applicants: 2,
      newApplicants: 0,
      posted: "5 days ago",
      expires: "2 days",
      status: "active",
      urgent: false
    },
    {
      id: 3,
      title: "School Secretary",
      subject: "Administration",
      type: "Full-Time",
      applicants: 12,
      newApplicants: 4,
      posted: "1 week ago",
      expires: "Expired",
      status: "expired",
      urgent: false
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Post Jobs</h1>
              <p className="text-sm text-gray-500 mt-1">Find the best teachers for your school</p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-500">Active Jobs</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">22</p>
                <p className="text-xs text-gray-500">Total Applicants</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-600">7</p>
                <p className="text-xs text-gray-500">New Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Create Job Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Create New Job Posting</h2>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senior Mathematics Teacher"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject/Role
                  </label>
                  <input
                    type="text"
                    placeholder="Mathematics"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employment Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]">
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="B.Ed, PGDE, etc"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience
                  </label>
                  <input
                    type="text"
                    placeholder="Minimum years"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₦50,000 - ₦80,000"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Kano, Nigeria"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the role, responsibilities, and requirements..."
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <button
                  type="button"
                  className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  Publish Job
                </button>
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
                >
                  Save as Draft
                </button>
              </div>
            </form>

            {/* Preview Panel */}
            {showPreview && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-4">Teacher's View Preview</h3>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Mathematics Teacher</h4>
                      <p className="text-sm text-gray-500">Sunset High School · Kano</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Full-Time
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-500">Salary:</span> ₦50,000 - ₦80,000/month</p>
                    <p><span className="text-gray-500">Qualification:</span> B.Ed Mathematics</p>
                    <p><span className="text-gray-500">Experience:</span> 3+ years</p>
                    <p className="text-gray-600 mt-2">We're looking for an experienced Mathematics teacher to join our team...</p>
                  </div>
                  <button className="w-full mt-4 py-2 bg-[#F59E0B] text-white rounded-lg text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Posted Jobs Section */}
        <div className="bg-white rounded-2xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Posted Jobs</h2>
          </div>

          {jobs.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{job.title}</h3>
                        {job.urgent && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full animate-pulse">
                            URGENT
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          job.status === 'active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {job.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Subject</p>
                          <p className="font-medium">{job.subject}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Type</p>
                          <p className="font-medium">{job.type}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Applicants</p>
                          <p className="font-medium">
                            {job.applicants} 
                            {job.newApplicants > 0 && (
                              <span className="ml-1 text-green-600 text-xs">(+{job.newApplicants} new)</span>
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Posted</p>
                          <p className="font-medium">{job.posted}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Expires</p>
                          <p className={`font-medium ${job.expires === 'Expired' ? 'text-red-600' : ''}`}>
                            {job.expires}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <Link
                        href={`/dashboard/school-dashboard/jobs/${job.id}/applicants`}
                        className="px-4 py-2 bg-[#F59E0B] text-white rounded-lg text-sm hover:bg-[#DC2626] transition-colors"
                      >
                        View Applicants
                      </Link>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">📢</span>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs posted yet</h3>
              <p className="text-gray-500 mb-6">Create your first job posting to find great teachers</p>
              <button className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium">
                Post Your First Job
              </button>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Pro Tips from a Former Senior Master</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Be specific about qualifications to get better applicants</li>
                <li>• Include salary range to attract serious candidates</li>
                <li>• Urgent jobs get 3x more applications in the first 48 hours</li>
                <li>• Share job posts in teacher WhatsApp groups for faster response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
