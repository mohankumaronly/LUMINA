import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaShoppingCart, 
  FaSearch, 
  FaBars, 
  FaTimes, 
  FaUser, 
  FaSignOutAlt,
  FaHeart,
  FaSun,
  FaMoon,
  FaStore
} from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  const totalItems = getTotalItems();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Header variants
  const headerVariants = {
    hidden: { 
      y: -100, 
      opacity: 0
    },
    visible: { 
      y: 0, 
      opacity: 1
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      x: '100%',
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1
    }
  };

  const searchVariants = {
    hidden: { 
      scaleX: 0,
      opacity: 0
    },
    visible: { 
      scaleX: 1,
      opacity: 1
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results - you can implement this later
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl' 
            : 'bg-white dark:bg-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaStore className="w-6 h-6 text-white" />
              </motion.div>
              <motion.span 
                className="text-2xl font-bold text-gray-900 dark:text-gray-100"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600">LUMINA</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaSearch className="w-5 h-5" />
              </motion.button>

              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </motion.button>

              {/* User Account */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                {user ? (
                  <Link to="/profile">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                    >
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <FaUser className="w-5 h-5 text-white" />
                      )}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLoginModal(true)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg"
                  >
                    Sign In
                  </motion.button>
                )}
              </motion.div>

              {/* Wishlist */}
              <Link to="/wishlist">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
                >
                  <FaHeart className="w-5 h-5" />
                </motion.button>
              </Link>

              {/* Cart */}
              <Link to="/cart">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors relative shadow-lg"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                variants={searchVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="py-4 origin-right"
              >
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <FaSearch className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600">LUMINA</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                        location.pathname === item.path
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <hr className="border-gray-200 dark:border-gray-800 my-4" />

                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <FaUser className="w-5 h-5" />
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      >
                        <FaSignOutAlt className="w-5 h-5" />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowLoginModal(true);
                      }}
                      className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center transition-colors"
                    >
                      Sign In
                    </button>
                  )}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
};

export default Header;