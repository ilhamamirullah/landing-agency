"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import CTALeadSection from "@/components/CTALeadSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { servicesData } from "@/lib/servicesData";

const services = servicesData;

function ServiceCard({ service, delay = 0 }: { service: typeof services[0]; delay?: number }) {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`animate-slide-from-bottom ${isInView ? "in-view" : ""} flex flex-col`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Number + Title */}
      <div className="flex items-start gap-7 pb-6">
        <span className="text-brand-red font-bold text-sm mt-1.5 flex-shrink-0">{service.number}</span>
        <h3 className="text-3xl font-bold text-gray-900 leading-snug">
          {service.title}
        </h3>
      </div>

      {/* Image — 636:397 aspect ratio */}
      <div className="relative w-full aspect-[636/397] flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Description + Button */}
      <div className="pt-5 pb-2 flex flex-col flex-1">
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
          {service.description}
        </p>
        <div>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-300"
          >
            Try It Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal(0.1);

  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Split into pairs for the grid + last item if odd
  const pairs = [];
  for (let i = 0; i < services.length - 1; i += 2) {
    pairs.push([services[i], services[i + 1]]);
  }
  const lastItem = services.length % 2 !== 0 ? services[services.length - 1] : null;

  return (
    <div className="bg-white min-h-screen">
      <Header forceWhite />

      {/* ── Hero Header ──────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-14" style={{ backgroundColor: "#F7F7F7" }}>
        <div
          ref={headerRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-from-bottom ${headerInView ? "in-view" : ""}`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
            Best solutions for your business through our services
          </h1>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div>
          {/* Mobile: single column with hr between items */}
          <div className="sm:hidden">
            {services.map((service, i) => (
              <div key={service.id}>
                <ServiceCard service={service} delay={0} />
                {i < services.length - 1 && <hr className="border-gray-200 my-6" />}
              </div>
            ))}
          </div>

          {/* Desktop: 2-column grid with hr between rows */}
          <div className="hidden sm:block">
            {pairs.map((pair, rowIndex) => (
              <div key={rowIndex}>
                <div className="grid grid-cols-2 gap-8">
                  {pair.map((service, colIndex) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      delay={colIndex * 0.1}
                    />
                  ))}
                </div>
                <hr className="border-gray-200 mt-12 mb-14" />
              </div>
            ))}
            {lastItem && (
              <div className="grid grid-cols-2 gap-8">
                <ServiceCard key={lastItem.id} service={lastItem} delay={0} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTALeadSection />

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <FooterSection />
    </div>
  );
}
