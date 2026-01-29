"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticeButton";

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setLoaded(true);
    const p = Array.from({ length: 30 }).map(() => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      xOffset: Math.random() * 140 - 70,
      yOffset: Math.random() * 140 - 70,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 0.5,
    }));
    setParticles(p);
  }, []);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25;
    const y = (e.clientY / window.innerHeight - 0.5) * 25;
    setPos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black  overflow-hidden gap-3"
    >
      {/* Ambient Radial Glow */}
      <motion.div
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        className="absolute w-[140%] h-[140%] rounded-full bg-gradient-radial from-purple-700/25 to-transparent blur-3xl"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* WR Monogram Logo */}
      {loaded && (
        <motion.div
          className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/logo.png"
            alt="Wrexon Logo"
            width={700}
            height={700}
            priority
            className="w-40 md:w-72 lg:w-96 h-auto"
          />
        </motion.div>
      )}

      {/* Particle Effects */}
      {loaded &&
        particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none bg-white/20 rounded-full"
            style={{ width: `${p.width}px`, height: `${p.height}px` }}
            animate={{
              x: [0, p.xOffset, 0],
              y: [0, p.yOffset, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 via-white to-purple-600 bg-clip-text text-transparent drop-shadow-2xl text-center"
      >
        WREXON
      </motion.h1>

      {/* Tagline */}
      <motion.span
        animate={{ rotateY: [0, 15, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="block  text-2xl md:text-3xl lg:text-3xl font-semibold bg-purple-500 bg-clip-text text-transparent drop-shadow-3xl text-center"
      >
        Trusted by Startups, Built with Modern Technology, Delivered Fast.
      </motion.span>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className=" z-10"
      >
        <MagneticButton>Get Started</MagneticButton>
      </motion.div>

      {/* Pulse Glow */}
      <motion.div
        className="absolute w-[55%] h-[25%] bg-purple-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
        className="absolute translate-y-36 w-52 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-500"
      />

    </section>
  );
}
