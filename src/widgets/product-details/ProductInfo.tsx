import { motion } from 'framer-motion';
import { Rating } from '../../shared/ui/Rating';
import { Badge } from '../../shared/ui/Badge';
import type { Product } from '../../entities/proudects';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const inStock = true; // You can add stock logic later

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Product Name */}
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {product.name}
      </motion.h1>

      {/* Rating and Reviews */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Rating rating={product.rating} reviews={product.reviews} size={20} />
      </motion.div>

      {/* Price */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-3xl font-semibold text-[#DB4444]">
          ${product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
        {product.discount && (
          <Badge variant="discount">-{product.discount}%</Badge>
        )}
      </motion.div>

      {/* Description */}
      <motion.div
        className="border-t border-b py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-700 leading-relaxed">
          {product.description || 'No description available.'}
        </p>
      </motion.div>

      {/* Stock Status */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <span className="font-semibold">Availability:</span>
        <span className={inStock ? 'text-green-600' : 'text-red-600'}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </motion.div>

      {/* Category */}
      {product.category && (
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="font-semibold">Category:</span>
          <span className="text-gray-700 capitalize">{product.category}</span>
        </motion.div>
      )}
    </motion.div>
  );
};
