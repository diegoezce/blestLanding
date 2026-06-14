import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BLEST — Gestión académica para institutos de idiomas',
    short_name: 'BLEST',
    description:
      'Enseñá más. Administrá menos. La plataforma de gestión académica para institutos de idiomas en LATAM.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#312E81',
    lang: 'es',
    icons: [
      {
        src: '/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
  }
}
