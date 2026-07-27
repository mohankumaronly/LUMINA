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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const searchVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1 }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
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
            ? 'bg-white/95 dark:bg-primary-900/95 backdrop-blur-lg shadow-xl' 
            : 'bg-white dark:bg-primary-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 md:w-10 md:h-10 bg-accent-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaStore className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              <motion.span 
                className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-100"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-accent-600 dark:text-accent-400">LUMINA</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-600 dark:bg-accent-400"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Section - Responsive */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search Button - Hidden on very small screens? Actually keep it */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 sm:p-2 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
              >
                <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
              >
                {isDarkMode ? (
                  <FaSun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <FaMoon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </motion.button>

              {/* User Account - Hidden on very small screens */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative hidden sm:block">
                {user ? (
                  <Link to="/profile">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 md:w-10 md:h-10 bg-accent-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                    >
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <FaUser className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      )}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLoginModal(true)}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-xl transition-colors shadow-lg text-xs md:text-sm"
                  >
                    Sign In
                  </motion.button>
                )}
              </motion.div>

              {/* Wishlist */}
              <Link to="/wishlist" className="hidden sm:block">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 sm:p-2 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors relative"
                >
                  <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>

              {/* Cart */}
              <Link to="/cart">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 sm:p-2 rounded-xl bg-accent-600 hover:bg-accent-700 text-white transition-colors relative shadow-lg"
                >
                  <FaShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Link>

              {/* Mobile Menu Button - Only visible on mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
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
                className="py-2 sm:py-4 origin-right"
              >
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 sm:py-3 pr-10 sm:pr-12 rounded-xl border-2 border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-800 text-primary-800 dark:text-primary-200 focus:border-accent-500 focus:outline-none transition-colors text-sm sm:text-base"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 text-primary-400 hover:text-accent-600 transition-colors"
                  >
                    <FaSearch className="w-4 h-4 sm:w-5 sm:h-5" />
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
              className="fixed top-0 right-0 h-full w-[280px] sm:w-80 bg-white dark:bg-primary-900 shadow-2xl z-50 lg:hidden"
            >
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                  <span className="text-xl sm:text-2xl font-bold text-accent-600">LUMINA</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
                  >
                    <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 sm:gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base sm:text-lg font-medium px-4 py-2.5 sm:py-3 rounded-xl transition-colors ${
                        location.pathname === item.path
                          ? 'bg-accent-600 text-white'
                          : 'text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <hr className="border-primary-200 dark:border-primary-800 my-2 sm:my-4" />

                  {/* Mobile User Section */}
                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
                      >
                        <FaUser className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">Profile</span>
                      </Link>
                      <Link
                        to="/wishlist"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-xl text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
                      >
                        <FaHeart className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">Wishlist</span>
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      >
                        <FaSignOutAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">Sign Out</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setShowLoginModal(true);
                        }}
                        className="px-4 py-2.5 sm:py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-xl text-center transition-colors text-sm sm:text-base"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setShowRegisterModal(true);
                        }}
                        className="px-4 py-2.5 sm:py-3 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 font-semibold rounded-xl text-center transition-colors hover:bg-primary-200 dark:hover:bg-primary-700 text-sm sm:text-base"
                      >
                        Create Account
                      </button>
                    </>
                  )}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />

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