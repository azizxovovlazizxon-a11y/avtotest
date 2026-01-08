import { useState } from 'react'
import { Upload, Download, Trash2, AlertTriangle } from 'lucide-react'
import { useAdminStore } from '../../store/adminStore'

export default function AdminData() {
  const { questions, bilets, importQuestions } = useAdminStore()
  const [importText, setImportText] = useState('')
  const [importError, setImportError] = useState('')
  const [importSuccess, setImportSuccess] = useState('')

  const handleExport = () => {
    const data = {
      questions: questions.map(q => ({
        text: q.text,
        options: q.options,
        correctAnswer: q.correctAnswer,
        category: q.category,
        imageUrl: q.imageUrl,
        biletId: q.biletId,
      })),
      bilets: bilets,
      exportedAt: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `avtotest-backup-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    setImportError('')
    setImportSuccess('')

    try {
      const data = JSON.parse(importText)
      
      if (!Array.isArray(data.questions)) {
        throw new Error('Ma\'lumotlar noto\'g\'ri formatda')
      }

      const validQuestions = data.questions.filter((q: unknown) => {
        const question = q as Record<string, unknown>
        return (
          typeof question.text === 'string' &&
          Array.isArray(question.options) &&
          question.options.length === 4 &&
          typeof question.correctAnswer === 'number'
        )
      })

      if (validQuestions.length === 0) {
        throw new Error('Hech qanday to\'g\'ri savol topilmadi')
      }

      importQuestions(validQuestions)
      setImportSuccess(`${validQuestions.length} ta savol muvaffaqiyatli import qilindi`)
      setImportText('')
    } catch (error) {
      setImportError(error instanceof Error ? error.message : 'Import xatosi')
    }
  }

  const handleClearStorage = () => {
    if (confirm('Barcha ma\'lumotlarni o\'chirmoqchimisiz? Bu amalni ortga qaytarib bo\'lmaydi!')) {
      localStorage.removeItem('avtotest-admin-storage')
      window.location.reload()
    }
  }

  const sampleFormat = {
    questions: [
      {
        text: "Savol matni",
        options: ["A varianti", "B varianti", "C varianti", "D varianti"],
        correctAnswer: 0,
        category: "Kategoriya nomi",
        imageUrl: "https://example.com/image.jpg",
        biletId: 1
      }
    ]
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Ma'lumotlar boshqaruvi</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Export */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Download className="text-blue-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">Export</h2>
              <p className="text-sm text-slate-500">Ma'lumotlarni yuklab olish</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-4">
            Barcha savollar va biletlarni JSON formatida yuklab oling. Bu faylni zaxira nusxa sifatida saqlashingiz mumkin.
          </p>

          <div className="bg-slate-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Jami savollar:</span> {questions.length}
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Jami biletlar:</span> {bilets.length}
            </p>
          </div>

          <button
            onClick={handleExport}
            className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
          >
            <Download size={20} />
            JSON yuklab olish
          </button>
        </div>

        {/* Import */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Upload className="text-green-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">Import</h2>
              <p className="text-sm text-slate-500">Ma'lumotlarni yuklash</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-4">
            JSON formatidagi savollarni import qiling. Mavjud savollarga qo'shiladi.
          </p>

          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="JSON ma'lumotlarni shu yerga joylashtiring..."
            rows={6}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 font-mono text-sm"
          />

          {importError && (
            <div className="bg-red-50 text-red-700 text-sm p-3 rounded-lg mb-4">
              {importError}
            </div>
          )}

          {importSuccess && (
            <div className="bg-green-50 text-green-700 text-sm p-3 rounded-lg mb-4">
              {importSuccess}
            </div>
          )}

          <button
            onClick={handleImport}
            disabled={!importText.trim()}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 disabled:bg-slate-300 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
          >
            <Upload size={20} />
            Import qilish
          </button>
        </div>

        {/* Sample format */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-slate-800 mb-4">JSON formati namunasi</h2>
          <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg text-xs overflow-x-auto">
            {JSON.stringify(sampleFormat, null, 2)}
          </pre>
          <p className="text-xs text-slate-500 mt-3">
            * correctAnswer - to'g'ri javob indeksi (0 dan boshlanadi)
            <br />
            * biletId - ixtiyoriy, bilet raqami (1-40)
            <br />
            * imageUrl - ixtiyoriy, savol rasmi URL
          </p>
        </div>

        {/* Danger zone */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-red-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="text-red-600" size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-red-800">Xavfli zona</h2>
              <p className="text-sm text-red-500">Ehtiyot bo'ling!</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-4">
            Bu amal barcha savollar va sozlamalarni o'chiradi. Avval zaxira nusxa oling!
          </p>

          <button
            onClick={handleClearStorage}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
          >
            <Trash2 size={20} />
            Barcha ma'lumotlarni tozalash
          </button>
        </div>
      </div>
    </div>
  )
}
