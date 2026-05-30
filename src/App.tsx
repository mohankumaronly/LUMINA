import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FlipCard } from './components/card-flip/FlipCard';
import { CheckoutPage } from './pages/CheckoutPage';
import { mockProducts } from './data/mockProducts';
import type { Product } from './types/product.types';
import { useCartStore } from './store/cartStore';
import { Button } from './components/ui/Button';

function HomePage() {
  const addItem = useCartStore((state) => state.addItem);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const items = useCartStore((state) => state.items);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                LUMINA
              </h1>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link to="/checkout" className="relative">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-gray-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 1.5M17 13l1.5 1.5M9 21h6M12 18v3" 
                  />
                </svg>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
          </div>
          
          {items.length > 0 && (
            <div className="mt-2 text-sm text-gray-600 flex justify-between items-center">
              <span>{getTotalItems()} item(s) in cart</span>
              <Link to="/checkout">
                <Button variant="outline" className="py-1 px-3 text-sm">
                  Checkout → 
                </Button>
              </Link>
            </div>
          )}
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-2 text-center">
          Hover on cards to see flip effect ✨
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Click "Add to Cart" - then go to Checkout for Confetti! 🎉
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <FlipCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;