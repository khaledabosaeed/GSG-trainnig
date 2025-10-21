import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../../entities/proudects';
import { fetchProductsByCategory } from '../../entities/proudects';
import type { Product } from '../../entities/proudects';

interface RelatedProductsProps {
  category: string;
  currentProductId: number;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  category,
  currentProductId,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRelatedProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProductsByCategory(category);
        // Filter out current product and limit to 4
        const filtered = data
          .filter((p) => p.id !== currentProductId)
          .slice(0, 4);
        setProducts(filtered);
      } catch (error) {
        console.error('Error loading related products:', error);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      loadRelatedProducts();
    }
  }, [category, currentProductId]);

  if (loading) {
    return (
      <div className="py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DB4444] mx-auto"></div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="py-16 border-t"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <h3 className="text-[#DB4444] font-semibold">Related Items</h3>
      </div>

      <h2 className="text-3xl font-semibold mb-8">You May Also Like</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
