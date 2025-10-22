import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TopBanner } from '../widgets/hreo/hero-banners/TopBanner';
import { Header } from '../shared/ui/Header';
import { Footer } from '../shared/ui/Footer';
import { PageTransition } from '../shared/ui/PageTransition';
import { Breadcrumb } from '../shared/ui/Breadcrumb';
import type { BreadcrumbItem } from '../shared/ui/Breadcrumb';
import { fetchProductById } from '../entities/proudects';
import type { Product } from '../entities/proudects';
import { useCart } from '../features/cart';
import { useToast } from '../shared/ui/Toast';
import {
  ProductImageGallery,
  ProductInfo,
  ProductActions,
  RelatedProducts,
} from '../widgets/product-details';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setError('Product ID is missing');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductById(parseInt(id));
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
        console.error('Error loading product:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = (quantity: number) => {
    if (!product) return;
    addToCart(product, quantity);
    showToast(`${quantity} ${quantity > 1 ? 'items' : 'item'} added to cart!`);
  };

  const handleToggleFavorite = () => {
    console.log('Toggled favorite');
    // TODO: Implement favorites functionality
  };

  const breadcrumbItems: BreadcrumbItem[] = product
    ? [
        { label: 'Home', path: '/' },
        { label: product.category || 'Products', path: '/' },
        { label: product.name },
      ]
    : [{ label: 'Home', path: '/' }, { label: 'Product' }];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <TopBanner
          message="Get 20% off on your first purchase - Use code: FIRST20"
          actionText="Shop Now"
        />
        <Header />

        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#DB4444] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading product details...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-red-500 text-xl mb-4">Error: {error}</div>
              <button
                onClick={() => navigate('/')}
                className="bg-[#DB4444] text-white px-8 py-3 rounded-md hover:bg-[#c23939]"
              >
                Back to Home
              </button>
            </motion.div>
          )}

          {/* Product Details */}
          {product && !loading && !error && (
            <>
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Left: Product Image */}
                <ProductImageGallery
                  image={product.image}
                  productName={product.name}
                />

                {/* Right: Product Info & Actions */}
                <div>
                  <ProductInfo product={product} />
                  <ProductActions
                    onAddToCart={handleAddToCart}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </div>
              </div>

              {/* Related Products */}
              {product.category && (
                <RelatedProducts
                  category={product.category}
                  currentProductId={product.id}
                />
              )}
            </>
          )}
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProductDetails;
