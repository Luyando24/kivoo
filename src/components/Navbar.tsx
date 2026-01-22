"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-black tracking-widest italic">
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
            <button 
              className="md:hidden hover:text-black transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold">Menu</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-lg font-medium text-gray-800">
              <Link 
                href="/" 
                className="hover:text-gray-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="hover:text-gray-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="#about" 
                className="hover:text-gray-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>

            <div className="mt-auto pt-8 border-t">
              <p className="text-sm text-gray-500 mb-4">Contact us</p>
              <p className="font-medium">+260 97 000 0000</p>
              <p className="font-medium">support@kivoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
