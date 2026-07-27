// Product Types
export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  inStock: boolean;
  discount?: number;
  description?: string;
  images?: string[];
  features?: string[];
  specifications?: Record<string, string>;
}

// Cart Types
export interface CartItem extends Product {
  quantity: number;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Order Types
export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
  shippingAddress: Address;
  paymentMethod: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

// Review Types
export interface Review {
  id: number;
  productId: number;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

// Filter Types
export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  search?: string;
  sortBy?: 'popular' | 'price-low' | 'price-high' | 'newest';
}