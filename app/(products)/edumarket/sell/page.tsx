'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { resourceService } from '../services';
import { Resource } from '../types';

export default function SellResourcePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('lesson-plan');
  const [price, setPrice] = useState<number | ''>('');
  const [fileData, setFileData] = useState<File | null>(null);

  const categories = [
    'lesson-plan', 'lesson-note', 'worksheet', 
    'past-question', 'textbook', 'scheme-of-work', 'other'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileData(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !category || !price || !fileData) {
      alert('Please fill in all fields and select a file');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const resource: Resource = {
        id: Date.now().toString(),
        title,
        description,
        category,
        price: Number(price),
        sellerName: 'You',
        fileData: {
          type: fileData.type,
          preview: [reader.result as string]
        }
      };
      resourceService.add(resource);
      router.push('/edumarket');
    };
    reader.readAsDataURL(fileData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Sell a Resource</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price (₦)</label>
            <input
              type="number"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">File</label>
            <input type="file" accept="application/pdf,image/*" onChange={handleFileChange} />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#F59E0B] text-white rounded-lg mt-4"
          >
            Submit Resource
          </button>
        </form>
      </div>
    </div>
  );
}
