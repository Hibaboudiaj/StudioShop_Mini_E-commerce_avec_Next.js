import Image from "next/image";
import { products } from "@/data/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

function ProductPage({ params }: ProductPageProps) {
  const product = products.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main>
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
      />

      <h1>{product.name}</h1>

      <p>{product.price} DH</p>

      <p>{product.description}</p>

      <p>{product.category}</p>

      <button>Ajouter au panier</button>
    </main>
  );
}

export default ProductPage;