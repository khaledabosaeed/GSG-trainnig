import { api } from '../../../shared/api/api-client';
import { fetchProductById } from '../../proudects/api/products';
import type {
  CartAPI,
  Cart,
  CartItem,
  CreateCartRequest,
  UpdateCartRequest,
  CartProductAPI,
} from '../lib/types';
import { calculateCartTotals } from '../lib/types';

/**
 * Enriches cart products with full product details from the products API
 */
async function enrichCartItems(cartProducts: CartProductAPI[]): Promise<CartItem[]> {
  const enrichedItems = await Promise.all(
    cartProducts.map(async (cartProduct) => {
      try {
        const product = await fetchProductById(cartProduct.productId);
        return {
          id: cartProduct.productId,
          productId: cartProduct.productId,
          name: product.name,
          price: product.price,
          quantity: cartProduct.quantity,
          image: product.image,
          category: product.category,
          maxStock: 10, // Default max stock
        };
      } catch (error) {
        console.error(`Failed to fetch product ${cartProduct.productId}:`, error);
        // Return a fallback item if product fetch fails
        return {
          id: cartProduct.productId,
          productId: cartProduct.productId,
          name: 'Unknown Product',
          price: 0,
          quantity: cartProduct.quantity,
          image: '',
          maxStock: 10,
        };
      }
    })
  );

  return enrichedItems;
}

/**
 * Converts CartAPI to Cart with enriched product details
 */
async function mapCartAPIToCart(apiCart: CartAPI): Promise<Cart> {
  const items = await enrichCartItems(apiCart.products);
  const totals = calculateCartTotals(items);

  return {
    id: apiCart.id,
    userId: apiCart.userId,
    date: apiCart.date,
    items,
    ...totals,
  };
}

/**
 * Fetches all carts
 */
export async function fetchCarts(): Promise<Cart[]> {
  const apiCarts: CartAPI[] = await api.get('/carts');
  return Promise.all(apiCarts.map(mapCartAPIToCart));
}

/**
 * Fetches a single cart by ID
 */
export async function fetchCartById(id: number): Promise<Cart> {
  const apiCart: CartAPI = await api.get(`/carts/${id}`);
  return mapCartAPIToCart(apiCart);
}

/**
 * Fetches carts for a specific user
 */
export async function fetchUserCarts(userId: number): Promise<Cart[]> {
  const apiCarts: CartAPI[] = await api.get(`/carts/user/${userId}`);
  return Promise.all(apiCarts.map(mapCartAPIToCart));
}

/**
 * Creates a new cart
 */
export async function createCart(cartData: CreateCartRequest): Promise<Cart> {
  const apiCart: CartAPI = await api.post('/carts', cartData);
  return mapCartAPIToCart(apiCart);
}

/**
 * Updates an existing cart
 */
export async function updateCart(id: number, cartData: UpdateCartRequest): Promise<Cart> {
  const apiCart: CartAPI = await api.put(`/carts/${id}`, cartData);
  return mapCartAPIToCart(apiCart);
}

/**
 * Deletes a cart
 */
export async function deleteCart(id: number): Promise<void> {
  await api.delete(`/carts/${id}`);
}

/**
 * Fetches carts within a date range
 */
export async function fetchCartsInDateRange(startDate: string, endDate: string): Promise<Cart[]> {
  const apiCarts: CartAPI[] = await api.get(
    `/carts?startdate=${startDate}&enddate=${endDate}`
  );
  return Promise.all(apiCarts.map(mapCartAPIToCart));
}

/**
 * Limits the number of returned carts
 */
export async function fetchLimitedCarts(limit: number): Promise<Cart[]> {
  const apiCarts: CartAPI[] = await api.get(`/carts?limit=${limit}`);
  return Promise.all(apiCarts.map(mapCartAPIToCart));
}

/**
 * Sorts carts in ascending or descending order
 */
export async function fetchSortedCarts(sort: 'asc' | 'desc' = 'desc'): Promise<Cart[]> {
  const apiCarts: CartAPI[] = await api.get(`/carts?sort=${sort}`);
  return Promise.all(apiCarts.map(mapCartAPIToCart));
}
