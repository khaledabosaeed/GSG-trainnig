// Public API of the products entity
export { ProductCard, CategoryCard } from "./ui";
export { fetchProducts, fetchProductById, fetchProductsByCategory } from "./api";
export type { Product, ProductAPI } from "./lib";
export { mapProductAPIToProduct } from "./lib";
