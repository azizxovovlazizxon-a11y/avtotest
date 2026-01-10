export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Sayt haqida
        </h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Avtotest.uz nima?
            </h2>
            <p className="leading-relaxed">
              Avtotest.uz - bu O'zbekiston Respublikasida haydovchilik guvohnomasi olish uchun 
              nazariy bilimlarni tekshirish imtihoniga tayyorgarlik ko'rish platformasidir. 
              Biz foydalanuvchilarga haqiqiy imtihon sharoitida mashq qilish va o'z bilimlarini 
              sinab ko'rish imkoniyatini taqdim etamiz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Bizning vazifamiz
            </h2>
            <p className="leading-relaxed">
              Har bir foydalanuvchiga haydovchilik imtihoniga sifatli va qulay tayyorgarlik 
              ko'rish imkoniyatini berish. Biz yo'l harakati qoidalarini o'rganishni osonlashtirish 
              va yo'l xavfsizligini oshirishga hissa qo'shamiz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Xususiyatlar
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>1110 ta haqiqiy savol</strong> - Barcha savollar rasmiy imtihondagi savollarga asoslangan</li>
              <li><strong>111 ta bilet</strong> - Har bir biletda 10 ta savol</li>
              <li><strong>Turli rejimlar:</strong>
                <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                  <li>Standart imtihon - vaqt cheklovsiz mashq qilish</li>
                  <li>Real imtihon - haqiqiy imtihon sharoitida (10 daqiqa)</li>
                  <li>Biletlar bo'yicha - har bir biletni alohida ishlash</li>
                </ul>
              </li>
              <li><strong>Statistika</strong> - O'z natijalaringizni kuzatib boring</li>
              <li><strong>Telegram integratsiyasi</strong> - Oson va xavfsiz kirish</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Test savollari
            </h2>
            <p className="leading-relaxed">
              Saytdagi barcha test savollari yo'l harakati qoidalari bo'yicha rasmiy ma'lumotlarga 
              asoslanadi. Savollar muntazam ravishda yangilanib turadi va haqiqiy imtihon 
              talablariga mos keladi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Bepul va Pro versiya
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">Bepul versiya:</h3>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Barcha savollarga kirish</li>
                  <li>Standart imtihon rejimi</li>
                  <li>Asosiy statistika</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Pro versiya:</h3>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Reklamasiz foydalanish</li>
                  <li>Real imtihon rejimi</li>
                  <li>Batafsil statistika va tahlil</li>
                  <li>Barcha biletlarga cheksiz kirish</li>
                  <li>Offline rejimda ishlash</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Bog'lanish
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="leading-relaxed mb-2">
                <strong>Telegram bot:</strong> @yol_qoidasi_uz_bot
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Veb-sayt:</strong> avtotest-pearl.vercel.app
              </p>
              <p className="text-sm text-gray-600 mt-3">
                Savollar, takliflar yoki muammolar bo'lsa, Telegram bot orqali bog'laning. 
                Biz har doim yordam berishga tayyormiz!
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Muvaffaqiyat tilaymiz!
            </h2>
            <p className="leading-relaxed">
              Biz sizning haydovchilik imtihonida muvaffaqiyat qozonishingizga umid qilamiz. 
              Muntazam mashq qiling va yo'l harakati qoidalarini yaxshi o'rganing. 
              Xavfsiz haydash - bu barchaning mas'uliyati! 🚗
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              © 2026 Avtotest.uz - Barcha huquqlar himoyalangan
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
