"use client";

import { Stat } from "@/types";
import { defaultStats } from "@/lib/defaultStats";

// ✅ Props interface
interface Props {
  stats?: Stat[] | null;
}

export default function HeroSection({ stats }: Props) {
  // ✅ Use API data if available, otherwise fallback
  const statItems = stats ?? defaultStats;

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
      {/* Background Image (B&W → Color animation) */}
      <div className="absolute inset-0 animate-fade-in-color">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Gradient Overlay — black at bottom, fading to ~20% up */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 via-20% to-black/10" />

      {/* Content (slides in from left) */}
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="animate-slide-from-left max-w-3xl">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Transforming Digital Presence into Measurable Growth
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mb-8">
            We craft standout digital experiences that elevate brands and
            captivate users across platforms.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-md text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            Let&apos;s Start A Project
          </a>
        </div>

        {/* Stats Grid (Mobile/Tablet only) */}
        <div className="mt-12 grid grid-cols-2 gap-6 max-w-md lg:hidden">
          {statItems.map((stat) => (
            <div key={stat.id}>
              <p className="text-red-500 text-2xl sm:text-3xl font-bold">
                {stat.value}
              </p>
              <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}