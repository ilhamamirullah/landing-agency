"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CaseStudy } from "@/types";

// ✅ Static fallback
const defaultCaseStudies: CaseStudy[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
    title: "Build awareness and educate customers to be concerned of their OTP",
    client: "fig studio",
    category: "Awareness",
    description: "",
    link: "#",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    title: "Rebranding campaign to reach new younger demographics across platforms",
    client: "Late Studios",
    category: "Branding",
    description: "",
    link: "#",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    title: "Data-driven performance marketing that increased conversions by 340%",
    client: "Vertex Digital",
    category: "Performance",
    description: "",
    link: "#",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    title: "End-to-end content strategy for multi-channel social media presence",
    client: "Nova Agency",
    category: "Content",
    description: "",
    link: "#",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    title: "Full-scale publisher network integration for maximizing ad revenue",
    client: "Orbit Media",
    category: "Publisher",
    description: "",
    link: "#",
  },
];

// ✅ Props interface
interface Props {
  data?: CaseStudy[] | null;
}

export default function CaseStudiesSection({ data }: Props) {
  // ✅ Use API data if available, otherwise fallback
  const caseStudies = data ?? defaultCaseStudies;

  const { ref: sectionRef, isInView } = useScrollReveal(0.1);

  return (
    <div
      ref={sectionRef}
      className="relative bg-brand-light min-h-screen pt-24 md:pt-20"
    >
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 sm:px-6 pb-16">
        {/* Header */}
        <div
          className={`mb-8 animate-slide-from-bottom ${isInView ? "in-view" : ""}`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Our Works
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
          className={`space-y-8 animate-slide-from-bottom animate-delay-200 ${
            isInView ? "in-view" : ""
          }`}
        >
          {caseStudies.map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>

      {/* Desktop Layout: Left sticky + Right scrollable */}
      <div className="hidden lg:flex h-[calc(100vh-7rem)]">
        {/* Left Side — Sticky */}
        <div
          className={`w-1/2 flex-shrink-0 flex flex-col justify-center px-8 xl:px-16 animate-slide-from-bottom ${
            isInView ? "in-view" : ""
          }`}
        >
          <p className="text-brand-red font-semibold text-sm mb-4 tracking-wide">
            Our Works
          </p>
          <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Things
            <br />
            We&apos;ve Made
          </h2>
          <p className="text-gray-500 text-sm xl:text-base max-w-sm mb-8">
            We offer a complete suite of design and development solutions
            tailored for modern businesses.
          </p>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md text-sm transition-all duration-300"
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
          className={`w-1/2 max-w-2xl overflow-y-auto pr-8 xl:pr-16 pl-4 case-studies-scroll animate-slide-from-bottom animate-delay-200 ${
            isInView ? "in-view" : ""
          }`}
        >
          <div className="space-y-8">
            {caseStudies.map((study) => (
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
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Client label */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {study.client}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-4">
          {study.title}
        </h3>
        <a
          href={study.link || "#"}
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-md text-sm transition-all duration-300"
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
        </a>
      </div>
    </div>
  );
}