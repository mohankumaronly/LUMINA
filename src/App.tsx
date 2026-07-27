import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Footer from './components/common/Footer';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
              <Header />
              <main className="flex-grow">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                  </Routes>
                </AnimatePresence>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;