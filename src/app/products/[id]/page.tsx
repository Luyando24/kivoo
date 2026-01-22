import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ALL_PRODUCTS } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <Link href="/products" className="text-gray-500 hover:text-black mb-8 inline-block">
          &larr; Back to Products
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden">
             <Image 
               src={product.image} 
               alt={product.name} 
               fill 
               className="object-cover object-center"
               priority
             />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-4">{product.name}</h1>
            <p className="text-2xl font-medium text-black mb-6">{product.price}</p>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>{product.description}</p>
            </div>
            <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors w-full md:w-auto">
              Add to Cart
            </button>
            <div className="mt-8 border-t pt-8">
               <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Category</p>
               <p className="font-medium text-black">{product.category}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
