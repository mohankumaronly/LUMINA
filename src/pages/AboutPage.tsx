import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTrophy, 
  FaUsers, 
  FaShippingFast, 
  FaHeadset,
  FaCheckCircle,
  FaRocket,
  FaAward,
  FaGlobe
} from 'react-icons/fa';

const AboutPage: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const stats = [
    { icon: FaTrophy, value: '10+', label: 'Years of Excellence' },
    { icon: FaUsers, value: '1M+', label: 'Happy Customers' },
    { icon: FaShippingFast, value: '50K+', label: 'Orders Delivered' },
    { icon: FaHeadset, value: '24/7', label: 'Customer Support' },
  ];

  const values = [
    {
      icon: FaRocket,
      title: 'Innovation First',
      description: 'We constantly push boundaries to bring you the latest and greatest products.'
    },
    {
      icon: FaAward,
      title: 'Quality Assured',
      description: 'Every product is carefully curated and tested for premium quality.'
    },
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'We connect customers worldwide with the best products from around the globe.'
    },
    {
      icon: FaCheckCircle,
      title: 'Customer Centric',
      description: 'Your satisfaction is our top priority. We go above and beyond for you.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=2563eb&color=fff&size=128'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=7c3aed&color=fff&size=128'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=059669&color=fff&size=128'
    },
    {
      name: 'David Kim',
      role: 'Customer Experience',
      image: 'https://ui-avatars.com/api/?name=David+Kim&background=dc2626&color=fff&size=128'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About LUMINA
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We're on a mission to revolutionize online shopping with quality products and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Founded in 2015, LUMINA started with a simple vision: to make quality products accessible to everyone. 
                What began as a small online store has grown into a trusted destination for millions of customers worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                We believe in the power of great products to enhance lives. That's why we carefully curate our selection, 
                partnering with the best brands and artisans to bring you items that combine quality, style, and value.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Today, LUMINA is proud to serve a global community of shoppers who trust us for their everyday needs 
                and special moments alike.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Trusted by</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">1M+ Customers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                  <value.icon className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              The passionate people behind LUMINA
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all text-center group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;