import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#27262b",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://carlosperalta.dev"),
  title: {
    default: "Carlos Peralta | Ingeniero en Sistemas & Software Developer",
    template: "%s | Carlos Peralta",
  },
  description:
    "Portafolio profesional de Carlos Peralta. Ingeniero en sistemas, desarrollador de software full stack, creador de soluciones web, móviles, IoT y aplicaciones modernas.",
  keywords: [
    "Carlos Peralta",
    "Ingeniero de Sistemas",
    "Desarrollador de Software",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "ESP32",
    "IoT",
    "Barranquilla",
    "Colombia",
  ],
  authors: [{ name: "Carlos Peralta", url: "https://github.com/ElBuenCarlos19" }],
  creator: "Carlos Peralta",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://carlosperalta.dev",
    title: "Carlos Peralta | Ingeniero en Sistemas & Software Developer",
    description:
      "Portafolio profesional de Carlos Peralta. Soluciones web, móviles, IoT y aplicaciones modernas con Next.js, React y TypeScript.",
    siteName: "Carlos Peralta Portfolio",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Carlos Peralta - Portafolio Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Peralta | Ingeniero en Sistemas & Software Developer",
    description: "Portafolio profesional de desarrollo web, móvil e IoT.",
    images: ["/image.png"],
    creator: "@carlosperalta",
  },
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-white selection:bg-mint selection:text-dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
