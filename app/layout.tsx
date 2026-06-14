import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// URL pública de la landing (sitio de marketing). Distinta de NEXT_PUBLIC_APP_URL,
// que apunta a la aplicación (app.blest.io).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blest.io'
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.blest.io'

const title = 'BLEST — Gestión académica moderna para institutos de idiomas'
const description =
  'Enseñá más. Administrá menos. La plataforma de gestión académica para institutos de idiomas en LATAM.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'BLEST',
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
    url: siteUrl,
    siteName: 'BLEST',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@blestio',
  },
  alternates: {
    canonical: siteUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'BLEST',
      url: siteUrl,
      description,
      logo: `${siteUrl}/icon.svg`,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'BLEST',
      description,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'es',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'BLEST',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Gestión académica',
      operatingSystem: 'Web',
      url: appUrl,
      description,
      inLanguage: 'es',
      offers: {
        '@type': 'Offer',
        category: 'SaaS',
      },
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
