import { useEffect, useRef } from 'react'

interface YandexAdProps {
  blockId: string // Your Yandex ad block ID (e.g., "R-A-123456-1")
  renderTo?: string // Container ID
  type?: 'horizontal' | 'vertical' | 'square'
}

export function YandexAd({ blockId, renderTo, type = 'horizontal' }: YandexAdProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Yandex ad script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://yandex.ru/ads/system/context.js'
    
    script.onload = () => {
      // @ts-ignore - Yandex global object
      if (window.yaContextCb) {
        // @ts-ignore
        window.yaContextCb.push(() => {
          // @ts-ignore
          window.Ya.Context.AdvManager.render({
            blockId: blockId,
            renderTo: renderTo || containerRef.current?.id || 'yandex-ad-' + blockId,
            async: true
          })
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [blockId, renderTo])

  return (
    <div 
      id={renderTo || `yandex-ad-${blockId}`}
      ref={containerRef}
      className={`yandex-ad ${type}`}
      style={{ 
        minHeight: type === 'horizontal' ? '90px' : type === 'vertical' ? '600px' : '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Yandex ad will be inserted here */}
    </div>
  )
}

// Fallback placeholder component (when no blockId provided)
export function YandexAdPlaceholder({ type = 'horizontal' }: { type?: 'horizontal' | 'vertical' | 'square' }) {
  const dimensions = {
    horizontal: '728×90',
    vertical: '160×600', 
    square: '300×250'
  }

  return (
    <div className="bg-slate-100 rounded-xl flex items-center justify-center p-4" 
         style={{ 
           minHeight: type === 'horizontal' ? '90px' : type === 'vertical' ? '600px' : '250px' 
         }}>
      <div className="text-center text-slate-400">
        <div className="text-2xl mb-2">📢</div>
        <p className="text-sm font-medium">Yandex.Direct Reklama</p>
        <p className="text-xs">{dimensions[type]}</p>
      </div>
    </div>
  )
}
