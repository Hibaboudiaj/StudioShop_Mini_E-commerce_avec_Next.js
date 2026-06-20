import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "../types/Product";
interface productProps {
  product: Product;
}
export default function ProductCard({ product }: productProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-sm border border-white/5 bg-[#111111] p-6 transition-all hover:border-white/20">
      <div>
        <div className="relative mb-4 aspect-square overflow-hidden rounded-sm bg-gradient-to-br from-zinc-900 to-black">
          <Link href="" className="block h-full w-full">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-900">
              <Image
                src={product.image} 
                alt="Picture of the author"
                width={500}
                height={500}
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
          <button
            title="Add To Cart"
            className="cursor-pointer rounded-sm border border-white/10 p-2 text-white/60 transition-all hover:border-white hover:bg-white/5 hover:text-white"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
          </button>

          <Link
            href="/products/macbook-air"
            className="rounded-sm border border-white/20 px-3 py-2 text-center text-[10px] font-extrabold uppercase tracking-wider transition-all hover:border-white hover:bg-white hover:text-black"
          >
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
}
