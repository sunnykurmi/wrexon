
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";
import AboutSectionPage from "@/components/section/AboutSectionPage";

export const metadata = {
  title: "About Wrexon — SaaS & Digital Engineering Experts",
  description:
    "Learn about Wrexon, a premium SaaS and digital engineering company focused on building scalable, secure, and high-performance software products.",

  keywords: [
    "About Wrexon",
    "SaaS experts",
    "Digital engineering company",
    "Enterprise SaaS team",
    "Software development experts",
    "Cloud engineering company"
  ],

  robots: "index, follow",

  openGraph: {
    title: "About Wrexon — SaaS & Digital Engineering Experts",
    description:
      "Meet the team behind Wrexon — building scalable SaaS and enterprise-grade digital products.",
    url: "https://www.wrexon.comabout",
    siteName: "Wrexon",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Wrexon",
    description:
      "Meet the team behind Wrexon — SaaS & digital engineering experts.",
  },
};

export default function AboutPage() {
  return (
    <section className="relative py-32  bg-black overflow-hidden">

      <WebPageSchema
        name="About Wrexon"
        description="Learn about Wrexon, a premium SaaS and digital engineering company."
        url={`${Const.ClientLink}/about`}
      />
      <AboutSectionPage/>
    </section>
  );
}

