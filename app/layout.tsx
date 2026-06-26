import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";

// UI / body typeface.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Display serif used for headings — carries the "premium, calm" voice.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aqua Dunhinda — Luxury Living in Nature",
    template: "%s · Aqua Dunhinda",
  },
  description:
    "A boutique nature retreat above the Mahaweli River and Kotmale forest. Book your villa or chalet directly with Aqua Dunhinda for the best rate and a personal stay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
