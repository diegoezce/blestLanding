'use client'

import { motion } from 'framer-motion'
import BrowserMockup from './mockups/BrowserMockup'
import PhoneMockup from './mockups/PhoneMockup'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero({ onOpenSandbox }: { onOpenSandbox: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-50 opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-slate-100 opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center text-xs font-medium uppercase tracking-[0.18em] text-indigo-700 mb-4"
        >
          Gestión académica moderna para institutos de idiomas
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-center font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Enseñá más.
          <br />
          <span className="text-indigo-700">Administrá menos.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-center text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          La plataforma académica que reemplaza tus planillas de Excel. Gestioná alumnos, asistencia, grupos y reportes desde cualquier dispositivo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16"
        >
          <button
            onClick={onOpenSandbox}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-md transition-colors shadow-sm"
          >
            Probar Sandbox
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <a
            href="#funcionalidades"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
          >
            Ver funcionalidades
          </a>
        </motion.div>

        {/* Mockup showcase */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="relative flex justify-center items-end"
        >
          <div className="w-full max-w-4xl">
            <BrowserMockup
              screenshot="/screenshots/dashboard.png"
              alt="BLEST dashboard — Panel general del instituto"
              className="shadow-xl shadow-slate-200"
            />
          </div>

          {/* Floating phone mockup */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 sm:right-0 lg:-right-8 bottom-4 hidden sm:block z-10"
          >
            <PhoneMockup
              screenshot="/screenshots/dashboard-mobile.jpeg"
              alt="BLEST en mobile"
              className="shadow-2xl shadow-slate-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
