import { CartProductType } from "./app/cart-context";
import { Product } from "./data";

export interface ProductCardCartProps {
  className?: string;
  product: CartProductType;
}

export interface ProductCardProps {
  className?: string;
  product: Product;
}
