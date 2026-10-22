import type { Metadata, Viewport } from "next"
import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import RevealManager from "@/lib/components/reveal"
import { site } from "@/lib/site"

const description = `${site.cuisine} from ${site.area.neighborhood}, ${site.area.borough}: doubles, bake and salt fish, puri and curry, Saturday soup. Call or message to order.`

export const metadata: Metadata = {
  metadataBase: new URL("https://lady-d-flava.vercel.app"),
  title: {
    default: `${site.name}, Caribbean food in ${site.area.neighborhood}, ${site.area.borough}`,
    template: `%s | ${site.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = {
  themeColor: "#FBF0CF",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-plantain"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <RevealManager />
      </body>
    </html>
  )
}
