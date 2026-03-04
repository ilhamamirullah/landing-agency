"use client";

import { useRef, useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Testimonial } from "@/types";

// ✅ Static fallback
const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "MXA's data-driven approach and continuous optimization helped us reduce our cost per acquisition while scaling our campaigns effectively.",
    name: "Giana Saris",
    role: "Founder & CEO, Company ABC",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    quote:
      "MXA is more than just an agency — they are a strategic partner. Their insights and execution consistently drive meaningful business results.",
    name: "Andow Smith",
    role: "Founder & CEO, Company ABC",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    quote:
      "Working with MXA transformed our digital presence. Their creative strategies and attention to detail exceeded all our expectations.",
    name: "Sarah Chen",
    role: "Marketing Director, XYZ Corp",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    quote:
      "The team at MXA delivered outstanding results for our product launch. Their multi-channel approach drove record-breaking engagement.",
    name: "David Park",
    role: "VP of Growth, StartupHub",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];

// ✅ Props interface
interface Props {
  data?: Testimonial[] | null;
}

export default function TestimonialsSection({ data }: Props) {
  // ✅ Use API data if available, otherwise fallback
  const testimonials = data ?? defaultTestimonials;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { ref: headerRef, isInView: headerInView } = useScrollReveal(0.1);
  const { ref: cardsRef, isInView: cardsInView } = useScrollReveal(0.1);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".testimonial-card")?.clientWidth || 500;
    const gap = 32;
    const distance = cardWidth + gap;

    const start = el.scrollLeft;
    const target = direction === "left" ? start - distance : start + distance;
    const duration = 1400;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      el.scrollLeft = start + (target - start) * eased;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const ArrowButton = ({
    direction,
    disabled,
  }: {
    direction: "left" | "right";
    disabled: boolean;
  }) => (
    <button
      onClick={() => scroll(direction)}
      disabled={disabled}
      className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 ${
        disabled
          ? "bg-gray-100 text-gray-300 cursor-not-allowed"
          : "bg-gray-100 text-brand-red hover:bg-gray-200"
      }`}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            direction === "left"
              ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          }
        />
      </svg>
    </button>
  );

  return (
    <div className="relative bg-white pt-24 md:pt-28 pb-4 md:pb-8 overflow-hidden flex flex-col">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header + Arrows */}
        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-10 md:mb-14 testimonial-reveal ${
            headerInView ? "in-view" : ""
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight lg:whitespace-nowrap">
            Trusted by Clients Worldwide
          </h2>

          {/* Desktop Arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <ArrowButton direction="left" disabled={!canScrollLeft} />
            <ArrowButton direction="right" disabled={!canScrollRight} />
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={cardsRef}
        className={`testimonial-reveal testimonial-reveal-delay ${
          cardsInView ? "in-view" : ""
        }`}
      >
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pl-4 sm:pl-6 lg:pl-8 xl:pl-12 pr-8 pb-4 h-full testimonial-scroll"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card flex-shrink-0 w-[85vw] sm:w-[540px] lg:w-[600px] bg-gray-50 rounded-xl overflow-hidden h-auto sm:h-[340px] lg:h-[390px]"
            >
              {/* Desktop: side by side */}
              <div className="hidden sm:flex h-full">
                <div className="flex-1 flex flex-col justify-between p-8 lg:p-10">
                  <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm lg:text-base">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-xs lg:text-sm mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
                <div className="w-52 lg:w-60 flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile: stacked */}
              <div className="sm:hidden">
                <div className="p-6 pb-4">
                  <p className="text-gray-800 text-sm leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </div>
                <div className="w-full aspect-[4/3]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 10%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        <div className="sm:hidden flex justify-center items-center gap-4 mt-4 mb-2">
          <ArrowButton direction="left" disabled={!canScrollLeft} />
          <ArrowButton direction="right" disabled={!canScrollRight} />
        </div>
      </div>
    </div>
  );
}