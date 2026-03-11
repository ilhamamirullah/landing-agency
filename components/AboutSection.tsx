"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import StatCard from "./StatCard";
import { Stat } from "@/types";
import { defaultStats } from "@/lib/defaultStats";
import { parseStatValue } from "@/lib/parseStatValue";

// ✅ Props interface
interface Props {
  stats?: Stat[] | null;
}

export default function AboutSection({ stats }: Props) {
  // ✅ Use API data if available, otherwise fallback
  const statItems = stats ?? defaultStats;

  const { ref: statsRef, isInView: statsInView } = useScrollReveal(0.2);
  const { ref: contentRef, isInView: contentInView } = useScrollReveal(0.15);
  const { ref: imagesRef, isInView: imagesInView } = useScrollReveal(0.15);

  return (
    <div className="relative overflow-hidden pt-16 md:pt-28 pb-12 md:pb-16">
      {/* ===== Decorative Glow Dots ===== */}
      <div className="hidden lg:block absolute -top-16 -left-[200px] w-[400px] h-[400px] glow-dot rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] glow-dot rounded-full pointer-events-none overflow-visible" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats visibility trigger */}
        <div ref={statsRef} className="hidden lg:block h-1" />

        {/* ===== Stats Bar — Desktop only ===== */}
        <div className="hidden lg:block pb-10 mb-10">
          <div className="max-w-4xl mx-auto grid grid-cols-4 gap-8">
            {statItems.map((stat) => {
              const { endValue, suffix } = parseStatValue(stat.value);
              return (
                <StatCard
                  key={stat.id}
                  endValue={endValue}
                  suffix={suffix}
                  label={stat.label}
                  isVisible={statsInView}
                />
              );
            })}
          </div>
        </div>

        {/* ===== About Content ===== */}
        <div className="pt-4 lg:pt-8">
          <div className="relative">
            {/* Floating image - top left (desktop only) */}
            <div
              ref={imagesRef}
              className={`hidden lg:block absolute -left-4 top-0 w-40 h-32 animate-slide-from-bottom animate-delay-200 ${
                imagesInView ? "in-view" : ""
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Main content - centered */}
            <div
              ref={contentRef}
              className={`max-w-3xl mx-auto text-center animate-slide-from-bottom ${
                contentInView ? "in-view" : ""
              }`}
            >
              <p className="text-brand-red font-semibold text-sm mb-6 tracking-wide">
                About Us
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-8">
                <span className="inline-flex items-center align-middle">
                  <span className="text-brand-red font-bold px-4 text-xl sm:text-2xl md:text-3xl">
                    Media X Asia (MXA)
                  </span>
                </span>
                is a digital media agency that delivers data-driven strategies
                and measurable campaigns to drive maximum brand growth.
              </h2>

              <div
                className={`animate-slide-from-bottom animate-delay-300 ${
                  contentInView ? "in-view" : ""
                }`}
              >
                <Link
                  href="/about"
                  className="inline-block border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold px-8 py-3 rounded-md text-sm transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Floating image - bottom right (desktop only) */}
            <div
              className={`hidden lg:block absolute right-0 bottom-0 w-44 h-36 animate-slide-from-bottom animate-delay-400 ${
                imagesInView ? "in-view" : ""
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop"
                alt="Team meeting"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* ===== Bottom Image Strip ===== */}
        <div
          className={`mt-12 md:mt-16 animate-slide-from-bottom animate-delay-500 ${
            contentInView ? "in-view" : ""
          }`}
        >
          <div className="relative w-full h-40 sm:h-52 md:h-64 overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920&auto=format&fit=crop"
              alt="Team collaboration wide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}