import CartContainer from "@/app/_components/cart/cart-container";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <main className='w-3/4 m-auto py-10'>
      <h2 className='font-bold text-3xl'>Your cart</h2>
      <CartContainer />
      <Button className='fixed w-fit left-1/2 bottom-5 mx-auto mt-16'>
        Proceed to Checkout
      </Button>
    </main>
  );
}
