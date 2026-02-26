"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.18),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-14 lg:grid-cols-4">
        
        {/* BRAND */}
        <Reveal>
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-extrabold text-white tracking-wide"
            >
              <span className="text-purple-400">W</span>rexon
            </motion.div>

            <p className="mt-4 text-white/60 max-w-xs">
              Building scalable, secure, and enterprise-grade SaaS products for
              modern businesses.
            </p>
          </div>
        </Reveal>

        {/* COMPANY */}
        <Reveal delay={0.1}>
          <FooterColumn title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/process">Process</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>
        </Reveal>

        {/* LEGAL */}
        <Reveal delay={0.2}>
          <FooterColumn title="Legal">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms & Conditions</FooterLink>
          </FooterColumn>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div>
            <h4 className="text-white font-semibold mb-4">
              Start a project
            </h4>
            <p className="text-white/60 mb-6">
              Ready to build something exceptional?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="inline-block px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-semibold"
            >
              Contact Us
            </motion.a>
          </div>
        </Reveal>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Wrexon. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        title={children}
        className="text-white/60 hover:text-purple-400 transition"
      >
        {children}
      </Link>
    </li>
  );
}
