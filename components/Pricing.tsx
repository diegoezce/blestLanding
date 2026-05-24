'use client'

import { motion } from 'framer-motion'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.blest.io'

const plans = [
  {
    name: 'Starter',
    price: 20,
    description: 'Para institutos que recién arrancan o tienen pocos grupos.',
    limit: 'Hasta 30 alumnos',
    highlighted: false,
    features: [
      'Hasta 30 alumnos',
      'Gestión de alumnos',
      'Cursos y grupos',
      'Asistencia mobile-first',
      'Reportes básicos',
      'Roles de profesores',
    ],
    notIncluded: [
      'Reportes avanzados',
      'Evaluaciones',
      'Certificados',
    ],
    cta: 'Probar Sandbox',
  },
  {
    name: 'Growth',
    price: 40,
    description: 'La opción más elegida por institutos en crecimiento.',
    limit: 'Hasta 60 alumnos',
    highlighted: true,
    features: [
      'Hasta 60 alumnos',
      'Todo lo del Starter',
      'Reportes avanzados',
      'Evaluaciones y notas',
      'Certificados digitales',
      'Roles administrativos',
    ],
    notIncluded: [],
    cta: 'Probar 14 días gratis',
  },
  {
    name: 'Enterprise',
    price: null,
    priceLabel: 'Desde USD 100',
    description: 'Para institutos grandes, multi-campus o con necesidades específicas.',
    limit: 'Más de 100 alumnos',
    highlighted: false,
    features: [
      'Más de 100 alumnos',
      'Instancia dedicada',
      'Analíticas avanzadas',
      'Reportes personalizados con AI',
      'Multi-campus',
      'Soporte prioritario',
    ],
    notIncluded: [],
    cta: 'Hablar con el equipo',
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-700 mb-3">
            Precios
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Pagás lo que usás. Sin sorpresas.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Precios en USD, facturación mensual. Cancelás cuando quieras, sin contratos de permanencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-xl p-6 border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-indigo-700 border-indigo-700 shadow-xl text-white scale-[1.02]'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold shadow-md">
                    ★ Más popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-4 ${plan.highlighted ? 'text-indigo-200' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  {plan.price ? (
                    <>
                      <span className={`text-xs font-medium ${plan.highlighted ? 'text-indigo-200' : 'text-slate-400'}`}>USD</span>
                      <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                      <span className={`text-sm ${plan.highlighted ? 'text-indigo-200' : 'text-slate-400'}`}>/mes</span>
                    </>
                  ) : (
                    <span className="text-2xl font-extrabold text-slate-900">{plan.priceLabel}/mes</span>
                  )}
                </div>
                <div className="mt-2">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-indigo-100'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {plan.limit}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                      plan.highlighted ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-700'
                    }`}>
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-indigo-100' : 'text-slate-700'}`}>{f}</span>
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 opacity-40">
                    <div className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-slate-100 text-slate-400">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-400 line-through">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.name === 'Enterprise' ? '#sandbox' : APP_URL}
                target={plan.name !== 'Enterprise' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`block w-full text-center py-2.5 rounded-md text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-indigo-700 hover:bg-indigo-50'
                    : 'bg-indigo-700 text-white hover:bg-indigo-800'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-slate-400 mt-8"
        >
          Todos los planes incluyen soporte por email y acceso a actualizaciones. Sin tarjeta de crédito para el período de prueba.
        </motion.p>
      </div>
    </section>
  )
}
