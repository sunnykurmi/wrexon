import "./global.css"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";
import { CursorGlow } from "@/components/ui/CursorGlow";
import PageTransition from "@/components/ui/PageTransition";
import LenisScroll from './../components/LenisScroll';

export const metadata = {
  title: {
    default: "Wrexon Technology",
    template: "%s | Wrexon",
  },
  icons: {
    icon: "./logo.png",
  },
  description:
    "Wrexon is a premium SaaS technology company building scalable, secure, and enterprise-grade digital products.",
  keywords: [
    "Wrexon",
    "SaaS development",
    "Enterprise software",
    "Web applications",
    "Cloud solutions",
    "UI UX design",
  ],
  authors: [{ name: "Wrexon Technologies" }],
  creator: "Wrexon",
  metadataBase: new URL("https://wrexon.com"),
  openGraph: {
    title: "Wrexon — Premium SaaS & Digital Engineering",
    description:
      "We build scalable SaaS platforms, enterprise software, and high-performance digital products.",
    url: "https://wrexon.com",
    siteName: "Wrexon",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wrexon SaaS Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrexon — Premium SaaS & Digital Engineering",
    description:
      "Enterprise SaaS, cloud, and digital engineering solutions.",
    images: ["/images/og-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden" suppressHydrationWarning>
        <LenisScroll>
          <PageLoader />
          <CursorGlow />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </LenisScroll>
      </body>
    </html>
  );
}
