import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            KIVOO
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/products" className="hover:text-black transition-colors">Products</Link>
            <Link href="#about" className="hover:text-black transition-colors">About</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-gray-600">
          <button className="hover:text-black transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-black transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="md:hidden hover:text-black transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
