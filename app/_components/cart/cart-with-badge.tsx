import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CartWithBadge({ itemCount }: { itemCount: number }) {
  return (
    <Link href={"/cart"}>
      <div className='relative'>
        {/* Cart Icon */}
        <ShoppingBag className='h-4 w-4' />

        {/* Badge */}
        {itemCount > 0 && (
          <div className='absolute -top-2 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold'>
            {itemCount}
          </div>
        )}
      </div>
    </Link>
  );
}
