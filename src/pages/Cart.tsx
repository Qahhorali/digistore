import { useContext } from 'react';
import { CartContext } from '../context/CardContext'; // Ismni to'g'ri yozing
import { Link } from 'react-router-dom';

export default function Cart() {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { cartItems, removeFromCart } = cartContext;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Savat</h1>
      {cartItems.length === 0 ? (
        <p>Savat bo‘sh.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
              <div className="flex items-center gap-4">
                {item.image && (
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                )}
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {item.price.toLocaleString()} so‘m x {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                ❌ O‘chirish
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-lg font-semibold mb-2">Jami: {total.toLocaleString()} so‘m</p>
            <Link
              to="/checkout"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Buyurtma berish
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
