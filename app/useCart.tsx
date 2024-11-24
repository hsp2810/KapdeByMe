//app/useCart.tsx
"use client";

import { useContext } from "react";
import CartContext from "./cart-context";

export default function useCart() {
  const consumer = useContext(CartContext);

  if (!consumer) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return consumer;
}
