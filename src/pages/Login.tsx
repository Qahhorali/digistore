import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface FormErrors {
  username?: string;
  password?: string;
}

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [accessLogin, setAccessLogin] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    let hasError = false;

    if (!form.username.trim()) {
      newErrors.username = "Username kiriting";
      hasError = true;
    }
    if (!form.password.trim()) {
      newErrors.password = "Parol kiriting";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    const usersStr = localStorage.getItem("users");
    const users = usersStr ? JSON.parse(usersStr) : [];

    const user = users.find(
      (u: { username: string; password: string }) =>
        u.username === form.username && u.password === form.password
    );

    if (!user) {
      setError("Username yoki parol noto'g'ri");
      return;
    }

    setError(null);
    setAccessLogin("Tizimga muvaffaqiyatli kirdingiz");

    login(user.username);

    setTimeout(() => {
      navigate("/products");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7ff] to-[#e1e9ff] flex items-center justify-center px-4">
      <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-2xl p-8 md:p-10 relative">
        {/* Chiqish ikonka tugmasi */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#607AFB] transition text-2xl font-bold"
          aria-label="Chiqish"
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold text-[#252525] text-center mb-2">
          Xush Kelibsiz!
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Login va parolingizni kiriting, o‘z kabinetingizga kiring.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-medium text-[15px]">Login</label>
            <input
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="Loginingizni kiriting"
              className={`w-full h-[45px] border px-4 bg-[#F9F8FA] rounded-lg text-[14px] focus:outline-none ${errors.username ? "border-red-500" : "border-gray-300"
                }`}
              value={form.username}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="font-medium text-[15px]">Parol</label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Parolingizni kiriting"
              className={`w-full h-[45px] border px-4 bg-[#F9F8FA] rounded-lg text-[14px] focus:outline-none ${errors.password ? "border-red-500" : "border-gray-300"
                }`}
              value={form.password}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-[46px] bg-[#607AFB] text-white rounded-xl hover:bg-white hover:text-[#607AFB] hover:border hover:border-[#607AFB] transition-all duration-300"
          >
            Kirish
          </button>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          {accessLogin && (
            <p className="text-green-600 text-center mt-2">{accessLogin}</p>
          )}
        </form>
        <div className="text-center mt-6 text-sm text-gray-600">
          Hisobingiz yo‘qmi?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-[#607AFB] font-medium hover:underline transition"
          >
            Ro‘yxatdan o‘tish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
