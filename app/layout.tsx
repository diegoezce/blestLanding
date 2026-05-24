import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BLEST — Gestión académica moderna para institutos de idiomas',
  description:
    'Enseñá más. Administrá menos. La plataforma de gestión académica para institutos de idiomas en LATAM.',
  keywords: [
    'gestión académica',
    'institutos de idiomas',
    'inglés',
    'LATAM',
    'asistencia mobile',
    'SaaS educativo',
    'software instituto',
  ],
  authors: [{ name: 'BLEST' }],
  creator: 'BLEST',
  publisher: 'BLEST',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.blest.io',
    siteName: 'BLEST',
    title: 'BLEST — Gestión académica moderna para institutos de idiomas',
    description:
      'Enseñá más. Administrá menos. La plataforma de gestión académica para institutos de idiomas en LATAM.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLEST — Gestión académica moderna para institutos de idiomas',
    description:
      'Enseñá más. Administrá menos. La plataforma de gestión académica para institutos de idiomas en LATAM.',
    creator: '@blestio',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.blest.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
