import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CardContext"; // bu yerda to'g'ri nom bo'lishi kerak
import ProductModal from "../components/ProductModal";

const fakeProducts: Product[] = [
  { id: 1, name: "Samsung S21+", category: "Telefon", price: 12000000, description: "Yuqori darajajadagi sifat va siz uchun ishlaydigan smartfon.", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, name: "Apple Mac Book Pro", category: "Laptop", price: 24000000, description: "Qimmat lekin sifatli noutbuk", image: "https://media.istockphoto.com/id/2007965295/photo/top-view-of-macbook-air-notebook-laptop-computer-with-apple-logo-on-topside-macbook-pro-16-m1.jpg?s=612x612&w=0&k=20&c=KlkuTyh3NckXHEiLeJZtf8qFDdJCS0WUQCD0bEXbaKQ=" },
  { id: 3, name: "Lenovo Lunar Lake", category: "Laptop", price: 6500000, description: "Hamyonbob noutbuk", image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25604621/07_ThinkPad_X1_Carbon_13_Rear_facing_left.jpg?quality=90&strip=all" },
  { id: 4, name: "Iphone 15Pro Max", category: "Telefon", price: 16000000, description: "ishonchli va sifatli telefon", image: "https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_Yoast-image-packshot-review.jpg" },
  { id: 5, name: "HP Victus", category: "Laptop", price: 9500000, description: "Gaming hamda office uchun noutbuk", image: "https://th-files.apjonlinecdn.com/landingpages/npi/hp-victus-gaming-laptop/intel/images/section-04-img-1.jpg" },
  { id: 6, name: "Note 10 Pro", category: "Telefon", price: 6500000, description: "Hamyonbob, batareya quvvati yaxshi va ishonchli telefon", image: "https://www.dxomark.com/wp-content/uploads/medias/post-79073/Xiaomi-Redmi-Note-10-Pro-_Yoast-image-packshot-review.jpg" },
];

export default function Products() {
  const { user, logout } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">DigiStore</h1>
          <div className="space-x-6 text-gray-700 font-normal flex items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Bosh sahifa</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">Biz haqimizda</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600">Maxsulotlar</Link>

            {user ? (
              <>
                <span className="text-blue-700 font-semibold">Salom, {typeof user === "string" ? user : user.name}</span>
                <span
                  onClick={handleLogout}
                  className="text-red-600 cursor-pointer hover:text-red-800"
                >
                  Chiqish
                </span>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-500">Kirish</Link>
                <Link to="/register" className="hover:text-blue-500">Ro‘yxatdan o‘tish</Link>
              </>
            )}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Mahsulotlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-blue-600 font-bold mt-1">{product.price.toLocaleString()} so‘m</p>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600 transition"
                  >
                    Batafsil
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700 transition"
                  >
                    Savatga qo'shish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
