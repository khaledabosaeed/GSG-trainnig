import React from 'react';
import { Heart, Eye, Star } from 'lucide-react';
import { Badge } from '../ui/Badge';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  color?: string[];
}

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
  onViewDetails
}) => {
  return (
    <div className="bg-[#F5F5F5] rounded-lg p-4 relative group">
      {/* Badges */}
      {product.discount && (
        <Badge variant="discount" className="absolute top-3 left-3">
          -{product.discount}%
        </Badge>
      )}
      {product.isNew && (
        <Badge variant="new" className="absolute top-3 left-3">
          NEW
        </Badge>
      )}

      {/* Action Buttons */}
      <div className="absolute top-3 right-3 flex flex-col space-y-2">
        <button
          onClick={() => onToggleFavorite?.(product.id)}
          className="p-2 bg-white rounded-full hover:bg-gray-100"
        >
          <Heart size={16} />
        </button>
        <button
          onClick={() => onViewDetails?.(product.id)}
          className="p-2 bg-white rounded-full hover:bg-gray-100"
        >
          <Eye size={16} />
        </button>
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart?.(product.id)}
        className="w-full bg-black text-white py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Add To Cart
      </button>

      {/* Product Details */}
      <h4 className="font-medium mt-4 mb-2">{product.name}</h4>

      {/* Price */}
      <div className="flex items-center space-x-3 mb-2">
        <span className="text-[#DB4444] font-medium">${product.price}</span>
        {product.originalPrice && (
          <span className="text-gray-500 line-through text-sm">
            ${product.originalPrice}
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
                i < product.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }
            />
          ))}
        </div>
        <span className="text-gray-500 text-sm">({product.reviews})</span>

        {/* Color Options */}
        {product.color && (
          <div className="flex space-x-1 ml-2">
            {product.color.map((c, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full border-2 ${
                  c === 'red'
                    ? 'bg-red-500'
                    : c === 'blue'
                    ? 'bg-blue-500'
                    : c === 'yellow'
                    ? 'bg-yellow-400'
                    : c === 'black'
                    ? 'bg-black'
                    : 'bg-green-500'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
