import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { ALL_PRODUCTS } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-black mb-6">All Products.</h1>
          <p className="text-xl text-text-gray max-w-2xl">
            Explore our complete collection of high-quality, durable home and kitchen essentials.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {ALL_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
