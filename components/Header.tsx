import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">STUDIO.SHOP</Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Catalogue</Link>

        <Link href="/cart" className={styles.cart}>
          Panier
          <span className={styles.count}>0</span>
        </Link>
      </nav>
    </header>
  );
}
export default Header;
