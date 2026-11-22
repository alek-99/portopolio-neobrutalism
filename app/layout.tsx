
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Ganti dengan domain portfolio yang sebenarnya.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Yudi | Web Developer & Creative Developer Portfolio",
    template: "%s | Yudi Portfolio",
  },

  description:
    "Portfolio resmi Yudi, seorang Web Developer yang berfokus pada pengembangan website modern, responsif, interaktif, dan inovatif. Jelajahi berbagai proyek dan karya pengembangan web.",

  applicationName: "Yudi Portfolio",

  authors: [{ name: "Yudi" }],
  creator: "Yudi",
  publisher: "Yudi",

  keywords: [
    "Yudi",
    "Portfolio Yudi",
    "Yudi Web Developer",
    "Web Developer Indonesia",
    "Frontend Developer",
    "Full Stack Developer",
    "Creative Developer",
    "Website Developer",
    "Jasa Pembuatan Website",
    "Personal Portfolio",
    "Next.js Developer",
    "Modern Website Development",
  ],

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "WvItYbOQve4oCwAfIDp1r9eWBo1tW4KZY3r-SlfbXAc",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Yudi Portfolio",
    title: "Yudi | Web Developer & Creative Developer",
    description:
      "Jelajahi portfolio Yudi, Web Developer yang membangun pengalaman digital modern, kreatif, responsif, dan inovatif.",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Yudi - Web Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yudi | Web Developer Portfolio",
    description:
      "Personal portfolio Yudi - Web Developer & Creative Developer.",
    images: ["/images/profile.png"],
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
