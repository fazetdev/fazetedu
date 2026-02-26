'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState('inbox');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
              <p className="text-sm text-gray-500 mt-1">
                Communications with teachers and school
              </p>
            </div>
            <Link
              href="/dashboard/parent-dashboard"
              className="text-sm text-[#F59E0B] hover:text-[#DC2626]"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('inbox')}
                className={`px-6 py-4 text-sm font-medium transition-colors relative ${
                  activeTab === 'inbox'
                    ? 'text-[#F59E0B] border-b-2 border-[#F59E0B]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Inbox
                <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">0</span>
              </button>
              <button
                onClick={() => setActiveTab('sent')}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === 'sent'
                    ? 'text-[#F59E0B] border-b-2 border-[#F59E0B]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Sent
              </button>
              <button
                onClick={() => setActiveTab('archived')}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === 'archived'
                    ? 'text-[#F59E0B] border-b-2 border-[#F59E0B]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Archived
              </button>
            </div>
          </div>

          {/* Message List */}
          <div className="divide-y divide-gray-200">
            {activeTab === 'inbox' && (
              <div className="text-center py-16">
                <span className="text-5xl mb-4 block">📧</span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                  When teachers or the school send you messages, they'll appear here
                </p>
                <Link
                  href="/parent/contact-teacher"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  Contact a Teacher
                </Link>
              </div>
            )}

            {activeTab === 'sent' && (
              <div className="text-center py-16">
                <span className="text-5xl mb-4 block">📤</span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No sent messages</h3>
                <p className="text-gray-500 mb-6">
                  Messages you send will appear here
                </p>
              </div>
            )}

            {activeTab === 'archived' && (
              <div className="text-center py-16">
                <span className="text-5xl mb-4 block">📦</span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Archive is empty</h3>
                <p className="text-gray-500 mb-6">
                  Archive messages to keep your inbox clean
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Compose Message Card */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Need to contact a teacher?</h3>
              <p className="text-sm text-gray-600">Send a message directly from here</p>
            </div>
            <Link
              href="/parent/contact-teacher"
              className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Compose Message
            </Link>
          </div>
        </div>

        {/* Quick Contacts */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Contacts</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  👨‍🏫
                </div>
                <div>
                  <p className="font-medium text-gray-900">Class Teacher</p>
                  <p className="text-xs text-gray-500">JSS 2A</p>
                </div>
              </div>
              <button className="mt-3 w-full py-2 text-sm bg-gray-50 rounded-lg text-gray-600 hover:bg-gray-100">
                Send Message
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  👩‍🏫
                </div>
                <div>
                  <p className="font-medium text-gray-900">Subject Teacher</p>
                  <p className="text-xs text-gray-500">Mathematics</p>
                </div>
              </div>
              <button className="mt-3 w-full py-2 text-sm bg-gray-50 rounded-lg text-gray-600 hover:bg-gray-100">
                Send Message
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  🏫
                </div>
                <div>
                  <p className="font-medium text-gray-900">School Admin</p>
                  <p className="text-xs text-gray-500">General inquiries</p>
                </div>
              </div>
              <button className="mt-3 w-full py-2 text-sm bg-gray-50 rounded-lg text-gray-600 hover:bg-gray-100">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
