import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
})
export const metadata: Metadata = {
  title: "Alex Morgan — Photography",
  description:
    "A quieter way of seeing. Portraits, landscapes, and editorial photography. Explore selected work and start a conversation.",
  robots: { index: false, follow: false },
}
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable + " " + serif.variable}>
      <body>{children}</body>
    </html>
  )
}
