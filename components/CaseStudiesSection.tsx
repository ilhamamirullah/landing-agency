"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CaseStudy } from "@/types";

// ✅ Static fallback
const defaultCaseStudies: CaseStudy[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    client: "fig studio",
    category: "Awareness",
    description: "",
    link: "/case-studies/mld-content-hunt-fig-studio",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    client: "Late Checkout",
    category: "Branding",
    description: "",
    link: "/case-studies/mld-content-hunt-late-checkout",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    client: "Vertex Digital",
    category: "Performance",
    description: "",
    link: "/case-studies/mld-content-hunt-vertex-digital",
  },
];

// ✅ Props interface
interface Props {
  data?: CaseStudy[] | null;
}

export default function CaseStudiesSection({ data }: Props) {
  // ✅ Use API data if available, otherwise fallback
  const caseStudies = data ?? defaultCaseStudies;

  const { ref: mobileRef, isInView: mobileInView } = useScrollReveal(0.1);
  const { ref: leftRef, isInView: leftInView } = useScrollReveal(0.1);
  const { ref: rightRef, isInView: rightInView } = useScrollReveal(0.1);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          const panel = section.querySelector<HTMLElement>(".case-studies-scroll");
          if (panel) panel.scrollTop = 0;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-brand-light min-h-screen pt-24 md:pt-20">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 sm:px-6 pb-16">
        {/* Header */}
        <div
          ref={mobileRef}
          className={`mb-8 animate-slide-from-bottom ${mobileInView ? "in-view" : ""}`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Things We&apos;ve Made
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md">
            We offer a complete suite of design and development solutions
            tailored for modern businesses.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`space-y-6 animate-slide-from-bottom animate-delay-200 ${
            mobileInView ? "in-view" : ""
          }`}
        >
          {caseStudies.slice(0, 3).map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>

      {/* Desktop Layout: Left sticky + Right scrollable */}
      <div className="hidden lg:flex justify-between h-[calc(100vh-7rem)] px-8 xl:px-16">
        {/* Left Side — Sticky */}
        <div
          ref={leftRef}
          className={`flex-shrink-0 flex flex-col justify-center w-[43%] animate-slide-from-bottom ${
            leftInView ? "in-view" : ""
          }`}
        >
          <p className="text-brand-red font-semibold text-sm mb-4 tracking-wide">
            Case Studies
          </p>
          <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Things
            <br />
            We&apos;ve Made
          </h2>
          <p className="text-gray-500 text-sm xl:text-base max-w-lg mb-8">
            We offer a complete suite of design and development solutions
            tailored for modern businesses.
          </p>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-300"
            >
              See All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side — Scrollable */}
        <div
          ref={rightRef}
          className={`w-[45%] overflow-y-auto case-studies-scroll animate-slide-from-bottom animate-delay-200 ${
            rightInView ? "in-view" : ""
          }`}
        >
          <div className="space-y-6 pt-6 pb-6">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-transparent border border-gray-300 rounded-2xl p-3">
      {/* Image — 591:402 aspect ratio */}
      <div className="relative w-full aspect-[591/402] overflow-hidden rounded-xl">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Client label overlay */}
        {/* <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
            {study.client}
          </span>
        </div> */}
      </div>

      {/* Content */}
      <div className="px-3 pt-4 pb-2">
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-4">
          {study.title}
        </h3>
        <Link
          href={study.link || "/case-studies"}
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}