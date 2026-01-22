import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ALL_PRODUCTS } from "@/data/products";

const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold text-black tracking-tight">Featured.</h2>
            <Link href="/products" className="text-black font-medium hover:text-text-gray transition-colors">
              View all &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Beautifully Durable.</h2>
          <p className="text-xl text-gray-400 mb-8">
            Sophisticated design meets industrial-grade engineering. 
            We build our appliances to perform flawlessly, ensuring luxury is a lasting experience in your home.
          </p>
          <Link 
            href="/products" 
            className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            Explore the Range
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
