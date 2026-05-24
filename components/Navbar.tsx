'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function BlestLogo() {
  return (
    <div className="flex items-center gap-2">
      <div
        style={{
          width: 28,
          height: 28,
          background: '#312E81',
          border: '1.5px solid #1E1B4B',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 14,
            fontWeight: 700,
            color: '#FBBF24',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          B
        </span>
      </div>
      <span
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 18,
          fontWeight: 700,
          color: '#0f172a',
          letterSpacing: '0.05em',
        }}
      >
        BLEST
      </span>
    </div>
  )
}

interface NavbarProps {
  onOpenSandbox: () => void
}

export default function Navbar({ onOpenSandbox }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Reportes', href: '#reportes' },
    { label: 'Precios', href: '#precios' },
    { label: 'Sandbox', href: '#sandbox' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#">
            <BlestLogo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-700 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenSandbox}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-md transition-colors shadow-sm"
            >
              Probar Sandbox
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Menú"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-700 hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => { setMenuOpen(false); onOpenSandbox() }}
                  className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-md transition-colors"
                >
                  Probar Sandbox
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
