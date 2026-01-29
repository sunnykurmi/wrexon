"use client";

import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{ transformOrigin: "left" }}
      className="fixed inset-0 z-[9999] bg-black"
    />
  );
}
