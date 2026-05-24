'use client'

import { motion } from 'framer-motion'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.blest.io'

export default function FinalCTA() {
  return (
    <section className="py-32 bg-indigo-700">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-200 mb-4">
            Listo para empezar
          </p>

          <h2 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Modernizá la gestión de tu instituto.
          </h2>

          <p className="text-xl text-indigo-200 max-w-xl mx-auto mb-10 leading-relaxed">
            Empezá hoy. Sin contratos. Sin instalaciones. Sin reuniones de ventas. Tu instituto modernizado en minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold rounded-md transition-colors shadow-md text-base"
            >
              Probar Sandbox
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium border border-indigo-500 hover:bg-indigo-600 rounded-md transition-colors text-base"
            >
              Ver precios
            </a>
          </div>

          <p className="mt-8 text-sm text-indigo-300">
            Sin tarjeta de crédito · Cancelá cuando quieras · Soporte en español
          </p>
        </motion.div>
      </div>
    </section>
  )
}
