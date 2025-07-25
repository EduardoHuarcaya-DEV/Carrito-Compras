import type { Product } from "../types/product-type";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="flex-shrink-0 relative">
        <img
          className="w-full h-64 object-cover rounded-t-lg bg-gray-200"
          src={product.img || "/img/no-image.webp"}
          alt={`Image of ${product.name}`}
        />
        <div className="absolute bottom-4 right-4 rounded-full bg-gray-400 p-2 hover:bg-green-600 transition-colors duration-200">
          <ShoppingCart className="w-6 h-6 text-white transition-colors duration-200" />
        </div>
      </div>
      <div className="flex flex-col flex-grow gap-3 p-4 bg-stone-50 rounded-b-lg">
        <h3 className="font-bold text-lg line-clamp-2">{product.name}</h3>
        <p className="font-bold text-green-600 text-xl">${product.price}</p>
        <p className="text-gray-500 text-sm flex-grow line-clamp-3">
          {product.descripcion}
        </p>
      </div>
    </div>
  );
}
