import "../App.css"
export default function Checkout() {
  return (
    <div className="container p-6 bg-white rounded shadow mt-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Buyurtma berish</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Ismingiz</label>
          <input type="text" required className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Telefon raqam</label>
          <input type="tel" required className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Yetkazib berish manzili</label>
          <textarea rows={3} required className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Buyurtmani yuborish
        </button>
      </form>
    </div>
  );
}
