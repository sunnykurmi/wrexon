"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{ x: pos.x - 100, y: pos.y - 100 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="pointer-events-none fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-purple-400/20 blur-3xl z-50"
    />
  );
}
