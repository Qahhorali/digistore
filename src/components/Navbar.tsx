import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow p-4">
      <nav className="container flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">DigiStore</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Bosh sahifa</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">Biz haqimizda</Link>
          {user && <Link to="/products" className="text-gray-700 hover:text-blue-600">Maxsulotlar</Link>
          
            }
          
          {!user ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
            </>
          ) : (
            <>
              <span className="text-blue-700 font-semibold">Salom, {user}</span>
              <span onClick={handleLogout} className="text-red-600 cursor-pointer hover:text-red-800">
                Chiqish
              </span>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
