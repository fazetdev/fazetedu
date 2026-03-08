'use client';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All', icon: '📚' },
  { id: 'lesson', name: 'Lesson Notes', icon: '📝' },
  { id: 'worksheet', name: 'Worksheets', icon: '📋' },
  { id: 'exam', name: 'Exam Questions', icon: '📊' },
  { id: 'curriculum', name: 'Curriculum', icon: '📖' },
  { id: 'other', name: 'Other', icon: '📄' }
];

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
            selectedCategory === cat.id
              ? 'bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white shadow-md'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-[#F59E0B]'
          }`}
        >
          <span className="mr-1">{cat.icon}</span>
          {cat.name}
        </button>
      ))}
    </div>
  );
}
