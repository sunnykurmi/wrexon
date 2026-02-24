"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/utils/Constants";

const steps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    desc: "We take time to understand your idea, business objectives, and technical requirements before any development begins.",
    points: [
      "Idea & requirement discussion",
      "Problem validation and feasibility",
      "Clear project scope definition",
    ],
  },
  {
    step: "02",
    title: "Planning & Strategy",
    desc: "We define a clear roadmap aligned with your budget, timeline, and long-term product vision.",
    points: [
      "Tech stack selection",
      "System and architecture planning",
      "Milestones and delivery timelines",
    ],
  },
  {
    step: "03",
    title: "Design & User Experience",
    desc: "Clean, intuitive, and user-focused designs that enhance trust and usability..",
    points: [
      "UI/UX wireframes and prototypes",
      "Design system setup",
      "Mobile-first responsive layouts",
    ],
  },
  {
    step: "04",
    title: "Development & Engineering",
    desc: "We build scalable, secure, and high-performance software using proven engineering best practices.",
    points: [
      "Agile, iterative development",
      "Clean maintainable code",
      "Regular progress updates and reviews",
    ],
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    desc: "Every feature is rigorously tested to ensure reliability, performance, and a smooth user experience.",
    points: [
      "Bug fixing and validation",
      "Performance and stability testing",
      "Client feedback and refinement",
    ],
  },
  {
    step: "06",
    title: "Launch & Ongoing Support",
    desc: "We deploy your product confidently and continue supporting you as it grows and evolves.",
    points: [
      "Production deployment",
      "Monitoring and issue resolution",
      "Continuous support and improvements",
    ],
  },
];

// export const metadata = {
//     title: "Our Development Process — Wrexon",
//     description:
//         "Discover Wrexon’s proven SaaS and software development process focused on scalability, security, and performance.",

//     keywords: [
//         "SaaS development process",
//         "Software development lifecycle",
//         "Agile SaaS development",
//         "Product engineering process",
//         "Enterprise software workflow"
//     ],

//     robots: "index, follow",

//     openGraph: {
//         title: "Our Development Process — Wrexon",
//         description:
//             "A transparent and scalable SaaS development process built for modern businesses.",
//         url: "https://sdaf.in/process",
//         siteName: "Wrexon",
//         type: "website",
//     },

//     twitter: {
//         card: "summary_large_image",
//         title: "Wrexon Development Process",
//         description:
//             "Our proven SaaS and enterprise software development workflow.",
//     },
// };

export default function ProcessPage() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <WebPageSchema
    name="Wrexon Development Process"
    description="Our proven SaaS and enterprise software development workflow."
    url={`${Const.ClientLink}/process`}
/>

      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <SectionHeading
            title="How We Work"
            subtitle="A transparent, step-by-step process built for clarity, trust, and measurable results"
          />
        </Reveal>

        {/* Timeline */}
        <div className="mt-28 relative">

          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/40 via-indigo-400/30 to-transparent" />

          <div className="space-y-24">
            {steps.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-full md:w-[45%] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                  >
                    <span className="text-purple-400 font-semibold tracking-widest text-sm">
                      STEP {item.step}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-white/70 leading-relaxed">
                      {item.desc}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-white/60">
                      {item.points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 shadow-lg" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let’s Build Your Product the Right Way
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Clear process. Honest communication. Scalable results.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-white"
            >
              Start Your Project
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
