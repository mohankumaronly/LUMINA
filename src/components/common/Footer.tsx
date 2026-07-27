import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaStore, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaChevronRight,
  FaCreditCard,
  FaTruck,
  FaShieldAlt,
  FaHeadset
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Blog', path: '/blog' },
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Returns Policy', path: '/returns' },
    { name: 'Shipping Info', path: '/shipping' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const categories = [
    { name: 'Electronics', path: '/products?category=electronics' },
    { name: 'Fashion', path: '/products?category=fashion' },
    { name: 'Home & Living', path: '/products?category=home' },
    { name: 'Books', path: '/products?category=books' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-600' },
    { icon: FaYoutube, href: 'https://youtube.com', color: 'hover:text-red-600' },
  ];

  const features = [
    { icon: FaTruck, title: 'Free Shipping', description: 'On orders over $50' },
    { icon: FaShieldAlt, title: 'Secure Payment', description: '100% secure transactions' },
    { icon: FaHeadset, title: '24/7 Support', description: 'Dedicated customer service' },
    { icon: FaCreditCard, title: 'Easy Returns', description: '30-day return policy' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      {/* Features Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4 group"
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/20 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16"
        >
          {/* Brand Column */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaStore className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-400">
                LUMINA
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your premium destination for quality products. We bring you the best 
              selection of electronics, fashion, and lifestyle items.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:info@lumina.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaEnvelope className="w-4 h-4 text-gray-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="tel:+1234567890"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaPhone className="w-4 h-4 text-gray-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <FaChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <FaChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <FaChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-28 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="absolute right-1 top-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} LUMINA. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs mr-2">We accept:</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-400"
              >
                Visa
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-400"
              >
                MasterCard
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-400"
              >
                PayPal
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;