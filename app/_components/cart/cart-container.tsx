"use client";

import CartProductCard from "@/app/_components/cart/cart-product-card";
import useCart from "@/app/useCart";
import React from "react";
import ProductCard from "../products/product-card";

export default function CartContainer() {
  const { products } = useCart();

  return (
    <section className='grid grid-cols-3 gap-10'>
      {products.map((product) => {
        return <CartProductCard key={product.product.id} product={product} />;
      })}
    </section>
  );
}
