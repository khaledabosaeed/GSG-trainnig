import React from 'react';
import { Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceFeatures: React.FC = () => {
  const features: ServiceFeature[] = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M2 8L20 2L38 8V14C38 26 32 34 20 38C8 34 2 26 2 14V8Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ),
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140'
    },
    {
      icon: <Headphones size={32} className="text-white" />,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M2 8L20 2L38 8V14C38 26 32 34 20 38C8 34 2 26 2 14V8Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ),
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="text-center group"
          variants={itemVariants}
        >
          <motion.div
            className="bg-gray-300 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="bg-black rounded-full w-14 h-14 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {feature.icon}
            </motion.div>
          </motion.div>
          <motion.h3
            className="text-xl font-semibold mb-2"
            whileHover={{ scale: 1.05 }}
          >
            {feature.title}
          </motion.h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
