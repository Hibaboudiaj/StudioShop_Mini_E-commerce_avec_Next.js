import { products } from "@/src/app/data/products";

import ProductCard from "@/src/app/components/ProductCard";

function HomePage() {
  return (
    <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-12">
      <h1>Minimal Tech Catalogue</h1>

      <p>Discover our premium collection of technology products.</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
