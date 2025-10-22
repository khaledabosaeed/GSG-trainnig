import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../model/cartStore';
import { useToast } from '../../../shared/ui/Toast';
import type { Product } from '../../../entities/proudects';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  variant?: 'primary' | 'secondary' | 'icon';
  fullWidth?: boolean;
  className?: string;
  onAddSuccess?: () => void;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  quantity = 1,
  variant = 'primary',
  fullWidth = false,
  className = '',
  onAddSuccess,
}) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, quantity);
    showToast(`${product.name} added to cart!`);
    onAddSuccess?.();
  };

  const baseStyles = 'flex items-center justify-center gap-2 rounded-lg font-medium transition-all';

  const variantStyles = {
    primary: 'bg-[#DB4444] text-white hover:bg-[#c23939] px-8 py-3',
    secondary: 'bg-black text-white hover:bg-gray-800 px-8 py-3',
    icon: 'bg-white text-gray-900 hover:bg-gray-100 p-3 rounded-full',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <ShoppingCart size={variant === 'icon' ? 20 : 18} />
      {variant !== 'icon' && <span>Add to Cart</span>}
    </motion.button>
  );
};
