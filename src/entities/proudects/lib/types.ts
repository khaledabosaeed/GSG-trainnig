// API Response type from fakestoreapi.com
export type ProductAPI = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

// UI Product type used in components
export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  color?: string[];
  description?: string;
  category?: string;
};

// Mapper to convert API product to UI product
export function mapProductAPIToProduct(apiProduct: ProductAPI): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.title,
    price: apiProduct.price,
    originalPrice: undefined,
    discount: undefined,
    rating: apiProduct.rating?.rate || 0,
    reviews: apiProduct.rating?.count || 0,
    image: apiProduct.image,
    isNew: false,
    description: apiProduct.description,
    category: apiProduct.category,
  };
}
