import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layers } from 'lucide-react'
import { useAuthStore } from '../store/authStore'

export default function TelegramAuth() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const navigate = useNavigate()
  const location = useLocation()
  const { verifyOTP } = useAuthStore()

  const BOT_USERNAME = 'yol_qoidasi_uz_bot'
  const redirectTo = (location.state as any)?.from?.pathname || '/'

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    setError('')

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newOtp = [...otp]
    
    for (let i = 0; i < 6; i++) {
      newOtp[i] = pastedData[i] || ''
    }
    
    setOtp(newOtp)
    
    const lastFilledIndex = pastedData.length - 1
    if (lastFilledIndex >= 0 && lastFilledIndex < 6) {
      inputRefs.current[Math.min(lastFilledIndex + 1, 5)]?.focus()
    }
  }

  const handleVerify = async () => {
    const otpCode = otp.join('')
    
    if (otpCode.length !== 6) {
      setError('6 raqamli kodni to\'liq kiriting')
      return
    }

    setLoading(true)
    setError('')

    try {
      await verifyOTP(otpCode)
      navigate(redirectTo, { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Xatolik yuz berdi')
      setOtp(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    } finally {
      setLoading(false)
    }
  }

  const openTelegramBot = () => {
    window.open(`https://t.me/${BOT_USERNAME}`, '_blank')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-500 via-emerald-600 to-green-700 p-12 flex-col justify-between relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 text-[200px] font-bold text-white">YO'L</div>
          <div className="absolute bottom-20 right-20 text-[200px] font-bold text-white">QOIDA</div>
        </div>
        
        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <Layers size={28} className="text-teal-600" />
            </div>
            <span className="text-2xl font-bold text-white">AvtoTest</span>
          </div>
        </div>

        {/* Main Text */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Haydovchilik guvohnomasi olish yo'lida.
          </h1>
          <p className="text-xl text-white/90">
            Sizning muvaffaqiyatli imtihon topshirishingiz bir kod bilan boshlanadi.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
              <Layers size={28} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800">AvtoTest</span>
          </div>

          {/* Logo for desktop */}
          <div className="hidden lg:flex items-center justify-center gap-3 mb-12">
            <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center">
              <Layers size={32} className="text-white" />
            </div>
            <span className="text-3xl font-bold text-slate-800">AvtoTest</span>
          </div>

          {/* Instructions */}
          <div className="text-center mb-8">
            <p className="text-slate-700 mb-4">
              <button
                onClick={openTelegramBot}
                className="font-semibold text-teal-600 hover:text-teal-700 underline"
              >
                @{BOT_USERNAME}
              </button>
              {' '}Telegram botga o'ting va 1 daqiqalik kodingizni oling.
            </p>
          </div>

          {/* OTP Input */}
          <div className="flex gap-3 justify-center mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-14 h-16 text-center text-2xl font-bold border-2 border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                disabled={loading}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-sm text-center mb-6">
              {error}
            </div>
          )}

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={loading || otp.some(d => !d)}
            className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-colors text-lg"
          >
            {loading ? 'Tekshirilmoqda...' : 'Tasdiqlash'}
          </button>

          {/* Back Link */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/')}
              className="text-slate-500 hover:text-slate-700 transition-colors text-sm"
            >
              ← Bosh sahifaga qaytish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
