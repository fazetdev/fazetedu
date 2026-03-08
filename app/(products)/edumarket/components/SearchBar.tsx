'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search resources..."
          className="w-full px-4 py-2 pl-10 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        <button
          type="submit"
          className="absolute right-2 top-1.5 px-3 py-1 bg-[#F59E0B] text-white text-sm rounded-md hover:bg-[#DC2626] transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
