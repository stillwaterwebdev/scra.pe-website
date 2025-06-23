import "@/styling/globals.css"

import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import Navbar from "@/components/app/navbar"
import Footer from "@/components/app/footer"
import ScrollToTop from "@/components/app/scroll-to-top"
import { Toaster } from "@/components/ui/sonner"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default: "scra.pe - Google Maps Lead Scraping Service",
    template: `%s - scra.pe`,
  },
  description:
    "Professional Google Maps lead scraping service. Get high-quality leads from Google Maps for your business.",
  keywords: [
    "google maps scraping",
    "lead generation",
    "business leads",
    "lead scraping",
    "google maps leads",
    "local business data",
    "lead mining",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={dmSans.className}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  )
}
