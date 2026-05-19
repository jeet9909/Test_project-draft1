import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/contact/WhatsAppFAB";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wormeraresearchlab.com"),
  title: {
    default: "WormEra Research Lab — C. elegans Bioassay Services",
    template: "%s | WormEra Research Lab",
  },
  description:
    "WormEra Research Lab offers C. elegans-based in vivo screening services for toxicity, antimicrobial, aging, and functional ingredient evaluation. Fast. Affordable. Scientifically validated.",
  keywords: [
    "C. elegans", "bioassay", "CRO", "toxicity testing", "antimicrobial screening",
    "aging assay", "India", "Ahmedabad", "nutraceutical testing",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wormeraresearchlab.com",
    siteName: "WormEra Research Lab",
    title: "WormEra Research Lab — C. elegans Bioassay Services",
    description: "Whole-organism in vivo screening for pharma, nutraceutical, cosmetics and AYUSH industries.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[#F7FAFC] dark:bg-[#0F172A] text-gray-900 dark:text-[#E2E8F0] antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
