import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7ff] to-[#e1e9ff]">
      <Navbar />

      <div className="container mx-auto p-8 max-w-4xl space-y-12">
        {/* Biz haqimizda */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Biz haqimizda</h2>
          <p className="text-gray-700 leading-relaxed">
            Men — bu do‘konning asoschisiman. Sizlarga sifatli va ishonchli mahsulotlarni taqdim etaman.
            Har bir mahsulot sinovdan o‘tgan va kafolatlangan.
          </p>
        </section>

        {/* Qadriyatlarimiz */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Qadriyatlarimiz</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Ishonchlilik — har bir mahsulot tekshirilgan va sinovdan o‘tgan</li>
            <li>Innovatsiya — yangi texnologiyalarga asoslangan yechimlar</li>
            <li>Mijozlarga sadoqat — har bir mijoz biz uchun muhim</li>
            <li>Ochiqlik — narx va sifat bo‘yicha to‘liq shaffoflik</li>
          </ul>
        </section>

        {/* Nima uchun bizni tanlashadi */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Nima uchun bizni tanlashadi?</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Tez yetkazib berish xizmati</li>
            <li>Mahsulotlar uchun 6 oy kafolat</li>
            <li>24/7 texnik yordam</li>
            <li>Eng yaxshi narxlar bozorda</li>
          </ul>
        </section>

        {/* Mijozlarimiz nima deydi */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Mijozlarimiz nima deydi?</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">"Men bu yerda bir necha marta xarid qilganman va har safar xursandman. Sifat va xizmat zo‘r!"</p>
              <p className="text-sm font-semibold text-right mt-2 text-blue-700">– Akbar, Toshkent</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-700 italic">"Qisqa muddatda kompyuterimni topshirishdi, servisdan juda mamnunman."</p>
              <p className="text-sm font-semibold text-right mt-2 text-blue-700">– Dilnoza, Buxoro</p>
            </div>
          </div>
        </section>

        {/* Hamkorlar */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Hamkorlarimiz</h3>
          <div className="flex gap-6 flex-wrap items-center">
            <div className="h-12 flex items-center px-4 bg-gray-100 rounded shadow text-blue-700 font-extrabold text-lg">
              HP
            </div>
            <div className="h-12 flex items-center px-4 bg-gray-100 rounded shadow text-gray-900 font-semibold text-lg tracking-widest">
              DELL
            </div>
            <div className="h-12 flex items-center px-4 bg-gray-100 rounded shadow text-red-600 font-bold text-lg italic">
              Lenovo
            </div>
            <div className="h-12 flex items-center px-4 bg-gray-100 rounded shadow text-purple-700 font-semibold text-lg">
              ASUS
            </div>
          </div>
        </section>


        {/* Qiziqarli faktlar */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Qiziqarli faktlar</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-100 p-4 rounded">
              <p className="text-2xl font-bold text-blue-700">300+</p>
              <p className="text-sm text-gray-600">Mamnun mijozlar</p>
            </div>
            <div className="bg-blue-100 p-4 rounded">
              <p className="text-2xl font-bold text-blue-700">150+</p>
              <p className="text-sm text-gray-600">Sotilgan kompyuterlar</p>
            </div>
            <div className="bg-blue-100 p-4 rounded">
              <p className="text-2xl font-bold text-blue-700">10+</p>
              <p className="text-sm text-gray-600">Hamkor kompaniyalar</p>
            </div>
            <div className="bg-blue-100 p-4 rounded">
              <p className="text-2xl font-bold text-blue-700">24/7</p>
              <p className="text-sm text-gray-600">Yordam xizmati</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
