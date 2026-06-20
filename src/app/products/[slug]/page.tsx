import Image from "next/image";
import { ShoppingCart, Truck, ShieldCheck, RefreshCw } from "lucide-react";

export default function ProductDetails() {
  return (
    <div className="relative grid grid-cols-1 gap-12 overflow-hidden rounded-sm border border-white/5 bg-[#0A0A0A] p-6 md:p-10 lg:grid-cols-12">

      <div className="space-y-4 lg:col-span-6">
        <div className="rounded-sm border border-white/5 bg-black/45 p-2">
          <div className="relative h-[500px] overflow-hidden rounded-xl bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600&h=600"
              alt="MacBook Air M3"
              fill
              className="rounded-sm object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between space-y-8 lg:col-span-6">
        <div>
          <span className="rounded-sm border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-[#F0F0F0]">
            Ordinateurs
          </span>

          <h1 className="mt-4 text-3xl font-light uppercase tracking-tight text-white md:text-4xl">
            MacBook Air M3
          </h1>

          <div className="mt-4 flex items-baseline space-x-2">
            <span className="font-mono text-3xl tracking-tighter text-white">
              12 990
            </span>
            <span className="font-mono text-[11px] font-black tracking-widest text-white/40">
              DH
            </span>
          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="space-y-2">
            <h3 className="font-mono text-[10px] font-black uppercase tracking-widest text-white/40">
              Description
            </h3>

            <p className="text-sm leading-relaxed text-white/70">
              Le MacBook Air est super fin, ultra-léger et se glisse facilement
              dans sa sacoche. Doté de la puce M3 de pointe, il offre des
              performances fulgurantes et jusqu'à 18 heures d'autonomie pour
              tout faire, partout.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Features */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center space-x-2 rounded-sm border border-white/5 bg-white/5 p-3">
              <Truck className="h-4 w-4 flex-shrink-0 text-white/40" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                Livraison offerte
              </span>
            </div>

            <div className="flex items-center space-x-2 rounded-sm border border-white/5 bg-white/5 p-3">
              <ShieldCheck className="h-4 w-4 flex-shrink-0 text-white/40" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                Garantie 2 ans
              </span>
            </div>

            <div className="flex items-center space-x-2 rounded-sm border border-white/5 bg-white/5 p-3">
              <RefreshCw className="h-4 w-4 flex-shrink-0 text-white/40" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                Retours 30j
              </span>
            </div>
          </div>

          {/* Quantity + CTA */}
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center justify-between rounded-sm border border-white/10 bg-black/40 px-2 py-1.5 sm:justify-start">
              <span className="px-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/45">
                Quantité
              </span>

              <div className="flex items-center space-x-2">
                <button
                  disabled
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-white/5 text-white transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-30"
                >
                  -
                </button>

                <span className="w-8 text-center font-mono text-sm text-white">
                  1
                </span>

                <button className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-white/5 text-white transition-colors hover:bg-white/10">
                  +
                </button>
              </div>
            </div>

            <button className="flex flex-1 cursor-pointer items-center justify-center space-x-2 overflow-hidden rounded-sm bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-zinc-200">
              <ShoppingCart className="h-3.5 w-3.5" />
              <span>Ajouter au Panier</span>
            </button>
          </div>
        </div>
      </div>
    </div>    
  );
}
