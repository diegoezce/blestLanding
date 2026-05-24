import Image from 'next/image'

interface PhoneMockupProps {
  screenshot: string
  alt: string
  className?: string
}

export default function PhoneMockup({ screenshot, alt, className = '' }: PhoneMockupProps) {
  return (
    <div
      className={`relative w-[220px] h-[440px] rounded-[36px] border-4 border-slate-300 bg-slate-100 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-300 rounded-b-2xl z-10 flex items-center justify-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-slate-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-400/80" />
      </div>
      {/* Side buttons */}
      <div className="absolute left-[-5px] top-16 w-1.5 h-8 rounded-l-full bg-slate-300" />
      <div className="absolute left-[-5px] top-28 w-1.5 h-12 rounded-l-full bg-slate-300" />
      <div className="absolute right-[-5px] top-20 w-1.5 h-16 rounded-r-full bg-slate-300" />
      {/* Screen */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-white">
        <Image
          src={screenshot}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="220px"
        />
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-slate-400 z-10" />
    </div>
  )
}
