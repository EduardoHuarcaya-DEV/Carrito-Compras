import type { Product } from "../types/product-type";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export default function ProductList({ product }: ProductCardProps) {
  return (
    <div className="flex justify-between rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-2">
      <div className="flex-shrink-0 relative w-1/4">
        <img
          className="w-full h-32 object-cover rounded-t-lg bg-gray-200"
          src={product.img || "/img/no-image.webp"}
          alt={`Image of ${product.name}`}
        />
        <div className="absolute bottom-4 right-4 rounded-full bg-gray-400 p-2 hover:bg-green-600 transition-colors duration-200">
          <ShoppingCart className="w-6 h-6 text-white transition-colors duration-200" />
        </div>
      </div>
      <div className="flex flex-col flex-grow w-3/4 gap-3 p-4 bg-stone-50 rounded-b-lg">
        <h3 className="font-bold text-lg line-clamp-2">{product.name}</h3>
        <p className="font-bold text-green-600 text-xl">${product.price}</p>
        <p className="text-gray-500 text-sm flex-grow line-clamp-3">
          {product.descripcion}
        </p>
      </div>
    </div>
  );
}
