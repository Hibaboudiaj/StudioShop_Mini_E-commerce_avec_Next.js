import Link from "next/link";

const currentYear: number = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <div>
        <Link href="/">STUDIO.SHOP</Link>
        <p>{currentYear}</p>
      </div>
    </footer>
  );
}
export default Footer;
