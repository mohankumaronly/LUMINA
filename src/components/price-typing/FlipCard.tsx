import { useState } from 'react';
import type { Product } from '../../types/product.types';
import { Button } from '../ui/Button';
import { AnimatedPrice } from '../price-typing/AnimatedPrice';

interface FlipCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const FlipCard = ({ product, onAddToCart }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div
      className="relative w-full h-96 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="text-xs text-purple-600 font-semibold uppercase">
              {product.category}
            </div>
            <h3 className="font-bold text-lg mt-1">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.brand}</p>
            <div className="mt-2">
              <AnimatedPrice 
                price={product.price} 
                className="text-2xl font-bold text-purple-600"
              />
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm ml-2">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="text-sm ml-1">{product.rating}</span>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl shadow-lg overflow-hidden rotate-y-180">
          <div className="p-5 flex flex-col h-full">
            <h3 className="font-bold text-white text-xl mb-2">{product.name}</h3>
            <p className="text-white/80 text-sm mb-3 line-clamp-3">
              {product.description}
            </p>
            
            {product.specs && (
              <div className="bg-white/20 rounded-lg p-2 mb-3">
                <p className="text-white text-xs">⚡ {product.specs}</p>
              </div>
            )}
            
            {product.colors && (
              <div className="mb-3">
                <p className="text-white text-xs mb-1">Available Colors:</p>
                <div className="flex gap-2">
                  {product.colors.slice(0, 4).map((color) => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-full border-2 border-white"
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {product.sizes && (
              <div className="mb-3">
                <p className="text-white text-xs mb-1">Sizes: {product.sizes.join(', ')}</p>
              </div>
            )}
            
            <div className="mt-auto">
              <div className="mb-2 text-white text-sm">
                <AnimatedPrice price={product.price} className="font-bold text-lg" />
              </div>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full bg-white text-purple-600 hover:bg-gray-100"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};