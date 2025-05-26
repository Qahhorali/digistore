import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormErrors {
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  password?: string;
}

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [trueMessage, setTrueMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(prev => ({
      ...prev,
      [e.target.name]: ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = 'Ismni kiriting';
    if (!form.surname.trim()) newErrors.surname = 'Familiyangizni kiriting';
    if (!form.username.trim()) newErrors.username = 'Username kiriting';
    if (!form.email.trim()) newErrors.email = 'Email kiriting';
    if (!form.password.trim()) newErrors.password = 'Parol kiriting';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const usersStr = localStorage.getItem('users');
    const users = usersStr ? JSON.parse(usersStr) : [];

    const userExists = users.find((user: { username: string }) => user.username === form.username);
    if (userExists) {
      setErrorMessage("Bu username oldin ro'yxatdan o'tgan");
      return;
    }

    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));

    setErrorMessage(null);
    setTrueMessage("Muvaffaqiyatli ro'yhatdan o'tdingiz");
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7ff] to-[#e1e9ff] flex items-center justify-center px-4">
      <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-2xl p-8 md:p-10 relative">
        {/* Chiqish ikonka tugmasi */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#607AFB] transition text-2xl font-bold"
          aria-label="Chiqish"
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold text-[#252525] text-center mb-2">Ro'yhatdan O'tish</h1>
        <p className="text-center text-gray-600 mb-6">Kerakli ma’lumotlarni to‘ldiring</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-medium text-[15px]">Ismingiz</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Ismingizni kiriting"
              className={`w-full h-[45px] border px-4 bg-[#F9F8FA] rounded-lg text-[14px] focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              value={form.name}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="font-medium text-[15px]">Familiyangiz</label>
            <input
              onChange={handleChange}
              type="text"
              name="surname"
              placeholder="Familiyangizni kiriting"
              className={`w-full h-[45px] border px-4 bg-[#F9F8FA] rounded-lg text-[14px] focus:outline-none ${errors.surname ? 'border-red-500' : 'border-gray-300'
                }`}
              value={form.surname}
            />
            {errors.surname && <p className="text-red-500 text-sm mt-1">{errors.surname}</p>}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="font-medium text-[15px]">Username</label>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Username kiriting"
                className={`w-full h-[45px] border px-4 bg-[#F9F8FA] rounded-lg text-[14px] focus:outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'
                  }`}
                value={form.username}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            <div className="flex-1">
              <label className="font-medium text-[15px]">Email</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Emailingizni kiriting"
                className={`w-full h-[45px] border px-4 bg-[#F9F8FA] rounded-lg text-[14px] focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                value={form.email}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="font-medium text-[15px]">Parol</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Parolingizni kiriting"
              className={`w-full h-[45px] border px-4 bg-[#F9F8FA] rounded-lg text-[14px] focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              value={form.password}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full h-[46px] bg-[#607AFB] text-white rounded-xl hover:bg-white hover:text-[#607AFB] hover:border hover:border-[#607AFB] transition-all duration-300"
          >
            Ro'yhatdan o'tish
          </button>

          {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
          {trueMessage && <p className="text-green-600 text-center mt-2">{trueMessage}</p>}
        </form>
        <div className="text-center mt-6 text-sm text-gray-600">
          Allaqachon hisobingiz bormi?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#607AFB] font-medium hover:underline transition"
          >
            Tizimga kirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
