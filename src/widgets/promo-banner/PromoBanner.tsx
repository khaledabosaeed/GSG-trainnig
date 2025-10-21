import React from 'react';
import { motion } from 'framer-motion';

interface PromoBannerProps {
  category?: string;
  title: string;
  imageSrc: string;
  countdown?: {
    hours: number;
    days: number;
    minutes: number;
    seconds: number;
  };
  onBuyNow?: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  category,
  title,
  imageSrc,
  countdown,
  onBuyNow
}) => {
  const countdownItems = countdown ? [
    { value: countdown.hours, label: 'Hours' },
    { value: countdown.days, label: 'Days' },
    { value: countdown.minutes, label: 'Minutes' },
    { value: countdown.seconds, label: 'Seconds' }
  ] : [];

  return (
    <motion.div
      className="bg-black text-white rounded-lg p-12 flex items-center justify-between overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {category && (
          <motion.p
            className="text-[#00FF66] font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {category}
          </motion.p>
        )}
        <motion.h2
          className="text-5xl text-white font-semibold mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {title}
        </motion.h2>

        {countdown && (
          <motion.div
            className="flex items-center space-x-6 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {countdownItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-xl font-bold">{item.value}</p>
                <p className="text-xs">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.button
          onClick={onBuyNow}
          className="bg-[#00FF66] text-white px-10 py-3 rounded hover:bg-green-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buy Now!
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-96 object-contain"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};
