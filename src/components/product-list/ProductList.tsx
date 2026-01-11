import { Suspense, use, useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProducts, type Product } from "../api/products";
import ProductsLoader from "../common/loaders/ProductsLoader";
import { Input } from "@/components/ui/input";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { id, title, description, images, rating, price } = product;

  return (
    <Card className="w-xs" key={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={images[0]} alt="product image" width={"200px"} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>Rating: {rating}</p>
        <p>Price: ${price}</p>
      </CardFooter>
    </Card>
  );
}

function Products() {
  /*
  React's use api expects promise to be returned
  */
  const products = use(getProducts());
  const [filteredProducts, setFilteredProducts] = useState(products.products);
  const searchTextRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<number | null>(null);

  const handleProductsSearch = () => {
    // Clear previous debounce
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    //set new debounce
    //when user stops typing then this function will wait for 300 ms to execute
    debounceTimerRef.current = setTimeout(() => {
      setFilteredProducts(
        products.products.filter((product) =>
          product.title
            .toLowerCase()
            .includes(searchTextRef.current?.value?.toLowerCase() || "")
        )
      );
    }, 300);
  };

  //cleanup debounceTimerRef in case Component is unmounted
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center font-bold text-lg">Product List</h1>
      <Input
        ref={searchTextRef}
        className="flex self-center m-2 w-100"
        type="text"
        placeholder="Type Product Name"
        onChange={handleProductsSearch}
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 p-2">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function ProductList() {
  return (
    <Suspense fallback={<ProductsLoader />}>
      <Products />
    </Suspense>
  );
}
