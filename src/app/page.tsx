import { products } from "@/src/app/data/products";

import ProductCard from "@/src/app/components/ProductCard";

function HomePage() {
  return (
    <main>
      <h1>Minimal Tech Catalogue</h1>

      <p>Discover our premium collection of technology products.</p>

      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </main>
  );
}

export default HomePage;
