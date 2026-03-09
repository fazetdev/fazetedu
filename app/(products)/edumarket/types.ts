export interface Resource {
  id: string;
  title: string;
  description?: string;
  price: number;
  category: string;
  fileData?: {
    type?: string;
    preview?: string[];
  };
  sellerName: string;
  sellerId?: string;
}

export interface Seller {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  school?: string;
  subjects?: string[];
  rating?: number;
  totalSales?: number;
  totalResources?: number;
  joinedDate?: string;
  badges?: string[];
}
