import { useState } from 'react'
import { BookOpen, Edit2, Save, X, ChevronDown, ChevronUp } from 'lucide-react'
import { useAdminStore } from '../../store/adminStore'

export default function AdminBilets() {
  const { bilets, questions, updateBilet, getBiletQuestions } = useAdminStore()
  
  const [expandedBilet, setExpandedBilet] = useState<number | null>(null)
  const [editingBilet, setEditingBilet] = useState<number | null>(null)
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const toggleExpand = (biletId: number) => {
    if (expandedBilet === biletId) {
      setExpandedBilet(null)
    } else {
      setExpandedBilet(biletId)
    }
  }

  const startEditing = (biletId: number) => {
    const bilet = bilets.find(b => b.id === biletId)
    if (bilet) {
      setSelectedQuestions([...bilet.questionIds])
      setEditingBilet(biletId)
    }
  }

  const cancelEditing = () => {
    setEditingBilet(null)
    setSelectedQuestions([])
    setSearchQuery('')
  }

  const saveChanges = () => {
    if (editingBilet) {
      updateBilet(editingBilet, selectedQuestions)
      cancelEditing()
    }
  }

  const toggleQuestion = (questionId: number) => {
    if (selectedQuestions.includes(questionId)) {
      setSelectedQuestions(selectedQuestions.filter(id => id !== questionId))
    } else if (selectedQuestions.length < 20) {
      setSelectedQuestions([...selectedQuestions, questionId])
    }
  }

  const filteredQuestions = questions.filter(q =>
    q.text.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Biletlar boshqaruvi</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {bilets.map((bilet) => {
          const biletQuestions = getBiletQuestions(bilet.id)
          const isExpanded = expandedBilet === bilet.id
          const isEditing = editingBilet === bilet.id

          return (
            <div key={bilet.id} className="border-b border-slate-100 last:border-b-0">
              {/* Bilet header */}
              <div
                className={`flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 ${
                  isExpanded ? 'bg-slate-50' : ''
                }`}
                onClick={() => !isEditing && toggleExpand(bilet.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{bilet.name}</h3>
                    <p className="text-sm text-slate-500">
                      {bilet.questionIds.length} ta savol
                      {bilet.id <= 6 && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          BEPUL
                        </span>
                      )}
                      {bilet.id > 6 && (
                        <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                          PREMIUM
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {!isEditing && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        startEditing(bilet.id)
                      }}
                      className="p-2 text-slate-400 hover:text-teal-500 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                  )}
                  {isExpanded ? (
                    <ChevronUp className="text-slate-400" size={20} />
                  ) : (
                    <ChevronDown className="text-slate-400" size={20} />
                  )}
                </div>
              </div>

              {/* Expanded content */}
              {isExpanded && !isEditing && (
                <div className="px-4 pb-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-slate-600 mb-3">
                      Biletdagi savollar:
                    </h4>
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                      {biletQuestions.map((question, index) => (
                        <div
                          key={question.id}
                          className="flex items-start gap-3 p-3 bg-white rounded-lg"
                        >
                          <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
                            {index + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-800">{question.text}</p>
                            <p className="text-xs text-slate-500 mt-1">
                              ID: {question.id} • {question.category}
                            </p>
                          </div>
                        </div>
                      ))}
                      {biletQuestions.length === 0 && (
                        <p className="text-sm text-slate-500 text-center py-4">
                          Bu biletda savollar yo'q
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Editing mode */}
              {isEditing && (
                <div className="px-4 pb-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-600">
                          Savollarni tanlang
                        </h4>
                        <p className="text-xs text-slate-500">
                          Tanlangan: {selectedQuestions.length} / 20
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={cancelEditing}
                          className="flex items-center gap-1 px-3 py-1.5 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                        >
                          <X size={16} />
                          Bekor qilish
                        </button>
                        <button
                          onClick={saveChanges}
                          className="flex items-center gap-1 px-3 py-1.5 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                        >
                          <Save size={16} />
                          Saqlash
                        </button>
                      </div>
                    </div>

                    {/* Search */}
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Savol qidirish..."
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* Selected questions */}
                    <div className="mb-4">
                      <h5 className="text-xs font-semibold text-slate-500 uppercase mb-2">
                        Tanlangan savollar
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedQuestions.map(qId => (
                          <span
                            key={qId}
                            onClick={() => toggleQuestion(qId)}
                            className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full cursor-pointer hover:bg-teal-200"
                          >
                            #{qId} ✕
                          </span>
                        ))}
                        {selectedQuestions.length === 0 && (
                          <span className="text-xs text-slate-400">
                            Hech qanday savol tanlanmagan
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Available questions */}
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {filteredQuestions.slice(0, 50).map((question) => (
                        <div
                          key={question.id}
                          onClick={() => toggleQuestion(question.id)}
                          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedQuestions.includes(question.id)
                              ? 'bg-teal-50 border border-teal-200'
                              : 'bg-white hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedQuestions.includes(question.id)}
                            onChange={() => toggleQuestion(question.id)}
                            className="mt-1"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-800">{question.text}</p>
                            <p className="text-xs text-slate-500 mt-1">
                              ID: {question.id} • {question.category}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
