import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { template: '%s | WormEra Research Lab', default: 'WormEra Research Lab' },
  description: 'C. elegans-based contract research for toxicity, antimicrobial, aging, and functional screening. Founded by researchers from Nirma University, Ahmedabad.',
  metadataBase: new URL('https://wormeraresearchlab.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
