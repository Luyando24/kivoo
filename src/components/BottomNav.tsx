"use client";

import Link from "next/link";
import { Home, Grid, User, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 pb-safe md:hidden">
      <div className="flex items-center justify-around h-16">
        <Link 
          href="/" 
          className={`flex flex-col items-center gap-1 ${isActive("/") ? "text-black" : "text-gray-400"}`}
        >
          <Home className="w-6 h-6" strokeWidth={isActive("/") ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        
        <Link 
          href="/products" 
          className={`flex flex-col items-center gap-1 ${isActive("/products") ? "text-black" : "text-gray-400"}`}
        >
          <Grid className="w-6 h-6" strokeWidth={isActive("/products") ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Products</span>
        </Link>
        
        <Link 
          href="/cart" 
          className={`flex flex-col items-center gap-1 ${isActive("/cart") ? "text-black" : "text-gray-400"}`}
        >
          <ShoppingBag className="w-6 h-6" strokeWidth={isActive("/cart") ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Cart</span>
        </Link>
        
        <Link 
          href="/account" 
          className={`flex flex-col items-center gap-1 ${isActive("/account") ? "text-black" : "text-gray-400"}`}
        >
          <User className="w-6 h-6" strokeWidth={isActive("/account") ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Account</span>
        </Link>
      </div>
    </div>
  );
}
