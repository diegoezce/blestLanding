import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import MobileAttendance from '@/components/MobileAttendance'
import StudentManagement from '@/components/StudentManagement'
import ReportsAnalytics from '@/components/ReportsAnalytics'
import RolesPermissions from '@/components/RolesPermissions'
import Pricing from '@/components/Pricing'
import SandboxDemo from '@/components/SandboxDemo'
import FinalCTA from '@/components/FinalCTA'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="relative bg-white">
      <Navbar />
      <Hero />
      <StatsStrip />
      <MobileAttendance />
      <StudentManagement />
      <ReportsAnalytics />
      <RolesPermissions />
      <Pricing />
      <SandboxDemo />
      <FinalCTA />

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: 24,
                  height: 24,
                  background: '#312E81',
                  border: '1px solid #1E1B4B',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 11, fontWeight: 700, color: '#FBBF24' }}>B</span>
              </div>
              <span className="font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>BLEST</span>
              <span className="text-slate-400 text-sm ml-2">Gestión académica moderna</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-slate-600 transition-colors">Términos</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Contacto</a>
              <span>© 2025 BLEST</span>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  )
}
