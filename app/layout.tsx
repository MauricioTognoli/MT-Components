import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { ThemeLangProvider } from '@/context/ThemeLangContext'
import { Providers } from '@/context/Providers'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mauricio Tognoli Components',
  description: 'Portafolio de componentes y proyectos de Mauricio Tognoli.',
  generator: 'v0.app',
  applicationName: 'Mauricio Tognoli Components',
  keywords: ['frontend', 'React', 'Next.js', 'Tailwind CSS', 'portafolio', 'componentes'],
  authors: [{ name: 'Mauricio Tognoli', url: 'https://portfolio-mauriciotognoli.vercel.app' }],
  colorScheme: 'dark light',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Mauricio Tognoli Components',
    description: 'Portafolio de componentes y proyectos de Mauricio Tognoli.',
    url: 'https://mt-components.vercel.app/',
    siteName: 'Mauricio Tognoli Components',
    images: [
      {
        url: '/banner-mt-components.svg',
        width: 1200,
        height: 630,
        alt: 'Mauricio Tognoli - Portafolio de componentes',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mauricio Tognoli Components',
    description: 'Portafolio de componentes y proyectos de Mauricio Tognoli.',
    site: '@tognoli',
    creator: '@tognoli',
    images: ['/banner-mt-components.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer/>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
