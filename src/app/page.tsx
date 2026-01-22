import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ALL_PRODUCTS } from "@/data/products";
import { Truck, ShieldCheck, RefreshCw, Armchair, Lamp, Briefcase, Sofa, Refrigerator } from "lucide-react";

const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 3);

const CATEGORIES = [
  { name: "Furniture", icon: Armchair, href: "/products?category=Furniture" },
  { name: "Appliances", icon: Refrigerator, href: "/products?category=Appliances" },
  { name: "Lighting", icon: Lamp, href: "/products?category=Lighting" },
  { name: "Office", icon: Briefcase, href: "/products?category=Office" },
  { name: "Decor", icon: Sofa, href: "/products?category=Decor" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-8">Browse by Category</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {CATEGORIES.map((cat) => (
              <Link 
                key={cat.name} 
                href={cat.href}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-2xl flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow snap-start border border-gray-100"
              >
                <cat.icon className="w-8 h-8 text-black" strokeWidth={1.5} />
                <span className="font-medium text-sm text-gray-900">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row justify-between items-end mb-12">
            <h2 className="text-4xl font-bold text-black tracking-tight">Featured.</h2>
            <Link href="/products" className="text-black font-medium hover:text-text-gray transition-colors text-sm sm:text-base">
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

      {/* Trust Indicators */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
            <p className="text-gray-500 text-sm">On all orders over K5,000 within Lusaka.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">2 Year Warranty</h3>
            <p className="text-gray-500 text-sm">Comprehensive coverage for your peace of mind.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
            <p className="text-gray-500 text-sm">30-day return policy for any unused items.</p>
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
