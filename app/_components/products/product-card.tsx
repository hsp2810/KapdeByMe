"use client";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Product } from "@/data";
import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { ProductCardProps } from "@/types";
import useCart from "@/app/useCart";
import { useEffect, useState } from "react";
import { CartProductType } from "@/app/cart-context";
import ProductDiscountBadge from "./product-discount-badge";

export default function ProductCard({ className, product }: ProductCardProps) {
  const { title, description, price, discountedPrice, category } = product;
  const { products, setProducts, totalProducts, setTotalProductCount } =
    useCart();
  const [currentProductFromCart, setCurrentProductFromCart] =
    useState<CartProductType | null>();

  useEffect(() => {
    const findProduct = products.find(
      (productObj) => productObj.product.id === product.id
    );

    setCurrentProductFromCart(findProduct || null);
  }, [products, product.id]);

  const handleAddToCart = (product: Product) => {
    setProducts([
      ...products,
      {
        count: 1,
        product: product,
      },
    ]);
    setTotalProductCount(totalProducts + 1);
    localStorage.setItem(
      "products",
      JSON.stringify([
        ...products,
        {
          count: 1,
          product: product,
        },
      ])
    );
  };

  const handleUpdateProductCount = (id: number, isIncrease: boolean) => {
    const updatedProducts = products
      .map((item) => {
        if (item.product.id === id) {
          const newCount = item.count + (isIncrease ? 1 : -1);
          if (newCount <= 0) {
            setTotalProductCount(totalProducts - 1);
            return null;
          }
          return {
            ...item,
            count: newCount,
          };
        }
        return item;
      })
      .filter((item) => item !== null);

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <Card className={cn("w-[380px] border-none shadow-none", className)}>
      <CardHeader className='p-0 py-2 lg:py-3'>
        <Image
          src={"/tshirt.jpg"}
          className='w-full h-[200px] rounded-md'
          alt='Tshirt'
          height={100}
          width={100}
        />
      </CardHeader>
      <CardContent className='grid gap-1 lg:gap-3 px-3'>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-semibold'>{title}</p>
          <ProductDiscountBadge original={price} discounted={discountedPrice} />
        </div>
        <p className='text-secondary-foreground h-[50px]'>{description}</p>
        <section className='flex justify-between items-center'>
          <p className='text-secondary-foreground font-bold text-2xl'>
            ${discountedPrice}
          </p>
          <div className='flex items-center gap-2'>
            <p className='text-xs'>Available sizes</p>
            <ul className='flex gap-2'>
              <Button
                className='rounded-full font-semibold'
                variant={"outline"}
              >
                S
              </Button>
              <Button
                className='rounded-full font-semibold'
                variant={"outline"}
              >
                M
              </Button>
            </ul>
          </div>
        </section>
        <p className='text-secondary-foreground line-through text-sm'>
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className='p-0 py-3'>
        {currentProductFromCart ? (
          <>
            <Button
              variant={"common"}
              className='w-full rounded-full'
              onClick={() => handleUpdateProductCount(product.id, true)}
            >
              <Plus className='h-4 w-4' />
            </Button>
            <p className='w-full text-center text-lg font-semibold'>
              Q: {currentProductFromCart?.count}
            </p>{" "}
            <p className='w-full text-center text-lg font-semibold'>
              ${product.discountedPrice * currentProductFromCart?.count}
            </p>
            <Button
              variant={"common"}
              className='w-full rounded-full'
              onClick={() => handleUpdateProductCount(product.id, false)}
            >
              <Minus className='h-4 w-4' />
            </Button>
          </>
        ) : (
          <Button
            className='w-full rounded-full'
            variant={"common"}
            onClick={() => handleAddToCart(product)}
          >
            <ShoppingBag className='h-4 w-4' /> Add to bag
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
