// components/ProductCard.tsx
import type { Product } from "../types/Product";

export default function ProductCard({ product, onClick }: { product: Product, onClick: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer bg-white p-4 rounded-xl shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-2" />
      <h4 className="text-lg font-semibold">{product.name}</h4>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
}
