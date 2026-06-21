import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Product } from "../types/Product";
type cartProp = {
  product: Product;
  quantity: number;
};
export default function CartItem({ product, quantity }: cartProp) {
  console.log("cart item", product);
  console.log("quantity item", quantity);
  return (
    <div className="flex flex-col items-stretch justify-between gap-6 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-center">
      <div className="flex items-center space-x-4">
        <div className="h-16 w-16 flex-shrink-0 rounded-sm border border-white/5 bg-black/45 p-1">
          <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-zinc-900">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-sm object-cover"
            />
          </div>
        </div>

        <div>
          <Link
            href={`/products/${product.slug}`}
            className="line-clamp-1 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-white/80"
          >
            {product.name}
          </Link>

          <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-white/40">
            MODÈLE UNIQUE
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-8 sm:justify-end">
        <div className="flex items-center gap-3">
          <button className="flex h-6 w-6 items-center justify-center border border-white/10 bg-white/5 text-xs text-white hover:bg-white/10">
            -
          </button>

          <span className="font-mono text-xs text-white">{quantity}</span>

          <button className="flex h-6 w-6 items-center justify-center border border-white/10 bg-white/5 text-xs text-white hover:bg-white/10">
            +
          </button>
        </div>

        <div className="min-w-[100px] text-right">
          <span className="block font-mono text-[9px] uppercase tracking-wider text-white/40">
            TOTAL ITEM
          </span>

          <span className="font-mono text-xs text-white">
            {(product.price * quantity).toLocaleString()} DH
          </span>
        </div>

        <button className="rounded-sm border border-white/10 p-2 text-white/40 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400">
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
