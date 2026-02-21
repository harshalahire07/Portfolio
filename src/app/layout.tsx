import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshalahire.dev"),
  title: {
    default: "Harshal Ahire — Full Stack Engineer",
    template: "%s | Harshal Ahire",
  },
  description:
    "Computer Science Engineer specializing in Django, Full Stack Development, and Scalable Web Systems. Open to internship and full-time opportunities.",
  keywords: [
    "Harshal Ahire",
    "Full Stack Developer",
    "Django Developer",
    "Python Developer",
    "Computer Science Engineer",
    "Portfolio",
    "Web Developer India",
  ],
  authors: [{ name: "Harshal Ahire" }],
  creator: "Harshal Ahire",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshalahire.dev",
    title: "Harshal Ahire — Full Stack Engineer",
    description:
      "CS Engineer building scalable web systems with Django & modern frameworks.",
    siteName: "Harshal Ahire Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harshal Ahire — Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Ahire — Full Stack Engineer",
    description:
      "CS Engineer building scalable web systems with Django & modern frameworks.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[#0f172a] text-slate-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
