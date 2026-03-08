export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  sellerId: string;
  sellerName: string;
  sellerEmail: string;
  fileData: {
    name: string;
    type: string;
    size: number;
    pages?: number;
    preview?: string[]; // base64 of first few pages
  };
  createdAt: string;
}

export interface CartItem {
  resourceId: string;
  title: string;
  price: number;
  sellerName: string;
}
