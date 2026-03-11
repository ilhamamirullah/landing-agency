"use client";

import { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import CTALeadSection from "@/components/CTALeadSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    id: "1",
    number: "01",
    title: "Digital Media Campaign Strategy",
    description:
      "We crawl and analyze every data aspect to help you determine the right strategy by leveraging various channels and platforms to achieve marketing objective goals.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    number: "02",
    title: "Digital Media Campaign Planning",
    description:
      "With data analyst and digital media specialist, we create precision and effective media plan to help our clients start from winning the competition, increase engagement and recapture the consumers.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    number: "03",
    title: "Digital Media Campaign Buying",
    description:
      "We maintain our good relationship with every stakeholders in today's digital world. As a result, we offer best deal and solution, manage the relation and situation and send it in an appetite report format only for you.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    number: "04",
    title: "Premium Publisher",
    description:
      "Through our wide-range publisher networks, we offer you many opportunities to start spreading the conversation, do more action or even become more innovating in the digital advertising world.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    number: "05",
    title: "Programmatic",
    description:
      "We offer programmatic advertising and also help you to optimize your campaign. Start from using real-time bidding, deliver the right ads quality to the right audience, until help you to manage your targeting methods using audience data.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    number: "06",
    title: "Social Media",
    description:
      "We distribute your great social media content to the right audience, achieving more impact and efficiently achieve your brand goals.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    number: "07",
    title: "KOL",
    description:
      "We help you connect and select Influencers that best represent your brand to answer your campaign objective.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
  },
];

function ServiceCard({ service, delay = 0 }: { service: typeof services[0]; delay?: number }) {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`animate-slide-from-bottom ${isInView ? "in-view" : ""} flex flex-col`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Number + Title */}
      <div className="flex items-start gap-7 pb-6">
        <span className="text-brand-red font-bold text-sm mt-1.5 flex-shrink-0">{service.number}</span>
        <h3 className="text-3xl font-bold text-gray-900 leading-snug">
          {service.title}
        </h3>
      </div>

      {/* Image — 636:397 aspect ratio */}
      <div className="relative w-full aspect-[636/397] flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Description + Button */}
      <div className="pt-5 pb-2 flex flex-col flex-1">
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
          {service.description}
        </p>
        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-300"
          >
            Try It Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { ref: headerRef, isInView: headerInView } = useScrollReveal(0.1);

  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Split into pairs for the grid + last item if odd
  const pairs = [];
  for (let i = 0; i < services.length - 1; i += 2) {
    pairs.push([services[i], services[i + 1]]);
  }
  const lastItem = services.length % 2 !== 0 ? services[services.length - 1] : null;

  return (
    <div className="bg-white min-h-screen">
      <Header forceWhite />

      {/* ── Hero Header ──────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-14" style={{ backgroundColor: "#F7F7F7" }}>
        <div
          ref={headerRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-from-bottom ${headerInView ? "in-view" : ""}`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
            Best solutions for your business through our services
          </h1>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div>
          {/* Mobile: single column with hr between items */}
          <div className="sm:hidden">
            {services.map((service, i) => (
              <div key={service.id}>
                <ServiceCard service={service} delay={0} />
                {i < services.length - 1 && <hr className="border-gray-200 my-6" />}
              </div>
            ))}
          </div>

          {/* Desktop: 2-column grid with hr between rows */}
          <div className="hidden sm:block">
            {pairs.map((pair, rowIndex) => (
              <div key={rowIndex}>
                <div className="grid grid-cols-2 gap-8">
                  {pair.map((service, colIndex) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      delay={colIndex * 0.1}
                    />
                  ))}
                </div>
                <hr className="border-gray-200 mt-12 mb-14" />
              </div>
            ))}
            {lastItem && (
              <div className="grid grid-cols-2 gap-8">
                <ServiceCard key={lastItem.id} service={lastItem} delay={0} />
              </div>
            )}
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
