import { Settings as SettingsIcon, Save } from 'lucide-react'

export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Sozlamalar</h1>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h2 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <SettingsIcon size={20} />
          Imtihon sozlamalari
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Standart imtihon savollari soni
            </label>
            <input
              type="number"
              defaultValue={20}
              min={5}
              max={50}
              className="w-full max-w-xs px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <p className="text-xs text-slate-500 mt-1">
              Standart imtihonda nechta savol berilishi
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Real imtihon vaqti (daqiqa)
            </label>
            <input
              type="number"
              defaultValue={20}
              min={5}
              max={60}
              className="w-full max-w-xs px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <p className="text-xs text-slate-500 mt-1">
              Real imtihon uchun ajratilgan vaqt
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              O'tish bali (%)
            </label>
            <input
              type="number"
              defaultValue={72}
              min={50}
              max={100}
              className="w-full max-w-xs px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <p className="text-xs text-slate-500 mt-1">
              Imtihondan o'tish uchun minimum foiz
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Biletdagi savollar soni
            </label>
            <input
              type="number"
              defaultValue={20}
              min={5}
              max={25}
              className="w-full max-w-xs px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <p className="text-xs text-slate-500 mt-1">
              Har bir biletda nechta savol bo'lishi
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h2 className="font-semibold text-slate-800 mb-4">Bepul biletlar</h2>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Bepul biletlar soni
          </label>
          <input
            type="number"
            defaultValue={6}
            min={1}
            max={40}
            className="w-full max-w-xs px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <p className="text-xs text-slate-500 mt-1">
            Bilet 1 dan shu raqamgacha bepul bo'ladi
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold text-slate-800 mb-4">Premium narxi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              1 oylik (so'm)
            </label>
            <input
              type="number"
              defaultValue={29000}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              3 oylik (so'm)
            </label>
            <input
              type="number"
              defaultValue={59000}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              6 oylik (so'm)
            </label>
            <input
              type="number"
              defaultValue={99000}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
          <Save size={20} />
          Saqlash
        </button>
      </div>
    </div>
  )
}
