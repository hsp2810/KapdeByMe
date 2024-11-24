import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className='relative h-[400px] flex items-center justify-center'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-10'
        style={{ backgroundImage: `url('/bg.jpg')` }}
      ></div>

      <div className='relative z-50 mx-10 lg:mx-0 space-y-5 text-center text-black'>
        <h1 className='font-extrabold text-5xl lg:text-6xl'>
          60% off on the launch
        </h1>
        <p className='text-sm'>Explore the world of amazing possibilities.</p>
        <Link
          href={"/products"}
          className={cn(buttonVariants({ variant: "common" }), "rounded-full")}
        >
          <Shirt className='h-4 w-4' />
          Show deals
        </Link>
      </div>
    </section>
  );
}
