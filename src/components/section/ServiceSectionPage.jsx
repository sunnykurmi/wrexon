"use client";

import React from 'react'
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";

function ServiceSectionPage() {

  const services = [
    {
      title: "SaaS Product Development",
      icon: "🚀",
      desc: "We help startups and businesses build scalable SaaS products — from idea validation to production-ready platforms.",
      points: [
        "MVP & full-scale SaaS development",
        "Authentication systems, dashboards & APIs",
        "Secure, scalable system architecture",
      ],
    },
    {
      title: "Web & Mobile Applications",
      icon: "💻",
      desc: "Custom web and mobile applications built for performance, usability, and long-term business growth.",
      points: [
        "Business & customer-facing applications",
        "Admin panels & data dashboards",
        "Modern, responsive user interfaces",
      ],
    },
    {
      title: "Cloud & DevOps Solutions",
      icon: "☁️",
      desc: "We deploy, optimize, and manage cloud infrastructure to ensure reliability, security, and scalability.",
      points: [
        "Production-ready cloud deployment",
        "CI/CD pipeline setup",
        "Performance monitoring and optimization",
      ],
    },
    {
      title: "UI/UX & Brand Engineering",
      icon: "🎨",
      desc: "Clean, modern design systems that enhance user experience and strengthen brand identity.",
      points: [
        "UI/UX design systems",
        "Mobile-first and responsive layouts",
        "Consistent, premium brand design",
      ],
    },
    {
      title: "Startup MVP Consulting",
      icon: "🧠",
      desc: "Guidance for early-stage teams to make the right product and technical decisions from day one.",
      points: [
        "Feature prioritization and roadmap planning",
        "Tech stack selection",
        "Cost-efficient development strategy",
      ],
    },
    {
      title: "Maintenance & Growth Support",
      icon: "🔧",
      desc: "Ongoing support to keep your product stable, secure, and continuously improving..",
      points: [
        "Bug fixes and regular updates",
        "New feature development",
        "Long-term technical support",
      ],
    },
  ];

  return (
    <div>
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <SectionHeading
            title="Our Services"
            subtitle="Practical engineering solutions designed for startups and growing businesses"
          />
        </Reveal>

        {/* Services Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Not sure which service fits your idea?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Tell us about your project and we’ll help you choose the right path.
            </p>

            <Link
              title="Contact Wrexon"
              href="/contact"
              className="inline-block mt-8 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-white"
            >
              Contact Wrexon
            </Link>
          </div>
        </Reveal>

      </div>
    </div>
  )
}

export default ServiceSectionPage

function ServiceCard({ title, desc, icon, points }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          {desc}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-white/60">
          {points.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}