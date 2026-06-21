"use client";

import { useCart } from "@/src/app/context/CartContext";
import { Product } from "@/src/app/types/Product";
import { ShoppingCart } from "lucide-react";

interface ProductProps {
  product: Product;
}

export default function AddToCartBtn({ product }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product, 1)}
      title="Add To Cart"
      className="cursor-pointer rounded-sm border border-white/10 p-2 text-white/60 transition-all hover:border-white hover:bg-white/5 hover:text-white"
    >
      <ShoppingCart className="h-3.5 w-3.5" />
    </button>
  );
}
