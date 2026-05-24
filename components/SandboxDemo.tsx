'use client'

import { motion } from 'framer-motion'
import BrowserMockup from './mockups/BrowserMockup'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.blest.io'

const bullets = [
  'Sin reuniones de onboarding',
  'Sin formularios de contacto',
  'Sin instalaciones ni configuraciones',
  'Empezás en menos de 30 segundos',
]

export default function SandboxDemo() {
  return (
    <section id="sandbox" className="py-24 bg-white">
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
              screenshot="/screenshots/dashboard.png"
              alt="BLEST Sandbox — Instituto demo preconfigurado"
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
              Demo disponible ahora
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-6"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Explorá BLEST con datos reales de un instituto demo.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Accedé al Sandbox preconfigurado con un instituto ficticio. Explorá todas las funcionalidades sin compromiso.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-md transition-colors shadow-sm"
            >
              Entrar al Sandbox
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
