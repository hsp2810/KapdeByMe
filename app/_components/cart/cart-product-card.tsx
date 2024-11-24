"use client";

import useCart from "@/app/useCart";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Product } from "@/data";
import { cn } from "@/lib/utils";
import { ProductCardCartProps } from "@/types";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function CartProductCard({
  className,
  product,
}: ProductCardCartProps) {
  const { title, description, price, discountedPrice, category } =
    product.product;
  const { products, setProducts, totalProducts, setTotalProductCount } =
    useCart();
  const currentProductFromCart = products.find(
    (productObj) => productObj.product.id === product.product.id
  );

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
      <CardHeader className='p-0 py-3'>
        <Image
          src={"/tshirt.jpg"}
          className='w-full h-[200px] rounded-md'
          alt='Tshirt'
          height={100}
          width={100}
        />
      </CardHeader>
      <CardContent className='grid gap-2 p-0'>
        <p className='text-xl font-semibold'>{title}</p>
        <p className='text-secondary-foreground h-[50px]'>{description}</p>
        <p className='text-secondary-foreground font-bold text-2xl'>
          ${discountedPrice}
        </p>
        <p className='text-secondary-foreground line-through text-sm'>
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className='p-0 py-3 gap-2'>
        <Button
          variant={"common"}
          className='w-full'
          onClick={() => handleUpdateProductCount(product.product.id, true)}
        >
          <Plus className='h-4 w-4' />
        </Button>
        <p className='w-full text-center text-lg font-semibold'>
          Q: {currentProductFromCart?.count}
        </p>{" "}
        <p className='w-full text-center text-lg font-semibold'>
          $
          {(currentProductFromCart?.count as number) *
            product.product.discountedPrice}
        </p>
        <Button
          variant={"common"}
          className='w-full'
          onClick={() => handleUpdateProductCount(product.product.id, false)}
        >
          <Minus className='h-4 w-4' />
        </Button>
      </CardFooter>
    </Card>
  );
}
