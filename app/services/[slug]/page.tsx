"use client";

import { use, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import CTALeadSection from "@/components/CTALeadSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { servicesData } from "@/lib/servicesData";

// ── Approach icons ────────────────────────────────────────────────────────────

const approachIcons = [
  // chart bars
  <svg key="0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
  // funnel
  <svg key="1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
  </svg>,
  // bolt
  <svg key="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // lightbulb
  <svg key="3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>,
  // document chart
  <svg key="4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>,
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const { ref: heroRef, isInView: heroInView } = useScrollReveal(0.1);
  const { ref: challengeRef, isInView: challengeInView } = useScrollReveal(0.1);
  const { ref: approachRef, isInView: approachInView } = useScrollReveal(0.1);
  const { ref: getRef, isInView: getInView } = useScrollReveal(0.1);

  if (!service) notFound();

  return (
    <div className="bg-white min-h-screen">
      <Header forceWhite />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F7F7F7" }}>
        <div
          ref={heroRef}
          className={`max-w-7xl mx-auto animate-slide-from-bottom ${heroInView ? "in-view" : ""}`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[480px]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Challenge ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div
          ref={challengeRef}
          className={`max-w-7xl mx-auto animate-slide-from-bottom ${challengeInView ? "in-view" : ""}`}
        >
          {/* Desktop: 2-col | Mobile: stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The Challenge We Solve
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                {service.challengeText}
              </p>
            </div>
            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[360px] rounded-xl overflow-hidden">
              <Image
                src={service.challengeImage}
                alt="Challenge"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div
          ref={approachRef}
          className={`max-w-7xl mx-auto animate-slide-from-bottom ${approachInView ? "in-view" : ""}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
            Our Approach
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.approachItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                {/* Icon box */}
                <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  {approachIcons[i % approachIcons.length]}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Get ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div
          ref={getRef}
          className={`max-w-7xl mx-auto animate-slide-from-bottom ${getInView ? "in-view" : ""}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[400px] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src={service.whatYouGetImage}
                alt="What You Get"
                fill
                className="object-cover"
              />
            </div>
            {/* List */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                What You Get
              </h2>
              <ul className="space-y-4">
                {service.whatYouGetItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 w-5 h-5 bg-brand-red rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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
