// API exports
export {
  fetchCarts,
  fetchCartById,
  fetchUserCarts,
  createCart,
  updateCart,
  deleteCart,
  fetchCartsInDateRange,
  fetchLimitedCarts,
  fetchSortedCarts,
} from './api/cart';

// Type exports
export type {
  CartAPI,
  Cart,
  CartItem,
  CartProductAPI,
  CreateCartRequest,
  UpdateCartRequest,
} from './lib/types';

export { calculateCartTotals } from './lib/types';

// UI exports
export { CartItemComponent } from './ui/CartItem';

// Context exports
export { CartProvider, useCart } from './model/CartContext';
