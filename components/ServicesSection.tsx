"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Service } from "@/types";

// ✅ Static fallback — used when API is unavailable
const defaultServices: Service[] = [
  {
    id: "1",
    number: "01",
    title: "AWARENESS",
    description:
      "Building a brand always starts with awareness and we can help you deliver your message to the right audiences.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    number: "02",
    title: "PERFORMANCE",
    description:
      "Discuss with us what kind of action you need from your audience - subscription, lead, sales, or any other actions - and we will try our best to achieve it.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    number: "03",
    title: "CONTENT MARKETING",
    description:
      "Content is one of the most important pillars for your brand. We are able to deliver your content through any platform and work with the right partner to spread your content.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    number: "04",
    title: "PUBLISHER",
    description:
      "We offer you many opportunities to start spreading the conversation, do more action or even become more innovating in the digital advertising world.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
  },
];

// ✅ Props interface
interface Props {
  data?: Service[] | null;
}

export default function ServicesSection({ data }: Props) {
  // ✅ Use API data if available, otherwise fallback
  const services = data ?? defaultServices;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: headerRef, isInView: headerInView } = useScrollReveal(0.15);
  const { ref: listRef, isInView: listInView } = useScrollReveal(0.1);

  return (
    <div className="relative bg-white min-h-screen pt-24 md:pt-28 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 md:mb-16 animate-slide-from-bottom ${
            headerInView ? "in-view" : ""
          }`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
            Best solutions for your business through our services
          </h2>
        </div>

        {/* Service List */}
        <div
          ref={listRef}
          className={`animate-slide-from-bottom animate-delay-200 ${
            listInView ? "in-view" : ""
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative border-t border-gray-300 last:border-b transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredIndex === index ? "bg-brand-red" : "bg-transparent"
              }`}
            >
              {/* Desktop Layout */}
              <div
                className={`hidden md:flex items-center px-4 lg:px-8 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "py-12 lg:py-14"
                    : "py-8 lg:py-10"
                }`}
              >
                {/* Number */}
                <span
                  className={`text-sm font-semibold w-12 flex-shrink-0 transition-colors duration-500 ${
                    hoveredIndex === index
                      ? "text-white/70"
                      : "text-brand-red"
                  }`}
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  className={`text-xl lg:text-2xl font-bold flex-shrink-0 w-64 lg:w-80 transition-colors duration-500 ${
                    hoveredIndex === index
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Image (only visible on hover) */}
                <div
                  className={`flex-shrink-0 h-24 lg:h-28 mx-6 rounded-sm overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 scale-100 w-32 lg:w-40"
                      : "opacity-0 scale-95 w-0 mx-0"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <p
                  className={`flex-1 text-sm lg:text-base leading-relaxed transition-colors duration-500 ${
                    hoveredIndex === index
                      ? "text-white/90"
                      : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <div
                  className={`flex-shrink-0 ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index ? "bg-white" : ""
                  }`}
                >
                  {hoveredIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-brand-red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Mobile Layout */}
              <div
                className={`md:hidden px-4 transition-all duration-500 ${
                  hoveredIndex === index ? "py-8" : "py-6"
                }`}
              >
                {/* Top row: number, title, arrow */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`text-sm font-semibold transition-colors duration-500 ${
                        hoveredIndex === index
                          ? "text-white/70"
                          : "text-brand-red"
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`text-base font-bold transition-colors duration-500 ${
                        hoveredIndex === index
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      hoveredIndex === index ? "bg-white" : ""
                    }`}
                  >
                    {hoveredIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-brand-red"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-900"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed transition-colors duration-500 ${
                    hoveredIndex === index
                      ? "text-white/90"
                      : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Image (visible on hover/active) */}
                <div
                  className={`mt-4 w-full h-40 rounded-sm overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 max-h-40"
                      : "opacity-0 max-h-0 mt-0"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}