import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <ThemeProvider><LanguageProvider>
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-zinc-400 text-lg" style={
        {
          fontFamily: 'Helvetica, sans-serif',
          fontSize: 45
        }
      }>Maintenance in progress. Come back later.</p>
          </div>
        </LanguageProvider></ThemeProvider>
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
