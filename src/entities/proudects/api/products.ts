import { api } from "../../../shared/api/api-client";
import type { ProductAPI, Product } from "../lib/types";
import { mapProductAPIToProduct } from "../lib/types";

export async function fetchProducts(): Promise<Product[]> {
  const apiProducts: ProductAPI[] = await api.get("/products");
  return apiProducts.map(mapProductAPIToProduct);
}

export async function fetchProductById(id: number): Promise<Product> {
  const apiProduct: ProductAPI = await api.get(`/products/${id}`);
  return mapProductAPIToProduct(apiProduct);
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const apiProducts: ProductAPI[] = await api.get(`/products/category/${category}`);
  return apiProducts.map(mapProductAPIToProduct);
}
