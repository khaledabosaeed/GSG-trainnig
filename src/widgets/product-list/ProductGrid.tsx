import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../../entities/proudects';
import type { Product } from '../../entities/proudects';

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (productId: number) => void;
  onToggleFavorite?: (productId: number) => void;
  onViewDetails?: (productId: number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onToggleFavorite,
  onViewDetails
}) => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={itemVariants}
          custom={index}
        >
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            onViewDetails={onViewDetails}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
