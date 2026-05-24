'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { motion, AnimatePresence } from 'framer-motion'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.blest.io'
const SANDBOX_EMAIL = process.env.NEXT_PUBLIC_SANDBOX_EMAIL ?? 'demo@blest.io'
const SANDBOX_PASSWORD = process.env.NEXT_PUBLIC_SANDBOX_PASSWORD ?? 'demo1234'

interface Props {
  open: boolean
  onClose: () => void
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      className="shrink-0 px-2.5 py-1 text-xs font-medium rounded-md border border-slate-200 text-slate-500 hover:text-indigo-700 hover:border-indigo-300 transition-colors"
    >
      {copied ? '✓ Copiado' : 'Copiar'}
    </button>
  )
}

export default function SandboxModal({ open, onClose }: Props) {
  const [state, handleSubmit] = useForm('mredabka')
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) setTimeout(() => nameRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-serif text-xl font-bold text-slate-900"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                    Accedé al Sandbox
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Dejanos tus datos y te compartimos las credenciales.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="px-6 py-5">
              {!state.succeeded ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Nombre
                    </label>
                    <input
                      ref={nameRef}
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  {state.errors && (
                    <ValidationError errors={state.errors} className="text-xs text-red-500" />
                  )}

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-2.5 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 disabled:opacity-60 disabled:cursor-not-allowed rounded-md transition-colors"
                  >
                    {state.submitting ? 'Enviando...' : 'Ver credenciales del Sandbox →'}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    No spam. Solo lo usamos para avisarte novedades de BLEST.
                  </p>
                </form>
              ) : (
                /* Credenciales */
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-sm text-green-700 font-medium">¡Listo! Estas son tus credenciales:</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 divide-y divide-slate-100">
                    <div className="flex items-center justify-between px-4 py-3">
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Email</p>
                        <p className="text-sm font-mono font-medium text-slate-900">{SANDBOX_EMAIL}</p>
                      </div>
                      <CopyButton value={SANDBOX_EMAIL} />
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Contraseña</p>
                        <p className="text-sm font-mono font-medium text-slate-900">{SANDBOX_PASSWORD}</p>
                      </div>
                      <CopyButton value={SANDBOX_PASSWORD} />
                    </div>
                  </div>

                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-md transition-colors"
                  >
                    Entrar al Sandbox
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
