import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">DigiStore</h2>
          <p className="text-gray-400">
            Eng ishonchli va zamonaviy texnologik mahsulotlar do‘koni.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Navigatsiya</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white">Bosh sahifa</Link></li>
            <li><Link to="/about" className="hover:text-white">Biz haqimizda</Link></li>
            <li><Link to="/products" className="hover:text-white">Mahsulotlar</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Ijtimoiy tarmoqlar</h3>
          <div className="flex space-x-4 text-gray-300 text-xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white"><FaInstagram /></a>
            <a href="https://t.me" target="_blank" className="hover:text-white"><FaTelegramPlane /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyStore. Created by Ravshanjonov Qahhorali.
      </div>
    </footer>
  );
}
