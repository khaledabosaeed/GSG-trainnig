import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { QuantitySelector } from '../../../shared/ui/QuantitySelector';
import type { CartItem as CartItemType } from '../lib/types';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange?: (productId: number, newQuantity: number) => void;
  onRemove?: (productId: number) => void;
  showRemoveButton?: boolean;
}

export const CartItemComponent: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemove,
  showRemoveButton = true,
}) => {
  const handleIncrease = () => {
    if (item.maxStock && item.quantity >= item.maxStock) return;
    onQuantityChange?.(item.productId, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity <= 1) return;
    onQuantityChange?.(item.productId, item.quantity - 1);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <motion.div
      className="flex gap-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      layout
    >
      {/* Product Image */}
      <div className="relative flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {item.name}
            </h3>
            {item.category && (
              <p className="text-sm text-gray-500 capitalize mt-1">{item.category}</p>
            )}
          </div>

          {/* Remove Button */}
          {showRemoveButton && onRemove && (
            <motion.button
              onClick={() => onRemove(item.productId)}
              className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Remove item"
            >
              <X size={20} />
            </motion.button>
          )}
        </div>

        {/* Price and Quantity */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold text-[#DB4444]">
              ${item.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">each</span>
          </div>

          <QuantitySelector
            quantity={item.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            min={1}
            max={item.maxStock || 10}
          />
        </div>

        {/* Item Total */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-600">Item Total:</span>
          <span className="text-xl font-bold text-gray-900">
            ${itemTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
