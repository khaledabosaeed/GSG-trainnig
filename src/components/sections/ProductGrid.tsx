import React from 'react';
import { ProductCard } from '../product/ProductCard';
import type { Product } from '../product/ProductCard';

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};
