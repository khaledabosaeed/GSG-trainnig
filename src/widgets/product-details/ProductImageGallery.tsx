import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductImageGalleryProps {
  image: string;
  productName: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  image,
  productName,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <motion.div
      className="bg-gray-100 rounded-lg p-8 flex items-center justify-center sticky top-4"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative w-full max-w-md"
        onHoverStart={() => setIsZoomed(true)}
        onHoverEnd={() => setIsZoomed(false)}
      >
        <motion.img
          src={image}
          alt={productName}
          className="w-full h-auto object-contain cursor-zoom-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onLoad={() => setImageLoaded(true)}
          whileHover={{ scale: 1.1 }}
          style={{
            transition: 'transform 0.3s ease-out',
          }}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DB4444]"></div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
