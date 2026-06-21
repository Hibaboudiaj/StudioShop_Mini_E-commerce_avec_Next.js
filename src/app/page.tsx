import { products } from "@/src/app/data/products";

import ProductCard from "@/src/app/components/ProductCard";

function HomePage() {
  return (
    <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-3 text-white">
        Minimal Tech Catalogue
      </h1>

      <p className="mb-6 text-white/40 text-sm max-w-md italic font-normal leading-relaxed">
        Une sélection rigoureuse d'outils numériques d'exception alliant
        performance brute, ingénierie de précision et esthétique sobre.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
