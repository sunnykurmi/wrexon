"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Enterprise-Grade Architecture",
    desc: "Robust, enterprise-ready systems engineered for performance, reliability, and long-term scalability.",
  },
  {
    title: "Product-First Mindset",
    desc: "We think like product owners, not vendors—prioritizing usability, growth, and long-term value.",
  },
  {
    title: "Modern Technology Stack",
    desc: "Built with modern frameworks, automation, and intelligent systems to deliver faster, smarter solution.",
  },
  {
    title: "Security & Compliance",
    desc: "Security-first development following industry best practices, compliance standards, and strict data protection.",
  },
  {
    title: "Performance-Driven Engineering",
    desc: "Highly optimized applications designed for speed, stability, and high availability.",
  },
  {
    title: "Dedicated Partnership",
    desc: "We operate as an extension of your team, supporting you from ideation through scaling and beyond.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-32 bg-black text-white overflow-hidden">

      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Why Choose <span className="text-purple-400">Wrexon</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/70">
            A trusted technology partner committed to building, scaling, and securing your digital products.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 
                         hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              {/* Glow accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-all duration-500 pointer-events-none" />

              <h3 className="relative text-xl font-semibold tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="relative text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
