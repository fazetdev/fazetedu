import { Resource } from './types';

const STORAGE_KEY = 'edumarket_resources';

// Helper function to get resources
const getResources = (): Resource[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Helper function to save resources
const saveResources = (resources: Resource[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
};

export const resourceService = {
  // Get all resources
  getAll: (): Resource[] => {
    return getResources();
  },

  // Add new resource
  add: (resource: Omit<Resource, 'id' | 'createdAt'>): Resource => {
    const resources = getResources();
    const newResource = {
      ...resource,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    resources.push(newResource);
    saveResources(resources);
    return newResource;
  },

  // Delete resource
  delete: (id: string): void => {
    const resources = getResources();
    const filtered = resources.filter(r => r.id !== id);
    saveResources(filtered);
  },

  // Get single resource
  getById: (id: string): Resource | undefined => {
    const resources = getResources();
    return resources.find(r => r.id === id);
  },

  // Get resources by seller
  getBySeller: (sellerId: string): Resource[] => {
    const resources = getResources();
    return resources.filter(r => r.sellerId === sellerId);
  }
};
