//app/cart-provider.tsx
"use client";

import { useEffect, useState } from "react";
import CartContext, { CartProductType } from "./cart-context";

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [products, setProducts] = useState<CartProductType[]>([]);
  const [totalProducts, setTotalProductCount] = useState<number>(0);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("products") as string
    );
    if (!storedProducts) return;

    setProducts(storedProducts);
    setTotalProductCount(storedProducts.length);
  }, []);

  return (
    <CartContext.Provider
      value={{ products, setProducts, totalProducts, setTotalProductCount }}
    >
      {children}
    </CartContext.Provider>
  );
}
