import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { globalSchemas } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <JsonLd data={globalSchemas()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
