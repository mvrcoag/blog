import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Marco A. García - Full Stack Developer & Systems Architect",
    template: "%s | Marco A. García",
  },
  description: "Full Stack Developer & Systems Architect specialized in clean architectures and design patterns. Experience in TypeScript, Go, Python. Data Science & AI certified.",
  keywords: ["Full Stack Developer", "Systems Architect", "TypeScript", "Go", "Python", "Clean Architecture", "Hexagonal Architecture", "CQRS", "Data Science", "AI", "Open Source"],
  authors: [{ name: "Marco A. García", url: baseUrl }],
  creator: "Marco A. García",
  openGraph: {
    title: "Marco A. García - Full Stack Developer & Systems Architect",
    description: "Full Stack Developer & Systems Architect especializado en arquitecturas limpias y patrones de diseño. Experiencia en TypeScript, Go, Python.",
    url: baseUrl,
    siteName: "Marco A. García",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco A. García - Full Stack Developer & Systems Architect",
    description: "Full Stack Developer & Systems Architect specialized in clean architectures and design patterns.",
    creator: "@mvrcoag",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
