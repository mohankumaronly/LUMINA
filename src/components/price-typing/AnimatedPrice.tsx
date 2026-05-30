import { useEffect, useState } from 'react';

interface AnimatedPriceProps {
  price: number;
  duration?: number;
  className?: string;
}

export const AnimatedPrice = ({ 
  price, 
  duration = 1000, 
  className = '' 
}: AnimatedPriceProps) => {
  const [displayPrice, setDisplayPrice] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startPrice = 0;
    const endPrice = price;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentPrice = startPrice + (endPrice - startPrice) * easeOutCubic;
      
      setDisplayPrice(Math.floor(currentPrice));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [price, duration]);

  return (
    <span className={className}>
      ₹{displayPrice.toLocaleString()}
    </span>
  );
};