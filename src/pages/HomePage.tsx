import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaStar, 
  FaStarHalfAlt,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaCreditCard
} from 'react-icons/fa';

const HomePage: React.FC = () => {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Smart Watch Series 7',
      price: 449.99,
      rating: 4.8,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Designer Leather Backpack',
      price: 159.99,
      rating: 4.3,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      category: 'Fashion'
    },
    {
      id: 4,
      name: 'Premium Sneakers',
      price: 199.99,
      rating: 4.7,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      category: 'Fashion'
    }
  ];

  // Categories data
  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop',
      count: 45,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop',
      count: 32,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=400&fit=crop',
      count: 28,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Books',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop',
      count: 19,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Features data
  const features = [
    {
      icon: FaTruck,
      title: 'Free Shipping',
      description: 'On orders over $50',
      color: 'text-blue-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Payment',
      description: '100% secure transactions',
      color: 'text-green-500'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Dedicated customer service',
      color: 'text-purple-500'
    },
    {
      icon: FaCreditCard,
      title: 'Easy Returns',
      description: '30-day return policy',
      color: 'text-red-500'
    }
  ];

  // Animation variants - NO transition inside
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  // Render stars for rating
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4"
              >
                🌟 Welcome to LUMINA
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Discover Amazing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Products & Deals
                </span>
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Shop the latest trends in electronics, fashion, and lifestyle. 
                Quality products at unbeatable prices.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-3 group"
                  >
                    Shop Now
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all"
                  >
                    Browse Categories
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop"
                  alt="Shopping"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <FaShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Today's Deals</p>
                    <p className="text-lg font-bold text-gray-900">Up to 50% Off</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="py-16 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto ${feature.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-sm">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore our wide range of products
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="relative h-64">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count} Products</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-2 text-sm font-semibold flex items-center gap-2"
                    >
                      Shop Now <FaArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Featured Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Hand-picked just for you
              </p>
            </div>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 font-semibold flex items-center gap-2"
              >
                View All <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(product.rating)}
                      <span className="text-sm text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                      >
                        <FaShoppingBag className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-white/80 text-lg mb-8"
          >
            Get the latest updates on new products and upcoming sales
          </motion.p>
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;