import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
