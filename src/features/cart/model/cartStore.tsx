import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { CartItem } from '../../../entities/cart';
import { calculateCartTotals } from '../../../entities/cart';
import type { Product } from '../../../entities/proudects';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  tax: number;
  total: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
  getItemQuantity: (productId: number) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'exclusive-cart';

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);

  // Calculate totals
  const { subtotal, tax, total } = calculateCartTotals(items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Add product to cart
  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productId === product.id);

      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        const newItem: CartItem = {
          id: product.id,
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image: product.image,
          category: product.category,
          maxStock: 10,
        };
        return [...prevItems, newItem];
      }
    });
  }, []);

  // Remove product from cart
  const removeFromCart = useCallback((productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.min(quantity, item.maxStock || 10) }
          : item
      )
    );
  }, [removeFromCart]);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // Check if product is in cart
  const isInCart = useCallback(
    (productId: number) => {
      return items.some((item) => item.productId === productId);
    },
    [items]
  );

  // Get quantity of specific product
  const getItemQuantity = useCallback(
    (productId: number) => {
      const item = items.find((item) => item.productId === productId);
      return item ? item.quantity : 0;
    },
    [items]
  );

  const value: CartContextType = {
    items,
    itemCount,
    subtotal,
    tax,
    total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
