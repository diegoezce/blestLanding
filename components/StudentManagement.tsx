'use client'

import { motion } from 'framer-motion'
import BrowserMockup from './mockups/BrowserMockup'

const features = [
  { title: 'Perfiles de alumnos', desc: 'Historial completo, niveles y contacto' },
  { title: 'Grupos y cursos', desc: 'Organizá por nivel, horario o profesor' },
  { title: 'Inscripciones', desc: 'Alta, baja y cambio de grupo simplificado' },
  { title: 'Vista de coordinador', desc: 'Todo el instituto en un panel' },
]

export default function StudentManagement() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <BrowserMockup
              screenshot="/screenshots/groups.png"
              alt="BLEST — Gestión de grupos y cursos"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-700 mb-3">
              Alumnos y Grupos
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-6"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Adiós a las planillas de Excel.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Todos tus alumnos, grupos y cursos en un solo lugar. Buscá, filtrá, y accedé al historial completo de cualquier alumno en segundos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900 mb-1">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
