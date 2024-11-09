import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Viora India",
  description: "Coming soon",
  metadataBase: new URL(
    process.env.NEXT_PUBIC_BASE_URL || "https://www.vioraindia.in"
  ),
  openGraph: {
    images: `/og.jpg`,
    title: "Viora India",
    description: "Coming soon",
    url: new URL(process.env.NEXT_PUBIC_BASE_URL || "https://www.vioraindia.in"),
    type: "website",
    siteName: "Viora India",
  },
  twitter: {
    title: "Viora India",
    description: "Coming soon",
    card: "summary_large_image",
    images: `/og.jpg`,
    site: "Viora India",
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
