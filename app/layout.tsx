import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johntran-code.com"),
  title: "John Tran Coaching — Design the life you actually want",
  description:
    "John Tran is a certified lifestyle coach helping driven people build sustainable habits, unshakeable confidence, and a life that feels as good as it looks.",
  openGraph: {
    title: "John Tran Coaching — Design the life you actually want",
    description:
      "John Tran is a certified lifestyle coach helping driven people build sustainable habits, unshakeable confidence, and a life that feels as good as it looks.",
    url: "https://johntran-code.com",
    siteName: "John Tran Coaching",
    images: [
      {
        url: "/john_bw.jpg",
        width: 1440,
        height: 1920,
        alt: "John Tran — Lifestyle Coach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Tran Coaching — Design the life you actually want",
    description:
      "John Tran is a certified lifestyle coach helping driven people build sustainable habits, unshakeable confidence, and a life that feels as good as it looks.",
    images: ["/john_bw.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <LanguageProvider>{children}</LanguageProvider>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
