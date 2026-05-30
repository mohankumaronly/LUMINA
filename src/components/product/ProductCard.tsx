import { Button } from '../ui/Button';
import type { Product } from '../../types/product.types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  variant?: 'default' | 'compact' | 'featured';
}

export const ProductCard = ({ 
  product, 
  onAddToCart, 
  variant = 'default' 
}: ProductCardProps) => {
  
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden h-56">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">
          {product.category}
        </div>
        
        <h3 className="font-bold text-lg mt-1 line-clamp-1">{product.name}</h3>
        
        <p className="text-gray-500 text-sm">{product.brand}</p>
        
        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-purple-600">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        
        {/* Colors */}
        {product.colors && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.slice(0, 4).map((color) => (
              <div
                key={color}
                className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        )}
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-gray-400 text-sm">• In Stock</span>
        </div>
        
        {/* Button */}
        <Button 
          onClick={handleAddToCart}
          className="w-full mt-4"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};