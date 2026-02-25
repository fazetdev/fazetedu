'use client';

import { useRouter } from 'next/navigation';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PilotModal({ isOpen, onClose }: PilotModalProps) {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/auth/register');
    onClose();
  };

  const handleLogin = () => {
    router.push('/auth/login');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-xl">

        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Get Started with Fazet Edu
        </h3>

        <div className="space-y-4">
          <button
            onClick={handleRegister}
            className="w-full bg-[#10B981] text-white py-3 rounded-lg font-semibold hover:bg-[#059669] transition"
          >
            Create Account
          </button>

          <button
            onClick={handleLogin}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Sign In
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full text-gray-400 text-sm mt-6 hover:text-gray-600"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}
