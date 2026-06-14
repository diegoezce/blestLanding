import Image from 'next/image'

interface BrowserMockupProps {
  screenshot: string
  alt: string
  className?: string
  priority?: boolean
}

export default function BrowserMockup({ screenshot, alt, className = '', priority = false }: BrowserMockupProps) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white ${className}`}>
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white rounded-md border border-slate-200 px-3 py-1 text-xs text-slate-400 flex items-center gap-2">
            <svg className="w-3 h-3 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            app.blest.io
          </div>
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <Image
          src={screenshot}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    </div>
  )
}
