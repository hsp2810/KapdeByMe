import CartContainer from "@/app/_components/cart/cart-container";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";

export default function CartPage() {
  return (
    <main className='w-3/4 m-auto py-10'>
      <h2 className='font-bold text-3xl'>Your cart</h2>
      <CartContainer />
      <Button className='fixed w-fit left-1/2 p-6 text-lg bottom-5 mx-auto mt-16 rounded-full'>
        Proceed to Checkout <CircleArrowRight />
      </Button>
    </main>
  );
}
