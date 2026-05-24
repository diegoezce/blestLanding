'use client'

import { motion } from 'framer-motion'
import BrowserMockup from './mockups/BrowserMockup'

const cards = [
  {
    title: 'Asistencia y ausentismo',
    desc: 'Tasas por alumno, grupo y período. Identificá quiénes están en riesgo.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 3v18h18M7 16l4-4 4 4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Retención y crecimiento',
    desc: 'Seguí la evolución de tu instituto mes a mes y detectá tendencias.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Reportes con AI',
    desc: 'Decinos qué información necesitás y construimos el reporte a medida.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531" />
      </svg>
    ),
  },
]

export default function ReportsAnalytics() {
  return (
    <section id="reportes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-700 mb-3">
            Reportes e Inteligencia
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            ¿Necesitás un reporte específico?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Contamos con reportes pre-armados para los casos más comunes. Y para lo que tu instituto necesita en particular, podemos construirlo con AI.
          </p>
        </motion.div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <BrowserMockup
            screenshot="/screenshots/reports-students.png"
            alt="BLEST — Reportes de alumnos y asistencia"
          />
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
