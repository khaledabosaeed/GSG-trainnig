import { Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 10,
}) => {
  return (
    <div className="flex items-center border-2 border-gray-300 rounded-md w-fit">
      <motion.button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: quantity > min ? 1.1 : 1 }}
        whileTap={{ scale: quantity > min ? 0.9 : 1 }}
      >
        <Minus size={16} />
      </motion.button>

      <span className="px-6 py-2 font-medium min-w-[60px] text-center">
        {quantity}
      </span>

      <motion.button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className="p-2 hover:bg-red-50 hover:text-[#DB4444] disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: quantity < max ? 1.1 : 1 }}
        whileTap={{ scale: quantity < max ? 0.9 : 1 }}
      >
        <Plus size={16} />
      </motion.button>
    </div>
  );
};
