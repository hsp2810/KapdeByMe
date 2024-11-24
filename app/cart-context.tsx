//app/cart-context.tsx
"use client";

import { Product } from "@/data";
import { createContext, Dispatch, SetStateAction } from "react";

export type CartProductType = {
  count: number;
  product: Product;
};

type CartContextType = {
  products: CartProductType[];
  setProducts: Dispatch<SetStateAction<CartProductType[]>>;
  totalProducts: number;
  setTotalProductCount: Dispatch<SetStateAction<number>>;
};

export default createContext<CartContextType | undefined>(undefined);
