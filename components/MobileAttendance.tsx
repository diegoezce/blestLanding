'use client'

import { motion } from 'framer-motion'
import PhoneMockup from './mockups/PhoneMockup'

const features = [
  'Un toque por alumno para marcar asistencia o ausencia',
  'Funciona desde cualquier celular, sin instalar nada',
  'Los datos quedan guardados automáticamente en la nube',
  'Historial completo con estadísticas por alumno y grupo',
]

export default function MobileAttendance() {
  return (
    <section id="funcionalidades" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-700 mb-3">
              Asistencia
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-6"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Tomá asistencia en segundos desde tu celular.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Olvidate de las listas en papel. Con BLEST, la asistencia se registra al instante y los datos están disponibles para todos en tiempo real.
            </p>

            <ul className="space-y-3">
              {features.map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-sm">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMockup
                screenshot="/screenshots/attendance-mobile.jpeg"
                alt="BLEST — Pantalla de asistencia en mobile"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
