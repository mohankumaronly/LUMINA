import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaFilter, 
  FaStar, 
  FaStarHalfAlt,
  FaShoppingBag,
  FaTimes,
  FaTh,
  FaThList
} from 'react-icons/fa';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      rating: 4.5,
      reviews: 128,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      inStock: true,
      discount: 20
    },
    {
      id: 2,
      name: 'Smart Watch Series 7',
      price: 449.99,
      rating: 4.8,
      reviews: 256,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      inStock: true,
      discount: 0
    },
    {
      id: 3,
      name: 'Designer Leather Backpack',
      price: 159.99,
      rating: 4.3,
      reviews: 89,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      inStock: true,
      discount: 15
    },
    {
      id: 4,
      name: 'Premium Sneakers',
      price: 199.99,
      rating: 4.7,
      reviews: 312,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      inStock: false,
      discount: 10
    },
    {
      id: 5,
      name: '4K Smart TV 55"',
      price: 799.99,
      rating: 4.9,
      reviews: 423,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
      inStock: true,
      discount: 25
    },
    {
      id: 6,
      name: 'Minimalist Desk Lamp',
      price: 49.99,
      rating: 4.2,
      reviews: 67,
      category: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
      inStock: true,
      discount: 0
    },
    {
      id: 7,
      name: 'Cotton Blend T-Shirt',
      price: 29.99,
      rating: 4.1,
      reviews: 156,
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      inStock: true,
      discount: 5
    },
    {
      id: 8,
      name: 'Wireless Charging Pad',
      price: 39.99,
      rating: 4.4,
      reviews: 98,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
      inStock: true,
      discount: 0
    },
    {
      id: 9,
      name: 'Ceramic Coffee Mug Set',
      price: 34.99,
      rating: 4.6,
      reviews: 203,
      category: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
      inStock: true,
      discount: 0
    },
    {
      id: 10,
      name: 'Fitness Tracker Band',
      price: 79.99,
      rating: 4.3,
      reviews: 187,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
      inStock: true,
      discount: 12
    }
  ];

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Books'];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

  // Render stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400 w-4 h-4" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 w-4 h-4" />);
    }
    return stars;
  };

  // Animation variants - NO transition inside
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Discover our collection of premium products
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Filters - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>

              {/* View Toggle */}
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-white dark:bg-gray-600 shadow-md' 
                      : 'hover:bg-white/50 dark:hover:bg-gray-600/50'
                  }`}
                >
                  <FaTh className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-white dark:bg-gray-600 shadow-md' 
                      : 'hover:bg-white/50 dark:hover:bg-gray-600/50'
                  }`}
                >
                  <FaThList className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              <FaFilter /> Filters
            </button>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredProducts.length}</span> products
          </p>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
            className={`grid ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            } gap-6`}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                }`}
              >
                <Link to={`/product/${product.id}`} className="flex-1">
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'sm:w-64 h-64 sm:h-auto' : 'h-64'
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        -{product.discount}%
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                </Link>

                <div className={`p-5 flex-1 ${
                  viewMode === 'list' ? 'flex flex-col justify-center' : ''
                }`}>
                  <Link to={`/product/${product.id}`}>
                    <div className="text-xs text-blue-600 font-semibold mb-1">
                      {product.category}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      {product.discount > 0 ? (
                        <>
                          <span className="text-2xl font-bold text-blue-600">
                            ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ${product.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-blue-600">
                          ${product.price}
                        </span>
                      )}
                    </div>
                  </Link>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!product.inStock}
                    className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      product.inStock
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <FaShoppingBag className="w-4 h-4" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Mobile Filter Sidebar */}
        <AnimatePresence>
          {isFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => setIsFilterOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden p-6 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 rounded-xl transition-colors ${
                            selectedCategory === category
                              ? 'bg-blue-600 text-white'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Sort By</h3>
                    <div className="space-y-2">
                      {[
                        { value: 'popular', label: 'Most Popular' },
                        { value: 'price-low', label: 'Price: Low to High' },
                        { value: 'price-high', label: 'Price: High to Low' },
                        { value: 'newest', label: 'Newest First' }
                      ].map(option => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 rounded-xl transition-colors ${
                            sortBy === option.value
                              ? 'bg-blue-600 text-white'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSortBy('popular');
                      setSearchTerm('');
                      setIsFilterOpen(false);
                    }}
                    className="w-full py-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsPage;