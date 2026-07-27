import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  FaStar, 
  FaStarHalfAlt, 
  FaShoppingBag, 
  FaHeart, 
  FaShareAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaTruck,
  FaShieldAlt,
  FaUndo
} from 'react-icons/fa';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Sample product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    rating: 4.5,
    reviews: 128,
    description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 40-hour battery life, and ultra-comfortable ear cushions for all-day listening.',
    category: 'Electronics',
    inStock: true,
    discount: 20,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop'
    ],
    features: [
      'Active Noise Cancellation',
      '40-hour battery life',
      'Bluetooth 5.0',
      'Comfortable ear cushions',
      'Built-in microphone',
      'Foldable design'
    ],
    specifications: {
      'Brand': 'SoundMax',
      'Model': 'SM-2000',
      'Color': 'Black',
      'Connectivity': 'Wireless',
      'Battery Life': '40 hours',
      'Charging Time': '2 hours'
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400 w-5 h-5" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 w-5 h-5" />);
    }
    return stars;
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <FaArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Product Images */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {/* Main Image */}
              <motion.div
                key={selectedImage}
                variants={imageVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-96 overflow-hidden"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    -{product.discount}% OFF
                  </div>
                )}
              </motion.div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2 p-4">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-blue-600 shadow-lg'
                        : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }} className="space-y-6">
            {/* Title & Rating */}
            <div>
              <div className="flex items-start justify-between">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {product.name}
                </h1>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-xl transition-colors ${
                    isWishlisted
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <FaHeart className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({product.reviews} reviews)
                </span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-blue-600">{product.category}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              {product.discount > 0 ? (
                <>
                  <span className="text-4xl font-bold text-blue-600">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ${product.price}
                  </span>
                  <span className="text-sm text-green-600 font-semibold">
                    Save ${(product.price * product.discount / 100).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-4xl font-bold text-blue-600">
                  ${product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{key}</span>
                    <span className="text-sm text-gray-900 dark:text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-700 dark:text-gray-300"
                >
                  -
                </motion.button>
                <span className="w-12 text-center font-semibold text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-700 dark:text-gray-300"
                >
                  +
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <FaShoppingBag className="w-5 h-5" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <FaShareAlt className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <FaTruck className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Free Shipping</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaShieldAlt className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Secure Payment</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">100% encrypted</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaUndo className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Easy Returns</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">30-day return policy</p>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-600 font-semibold">In Stock</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 dark:text-gray-400">
                {Math.floor(Math.random() * 50) + 10} units available
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;