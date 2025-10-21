// API types from FakeStore API
export type CartProductAPI = {
  productId: number;
  quantity: number;
};

export type CartAPI = {
  id: number;
  userId: number;
  date: string;
  products: CartProductAPI[];
};

// UI types for our application
export type CartItem = {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category?: string;
  maxStock?: number;
};

export type Cart = {
  id: number;
  userId: number;
  date: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
};

// Request types for creating/updating carts
export type CreateCartRequest = {
  userId: number;
  date: string;
  products: CartProductAPI[];
};

export type UpdateCartRequest = {
  userId: number;
  date: string;
  products: CartProductAPI[];
};

// Helper to calculate cart totals
export function calculateCartTotals(items: CartItem[]): {
  subtotal: number;
  tax: number;
  total: number;
} {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    tax: Number(tax.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}
