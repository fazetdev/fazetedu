export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'lesson' | 'worksheet' | 'exam' | 'curriculum' | 'other';
  price: number;
  author: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    totalSales: number;
  };
  file: {
    url: string;
    type: 'pdf' | 'doc' | 'ppt' | 'excel' | 'image' | 'video' | 'other';
    size: number;
    pages?: number;
    duration?: number;
  };
  preview?: {
    image?: string;
    pages?: string[];
  };
  stats: {
    downloads: number;
    views: number;
    saves: number;
    rating: number;
    reviewCount: number;
  };
  tags: string[];
  createdAt: string;
  updatedAt: string;
  status: 'published' | 'draft' | 'archived';
}
