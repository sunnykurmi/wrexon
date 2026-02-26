import ContactSectionPage from "@/components/section/ContactSectionPage";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";

export const metadata = {
  title: "Contact WREXON | SaaS & Software Experts",
  description:
    "Get in touch with Wrexon to build scalable SaaS, enterprise software, and cloud-native digital products.",

  keywords: [
    "Contact Wrexon",
    "Hire SaaS developers",
    "Enterprise software consultation",
    "Custom software company contact",
    "SaaS development inquiry"
  ],

  robots: "index, follow",

  openGraph: {
    title: "Contact Wrexon",
    description:
      "Talk to our SaaS and digital engineering experts.",
    url: "https://www.wrexon.comcontact",
    siteName: "Wrexon",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Wrexon",
    description:
      "Talk to our SaaS and digital engineering experts.",
  },
  other: {
    "image_src": "https://www.wrexon.com/images/og.png",
  }
};

export default function ContactPage() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <WebPageSchema
        name="Contact Wrexon"
        description="Get in touch with Wrexon’s SaaS and digital engineering experts."
        url={`${Const.ClientLink}/contact`}
      />
      <ContactSectionPage />
    </section>
  );
}


