import { Resource, Seller } from './types';

const STORAGE_KEY = 'edumarket_resources';

export const resourceService = {
  getAll(): Resource[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  save(resource: Resource) {
    const resources = this.getAll();
    const index = resources.findIndex(r => r.id === resource.id);
    if (index >= 0) {
      resources[index] = resource;
    } else {
      resources.push(resource);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
  },

  delete(id: string) {
    const resources = this.getAll().filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
  },

  getResources(filter?: Partial<Resource>, page: number = 1, pageSize: number = 20): { data: Resource[] } {
    let resources = this.getAll();
    if (filter) {
      resources = resources.filter(r =>
        Object.entries(filter).every(([key, value]) => r[key as keyof Resource] === value)
      );
    }
    const start = (page - 1) * pageSize;
    return { data: resources.slice(start, start + pageSize) };
  },

  getSellerById(id: string): { data: Seller | null } {
    const resources = this.getAll();
    const sellerResource = resources.find(r => r.sellerId === id);
    if (!sellerResource) return { data: null };
    return {
      data: {
        id: sellerResource.sellerId!,
        name: sellerResource.sellerName,
        bio: '',
        subjects: [],
        rating: 0,
        totalSales: 0,
        totalResources: resources.filter(r => r.sellerId === id).length,
        joinedDate: new Date().toISOString(),
        badges: []
      }
    };
  }
};
