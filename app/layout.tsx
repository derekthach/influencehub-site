import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Influix - Vetted creators. Real results.',
  description: 'Connect your brand with vetted creators. A curated roster reaching 700K+ across TikTok, Instagram, and YouTube.',
  keywords: 'influencer marketing, creator marketing, brand partnerships, social media marketing',
  authors: [{ name: 'Influix' }],
  creator: 'Influix',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://influix.com',
    title: 'Influix - Vetted creators. Real results.',
    description: 'Connect your brand with vetted creators. A curated roster reaching 700K+ across TikTok, Instagram, and YouTube.',
    siteName: 'Influix',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Influix - Creator-Brand Matchmaking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influix - Vetted creators. Real results.',
    description: 'Connect your brand with vetted creators. A curated roster reaching 700K+ across TikTok, Instagram, and YouTube.',
    images: ['/og.png'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 