import { ShoppingBag } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">STUDIO.SHOP</Link>

        <nav>
          <Link href="/">Catalogue</Link>

          <Link href="/cart">
            <ShoppingBag />
            Panier
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
