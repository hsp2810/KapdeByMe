"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { categories, Product, productsFor } from "@/data";
import { Check, Filter, X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ProductFilterProps {
  products: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
}

export default function ProductFilter({
  products,
  setFilteredProducts,
}: ProductFilterProps) {
  const [open, setOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFor, setSelectedFor] = useState<string[]>([]);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategories((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((filter) => filter !== category)
        : [...prevFilters, category]
    );
  };

  const handleForFilter = (filterFor: string) => {
    setSelectedFor((prevFilters) =>
      prevFilters.includes(filterFor)
        ? prevFilters.filter((filter) => filter !== filterFor)
        : [...prevFilters, filterFor]
    );
  };

  useEffect(() => {
    if (selectedCategories.length === 0 && selectedFor.length === 0) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const forMatch =
        selectedFor.length === 0 || selectedFor.includes(product.for);

      return categoryMatch && forMatch;
    });

    setFilteredProducts(filtered);
  }, [selectedCategories, selectedFor, products]);

  return (
    <div className='flex gap-5'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className='flex items-center gap-1'>
          <Filter className='h-4 w-4' />
          Filter
        </PopoverTrigger>

        <PopoverContent className='w-96'>
          <ul className='flex flex-wrap gap-2'>
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategories.includes(category) ? "common" : "outline"
                }
                className='rounded-full'
                onClick={() => handleCategoryFilter(category)}
              >
                {category}{" "}
                {selectedCategories.includes(category) && (
                  <Check className='h-4 w-4' />
                )}
              </Button>
            ))}
          </ul>

          <Separator className='my-5' />

          <ul className='flex flex-wrap gap-2'>
            {productsFor.map((productFor) => (
              <Button
                key={productFor}
                variant={
                  selectedFor.includes(productFor) ? "common" : "outline"
                }
                className='rounded-full'
                onClick={() => handleForFilter(productFor)}
              >
                {productFor}{" "}
                {selectedFor.includes(productFor) && (
                  <Check className='h-4 w-4' />
                )}
              </Button>
            ))}
          </ul>
        </PopoverContent>
      </Popover>

      {(selectedCategories.length > 0 || selectedFor.length > 0) && (
        <Button
          className='rounded-full'
          variant={"common"}
          onClick={() => {
            setSelectedCategories([]);
            setSelectedFor([]);
          }}
        >
          Remove all <X />
        </Button>
      )}
    </div>
  );
}
