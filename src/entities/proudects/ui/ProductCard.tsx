import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../../../shared/ui";
import type { Product } from "../lib/types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: number) => void;
  onToggleFavorite?: (productId: number) => void;
  onViewDetails?: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  onViewDetails,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onViewDetails) {
      onViewDetails(product.id);
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <motion.div
      className="bg-[#F5F5F5] rounded-lg p-4 relative group overflow-hidden cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
    >
      {/* Badges */}
      {product.discount && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Badge variant="discount" className="absolute top-3 left-3 z-10">
            -{product.discount}%
          </Badge>
        </motion.div>
      )}
      {product.isNew && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Badge variant="new" className="absolute top-3 left-3 z-10">
            NEW
          </Badge>
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
        <motion.button
          title="Add to favorites"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite?.(product.id);
          }}
          className="p-2 bg-white rounded-full hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart size={16} />
        </motion.button>
        <motion.button
          title="View details"
          onClick={handleViewDetails}
          className="p-2 bg-white rounded-full hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Eye size={16} />
        </motion.button>
      </div>

      {/* Product Image with improved display */}
      <div className="w-full h-40 mb-4 flex items-center justify-center bg-white rounded-lg overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onLoad={() => setImageLoaded(true)}
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Add to Cart Button */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart?.(product.id);
        }}
        className="w-full bg-black text-white py-2 rounded"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Add To Cart
      </motion.button>

      {/* Product Details */}
      <motion.h4
        className="font-medium mt-4 mb-2 line-clamp-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {product.name}
      </motion.h4>

      {/* Price */}
      <div className="flex items-center space-x-3 mb-2">
        <span className="text-[#DB4444] font-medium">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-gray-500 line-through text-sm">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Rating and Colors */}
      <div className="flex items-center space-x-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
        <span className="text-gray-500 text-sm">({product.reviews})</span>

        {/* Color Options */}
        {product.color && (
          <div className="flex space-x-1 ml-2">
            {product.color.map((c, i) => (
              <motion.div
                key={i}
                className={`w-4 h-4 rounded-full border-2 cursor-pointer ${
                  c === "red"
                    ? "bg-red-500"
                    : c === "blue"
                    ? "bg-blue-500"
                    : c === "yellow"
                    ? "bg-yellow-400"
                    : c === "black"
                    ? "bg-black"
                    : "bg-green-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
