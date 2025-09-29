import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Ustawi Gallery - Where Art Thrives",
    template: "%s | Ustawi Gallery",
  },
  description:
    "Discover and collect exceptional art from talented artists worldwide. Ustawi Gallery is a curated marketplace where creativity flourishes and collectors find their next masterpiece.",
  keywords: [
    "art gallery",
    "buy art online",
    "art marketplace",
    "contemporary art",
    "original artwork",
    "art collectors",
    "emerging artists",
    "fine art",
    "art prints",
    "African art",
    "online gallery",
    "art for sale",
  ],
  authors: [
    {
      name: "Kigen Meshack",
      url: "https://github.com/shacky-me",
    },
  ],
  creator: "Kigen Meshack",
  publisher: "Ustawi Gallery",
  applicationName: "Ustawi Gallery",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ustawi Gallery - Where Art Thrives",
    description:
      "Discover exceptional art from talented artists worldwide. A curated marketplace where creativity flourishes and collectors find their next masterpiece.",
    siteName: "Ustawi Gallery",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ustawi Gallery - Where Art Thrives",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ustawi Gallery - Where Art Thrives",
    description:
      "Discover exceptional art from talented artists worldwide. A curated marketplace where creativity flourishes.",
    creator: "@shackyme",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  category: "art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
