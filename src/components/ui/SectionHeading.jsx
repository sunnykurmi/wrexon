
"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 text-white max-w-3xl font-bold text-3xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
