"use client";

import { Store } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartWithBadge from "@/app/_components/cart/cart-with-badge";
import useCart from "../useCart";

export default function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const { totalProducts } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isScrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0 && isScrolled) {
        setScrolled(false);
      }
    };

    if (window.scrollY > 0) {
      setScrolled(true);
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <main
      className={`flex justify-around bg-zinc-300 rounded-lg text-zinc-800 py-5 transition-all duration-300 ${
        isScrolled
          ? "fixed w-full z-[999] shadow-lg bg-opacity-90"
          : "shadow-none bg-opacity-100"
      }`}
    >
      <Link
        href={"/"}
        className='text-xl font-bold uppercase flex items-center gap-1'
      >
        <Store /> <span className='hidden lg:block'>Harshit Merchandise</span>
      </Link>

      <ul className='flex items-center'>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
      </ul>

      <CartWithBadge itemCount={totalProducts} />
    </main>
  );
}
