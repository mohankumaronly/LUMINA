import type { Product } from '../../types/product.types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  columns?: 2 | 3 | 4;
}

export const ProductGrid = ({ 
  products, 
  onAddToCart, 
  columns = 4 
}: ProductGridProps) => {
  
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols[columns]} gap-6`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};