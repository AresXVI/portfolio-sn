import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Inter } from 'next/font/google'
import Providers from "./Provider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: { 
    default: "Frontend Developer | React, Next.js", 
    template: "%s | SN"
  },
  description: "Building modern web experiences with React and Next.js. Focused on performance, clean UI and great user experience.",

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: "https://satymbaev-dev.vercel.app"
  },

  openGraph: {
    title: "Frontend Developer | React, Next.js",
    description: "Building modern web experiences with React and Next.js. Focused on performance, clean UI and great user experience.",
    images: [{
      url: "/img/og-image.png",
      width: 1200,
      height: 630,
      alt: "Nurmukhammedaaly Satymbaev - Frontend Developer"
    }]
  },

  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer | React, Next.js",
    description: "Building modern web experiences with React and Next.js. Focused on performance, clean UI and great user experience.",
    images: ['/img/og-image.png']
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

async function getInitialMessages() {
  try {
    const fs = await import("fs/promises");
    const path = await import("path");
    const filePath = path.join(process.cwd(), "public", "locales", "en.json");
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to load messages:", error);
    return {};
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialMessages = await getInitialMessages();
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body>
        <Providers initialMessages={initialMessages}>
          {children}
        </Providers></body>
    </html>
  );
}
