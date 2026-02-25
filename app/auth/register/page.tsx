'use client'

import Link from 'next/link'

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Create Your Account
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-[#10B981] outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-[#10B981] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-[#10B981] outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#10B981] text-white py-3 rounded-lg font-semibold hover:bg-[#059669] transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-[#10B981] font-medium">
            Sign in
          </Link>
        </p>

      </div>
    </main>
  )
}
