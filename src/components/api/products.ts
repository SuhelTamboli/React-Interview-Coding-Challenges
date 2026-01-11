// types/product.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
}

const productsPromise: Promise<ProductsResponse> = fetch("https://dummyjson.com/products").then((res) => {
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
});

export function getProducts(): Promise<ProductsResponse> {
  return productsPromise;
}
