'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { resourceService } from '../services';

export default function SellPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Get current user on mount
  useState(() => {
    const user = localStorage.getItem('currentUser');
    if (user) setCurrentUser(JSON.parse(user));
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // For PDF files, we could extract first few pages
    // For now, just show file info
    if (file.type === 'application/pdf') {
      // In a real app, you'd use PDF.js to extract preview
      // For now, we'll just store the file name
      console.log('PDF selected:', file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    // Get current user or use default
    const user = currentUser || { 
      id: crypto.randomUUID(), 
      name: 'Anonymous Seller',
      email: 'anonymous@example.com'
    };

    await resourceService.add({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      price: Number(formData.get('price')),
      sellerId: user.id,
      sellerName: user.name,
      sellerEmail: user.email,
      fileData: {
        name: file.name,
        type: file.type,
        size: file.size,
        pages: 1,
        preview: [] // In real app, store preview images
      }
    });

    router.push('/edumarket');
  };

  const categories = [
    'lesson-plan', 'lesson-note', 'worksheet', 
    'past-question', 'textbook', 'scheme-of-work', 'other'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Sell Your Resource</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title *</label>
            <input
              name="title"
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#F59E0B]"
              placeholder="e.g., SS1 Mathematics Lesson Notes"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description *</label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#F59E0B]"
              placeholder="Describe what's included in this resource..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category *</label>
              <select 
                name="category" 
                required 
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#F59E0B]"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price (₦) *</label>
              <input
                name="price"
                type="number"
                required
                min="0"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#F59E0B]"
                placeholder="0"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">File *</label>
            <input
              name="file"
              type="file"
              required
              accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-1">
              Supported: PDF, DOC, PPT, XLS (max 50MB)
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#F59E0B] text-white rounded-lg font-medium hover:bg-[#DC2626] transition-colors disabled:opacity-50"
          >
            {loading ? 'Publishing...' : 'Publish Resource'}
          </button>
        </form>
      </div>
    </div>
  );
}
