"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import StatCard from "@/components/StatCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { parseStatValue } from "@/lib/parseStatValue";

// ─── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "250+", label: "Dedicated Team" },
  { value: "850+", label: "Project Delivered" },
  { value: "10K+", label: "Satisfied Clients" },
];

const missionItems = [
  {
    title: "Precision in Every Pixel",
    content:
      "Deliver intelligent, data-driven technologies that ensure client brands reach the right audience, at the right time, with the right message — powered by programmatic excellence.",
  },
  {
    title: "Always-On, Always-Learning",
    content:
      "We stay ahead of industry shifts with continuous upskilling, real-time data monitoring, and an always-evolving playbook that keeps your campaigns competitive.",
  },
  {
    title: "Collaboration as a Competitive Edge",
    content:
      "True growth comes from partnerships. We embed ourselves into your team to align strategy, share insights, and deliver results no agency can achieve alone.",
  },
  {
    title: "Human + Machine Synergy",
    content:
      "We combine creative human intelligence with cutting-edge automation and AI tools — ensuring every decision is informed, every campaign is optimised.",
  },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Clarity",
    description:
      "We communicate openly, transparently, and intentionally. No confusion, no guessing — just aligned direction and shared goals.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Proof",
    description:
      "We rely on results, not real performance. Your ideas here don&apos;t just get heard — they get tested, validated, and celebrated when they work.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Simplicity",
    description:
      "We believe the best ideas are the ones people understand. We streamline, focus, and cut the noise — so you can do your best work without chaos.",
  },
];

