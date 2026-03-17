"use client";

import { use, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import CTALeadSection from "@/components/CTALeadSection";
import FooterSection from "@/components/FooterSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { caseStudiesData } from "@/lib/caseStudiesData";

export default function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const study = caseStudiesData.find((c) => c.slug === slug);

  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const { ref: heroRef, isInView: heroInView } = useScrollReveal(0.1);
  const { ref: bgRef, isInView: bgInView } = useScrollReveal(0.1);
  const { ref: objRef, isInView: objInView } = useScrollReveal(0.1);
  const { ref: resultsRef, isInView: resultsInView } = useScrollReveal(0.1);

  if (!study) notFound();

  return (
    <div className="bg-white min-h-screen page-scroll">
      <Header forceWhite />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div
          ref={heroRef}
          className={`max-w-3xl mx-auto text-center animate-slide-from-bottom ${heroInView ? "in-view" : ""}`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Case Studies
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {study.title}
          </h1>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[480px]">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Background Event ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div
          ref={bgRef}
          className={`max-w-7xl mx-auto animate-slide-from-bottom ${bgInView ? "in-view" : ""}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Background Event
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {study.backgroundDescription}
              </p>
            </div>
            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[360px] rounded-xl overflow-hidden">
              <Image
                src={study.backgroundImage}
                alt="Background event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Objective + Strategy & Execution ─────────────────────────────── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div
          ref={objRef}
          className={`max-w-7xl mx-auto animate-slide-from-bottom ${objInView ? "in-view" : ""}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Objective */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Objective
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {study.objective}
              </p>
            </div>
            {/* Strategy & Execution */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Strategy &amp; Execution
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {study.strategyExecution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div
          ref={resultsRef}
          className={`max-w-7xl mx-auto animate-slide-from-bottom ${resultsInView ? "in-view" : ""}`}
        >
          <div className="bg-black rounded-2xl px-8 py-10 md:px-12 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
              {study.results.map((result, i) => (
                <div key={i} className="py-8 md:py-0 md:px-10 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0">
                  <p className="text-white text-sm font-medium mb-2">
                    {result.label}
                  </p>
                  <p className="text-brand-red text-4xl sm:text-5xl font-bold mb-2 leading-none">
                    {result.value}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {result.sublabel}
                  </p>
                </div>
              ))}
            </div>
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
