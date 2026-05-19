import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Gold Casino Sites UK | Top UK Gold Casinos 2026 | goldcasinositesuk.com",
  description:
    "GoldCasinoSitesUK.com is Britain's most trusted independent casino comparison platform. Expert reviews, verified bonuses, and top-rated UKGC-licensed operators curated by our specialist team.",
  keywords:
    "gold casino sites UK, best gold casinos UK, UK casino comparison, top UK casinos 2026, UKGC licensed casinos, gold casino bonuses, premium UK casino sites",
  metadataBase: new URL("https://goldcasinositesuk.com"),
  alternates: { canonical: "https://goldcasinositesuk.com" },
  openGraph: {
    title: "Gold Casino Sites UK | Top UK Gold Casinos 2026",
    description:
      "Britain's most trusted gold casino comparison platform. Expert-led reviews, exclusive bonuses, and UKGC-licensed operators.",
    url: "https://goldcasinositesuk.com",
    siteName: "GoldCasinoSitesUK",
    locale: "en_GB",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
