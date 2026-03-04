"use client";

import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Client & Partners", href: "#clients" },
  { label: "Career", href: "#career" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const container = document.querySelector(".snap-container");
        if (container) {
          setScrolled(container.scrollTop > 50);
        }
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    const container = document.querySelector(".snap-container");

    window.addEventListener("scroll", checkScroll);
    if (container) {
      container.addEventListener("scroll", checkScroll);
    }

    return () => {
      window.removeEventListener("scroll", checkScroll);
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      targetElement.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-from-top ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex-shrink-0"
          >
            <div
              className={`border-2 px-4 py-1.5 font-bold text-lg transition-colors duration-500 ${
                scrolled
                  ? "border-brand-red text-brand-red"
                  : "border-white text-white"
              }`}
            >
              Logo
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-500 hover:text-brand-red ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Us + Hamburger */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-brand-red hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-300"
            >
              Contact Us
            </a>

            {/* Hamburger Button */}
                        {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col items-end justify-center w-9 h-9 space-y-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-7 h-[3px] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[9px] w-7" : ""
                } ${scrolled ? "bg-brand-red" : "bg-white"}`}
              />
              <span
                className={`block w-7 h-[3px] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                } ${scrolled ? "bg-brand-red" : "bg-white"}`}
              />
              <span
                className={`block w-4 h-[3px] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[9px] w-7" : ""
                } ${scrolled ? "bg-brand-red" : "bg-white"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 md:top-20 transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`relative bg-white shadow-xl transition-transform duration-500 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-800 hover:text-brand-red hover:bg-red-50 font-medium py-3 px-3 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}