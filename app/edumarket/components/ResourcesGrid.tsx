'use client';

import ResourceCard, { Resource } from './ResourceCard';

interface ResourcesGridProps {
  resources: Resource[];
  isLoading: boolean;
  totalCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onRefresh?: () => void;
}

export default function ResourcesGrid({
  resources,
  isLoading,
  totalCount,
  sortBy,
  onSortChange,
  onRefresh
}: ResourcesGridProps) {
  if (isLoading) {
    return (
      <div className="text-center py-16">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B5CF6] mb-6"></div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading Resources...</h3>
        <p className="text-gray-600">Please wait while we load your marketplace</p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Resources
          <span className="text-gray-500 text-lg font-normal ml-2">
            ({totalCount} {totalCount === 1 ? 'item' : 'items'})
          </span>
        </h2>
        <div className="flex items-center gap-3">
          {onRefresh && (
            <button
              onClick={onRefresh}
              className="p-2 text-gray-500 hover:text-[#8B5CF6] transition-colors"
              title="Refresh"
            >
              🔄
            </button>
          )}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none"
          >
            <option value="newest">Sort by: Newest</option>
            <option value="popular">Sort by: Most Popular</option>
            <option value="price-low">Sort by: Price: Low to High</option>
            <option value="price-high">Sort by: Price: High to Low</option>
          </select>
        </div>
      </div>

      {resources.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-200">
          <div className="text-6xl mb-6">📚</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            No Resources Yet
          </h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Be the first teacher to share your educational resources and earn extra income!
          </p>
          <button
            onClick={() => window.location.href = '/edumarket/sell'}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#DB2777] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            <span>Upload Your First Resource</span>
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
