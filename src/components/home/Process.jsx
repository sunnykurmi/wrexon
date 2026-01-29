"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We take time to understand your business goals, target users, and technical requirements before any development begins.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    desc: "We craft intuitive user experiences and scalable system architecture aligned with your product vision and future growth.",
  },
  {
    step: "03",
    title: "Development & Quality Assurance",
    desc: "We develop in structured iterations, continuously testing to ensure performance, security, and long-term reliability.",
  },
  {
    step: "04",
    title: "Launch & Continuous Growth",
    desc: "We deploy seamlessly and continue supporting your product as it scales, evolves, and adapts to new needs.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-32 w-80 h-80 bg-indigo-600/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            How We Work
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
            A clear, transparent process focused on delivering reliable, high-quality software with confidence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-28">

          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/40 to-transparent" />

          <div className="space-y-24">
            {steps.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative w-full md:w-[45%] p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500/40 transition"
                  >
                    <span className="text-sm text-purple-400 tracking-widest font-semibold">
                      STEP {item.step}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 shadow-lg" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
