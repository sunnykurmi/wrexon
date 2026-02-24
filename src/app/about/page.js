"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";

// export const metadata = {
//   title: "About Wrexon — SaaS & Digital Engineering Experts",
//   description:
//     "Learn about Wrexon, a premium SaaS and digital engineering company focused on building scalable, secure, and high-performance software products.",

//   keywords: [
//     "About Wrexon",
//     "SaaS experts",
//     "Digital engineering company",
//     "Enterprise SaaS team",
//     "Software development experts",
//     "Cloud engineering company"
//   ],

//   robots: "index, follow",

//   openGraph: {
//     title: "About Wrexon — SaaS & Digital Engineering Experts",
//     description:
//       "Meet the team behind Wrexon — building scalable SaaS and enterprise-grade digital products.",
//     url: "https://sdaf.in/about",
//     siteName: "Wrexon",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "About Wrexon",
//     description:
//       "Meet the team behind Wrexon — SaaS & digital engineering experts.",
//   },
// };

export default function AboutPage() {
  return (
    <section className="relative py-32  bg-black overflow-hidden">

      <WebPageSchema
        name="About Wrexon"
        description="Learn about Wrexon, a premium SaaS and digital engineering company."
        url={`${Const.ClientLink}/about`}
      />

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <Reveal>
          <div>
            <SectionHeading
              title="About Wrexon"
              subtitle="Engineering scalable SaaS for the future"
            />

            <p className="mt-6 text-white/70 max-w-xl leading-relaxed text-lg">
              Wrexon is a premium SaaS technology company specializing in enterprise-grade platforms, cloud-native architectures, and performance-driven digital experiences.

              We partner with startups and enterprises to transform complex ideas into secure, reliable, and scalable products built for long-term success..
            </p>

            <p className="mt-4 text-white/60 max-w-xl leading-relaxed text-lg">
              We partner with startups and enterprises to transform complex
              ideas into reliable, scalable, and secure products.
            </p>
          </div>
        </Reveal>

        {/* RIGHT METRICS */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-8">
            <Metric value="10+" label="Enterprise Projects" />
            <Metric value="99.9%" label="Uptime Reliability" />
            <Metric value="4+" label="Years of Experience" />
            <Metric value="24/7" label="Client Support" />
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading subtitle="Why Wrexon Exists" />
          <p className=" text-white/70 leading-relaxed text-lg">
            Many businesses struggle with poorly built software, unclear development processes, and unreliable technical support. Wrexon was founded to solve these challenges by focusing on clarity, clean engineering, and long-term value rather than short-term delivery.
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading subtitle="Our Story" />
          <p className=" text-white/70 leading-relaxed text-lg">
            Wrexon began as a small initiative with a simple philosophy: build software the right way.

            Instead of rushing timelines or overpromising results, we focus on deeply understanding problems and delivering stable, maintainable solutions. As a growing startup, we prioritize learning, continuous improvement, and long-term partnerships over quick wins.
          </p>
          <p className=" text-white/70 leading-relaxed text-lg">
            As a growing startup, we value learning, improvement, and long-term
            partnerships more than short-term gains.
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 ">
        <Reveal>
          <SectionHeading subtitle="What We Believe In" />
          <ul className=" space-y-3 text-white/70 list-disc list-inside text-lg">
            <li>Honest communication and clear expectations</li>
            <li>Clean, maintainable, and scalable code</li>
            <li>Long-term thinking over shortcuts</li>
            <li>Building trust before selling services</li>
          </ul>
        </Reveal>
      </div>

      {/* HOW WE WORK */}
      <div className="max-w-7xl mx-auto px-6 ">
        <Reveal>
          <SectionHeading subtitle="How We Work" />
          <p className=" text-white/70 leading-relaxed text-lg">
            We collaborate closely with our clients from the first conversation through final delivery and beyond. Our approach is simple—understand the problem, plan with intention, build with quality, and provide continuous support.
          </p>
        </Reveal>
      </div>

      {/* FUTURE VISION */}
      <div className="max-w-7xl mx-auto px-6 ">
        <Reveal>
          <SectionHeading subtitle="Looking Ahead" />
          <p className=" text-white/70 leading-relaxed text-lg">
            Our vision is to grow Wrexon into a trusted global technology partner for startups and modern businesses. We are focused on steady growth, a strong engineering culture, and meaningful, long-term client relationships.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center"
    >
      <div className="text-4xl font-extrabold text-purple-400">{value}</div>
      <div className="mt-2 text-white/70 text-sm">{label}</div>
    </motion.div>
  );
}
