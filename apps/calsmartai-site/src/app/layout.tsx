import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CalSmart AI — Point. Snap. Logged. | AI Calorie Tracker",
  description: "Track your calories effortlessly with AI. Snap a photo of any meal and get instant nutrition info. AI-powered food recognition, barcode scanner, voice logging, and more.",
  keywords: ["calorie tracker", "AI food recognition", "nutrition app", "meal tracking", "calorie counter", "macro tracker", "health app"],
  authors: [{ name: "WildCat Trio Limited" }],
  openGraph: {
    title: "CalSmart AI — Point. Snap. Logged.",
    description: "Track your calories effortlessly with AI. Snap a photo of any meal and get instant nutrition info.",
    url: "https://calsmartai.wildcattrio.com",
    siteName: "CalSmart AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalSmart AI — Point. Snap. Logged.",
    description: "Track your calories effortlessly with AI. Snap a photo of any meal and get instant nutrition info.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
