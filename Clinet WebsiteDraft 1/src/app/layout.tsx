import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: { template: '%s | WormEra Research Lab', default: 'WormEra Research Lab' },
  description: 'C. elegans-based contract research for toxicity, antimicrobial, aging, and functional screening. Founded by researchers from Nirma University, Ahmedabad.',
  metadataBase: new URL('https://wormeraresearchlab.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-navy transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
