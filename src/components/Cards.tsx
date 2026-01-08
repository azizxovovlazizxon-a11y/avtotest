import { Play, CheckCircle, Star, Clock, Flame, BookOpen, Lock } from 'lucide-react'

interface TestCardProps {
  title: string
  description?: string
  gradient: string
  tags: { label: string; type: 'recommended' | 'free' | 'popular' | 'study' | 'premium' }[]
  stats: { label: string; value: string | number }[]
  buttonText: string
  buttonAction: () => void
  icon?: React.ReactNode
  disabled?: boolean
}

export function TestCard({
  title,
  gradient,
  tags,
  stats,
  buttonText,
  buttonAction,
  icon,
  disabled,
}: TestCardProps) {
  const tagIcons: Record<string, React.ReactNode> = {
    recommended: <Star size={12} />,
    free: <CheckCircle size={12} />,
    popular: <Flame size={12} />,
    study: <BookOpen size={12} />,
    premium: <Clock size={12} />,
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Header with gradient */}
      <div className={`${gradient} p-5 h-20`}>
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`tag ${
                tag.type === 'recommended'
                  ? 'tag-recommended'
                  : tag.type === 'free'
                  ? 'tag-free'
                  : tag.type === 'popular'
                  ? 'tag-popular'
                  : tag.type === 'study'
                  ? 'tag-study'
                  : 'tag-premium'
              } flex items-center gap-1`}
            >
              {tagIcons[tag.type]}
              {tag.label}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-xs text-slate-500">{stat.label}</p>
              <p className="text-lg font-semibold text-slate-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={buttonAction}
          disabled={disabled}
          className={`w-full btn-secondary ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Play size={18} />
          {buttonText}
        </button>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  subtitle: string
  icon: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
}

export function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-sm font-medium text-slate-600">{title}</h4>
        <div className="text-slate-400">{icon}</div>
      </div>
      <p className="text-3xl font-bold text-slate-800 mb-1">{value}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
  )
}

interface BiletCardProps {
  biletId: number
  gradient: string
  isFree: boolean
  isPremium: boolean
  attempts: number
  lastScore?: number
  onStart: () => void
}

export function BiletCard({
  biletId,
  gradient,
  isFree,
  isPremium,
  attempts,
  lastScore,
  onStart,
}: BiletCardProps) {
  const canAccess = isFree || isPremium
  const isLocked = !canAccess

  return (
    <div className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-shadow duration-200 relative ${isLocked ? '' : 'hover:shadow-md'}`}>
      {/* Lock overlay for locked bilets */}
      {isLocked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-[2px]">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-3">
              <Lock size={24} className="text-white" />
            </div>
            <p className="text-sm font-semibold text-slate-700">Premium kerak</p>
          </div>
        </div>
      )}

      <div className={`${gradient} p-5 h-20`}>
        <h3 className="text-lg font-bold text-slate-800">Bilet #{biletId}</h3>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-4">
          {isFree ? (
            <>
              <span className="tag tag-free flex items-center gap-1">
                <CheckCircle size={12} />
                BEPUL
              </span>
            </>
          ) : (
            <span className="tag tag-premium flex items-center gap-1">
              <Lock size={12} />
              PREMIUM
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <p className="text-xs text-slate-500">Yechganlar soni:</p>
            <p className="text-lg font-semibold text-slate-800">{attempts}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Sizning natijangiz:</p>
            <p className="text-lg font-semibold text-slate-800">
              {lastScore !== undefined ? `${lastScore}%` : 'Hali yechilmagan'}
            </p>
          </div>
        </div>

        {canAccess ? (
          <button onClick={onStart} className="w-full btn-secondary">
            <Play size={18} />
            Testni boshlash
          </button>
        ) : (
          <button onClick={onStart} className="w-full btn-secondary opacity-50">
            <Play size={18} />
            Testni boshlash
          </button>
        )}
      </div>
    </div>
  )
}

interface StatisticsCardProps {
  title: string
  icon: React.ReactNode
  bgColor: string
  children: React.ReactNode
}

export function StatisticsCard({ title, icon, bgColor, children }: StatisticsCardProps) {
  return (
    <div className={`${bgColor} rounded-2xl p-5`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-slate-700">{icon}</div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      </div>
      {children}
    </div>
  )
}
