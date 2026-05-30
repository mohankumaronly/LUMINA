import type { Product } from '../types/product.types';

export const mockProducts: Product[] = [
  // Clothing
  {
    id: '1',
    name: 'Premium Leather Jacket',
    category: 'clothing',
    subcategory: 'men',
    price: 12999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    colors: ['Black', 'Brown', 'Tan'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Genuine leather jacket with premium finish',
    inStock: true,
    rating: 4.8,
    brand: 'UrbanStyle'
  },
  {
    id: '2',
    name: 'Floral Summer Dress',
    category: 'clothing',
    subcategory: 'women',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
    colors: ['Blue', 'Pink', 'White'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Light and breathable cotton dress',
    inStock: true,
    rating: 4.6,
    brand: 'SummerVibe'
  },
  {
    id: '3',
    name: 'Smart Watch Pro',
    category: 'electronics',
    subcategory: 'gadgets',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
    colors: ['Black', 'Silver', 'Gold'],
    specs: '1.5" AMOLED, 7-day battery, GPS',
    description: 'Advanced health tracking smartwatch',
    inStock: true,
    rating: 4.9,
    brand: 'TechPro'
  },
  {
    id: '4',
    name: 'Wireless Headphones',
    category: 'electronics',
    subcategory: 'audio',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    colors: ['Black', 'White', 'Blue'],
    specs: '40hr battery, ANC, Bluetooth 5.3',
    description: 'Premium sound with active noise cancellation',
    inStock: true,
    rating: 4.7,
    brand: 'AudioMax'
  },
  {
    id: '5',
    name: 'Running Shoes',
    category: 'shoes',
    subcategory: 'sports',
    price: 6999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    colors: ['Red', 'Black', 'White', 'Blue'],
    sizes: ['6', '7', '8', '9', '10'],
    description: 'Lightweight running shoes with cushioning',
    inStock: true,
    rating: 4.5,
    brand: 'SportFlow'
  },
  {
    id: '6',
    name: 'Modern Sofa',
    category: 'furniture',
    subcategory: 'living',
    price: 49999,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    colors: ['Gray', 'Beige', 'Blue', 'Green'],
    description: 'Comfortable 3-seater sofa with premium fabric',
    inStock: true,
    rating: 4.9,
    brand: 'HomeLux'
  }
];