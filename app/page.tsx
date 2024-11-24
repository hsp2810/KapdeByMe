import Hero from "@/app/_components/hero";
import ProductCard from "@/app/_components/products/product-card";
import products from "@/data";
import ProductFilter from "./_components/products/product-filter";
import ProductsContainer from "./_components/products/products-container";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsContainer products={products} />
    </main>
  );
}
