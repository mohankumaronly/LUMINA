import { ProductGrid } from './components/product/ProductGrid';
import { mockProducts } from './data/mockProducts';
import type { Product } from './types/product.types';

function App() {
  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            LUMINA
          </h1>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop All Products</h2>
        <ProductGrid 
          products={mockProducts} 
          onAddToCart={handleAddToCart}
          columns={4}
        />
      </main>
    </div>
  );
}

export default App;