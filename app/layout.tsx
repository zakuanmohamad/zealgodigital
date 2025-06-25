import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZealGoDigital - Transformasi Digital Malaysia",
  description:
    "Rakan kongsi terpercaya dalam transformasi digital perniagaan anda. POS System, QR Payment, CCTV, Online Marketing dan lebih lagi.",
  keywords: "digital transformation, POS system, QR payment, CCTV, online marketing, Malaysia, Kelantan",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ms">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
