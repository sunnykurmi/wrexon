import ProcessSectionPage from "@/components/section/ProcessSectionPage";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";

export const metadata = {
    title: "Our Development Process — Wrexon",
    description:
        "Discover Wrexon’s proven SaaS and software development process focused on scalability, security, and performance.",

    keywords: [
        "SaaS development process",
        "Software development lifecycle",
        "Agile SaaS development",
        "Product engineering process",
        "Enterprise software workflow"
    ],

    robots: "index, follow",

    openGraph: {
        title: "Our Development Process — Wrexon",
        description:
            "A transparent and scalable SaaS development process built for modern businesses.",
        url: "https://www.wrexon.comprocess",
        siteName: "Wrexon",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Wrexon Development Process",
        description:
            "Our proven SaaS and enterprise software development workflow.",
    },
};

export default function ProcessPage() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <WebPageSchema
        name="Wrexon Development Process"
        description="Our proven SaaS and enterprise software development workflow."
        url={`${Const.ClientLink}/process`}
      />
      <ProcessSectionPage/>
    </section>
  );
}
