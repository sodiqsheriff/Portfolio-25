import type React from "react"
import type { Metadata } from "next"
import { Inter_Tight } from "next/font/google"  // Changed from Inter to Inter_Tight
import "./globals.css"

const interTight = Inter_Tight({ subsets: ["latin"] })  // Renamed variable

export const metadata: Metadata = {
  title: "Sodiq Sheriff | Full-Stack & Web3 Engineer",
  description:
    "Full-stack engineer specializing in Web3 systems, high-impact creative frontends, and scalable cloud architectures.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${interTight.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  )
}