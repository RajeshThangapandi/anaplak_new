import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Reddit_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})
const redditSans = Reddit_Sans({
  subsets: ["latin"],
  variable: "--font-reddit-sans",
  display: "swap",
})

export const metadata: Metadata = {
  /* Updated metadata for ANAPLAK Art and Glam Salon */
  title: "ANAPLAK Art and Glam Salon | Premium Hair & Beauty Services",
  description:
    "ANAPLAK Art and Glam Salon - Premium hair styling, cuts, coloring, and beauty services in Maduravoyal, Chennai. Expert stylists providing luxury grooming experiences.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
    themeColor: "#0a0f0cff",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${redditSans.variable} scroll-smooth`}>
      <body className="font-dm-sans antialiased bg-black text-gray-100">{children}</body>
    </html>
  )
}
