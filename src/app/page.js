import Hero from "@/components/home/Hero";
import Service from "@/components/home/Services";
import Reveal from "@/components/ui/Reveal";
import Process from "@/components/home/Process";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";

export const metadata = {
  title: "Wrexon — Premium SaaS & Digital Engineering",
  description:
    "Wrexon is a premium SaaS technology company delivering scalable, secure, and enterprise-grade digital products for modern businesses.",

  keywords: [
    "Wrexon",
    "SaaS development company",
    "Enterprise software development",
    "Digital engineering services",
    "Cloud-native applications",
    "Custom software development",
    "Scalable web applications",
    "UI UX design agency",
    "Startup SaaS solutions",
    "B2B SaaS development",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Wrexon — Premium SaaS & Digital Engineering",
    description:
      "Premium SaaS & digital engineering company building scalable, secure, enterprise-grade software solutions.",
    url: "https://www.wrexon.com",
    siteName: "Wrexon",
    type: "website",
    images: [
      {
        url: "https://www.wrexon.com/images/og.png",
        width: 1200,
        height: 630,
        alt: "Wrexon — Premium SaaS & Digital Engineering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wrexon — Premium SaaS & Digital Engineering",
    description:
      "Premium SaaS & digital engineering company building enterprise-grade software solutions.",
    images: ["https://www.wrexon.com/images/og.png"],
  },
};

export default function Home() {

    return (
        <main className="flex flex-col gap-32 overflow-x-hidden">
            <WebPageSchema
                name="Wrexon — Premium SaaS & Digital Engineering"
                description="Wrexon is a premium SaaS technology company building scalable, secure, and enterprise-grade digital products."
                url={`${Const.ClientLink}/`}
            />

            <Reveal><Hero /></Reveal>
            <Reveal><About /></Reveal>
            <Reveal><Service /></Reveal>
            <Reveal><Process /></Reveal>
            <Reveal><WhyChooseUs /></Reveal>
            <Reveal><CTA /></Reveal>
        </main>
    );
}