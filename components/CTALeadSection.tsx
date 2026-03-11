"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTALeadSection() {
  const { ref, isInView } = useScrollReveal(0.05);

  return (
    <div ref={ref} className="bg-white pt-8 md:pt-12 pb-0">
      <div className="flex flex-col lg:flex-row lg:h-[75vh] lg:max-h-[600px]">
        {/* Left Side - Red Background with Content */}
        <div
          className={`w-full lg:w-1/2 bg-brand-red flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 py-10 sm:py-12 lg:py-16 order-2 lg:order-1 cta-slide-left ${
            isInView ? "in-view" : ""
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 lg:mb-6">
            What can MXA achieve for you?
          </h2>

          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-md mb-6 lg:mb-8 leading-relaxed">
            We offer a complete suite of design and development solutions tailored for modern businesses.
          </p>

          <div>
            <a
              href="#contact"
              className="inline-block bg-white text-brand-red font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-md text-sm sm:text-base transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg"
            >
              Let&apos;s work together!
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className={`w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto order-1 lg:order-2 cta-slide-right relative ${
            isInView ? "in-view" : ""
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop"
            alt="Happy team collaborating"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}