import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "../types/Product";
import AddToCart from "./AddToCart";
import AddToCartBtn from "./AddToCartBtn";
interface productProps {
  product: Product;
}
export default function ProductCard({ product }: productProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-sm border border-white/5 bg-[#111111] p-6 transition-all hover:border-white/20">
      <div>
        <div className="relative mb-4 aspect-square overflow-hidden rounded-sm bg-gradient-to-br from-zinc-900 to-black">
          <Link href="" className="block h-full w-full">
            <div className="relative mb-4 aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt="Picture of the author"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          <div className="absolute bottom-2 left-2 rounded-sm border border-white/5 bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-white/70 backdrop-blur-md">
            {product.category}
          </div>
        </div>

        <div className="mb-4">
          <Link href="/products/macbook-air">
            <h3 className="line-clamp-1 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-white/80">
              {product.name}
            </h3>
          </Link>

          <p className="mt-1 min-h-[32px] line-clamp-2 text-xs leading-relaxed text-white/40">
            {product.description}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
        <span className="font-mono text-sm tracking-tighter text-[#F0F0F0]">
          {product.price}
        </span>

        <div className="flex items-center space-x-2">
          <AddToCartBtn product={product} />

          <Link
            href={`/products/${product.slug}`}
            className="rounded-sm border border-white/20 px-3 py-2 text-center text-[10px] font-extrabold uppercase tracking-wider transition-all hover:border-white hover:bg-white hover:text-black"
          >
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
}
