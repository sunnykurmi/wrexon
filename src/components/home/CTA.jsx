"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticeButton";

export default function CTA() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            Build Something{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Exceptional
            </span>
          </motion.h2>
        </Reveal>

        <Reveal>
          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg">
            We help startups and enterprises design, build, and scale high-performance digital products with speed, precision, and reliability.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <MagneticButton>
              Start a Project
            </MagneticButton>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              title="Book a Demo"
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-white transition"
            >
              Book a Demo
            </motion.a>
          </div>
        </Reveal>

        {/* Trust signals */}
        <Reveal>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/50">
            <span>⚡ Enterprise-Ready</span>
            <span>🔒 Secure by Design</span>
            <span>🚀 Built to Scale</span>
            <span>🎯 Results-Driven</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
