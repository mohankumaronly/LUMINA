import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaTrash, 
  FaPlus, 
  FaMinus, 
  FaShoppingBag,
  FaArrowLeft,
  FaGift,
  FaTag
} from 'react-icons/fa';

// Temporary cart hook - we'll create this later
const useCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      inStock: true
    },
    {
      id: 3,
      name: 'Designer Leather Backpack',
      price: 159.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      inStock: true
    },
    {
      id: 5,
      name: '4K Smart TV 55"',
      price: 799.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
      inStock: true
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return { cartItems, updateQuantity, removeItem };
};

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping + tax - discount;

  // Animation variants - NO transition inside
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const handlePromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toLowerCase() === 'save10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try "SAVE10"');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Looks like you haven't added any items yet
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
            >
              <FaShoppingBag className="w-5 h-5" />
              Start Shopping
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4">
            <FaArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Shopping Cart
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {cartItems.length} items in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cart Items ({cartItems.length})
                </h2>
              </div>

              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    exit={{ opacity: 0, x: -50 }}
                    className={`p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${
                      index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="sm:w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              In Stock
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xl font-bold text-blue-600">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                            >
                              <FaMinus className="w-3 h-3" />
                            </motion.button>
                            <span className="w-10 text-center font-semibold text-gray-900 dark:text-white">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                            >
                              <FaPlus className="w-3 h-3" />
                            </motion.button>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-600 transition-colors flex items-center gap-1 text-sm"
                          >
                            <FaTrash className="w-4 h-4" />
                            Remove
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Promo Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <FaGift className="text-blue-500" />
                Promo Code
              </h3>
              <form onSubmit={handlePromoCode} className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                  disabled={promoApplied}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={promoApplied}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    promoApplied
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {promoApplied ? 'Applied ✓' : 'Apply'}
                </motion.button>
              </form>
              {promoApplied && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-green-600 text-sm flex items-center gap-1"
                >
                  <FaTag className="w-4 h-4" />
                  10% discount applied!
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-sm text-green-600 mt-1">
                      ✓ Free Shipping applied
                    </p>
                  )}
                </div>
              </div>

              <Link to="/checkout">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  Proceed to Checkout
                </motion.button>
              </Link>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Secure checkout powered by LUMINA
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400">Visa</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400">MC</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-400">PayPal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;