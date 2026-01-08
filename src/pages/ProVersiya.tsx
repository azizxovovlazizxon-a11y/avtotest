import { Crown, Infinity, TrendingUp, Zap, Download, Check, Star } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

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

  const handleSubscribe = (planId: string) => {
    // In production, this would integrate with payment gateway (Payme, Click, Uzum)
    // For demo, we'll just activate premium
    const plan = plans.find(p => p.id === planId)
    if (plan) {
      const expiresAt = new Date()
      expiresAt.setMonth(expiresAt.getMonth() + plan.duration)
      
      updateUser({
        isPremium: true,
        premiumExpiresAt: expiresAt.toISOString(),
        freeStandardAttempts: 999,
        freeRealAttempts: 999,
      })
      
      alert('Premium faollashtirildi! (Demo rejimda)')
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
      {user?.isPremium && (
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Crown size={24} />
            <h2 className="text-xl font-bold">Siz Premium foydalanuvchisiz!</h2>
          </div>
          <p className="opacity-90">
            Premium muddati: {user.premiumExpiresAt ? new Date(user.premiumExpiresAt).toLocaleDateString('uz-UZ') : 'Cheksiz'}
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
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
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
                disabled={user?.isPremium}
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  plan.isPopular
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50'
                } ${user?.isPremium ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Tanlash
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Payment methods info */}
      <div className="mt-8 bg-slate-50 rounded-xl p-6">
        <h3 className="font-bold text-slate-800 mb-2">To'lov usullari</h3>
        <p className="text-slate-600 mb-4">
          Quyidagi to'lov usullaridan foydalanishingiz mumkin:
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium text-slate-700">
            Payme
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium text-slate-700">
            Click
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium text-slate-700">
            Uzum Bank
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-medium text-slate-700">
            Bank kartasi
          </div>
        </div>
      </div>
    </div>
  )
}
