import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-accent-gray min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-black leading-tight">
            Luxury Defined.
          </h1>
          <p className="text-xl md:text-2xl text-text-gray font-medium max-w-lg mx-auto lg:mx-0 mb-10">
            Premium home appliances designed for durability and elegance. 
            Experience the future of modern living.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              href="/products" 
              className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Shop Collection
            </Link>
            <Link 
              href="#about" 
              className="px-8 py-3 text-black font-medium hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Product Image */}
        <div className="relative">
           {/* Decorative background blur */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/40 rounded-full blur-3xl -z-10" />
           
           {/* Product Placeholder */}
          <div className="relative aspect-square w-full max-w-md mx-auto bg-gray-100 rounded-[2.5rem] shadow-2xl flex items-center justify-center overflow-hidden border border-white/60">
            <Image 
              src="/products/O1CN01amOeEc25DqpLbTbZh_!!2216142987493-0-cib.jpg" 
              alt="Smart Refrigerator" 
              fill 
              className="object-cover object-center"
              priority
            />
            
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating Label */}
          <div className="absolute -bottom-6 -right-6 lg:right-0 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce delay-700">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">New Arrival</p>
            <p className="text-lg font-bold text-black">Smart Refrigerator</p>
            <p className="text-sm text-gray-600">K25,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
