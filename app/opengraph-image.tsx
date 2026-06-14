import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt =
  'BLEST — Gestión académica moderna para institutos de idiomas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '72px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              background: '#312E81',
              border: '3px solid #1E1B4B',
              borderRadius: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 50, fontWeight: 700, color: '#FBBF24' }}>
              B
            </span>
          </div>
          <span
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: 4,
            }}
          >
            BLEST
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              color: '#0f172a',
              lineHeight: 1.05,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Enseñá más.</span>
            <span style={{ color: '#4338CA' }}>Administrá menos.</span>
          </div>
          <span style={{ fontSize: 34, color: '#64748b', maxWidth: 900 }}>
            Gestión académica moderna para institutos de idiomas en LATAM.
          </span>
        </div>

        {/* Footer accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 28,
            color: '#94a3b8',
          }}
        >
          Alumnos · Asistencia · Grupos · Reportes
        </div>
      </div>
    ),
    { ...size },
  )
}
