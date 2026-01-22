import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

export function ProductCard({ id, name, price, category, image }: ProductProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-4xl select-none">
           {/* Placeholder for image if not present */}
           {!image && name[0]}
        </div>
        {/* In a real app, use next/image here */}
        <Image src={image} alt={name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black">
            <Link href={`/products/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-text-gray">{category}</p>
        </div>
        <p className="text-lg font-medium text-black">{price}</p>
      </div>
    </div>
  );
}
