import { useState } from 'react'
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  X,
  Save,
  Upload
} from 'lucide-react'
import { useAdminStore } from '../../store/adminStore'

export default function AdminQuestions() {
  const { questions, addQuestion, updateQuestion, deleteQuestion } = useAdminStore()
  
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingQuestion, setEditingQuestion] = useState<number | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  
  // Form state
  const [formData, setFormData] = useState({
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    category: '',
    imageUrl: '',
    explanation: '',
    biletId: undefined as number | undefined,
  })

  const categories = Array.from(new Set(questions.map(q => q.category)))
  const itemsPerPage = 20

  // Filter questions
  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.text.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || q.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  // Pagination
  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage)
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const resetForm = () => {
    setFormData({
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      category: '',
      imageUrl: '',
      explanation: '',
      biletId: undefined,
    })
    setEditingQuestion(null)
    setImagePreview('')
  }

  const openCreateModal = () => {
    resetForm()
    setIsModalOpen(true)
  }

  const openEditModal = (questionId: number) => {
    const question = questions.find(q => q.id === questionId)
    if (question) {
      setFormData({
        text: question.text,
        options: [...question.options],
        correctAnswer: question.correctAnswer,
        category: question.category || '',
        imageUrl: question.imageUrl || '',
        explanation: question.explanation || '',
        biletId: question.biletId,
      })
      setEditingQuestion(questionId)
      setImagePreview(question.imageUrl || '')
      setIsModalOpen(true)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.startsWith('image/')) {
      alert('Iltimos, rasm faylini tanlang')
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Rasm hajmi 5MB dan oshmasligi kerak')
      return
    }

    // Convert to base64
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result as string
      setFormData({ ...formData, imageUrl: base64String })
      setImagePreview(base64String)
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setFormData({ ...formData, imageUrl: '' })
    setImagePreview('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.text || formData.options.some(o => !o) || !formData.category) {
      alert('Barcha maydonlarni to\'ldiring')
      return
    }

    if (editingQuestion) {
      updateQuestion(editingQuestion, {
        text: formData.text,
        options: formData.options,
        correctAnswer: formData.correctAnswer,
        category: formData.category,
        imageUrl: formData.imageUrl || undefined,
        explanation: formData.explanation || undefined,
        biletId: formData.biletId,
      })
    } else {
      addQuestion({
        text: formData.text,
        options: formData.options,
        correctAnswer: formData.correctAnswer,
        category: formData.category,
        imageUrl: formData.imageUrl || undefined,
        explanation: formData.explanation || undefined,
        biletId: formData.biletId,
      })
    }

    setIsModalOpen(false)
    resetForm()
  }

  const handleDelete = (id: number) => {
    if (confirm('Bu savolni o\'chirmoqchimisiz?')) {
      deleteQuestion(id)
    }
  }

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...formData.options]
    newOptions[index] = value
    setFormData({ ...formData, options: newOptions })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Savollar boshqaruvi</h1>
        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors"
        >
          <Plus size={20} />
          Yangi savol
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Savol qidirish..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value)
              setCurrentPage(1)
            }}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="all">Barcha kategoriyalar</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <p className="text-sm text-slate-500 mt-3">
          Jami: {filteredQuestions.length} ta savol topildi
        </p>
      </div>

      {/* Questions table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">ID</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">Savol</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">Kategoriya</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">Bilet</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-slate-600">Rasm</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-slate-600">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {paginatedQuestions.map((question) => (
              <tr key={question.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-600">{question.id}</td>
                <td className="px-4 py-3">
                  <p className="text-sm text-slate-800 line-clamp-2">{question.text}</p>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                    {question.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {question.biletId ? `#${question.biletId}` : '-'}
                </td>
                <td className="px-4 py-3">
                  {question.imageUrl ? (
                    <ImageIcon size={18} className="text-teal-500" />
                  ) : (
                    <span className="text-slate-300">-</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => openEditModal(question.id)}
                      className="p-2 text-slate-400 hover:text-teal-500 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(question.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredQuestions.length)} / {filteredQuestions.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 text-slate-400 hover:text-slate-600 disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-slate-600">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 text-slate-400 hover:text-slate-600 disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-800">
                {editingQuestion ? 'Savolni tahrirlash' : 'Yangi savol qo\'shish'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Question text */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Savol matni *
                </label>
                <textarea
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Savol matnini kiriting..."
                />
              </div>

              {/* Options */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Javob variantlari *
                </label>
                <div className="space-y-2">
                  {formData.options.map((option, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="correctAnswer"
                        checked={formData.correctAnswer === index}
                        onChange={() => setFormData({ ...formData, correctAnswer: index })}
                        className="w-4 h-4 text-teal-500"
                      />
                      <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-semibold text-slate-600">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder={`${index + 1}-variant`}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  To'g'ri javobni belgilash uchun radio tugmasini bosing
                </p>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Kategoriya *
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Masalan: Yo'l belgilari"
                  list="categories"
                />
                <datalist id="categories">
                  {categories.map(cat => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>

              {/* Explanation */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Tushuntirish (noto'g'ri javob uchun)
                </label>
                <textarea
                  value={formData.explanation}
                  onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Noto'g'ri javob berilganda ko'rsatiladigan tushuntirish matni..."
                />
                <p className="text-xs text-slate-500 mt-1">
                  Foydalanuvchi noto'g'ri javob berganda, bu tushuntirish ko'rsatiladi
                </p>
              </div>

              {/* Bilet ID */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Bilet raqami (ixtiyoriy)
                </label>
                <input
                  type="number"
                  value={formData.biletId || ''}
                  onChange={(e) => setFormData({ ...formData, biletId: e.target.value ? parseInt(e.target.value) : undefined })}
                  min={1}
                  max={40}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="1-40"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Rasm (ixtiyoriy)
                </label>
                
                {/* Image Preview */}
                {imagePreview && (
                  <div className="mb-3 relative inline-block">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-48 rounded-lg border border-slate-200"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}

                {/* Upload Options */}
                <div className="space-y-3">
                  {/* File Upload */}
                  <div>
                    <label className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-colors cursor-pointer">
                      <Upload size={20} className="text-slate-400" />
                      <span className="text-sm text-slate-600">
                        Qurilmadan yuklash
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* URL Input */}
                  <div className="relative">
                    <span className="text-xs text-slate-500 mb-1 block text-center">yoki</span>
                    <input
                      type="url"
                      value={formData.imageUrl.startsWith('data:') ? '' : formData.imageUrl}
                      onChange={(e) => {
                        setFormData({ ...formData, imageUrl: e.target.value })
                        setImagePreview(e.target.value)
                      }}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-2">
                  Maksimal hajm: 5MB. Qo'llab-quvvatlanadigan formatlar: JPG, PNG, GIF, WebP
                </p>
              </div>

              {/* Submit buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors"
                >
                  <Save size={18} />
                  {editingQuestion ? 'Saqlash' : 'Qo\'shish'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
