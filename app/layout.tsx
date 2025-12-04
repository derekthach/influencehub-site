import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InfluenceHub – Match Brands with Vetted Creators for UGC Campaigns',
  description: 'InfluenceHub connects brands with vetted influencers and UGC creators. Brands post campaigns, review applications, and manage content and payments in one streamlined platform.',
  keywords: 'influencer marketing, creator marketing, brand partnerships, social media marketing, UGC creators, influencer platform',
  authors: [{ name: 'InfluenceHub' }],
  creator: 'InfluenceHub',
  alternates: {
    canonical: 'https://influencehub.net',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://influencehub.net',
    title: 'InfluenceHub – Match Brands with Vetted Creators for UGC Campaigns',
    description: 'InfluenceHub connects brands with vetted influencers and UGC creators. Brands post campaigns, review applications, and manage content and payments in one streamlined platform.',
    siteName: 'InfluenceHub',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'InfluenceHub – Match Brands with Vetted Creators for UGC Campaigns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InfluenceHub – Match Brands with Vetted Creators for UGC Campaigns',
    description: 'InfluenceHub connects brands with vetted influencers and UGC creators. Brands post campaigns, review applications, and manage content and payments in one streamlined platform.',
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
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "InfluenceHub",
    "url": "https://influencehub.net",
    "applicationCategory": "MarketingApplication",
    "operatingSystem": "Web",
    "description": "InfluenceHub is a platform that connects brands with vetted influencers and UGC creators to run influencer and user-generated content campaigns.",
    "creator": {
      "@type": "Organization",
      "name": "InfluenceHub"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to get started for brands and creators"
    }
  }

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does InfluenceHub work for brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brands create a free account, post a campaign with product details, budget, and deliverables, then review applications from vetted influencers and UGC creators. Brands manage submissions, revisions, and payments directly inside InfluenceHub."
        }
      },
      {
        "@type": "Question",
        "name": "How does InfluenceHub work for influencers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Influencers and UGC creators create a profile, link their social accounts, and apply to campaigns that match their niche. They submit content, handle revisions, and get paid once the brand approves their deliverables."
        }
      },
      {
        "@type": "Question",
        "name": "Is InfluenceHub an agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. InfluenceHub is a self-serve platform that connects brands and creators directly. There is no agency fee or long-term retainer."
        }
      }
    ]
  }

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden`}>
        <Script
          id="software-application-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <Script
          id="faq-page-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        {children}
      </body>
    </html>
  )
} 