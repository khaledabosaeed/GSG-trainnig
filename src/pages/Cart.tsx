import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Trash2 } from 'lucide-react';
import { TopBanner } from '../widgets/hreo/hero-banners/TopBanner';
import { Header } from '../shared/ui/Header';
import { Footer } from '../shared/ui/Footer';
import { PageTransition } from '../shared/ui/PageTransition';
import { Breadcrumb } from '../shared/ui/Breadcrumb';
import type { BreadcrumbItem } from '../shared/ui/Breadcrumb';
import { CartItemComponent, useCart } from '../entities/cart';
import { useToast } from '../shared/ui/Toast';

const CartPage = () => {
  const navigate = useNavigate();
  const { items,  subtotal, tax, total, updateQuantity, removeFromCart, clearCart } = useCart();
  const { showToast } = useToast();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: number) => {
    const item = items.find((i) => i.productId === productId);
    removeFromCart(productId);
    if (item) {
      showToast(`${item.name} removed from cart`, 'info');
    }
  };

  const handleClearCart = () => {
    clearCart();
    showToast('Cart cleared', 'info');
  };

  const handleCheckout = () => {
    // In a real app, this would navigate to checkout page
    alert('Proceeding to checkout... (Demo)');
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Shopping Cart' },
  ];

  const isEmpty = items.length === 0;

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <TopBanner
          message="Free shipping on orders over $50 - Limited time offer!"
          actionText="Shop Now"
        />
        <Header />

        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Page Header */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4">
              <ShoppingBag size={32} className="text-[#DB4444]" />
              <div>
                <h1 className="text-4xl font-bold">Shopping Cart</h1>
                <p className="text-gray-600 mt-1">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
            </div>

            {!isEmpty && (
              <motion.button
                onClick={() => navigate('/products')}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-[#DB4444] hover:text-[#DB4444] transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft size={20} />
                Continue Shopping
              </motion.button>
            )}
          </motion.div>

          {/* Empty Cart State */}
          {isEmpty && (
            <motion.div
              className="text-center py-20 bg-white rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added anything to your cart yet
              </p>
              <motion.button
                onClick={() => navigate('/products')}
                className="bg-[#DB4444] text-white px-8 py-3 rounded-md hover:bg-[#c23939] transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Shopping
              </motion.button>
            </motion.div>
          )}

          {/* Cart Content */}
          {!isEmpty && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">Cart Items</h2>
                  <motion.button
                    onClick={handleClearCart}
                    className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Trash2 size={18} />
                    Clear Cart
                  </motion.button>
                </div>

                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <CartItemComponent
                      key={item.productId}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg sticky top-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({items.length} items)</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-medium text-green-600">
                        {subtotal >= 50 ? 'FREE' : '$5.00'}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Tax (10%)</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-[#DB4444]">
                          ${(total + (subtotal >= 50 ? 0 : 5)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Free Shipping Progress */}
                  {subtotal < 50 && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        Add <span className="font-semibold">${(50 - subtotal).toFixed(2)}</span> more
                        to get <span className="font-semibold">FREE shipping!</span>
                      </p>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <motion.div
                          className="bg-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(subtotal / 50) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  )}

                  <motion.button
                    onClick={handleCheckout}
                    className="w-full bg-[#DB4444] text-white py-4 rounded-lg font-semibold hover:bg-[#c23939] transition mb-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceed to Checkout
                  </motion.button>

                  <button
                    onClick={() => navigate('/products')}
                    className="w-full border-2 border-gray-300 py-3 rounded-lg font-medium hover:border-[#DB4444] hover:text-[#DB4444] transition"
                  >
                    Continue Shopping
                  </button>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Customer support 24/7</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default CartPage;