const clientLogos = [
  { name: "Yamaha", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yamaha_Motor_logo.svg/400px-Yamaha_Motor_logo.svg.png" },
  { name: "BCA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/400px-Bank_Central_Asia.svg.png" },
  { name: "Unilever", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Unilever_logo_-_new_version.svg/400px-Unilever_logo_-_new_version.svg.png" },
  { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" },
];

const leadershipTeam = [
  {
    name: "Larry Asalim",
    role: "Brand General Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop&crop=face",
  },
  {
    name: "Aquilina Witya",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop&crop=face",
  },
  {
    name: "Olivia",
    role: "Media Planner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop&crop=face",
  },
  {
    name: "Octaviani",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop&crop=face",
  },
  {
    name: "Tyra Nadira",
    role: "Performance Lead",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop&crop=face",
  },
  {
    name: "Riko Santosa",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&crop=face",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className={`font-semibold text-sm transition-colors duration-200 ${isOpen ? "text-brand-red" : "text-gray-800"}`}>
          {title}
        </span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-brand-red ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
        <p className="text-gray-500 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function TeamArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
        disabled ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-brand-red text-white hover:bg-red-600"
      }`}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round"
          d={direction === "left" ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}
        />
      </svg>
    </button>
  );
}

function LogoItem({ name, logo }: { name: string; logo: string }) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-24 h-10 sm:w-44 sm:h-16 mx-5 sm:mx-12">
      {hasError ? (
        <span className="text-gray-800 font-bold text-lg tracking-wide">{name}</span>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain"
            onError={() => setHasError(true)}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const teamScrollRef = useRef<HTMLDivElement>(null);

  // Override the global snap-scroll overflow:hidden for this page
  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Team scroll
  const checkTeamScroll = useCallback(() => {
    const el = teamScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = teamScrollRef.current;
    if (!el) return;
    checkTeamScroll();
    el.addEventListener("scroll", checkTeamScroll);
    return () => el.removeEventListener("scroll", checkTeamScroll);
  }, [checkTeamScroll]);

  const scrollTeam = useCallback((direction: "left" | "right") => {
    const el = teamScrollRef.current;
    if (!el) return;
    const card = el.querySelector(".team-card") as HTMLElement;
    const distance = (card?.offsetWidth ?? 300) + 24;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  }, []);

  // Scroll reveal refs
  const { ref: heroRef, isInView: heroInView } = useScrollReveal(0.1);
  const { ref: statsRef, isInView: statsInView } = useScrollReveal(0.1);
  const { ref: historyRef, isInView: historyInView } = useScrollReveal(0.1);
  const { ref: valuesRef, isInView: valuesInView } = useScrollReveal(0.1);
  const { ref: clientsRef, isInView: clientsInView } = useScrollReveal(0.1);
  const { ref: teamRef, isInView: teamInView } = useScrollReveal(0.1);
  const { ref: ctaRef, isInView: ctaInView } = useScrollReveal(0.05);

  return (
    <div className="bg-white min-h-screen">
      <Header forceWhite />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className={`max-w-4xl mx-auto text-center animate-slide-from-bottom ${heroInView ? "in-view" : ""}`}
        >
          <p className="text-brand-red font-semibold text-sm mb-5 tracking-widest uppercase">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            <span className="text-brand-red">Brand</span> is a digital media
            agency that delivers data&#8209;driven strategies and measurable
            campaigns to drive maximum brand growth.
          </h1>
        </div>
      </section>

      {/* ── Hero Team Image ───────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[480px] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
              alt="Our team"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div
          ref={statsRef}
          className={`max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-from-bottom ${statsInView ? "in-view" : ""}`}
        >
          {stats.map((s) => {
            const { endValue, suffix } = parseStatValue(s.value);
            return (
              <StatCard
                key={s.label}
                endValue={endValue}
                suffix={suffix}
                label={s.label}
                isVisible={statsInView}
                lightBg
              />
            );
          })}
        </div>
      </section>

      {/* ── How It All Began ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div
          ref={historyRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-from-bottom ${historyInView ? "in-view" : ""}`}
        >
          {/* Row 1: title left | paragraphs right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              How It All Began
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Brand started in 2010, and were known as Brand, the first
                Indonesia premium publisher network. After two years,
                we pivoted to digital buying agency business.
              </p>
              <p>
                Now Brand is one of the biggest local digital media buying
                agency in Indonesia that provides consultation for online
                campaign planning and strategy.
              </p>
              <p>
                We sit together and become our client&apos;s partner, so we can
                listen and discuss ways to achieve our objectives. Through the
                steps, we decide the right strategy, media and KPI, to deliver
                the right results.
              </p>
            </div>
          </div>

          {/* Row 2: image left | Vision + Mission right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-[320px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Team in meeting"
                fill
                className="object-cover"
              />
            </div>

            {/* Vision + Mission */}
            <div className="space-y-10">
              {/* Vision */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                  Vision
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To be Client&apos;s trusted digital growth partner —
                  transforming data, creativity, and precision into meaningful
                  audience connections that drive lasting brand impact. We
                  envision a future where every impression counts, every message
                  resonates, and every data point moves client brands forward.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                  Mission
                </h3>
                <div>
                  {missionItems.map((item, i) => (
                    <AccordionItem
                      key={i}
                      title={item.title}
                      content={item.content}
                      isOpen={openAccordion === i}
                      onToggle={() => setOpenAccordion(openAccordion === i ? -1 : i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            ref={valuesRef}
            className={`animate-slide-from-bottom ${valuesInView ? "in-view" : ""}`}
          >
            <p className="text-brand-red font-semibold text-xs tracking-widest uppercase mb-3 text-center">
              Core Principles
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-7 shadow-sm animate-slide-from-bottom ${valuesInView ? "in-view" : ""}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Serve — same style as ClientsSection ───────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div
          ref={clientsRef}
          className={`animate-slide-from-bottom ${clientsInView ? "in-view" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
            <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide text-center">
              Our Clients
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Who We Serve
            </h2>
          </div>

          {/* Single marquee row — same markup as ClientsSection row 1 */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none" />

            <div className="marquee-track-rtl">
              <div className="marquee-content">
                {clientLogos.map((c, i) => (
                  <LogoItem key={`a-${i}`} name={c.name} logo={c.logo} />
                ))}
              </div>
              <div className="marquee-content" aria-hidden="true">
                {clientLogos.map((c, i) => (
                  <LogoItem key={`b-${i}`} name={c.name} logo={c.logo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet Our Leadership Team ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-black overflow-hidden">
        <div
          ref={teamRef}
          className={`animate-slide-from-bottom ${teamInView ? "in-view" : ""}`}
        >
          {/* Header row */}
          <div className="px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Meet Our Leadership Team
              </h2>
              <div className="flex items-center gap-3">
                <TeamArrowButton direction="left" disabled={!canScrollLeft} onClick={() => scrollTeam("left")} />
                <TeamArrowButton direction="right" disabled={!canScrollRight} onClick={() => scrollTeam("right")} />
              </div>
            </div>
          </div>

          {/* Scrollable cards */}
          <div
            ref={teamScrollRef}
            className="flex gap-6 overflow-x-auto pl-4 sm:pl-6 lg:pl-8 pr-8 pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {leadershipTeam.map((member) => (
              <div key={member.name} className="team-card flex-shrink-0">
                <div className="relative overflow-hidden rounded-xl mb-4" style={{ width: 300, height: 459 }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-bold text-white text-sm">{member.name}</p>
                <p className="text-gray-400 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — same style as CTALeadSection ───────────────────────────── */}
      <div ref={ctaRef} className="bg-white pb-0">
        <div className="flex flex-col lg:flex-row lg:h-[75vh] lg:max-h-[600px]">
          {/* Left: red bg */}
          <div
            className={`w-full lg:w-1/2 bg-brand-red flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 py-10 sm:py-12 lg:py-16 order-2 lg:order-1 cta-slide-left ${
              ctaInView ? "in-view" : ""
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 lg:mb-6">
              What can Brand achieve for you?
            </h2>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-md mb-6 lg:mb-8 leading-relaxed">
              We offer a complete suite of design and development solutions
              tailored for modern businesses.
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

          {/* Right: image */}
          <div
            className={`relative w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto order-1 lg:order-2 cta-slide-right ${
              ctaInView ? "in-view" : ""
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
              alt="Team collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <FooterSection />
    </div>
  );
}
