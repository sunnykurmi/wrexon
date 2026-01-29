"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticeButton";
import { motion } from "framer-motion";

const metadata = {
  title: "Contact",
  description:
    "Contact Wrexon to build your next SaaS or enterprise-grade digital product.",
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form[0].value,
    email: form[1].value,
    company: form[2].value,
    message: form[3].value,
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Message sent successfully");
    form.reset();
  } else {
    alert("Failed to send message");
  }
};

export default function ContactPage() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <Reveal>
          <div>
            <SectionHeading
              title="Contact Wrexon"
              subtitle="Let’s build something powerful together"
            />

            <p className="mt-6 text-gray-400 max-w-md">
              Tell us about your project. Our team will respond within
              24 hours with a strategic plan tailored to your needs.
            </p>

            <div className="mt-10 space-y-4 text-gray-400">
              <p>📍 Enterprise SaaS Solutions</p>
              <p>📧 wrexon1726@gmail.com</p>
              <p>⚡ Fast response • Secure • Scalable</p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT FORM */}
        <Reveal delay={0.2}>
          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
          >
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Company (optional)" />
            
            <textarea
              rows="4"
              placeholder="Tell us about your project"
              className="w-full p-4 bg-black/40 border border-white/10 rounded-xl text-white outline-none focus:border-purple-500 transition"
            />

            <div className="pt-4">
              <MagneticButton>Send Message</MagneticButton>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}

/* Reusable Input */
function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-4 bg-black/40 border border-white/10 rounded-xl text-white outline-none focus:border-purple-500 transition"
    />
  );
}
