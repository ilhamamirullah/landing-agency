"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FooterData } from "@/types";

// ✅ Static fallback
const defaultFooterData: FooterData = {
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Clients", href: "#clients" },
    { label: "Careers", href: "#career" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
  socialLinks: [
    { label: "FACEBOOK", href: "#" },
    { label: "LINKEDIN", href: "#" },
    { label: "INSTAGRAM", href: "#" },
  ],
  email: "brand@gmail.com",
  phone: "08123456789",
};

// ✅ Props interface
interface Props {
  data?: FooterData | null;
}

export default function FooterSection({ data }: Props) {
  const footer = data ?? defaultFooterData;
  const { ref, isInView } = useScrollReveal(0.05);

  return (
    <div ref={ref} className="bg-white overflow-hidden">
      <footer
        className={`bg-black text-white footer-reveal ${isInView ? "in-view" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-10 md:pb-12">
          {/* Newsletter Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-md">
              Join Our Newsletter to Keep up to Date With Us
            </h2>

            {/* Email Input + Subscribe — gap between field & button */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:max-w-xl">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 min-w-0 sm:min-w-[280px] bg-transparent border border-gray-600 rounded-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="bg-brand-red hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-md text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-10 md:mt-12" />

          {/* Footer Content */}
          <div className="mt-10 md:mt-12">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
              {/* Left: Logo + Contact */}
              <div className="flex-shrink-0">
                {/* Logo */}
                <div className="border-2 border-white px-4 py-1.5 font-bold text-lg inline-block mb-6">
                  Logo
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Email Address</p>
                    <p className="text-white text-sm font-medium">
                      {footer.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Phone Number</p>
                    <p className="text-white text-sm font-medium">
                      {footer.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Navigation Links — aligned right */}
              <div>
                {/* Desktop: 3 columns, right-aligned, tighter gaps */}
                <div className="hidden lg:grid grid-cols-3 gap-x-16 gap-y-4">
                  {footer.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300 whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Mobile: single column */}
                <div className="lg:hidden flex flex-col gap-3">
                  {footer.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="border-t border-gray-800 mt-10 md:mt-12" />

          {/* Bottom Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-xs sm:text-sm">
              ©2022&nbsp;
              <span className="text-white font-bold">brand</span>
              &nbsp;All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {footer.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-brand-red hover:text-red-400 text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}