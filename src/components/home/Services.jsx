"use client";

import { motion } from "framer-motion";
import { FaCloud, FaRobot, FaMobileAlt, FaServer, FaPaintBrush, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS platforms engineered for scalability, performance, and long-term reliability.",
    icon: <FaMobileAlt size={32} className="text-purple-400" />,
  },
  {
    title: "Custom Software Solutions",
    desc: "Enterprise-grade software tailored to your business processes and operational goals.",
    icon: <FaCogs size={32} className="text-indigo-400" />,
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud setup, automation, and deployment solutions for secure and efficient operations.",
    icon: <FaCloud size={32} className="text-pink-400" />,
  },
  {
    title: "AI & Automation",
    desc: "Intelligent automation, AI-powered integrations, and data-driven decision systems.",
    icon: <FaRobot size={32} className="text-purple-500" />,
  },
  {
    title: "UI/UX Engineering",
    desc: "Modern, responsive, and user-centric interfaces optimized for engagement and conversion.",
    icon: <FaPaintBrush size={32} className="text-indigo-300" />,
  },
  {
    title: "Maintenance & Scaling",
    desc: "Continuous optimization, performance monitoring, and scalable growth support.",
    icon: <FaServer size={32} className="text-pink-500" />,
  },
];

export default function Service() {
  return (
    <section className="relative w-full py-32 bg-black text-white overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Services
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-white/70">
            Complete solutions to build, scale, and secure modern digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.15, duration: 0.7, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 
                         hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 cursor-pointer shadow-lg"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.15, type: "spring", stiffness: 150 }}
                className="mb-6 flex justify-center"
              >
                {service.icon}
              </motion.div>

              {/* Accent line */}
              <motion.div
                className="w-12 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.8, ease: "easeInOut" }}
              />

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold tracking-wide text-white mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
