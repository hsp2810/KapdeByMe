import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface ProductDiscountBadgeProps {
  original: number;
  discounted: number;
}

export default function ProductDiscountBadge({
  original,
  discounted,
}: ProductDiscountBadgeProps) {
  const calculateDiscountPercentage = (): string => {
    const discount = Math.round(((original - discounted) / original) * 100);
    return `${discount}% off`;
  };

  return (
    <Badge
      className={cn(buttonVariants({ variant: "common" }), "rounded-full")}
    >
      {calculateDiscountPercentage()}
    </Badge>
  );
}
