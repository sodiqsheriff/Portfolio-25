import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sodiq Sheriff | MERN Stack Developer & 3D Enthusiast",
  description:
    "MERN Stack Developer and 3D Enthusiast specializing in React, Next.js, TypeScript, and modern web technologies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sora bg-primary-bg text-primary-white antialiased">{children}</body>
    </html>
  )
}
