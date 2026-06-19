import { ShoppingBag } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">STUDIO.SHOP</Link>

        <nav>
          <Link href="/Category">Category</Link>

          <Link href="/Cart">
            <ShoppingBag strokeWidth={1} />
            Panier
          </Link>
        </nav>
        
      </div>
    </header>
  );
}
export default Header;
