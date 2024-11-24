"use client";

import { Product } from "@/data";
import ProductFilter from "./product-filter";
import ProductCard from "./product-card";
import { useState } from "react";
import { SearchX } from "lucide-react";

interface ProductsContainerProps {
  products: Product[];
}

export default function ProductsContainer({
  products,
}: ProductsContainerProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  return (
    <section className='flex lg:block flex-col items-center lg:w-3/4 lg:mx-auto my-10'>
      <section className='flex justify-between mb-5'>
        <h1 className='font-bold text-3xl'>Products</h1>
        <ProductFilter
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </section>
      <section className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <h2 className='flex items-center gap-1 text-zinc-600 font-semibold text-sm'>
            <SearchX className='h-4 w-4' />
            No products found
          </h2>
        )}
      </section>
    </section>
  );
}
