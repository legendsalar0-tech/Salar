export interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  features: string[];
  image: string;
  category: string;
  isTrending?: boolean;
  isLimited?: boolean;
  reviews: Review[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}
