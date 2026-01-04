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
  title: "NotchDrop - Transform Your MacBook's Notch",
  description:
    "Drop files, control music, record screen, and more - all from your MacBook's notch. A powerful productivity hub for macOS.",
  keywords: [
    "macOS",
    "MacBook",
    "notch",
    "productivity",
    "file management",
    "screen recording",
    "clipboard manager",
  ],
  authors: [{ name: "NotchDrop" }],
  openGraph: {
    title: "NotchDrop - Transform Your MacBook's Notch",
    description:
      "Drop files, control music, record screen, and more - all from your MacBook's notch.",
    url: "https://notchdrop.com",
    siteName: "NotchDrop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotchDrop - Transform Your MacBook's Notch",
    description:
      "Drop files, control music, record screen, and more - all from your MacBook's notch.",
    creator: "@notchdrop",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
