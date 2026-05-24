'use client'

import { motion } from 'framer-motion'
import BrowserMockup from './mockups/BrowserMockup'

const roles = [
  {
    role: 'Director',
    badge: 'bg-red-100 text-red-800',
    permissions: [
      'Acceso total al instituto',
      'Configuración y branding',
      'Gestión de personal',
      'Reportes financieros',
      'Multi-campus',
    ],
  },
  {
    role: 'Coordinador',
    badge: 'bg-indigo-100 text-indigo-800',
    permissions: [
      'Gestión de grupos y cursos',
      'Alta y baja de alumnos',
      'Visualización de reportes',
      'Asignación de profesores',
      'Comunicados a alumnos',
    ],
  },
  {
    role: 'Profesor',
    badge: 'bg-green-100 text-green-800',
    permissions: [
      'Asistencia de sus grupos',
      'Calificaciones y evaluaciones',
      'Ver perfil de sus alumnos',
      'Reportes de su clase',
      'Comunicados a su grupo',
    ],
  },
  {
    role: 'Alumno',
    badge: 'bg-purple-100 text-purple-800',
    permissions: [
      'Ver su asistencia',
      'Ver sus calificaciones',
      'Descargar certificados',
      'Perfil personal',
      'Horario y clases',
    ],
  },
]

export default function RolesPermissions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-700 mb-3">
            Roles y Permisos
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            Cada persona ve lo que necesita ver.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Roles predefinidos para el equipo de tu instituto. Sin configuraciones complicadas — asignás el rol y listo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Role cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roles.map((r, i) => (
              <motion.div
                key={r.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-4 ${r.badge}`}>
                  {r.role}
                </span>
                <ul className="space-y-1.5">
                  {r.permissions.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <div className="shrink-0 w-4 h-4 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-xs text-slate-600">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrowserMockup
              screenshot="/screenshots/users.png"
              alt="BLEST — Gestión de usuarios y roles"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
