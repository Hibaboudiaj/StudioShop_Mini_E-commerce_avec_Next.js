"use client";

import { useState } from "react";
import { useCart } from "@/src/app/context/CartContext";
import { Product } from "@/src/app/types/Product";
import { ShoppingCart } from "lucide-react";

interface ProductProps {
  product: Product;
}

export default function AddToCart({ product }: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product, quantity)}
      className="flex flex-1 cursor-pointer items-center justify-center space-x-2 overflow-hidden rounded-sm bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-zinc-200"
    >
      <ShoppingCart className="h-3.5 w-3.5" />
      <span>Ajouter au Panier</span>
    </button>
  );
}
