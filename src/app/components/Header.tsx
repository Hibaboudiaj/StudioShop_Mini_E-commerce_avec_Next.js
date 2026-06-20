import "@/src/app/globals.css";
import Link from "next/link";
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center space-x-2 text-xl font-black uppercase tracking-tighter text-white"
        >
          <span className="font-sans antialiased">Studio.Shop</span>
        </Link>

        <nav className="flex items-center space-x-8">
          <Link
            href="/products"
            className="relative border-b border-white py-1 text-sm font-medium tracking-wide text-white transition-colors"
          >
            <span>Catalogue</span>
          </Link>

          <Link href="/cart" className="group">
            <div className="relative flex cursor-pointer items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-white transition-all hover:border-white/20 hover:bg-white/10">
              <span className="text-xs font-bold uppercase tracking-wider">
                Panier
              </span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
