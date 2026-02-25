'use client';

import { useState } from 'react';

export default function VerifyProfilePage() {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ profilePic, idDocument, address });
    alert('Verification submission coming soon!');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Verify Your Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            required
          />
          <div>
            <label className="block text-gray-700 font-medium mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files?.[0] || null)}
              className="w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">ID Document</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={(e) => setIdDocument(e.target.files?.[0] || null)}
              className="w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Submit Verification
          </button>
        </form>
      </div>
    </main>
  );
}
