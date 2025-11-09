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
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
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
  );
}
