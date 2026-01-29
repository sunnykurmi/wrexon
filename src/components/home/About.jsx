"use client";

import { motion } from "framer-motion";
import { FaLock, FaRocket, FaBuilding } from "react-icons/fa";

const features = [
  {
    title: "Enterprise-Grade",
    desc: "Robust architecture built to scale with your business growth.",
    icon: <FaBuilding size={32} className="text-purple-400" />
  },
  {
    title: "Modern Technology",
    desc: "Powered by cutting-edge stacks, automation, and AI-driven logic.",
    icon: <FaRocket size={32} className="text-indigo-400" />
  },
  {
    title: "Secure by Design",
    desc: "Security-first approach with best practices and compliance.",
    icon: <FaLock size={32} className="text-pink-400" />
  },
];

export default function About() {
  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">

      {/* Soft background glow shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Engineered for the Next Generation of SaaS
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-white/70"
        >
          Wrexon builds secure, scalable, and intelligent software that helps businesses grow faster,We design enterprise-ready SaaS platforms that scale, adapt, and perform.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500/40 shadow-lg cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.2, type: "spring", stiffness: 150 }}
                className="mb-6 flex justify-center"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold tracking-wide text-white mb-2">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
