import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { QuantitySelector } from '../../shared/ui/QuantitySelector';

interface ProductActionsProps {
  onAddToCart?: (quantity: number) => void;
  onToggleFavorite?: () => void;
}

export const ProductActions: React.FC<ProductActionsProps> = ({
  onAddToCart,
  onToggleFavorite,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAddToCart?.(quantity);
    // You can add a toast notification here
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite?.();
  };

  return (
    <motion.div
      className="space-y-6 border-t pt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
    >
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="font-semibold">Quantity:</span>
        <QuantitySelector
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          className="flex-1 bg-[#DB4444] text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#c23939] transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart size={20} />
          Add to Cart
        </motion.button>

        {/* Favorite Button */}
        <motion.button
          onClick={handleToggleFavorite}
          className={`p-4 border-2 rounded-md transition-colors ${
            isFavorite
              ? 'border-[#DB4444] bg-red-50 text-[#DB4444]'
              : 'border-gray-300 hover:border-[#DB4444]'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart
            size={24}
            className={isFavorite ? 'fill-current' : ''}
          />
        </motion.button>
      </div>

      {/* Delivery Info */}
      <motion.div
        className="bg-gray-50 p-4 rounded-md space-y-3 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-start gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0"
          >
            <rect width="40" height="40" rx="20" fill="#E5E7EB" />
            <path
              d="M12 13L20 9L28 13V19C28 24 25 27 20 29C15 27 12 24 12 19V13Z"
              stroke="#374151"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <div>
            <p className="font-semibold">Free Delivery</p>
            <p className="text-gray-600">Enter your postal code for Delivery Availability</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="flex-shrink-0"
          >
            <rect width="40" height="40" rx="20" fill="#E5E7EB" />
            <path
              d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z"
              stroke="#374151"
              strokeWidth="2"
            />
            <path d="M20 16V20L23 23" stroke="#374151" strokeWidth="2" />
          </svg>
          <div>
            <p className="font-semibold">Return Delivery</p>
            <p className="text-gray-600">Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
