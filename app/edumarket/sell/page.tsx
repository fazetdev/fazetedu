'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SellPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    category: 'lesson note',
    price: '',
    preview: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    const newItem = {
      id: Date.now().toString(),
      title: form.title,
      category: form.category,
      price: Number(form.price),
      author: user.name || 'Anonymous',
      preview: form.preview
    };

    const existing = JSON.parse(localStorage.getItem('edumarket_resources') || '[]');
    existing.push(newItem);
    localStorage.setItem('edumarket_resources', JSON.stringify(existing));
    
    router.push('/edumarket');
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-6">Sell Material</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            required
            value={form.title}
            onChange={(e) => setForm({...form, title: e.target.value})}
            className="w-full p-3 border rounded-lg text-sm"
          />
          
          <select
            value={form.category}
            onChange={(e) => setForm({...form, category: e.target.value})}
            className="w-full p-3 border rounded-lg text-sm"
          >
            <option value="lesson note">Lesson Note</option>
            <option value="past question">Past Question</option>
            <option value="project">Project</option>
            <option value="textbook">Textbook</option>
          </select>
          
          <input
            type="number"
            placeholder="Price"
            required
            value={form.price}
            onChange={(e) => setForm({...form, price: e.target.value})}
            className="w-full p-3 border rounded-lg text-sm"
          />
          
          <textarea
            placeholder="Preview (first page/chapter)"
            required
            rows={4}
            value={form.preview}
            onChange={(e) => setForm({...form, preview: e.target.value})}
            className="w-full p-3 border rounded-lg text-sm"
          />
          
          <button type="submit" className="w-full py-3 bg-black text-white rounded-lg text-sm">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
