export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  for: "Men" | "Women" | "Kids" | "Unisex";
  category:
    | "T-Shirts"
    | "Formals"
    | "Casuals"
    | "Pants"
    | "Hoodies"
    | "Jeans"
    | "Dress"
    | "Jackets"
    | "Cardigans"
    | "Shorts";
  discountedPrice: number;
};

const products: Product[] = [
  {
    id: 1,
    title: "Men's Cotton T-Shirt",
    description:
      "Comfortable and breathable cotton T-shirt, perfect for casual wear.",
    price: 19.99,
    for: "Men",
    category: "T-Shirts",
    discountedPrice: 15.99,
  },
  {
    id: 2,
    title: "Women's Summer Dress",
    description: "Lightweight floral dress for a breezy summer look.",
    price: 34.99,
    for: "Women",
    category: "Dress",
    discountedPrice: 30.99,
  },
  {
    id: 3,
    title: "Men's Denim Jacket",
    description: "Classic denim jacket with a modern fit.",
    price: 69.99,
    for: "Men",
    category: "Jackets",
    discountedPrice: 65.99,
  },
  {
    id: 4,
    title: "Women's Yoga Pants",
    description: "High-waist stretchy yoga pants for maximum comfort.",
    price: 29.99,
    for: "Women",
    category: "Pants",
    discountedPrice: 25.99,
  },
  {
    id: 5,
    title: "Unisex Hoodie",
    description:
      "Cozy hoodie made from organic cotton, available in multiple colors.",
    price: 49.99,
    for: "Unisex",
    category: "Hoodies",
    discountedPrice: 45.99,
  },
  {
    id: 6,
    title: "Men's Formal Shirt",
    description: "Slim-fit shirt for business and formal occasions.",
    price: 39.99,
    for: "Men",
    category: "Formals",
    discountedPrice: 35.99,
  },
  {
    id: 7,
    title: "Women's Wool Cardigan",
    description: "Warm wool cardigan with a button-down design.",
    price: 59.99,
    for: "Women",
    category: "Cardigans",
    discountedPrice: 55.99,
  },
  {
    id: 8,
    title: "Kids' Graphic Tee",
    description: "Fun and colorful T-shirt with playful designs for kids.",
    price: 14.99,
    for: "Kids",
    category: "T-Shirts",
    discountedPrice: 10.99,
  },
  {
    id: 9,
    title: "Men's Running Shorts",
    description: "Lightweight and breathable shorts for running or workouts.",
    price: 24.99,
    for: "Men",
    category: "Shorts",
    discountedPrice: 20.99,
  },
  {
    id: 10,
    title: "Women's Winter Coat",
    description: "Stylish and warm winter coat with a fur-lined hood.",
    price: 119.99,
    for: "Women",
    category: "Jackets",
    discountedPrice: 109.99,
  },
];

export default products;

export const categories = [
  "T-Shirts",
  "Formals",
  "Casuals",
  "Pants",
  "Hoodies",
  "Jeans",
  "Dress",
  "Jackets",
  "Cardigans",
  "Shorts",
];

export const productsFor = ["Men", "Women", "Kids", "Unisex"];
