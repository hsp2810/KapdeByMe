import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CartWithBadge({ itemCount }: { itemCount: number }) {
  return (
    <Link href={"/cart"}>
      <div className='relative'>
        {/* Cart Icon */}
        <ShoppingCart className='h-6 w-6 text-gray-700' />

        {/* Badge */}
        {itemCount > 0 && (
          <div className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold'>
            {itemCount}
          </div>
        )}
      </div>
    </Link>
  );
}
