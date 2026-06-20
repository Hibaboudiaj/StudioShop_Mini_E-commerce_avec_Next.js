import styles from "./ProductCard.module.css"; 
import { Product } from "../types/Product";
import Image from "next/image";
import Link from "next/link";

//interface props
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Image src={product.image} alt={product.name} width={300} height={300} />

      <h3>{product.name}</h3>

      <p>{product.price} DH</p>

      <Link href={`/products/${product.slug}`}>Display Details</Link>
    </div>
  );
}

export default ProductCard;
