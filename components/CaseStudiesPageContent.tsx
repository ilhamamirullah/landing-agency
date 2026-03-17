"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CaseStudy } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const defaultCaseStudies: CaseStudy[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    client: "fig studio",
    category: "Awareness",
    description: "",
    link: "/case-studies/mld-content-hunt-fig-studio",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    client: "Late Checkout",
    category: "Branding",
    description: "",
    link: "/case-studies/mld-content-hunt-late-checkout",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    client: "Vertex Digital",
    category: "Performance",
    description: "",
    link: "/case-studies/mld-content-hunt-vertex-digital",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    client: "Creator Collective",
    category: "Awareness",
    description: "",
    link: "/case-studies/mld-content-hunt-creator-collective",
  },
];

interface Props {
  data?: CaseStudy[] | null;
}

export default function CaseStudiesPageContent({ data }: Props) {
  const caseStudies = data ?? defaultCaseStudies;
  const categories = [
    "All categories",
    ...Array.from(new Set(caseStudies.map((c) => c.category))),
  ];
  const [selected, setSelected] = useState("All categories");

  const { ref: headerRef, isInView: headerInView } = useScrollReveal(0.1);

  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const filtered =
    selected === "All categories"
      ? caseStudies
      : caseStudies.filter((c) => c.category === selected);

  return (
    <>
      {/* Hero Header */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-20 bg-brand-light">
        <div
          ref={headerRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-from-bottom ${headerInView ? "in-view" : ""}`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Case Studies
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
            Things We&apos;ve Made
          </h1>
        </div>
      </section>

      {/* Grid Content */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-16 md:pb-24 max-w-7xl mx-auto">
        {/* Filter Dropdown */}
        <div className="flex justify-end mb-8">
          <div className="relative">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full sm:w-auto appearance-none bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 pr-9 rounded-md cursor-pointer focus:outline-none focus:border-brand-red transition-colors shadow-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((study, i) => (
            <CaseCard key={study.id} study={study} delay={i % 2 === 1 ? 0.1 : 0} />
          ))}
        </div>
      </section>
    </>
  );
}

function CaseCard({ study, delay = 0 }: { study: CaseStudy; delay?: number }) {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`animate-slide-from-bottom ${isInView ? "in-view" : ""} bg-transparent border border-gray-300 rounded-2xl p-3`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative w-full aspect-[591/402] overflow-hidden rounded-xl">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
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
