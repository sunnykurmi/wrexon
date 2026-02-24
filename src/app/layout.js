import "./global.css"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageLoader } from "@/components/ui/PageLoader";
import { CursorGlow } from "@/components/ui/CursorGlow";
import PageTransition from "@/components/ui/PageTransition";
import LenisScroll from './../components/LenisScroll';
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import { Const } from "@/utils/Constants";


export const metadata = {
  metadataBase: new URL(Const?.ClientLink || ""),

  title: {
    default: Const.Brand,
    template: "%s | " + Const.Brand,
  },

  description:
    "Wrexon is a premium SaaS technology company building scalable, secure, and enterprise-grade digital products.",

  keywords: [
    "Wrexon",
    "Wrexon SaaS",
    "SaaS development company",
    "Enterprise software development",
    "Custom software development",
    "Digital engineering services",
    "Cloud-native application development",
    "Scalable web applications",
    "B2B SaaS solutions",
    "Startup SaaS development",
    "Product engineering company",
    "UI UX design agency",
    "Web application development",
    "Cloud solutions provider",
    "Secure enterprise software",
    "Full-stack development services"
  ],

  authors: [{ name: Const.Brand }],
  publisher: Const.Brand,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "/", // auto-resolves via metadataBase
    languages: {
      "en-IN": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: Const.Brand,
    title: Const.Brand,
    description:
      "Wrexon is a premium SaaS technology company building scalable, secure, and enterprise-grade digital products.",
    url: Const.ClientLink,
    images: [
      {
        url: "/favicon/favicon.ico", // fallback OG image
        width: 1200,
        height: 630,
        alt: Const.Brand,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: Const.Brand,
    description:
      "Wrexon is a premium SaaS technology company building scalable, secure, and enterprise-grade digital products.",
    images: ["/favicon/favicon.ico"],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/favicon/site.webmanifest",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden" suppressHydrationWarning>
        <OrganizationSchema />
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
