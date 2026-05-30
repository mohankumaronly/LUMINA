export interface Product {
  id: string;
  name: string;
  category: 'clothing' | 'electronics' | 'shoes' | 'furniture';
  subcategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors?: string[];
  sizes?: string[];
  specs?: string;
  description: string;
  inStock: boolean;
  rating: number;
  brand?: string;
}