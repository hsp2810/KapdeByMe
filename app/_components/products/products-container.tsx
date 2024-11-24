"use client";

import { Product } from "@/data";
import ProductFilter from "./product-filter";
import ProductCard from "./product-card";
import { useState } from "react";

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
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </section>
    </section>
  );
}
