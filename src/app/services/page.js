import ServiceSectionPage from "@/components/section/ServiceSectionPage";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";

export const metadata = {
  title: "SaaS & Software Development Services — Wrexon",
  description:
    "Explore Wrexon’s SaaS, enterprise software, cloud engineering, and UI UX design services built for scale and performance.",

  keywords: [
    "SaaS development services",
    "Enterprise software services",
    "Custom software development",
    "Cloud engineering services",
    "UI UX design services",
    "Product engineering company",
    "B2B SaaS solutions"
  ],

  robots: "index, follow",

  openGraph: {
    title: "SaaS & Software Development Services — Wrexon",
    description:
      "Premium SaaS, cloud, and digital engineering services tailored for modern businesses.",
    url: "https://www.wrexon.comservices",
    siteName: "Wrexon",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wrexon Services",
    description:
      "SaaS, cloud, and enterprise software development services.",
  },
};

export default function ServicesPage() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <WebPageSchema
        name="Wrexon Services"
        description="SaaS, cloud engineering, and enterprise software development services."
        url={`${Const.ClientLink}/services`}
      />
      <ServiceSectionPage/>
    </section>
  );
}


