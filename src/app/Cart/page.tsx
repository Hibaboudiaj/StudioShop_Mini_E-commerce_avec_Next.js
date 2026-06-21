"use client";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import CartItem from "@/src/app/components/CartItem";
import { products } from "@/src/app/data/products";
import { useCart } from "../context/CartContext";

export default function Page() {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Left Side */}
      <div className="space-y-4 lg:col-span-8">
        <div className="overflow-hidden rounded-sm border border-white/5 bg-[#0A0A0A] p-6">
          <div className="divide-y divide-white/5">
            {cart.map((item) => (
              <CartItem key={item.id} product={item} quantity={item.quantity} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-1">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Continuer mes achats</span>
          </Link>

          <button className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors hover:text-red-400">
            Vider tout le panier
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-6 lg:col-span-4">
        <aside className="flex flex-col rounded-sm border border-white/10 bg-[#0A0A0A] p-8">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-base font-bold uppercase tracking-tight">
              Récapitulatif
            </h2>

            <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
              Studio Order
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between text-xs uppercase tracking-widest text-white/40">
              <span>Articles </span>
              <span className="font-mono">total DH</span>
            </div>

            <div className="flex justify-between text-xs uppercase tracking-widest text-white/40">
              <span>Livraison</span>

              <span className="rounded-sm border border-white/10 bg-white/5 px-2 py-0.5 italic">
                gratuit
              </span>
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex justify-between text-sm font-bold uppercase">
              <span>Total</span>

              <span className="font-mono">total DH</span>
            </div>
          </div>

          <button className="mt-6 rounded-sm border border-white bg-white py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-zinc-200">
            ajouter au panier
          </button>
        </aside>

        <div className="space-y-3 rounded-sm border border-white/5 bg-white/5 p-4">
          <div className="flex items-center space-x-3 text-white">
            <ShieldCheck className="h-4 w-4 text-white/80" />

            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
              Sécurité Certifiée
            </span>
          </div>

          <p className="text-[11px] italic leading-relaxed text-white/40">
            Chaque transaction est cryptée et sécurisée. Aucune donnée est
            collectée, garantissant votre anonymat absolu.
          </p>
        </div>
      </div>
    </div>
  );
}
