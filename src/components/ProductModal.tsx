import type { Product } from "../types/Product";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="bg-white rounded-lg p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
        >
          ×
        </button>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
        <h3 className="text-2xl font-semibold mt-4">{product.name}</h3>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-blue-600 font-bold text-xl mt-3">{product.price.toLocaleString()} so‘m</p>
      </div>
    </div>
  );
}
