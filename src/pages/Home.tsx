import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-[30px] md:text-[40px] font-bold text-blue-700 mb-6">
          DigiStore — Raqamli Hayotingiz Boshlanishi
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Biz sizga eng so‘nggi telefonlar, noutbuklar va boshqa texnologik mahsulotlarni kafolat bilan taqdim etamiz.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
            Mahsulotlarni ko‘rish
          </Link>
          <Link to="/about" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-50 transition">
            Biz haqimizda
          </Link>
        </div>
      </div>
    </div>
  );
}
