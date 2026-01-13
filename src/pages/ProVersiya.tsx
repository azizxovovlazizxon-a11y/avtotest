import { Crown, Infinity, TrendingUp, Zap, Download, Check, Star, Tag } from 'lucide-react'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const features = [
  {
    icon: Infinity,
    title: 'Cheksiz Imtihonlar',
    description: 'Barcha biletlar va mashqlardan cheksiz foydalaning',
  },
  {
    icon: TrendingUp,
    title: 'Batafsil Statistika',
    description: "Taraqqiyotingizni kuzatib boring va tahlil qiling",
  },
  {
    icon: Zap,
    title: "Reklama Yo'q",
    description: "Chalg'ituvchi reklamalar bo'lmagan tajriba",
  },
  {
    icon: Download,
    title: 'Oflayn Rejim',
    description: "Internetga ulashmasdan o'qing va mashq qiling",
  },
]

const plans = [
  {
    id: '1-month',
    name: '1 Oylik',
    duration: 1,
    price: 29900,
    tag: 'Oddiy',
    tagColor: 'text-slate-500 bg-slate-100',
    features: [
      'Barcha imtihonlar',
      'Batafsil statistika',
      "Reklama yo'q",
      'Oflayn rejim',
    ],
  },
  {
    id: '3-month',
    name: '3 Oylik',
    duration: 3,
    price: 49900,
    tag: 'OMMABOP',
    tagColor: 'text-amber-600 bg-amber-100',
    isPopular: true,
    discount: 17,
    features: [
      'Barcha imtihonlar',
      'Batafsil statistika',
      "Reklama yo'q",
      'Oflayn rejim',
      "Maxsus ko'mak",
    ],
  },
  {
    id: '6-month',
    name: '6 Oylik',
    duration: 6,
    price: 69900,
    tag: 'Eng Tejamkor',
    tagColor: 'text-pink-600 bg-pink-100',
    discount: 30,
    features: [
      'Barcha imtihonlar',
      'Batafsil statistika',
      "Reklama yo'q",
      'Oflayn rejim',
      "Maxsus ko'mak",
      'Bonus materiallar',
    ],
  },
]

export default function ProVersiya() {
  const { user, updateUser } = useAuthStore()
  const [promoCode, setPromoCode] = useState('')
  const [promoLoading, setPromoLoading] = useState(false)
  const [promoError, setPromoError] = useState('')
  
  // Check if user has active premium (isPremium and not expired)
  const isPremiumActive = user?.isPremium && (
    !user?.proExpiresAt || new Date(user.proExpiresAt) > new Date()
  )

  const handleSubscribe = (_planId: string) => {
    // TODO: Integrate with payment gateway (Payme, Click, Uzum)
    alert('To\'lov tizimi integratsiyasi hali qo\'shilmagan')
  }

  const handleApplyPromoCode = async () => {
    if (!promoCode.trim()) {
      setPromoError('Promokod kiriting')
      return
    }

    setPromoLoading(true)
    setPromoError('')

    try {
      const token = localStorage.getItem('authToken')
      const response = await axios.post(
        `${API_URL}/api/promo/apply`,
        { code: promoCode },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (response.data.success) {
        // Update user with new premium status
        updateUser({
          isPremium: true,
          premiumExpiresAt: response.data.expiresAt,
          freeStandardAttempts: 999,
          freeRealAttempts: 999,
        })
        alert('Promokod muvaffaqiyatli faollashtirildi!')
        setPromoCode('')
      }
    } catch (error: any) {
      setPromoError(error.response?.data?.message || 'Promokod yaroqsiz')
    } finally {
      setPromoLoading(false)
    }
  }

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Crown className="text-amber-500" size={28} />
        <h1 className="text-3xl font-bold text-slate-800">Pro Versiyaga O'tish</h1>
      </div>
      <p className="text-slate-500 mb-8">
        Cheksiz imkoniyatlar bilan o'qishni davom ettiring
      </p>

      {/* Premium status (if active) */}
      {isPremiumActive && (
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Crown size={24} />
            <h2 className="text-xl font-bold">Siz Premium foydalanuvchisiz!</h2>
          </div>
          <p className="opacity-90">
            Premium muddati: {user?.proExpiresAt ? new Date(user.proExpiresAt).toLocaleDateString('uz-UZ') : 'Cheksiz'}
          </p>
        </div>
      )}

      {/* Features */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-xl p-5 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <feature.icon className="text-amber-600" size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{feature.title}</h3>
            <p className="text-sm text-slate-500">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Plans section */}
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Rejani Tanlang</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-2xl shadow-sm overflow-hidden ${
              plan.isPopular ? 'ring-2 ring-amber-500 relative' : ''
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase whitespace-nowrap">
                  OMMABOP
                </span>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800">{plan.name}</h3>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${plan.tagColor}`}>
                  {plan.discount ? `${plan.discount}% Tejang` : plan.tag}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-800">
                  {plan.price.toLocaleString()}
                </span>
                <span className="text-slate-500 ml-2">so'm</span>
                <p className="text-sm text-slate-500">
                  Har {plan.duration === 1 ? 'oyda' : `${plan.duration} oyda`}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-700">
                    {index >= 4 ? (
                      <Star size={16} className="text-amber-500" />
                    ) : (
                      <Check size={16} className="text-emerald-500" />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  plan.isPopular
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50'
                }`}
              >
                Tanlash
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Promocode section */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="text-purple-600" size={24} />
          <h3 className="font-bold text-slate-800">Promokod bormi?</h3>
        </div>
        <p className="text-slate-600 mb-4">
          Promokodni kiriting va premium imkoniyatlardan foydalaning
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => {
              setPromoCode(e.target.value.toUpperCase())
              setPromoError('')
            }}
            placeholder="PROMO2024"
            className="flex-1 px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none uppercase"
            disabled={promoLoading}
          />
          <button
            onClick={handleApplyPromoCode}
            disabled={promoLoading || !promoCode.trim()}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {promoLoading ? 'Tekshirilmoqda...' : 'Faollashtirish'}
          </button>
        </div>
        {promoError && (
          <p className="mt-2 text-red-500 text-sm">{promoError}</p>
        )}
      </div>
    </div>
  )
}
