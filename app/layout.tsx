import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dani Jardim - UX/UI Designer",
  description: "Portfolio de UX/UI Design focado em experiências digitais",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <style>{`
html {
  font-family: ${montserrat.style.fontFamily};
  --font-montserrat: ${montserrat.variable};
}
        `}</style>
      </head>
      <body className="font-montserrat antialiased">{children}</body>
    </html>
  )
}
