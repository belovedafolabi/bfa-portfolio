import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Afolabi F. Beloved | Full-Stack Developer & Technical Lead",
  description: "Seasoned full-stack developer specializing in React/Next.js, TypeScript, and modern web architectures. Building performant digital experiences with a focus on UI/UX excellence.",
  keywords: [
    "full-stack developer",
    "react developer",
    "next.js expert",
    "typescript developer",
    "web development",
    "UI/UX design",
    "frontend development",
    "backend integration",
    "responsive design",
    "Abuja developer",
    "Nigeria tech talent",
    "web performance optimization",
    "modern web applications",
    "technical leadership",
    "software architecture"
  ],
  authors: [{ name: "Afolabi F. Beloved", url: "https://belovedafolabi.com" }],
  creator: "Afolabi F. Beloved",
  publisher: "Afolabi F. Beloved",
  applicationName: "Beloved Afolabi Portfolio",
  openGraph: {
    title: "Afolabi F. Beloved | Full-Stack Developer Portfolio",
    description: "Crafting modern web experiences with React, TypeScript, and cutting-edge technologies. Abuja-based technical lead specializing in full-stack solutions.",
    type: "website",
    url: "https://belovedafolabi.com",
    images: ["/images/bfa-OG.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@our_uncle",
    creator: "@our_uncle",
    title: "Full-Stack Development Expertise | Afolabi F. Beloved",
    description: "React/Next.js specialist building performant web applications with robust backend systems. Open for collaborations and complex projects.",
    images: ["/images/bfa-OG.png"],
  },
  generator: 'Next.js',
  metadataBase: new URL('https://belovedafolabi.com'),
  alternates: {
    canonical: '/',
  },
  themeColor: '#FFBB5C', // Amber-600 from your design system
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} bg-dark-121212`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'