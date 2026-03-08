'use client';

import { Resource } from '../types';
import ResourceCard from './ResourceCard';

interface ResourcesGridProps {
  resources: Resource[];
  loading: boolean;
  onAddToCart: (resource: Resource) => void;
}

export default function ResourcesGrid({ resources, loading, onAddToCart }: ResourcesGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse" />
            <div className="h-8 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
        <p className="text-gray-500 mb-4">Try adjusting your filters or search query</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#F59E0B] text-white rounded-lg text-sm hover:bg-[#DC2626] transition-colors"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
