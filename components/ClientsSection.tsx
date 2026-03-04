"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Client } from "@/types";

// ✅ Static fallback
const defaultClientsRow1: Client[] = [
  { id: "1", name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png", row: 1 },
  { id: "2", name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31", row: 1 },
  { id: "3", name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png", row: 1 },
  { id: "4", name: "Slack", logo: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png", row: 1 },
  { id: "5", name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png", row: 1 },
  { id: "6", name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png", row: 1 },
  { id: "7", name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/400px-Amazon_logo.svg.png", row: 1 },
  { id: "8", name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/400px-Adobe_Corporate_Logo.png", row: 1 },
];

const defaultClientsRow2: Client[] = [
  { id: "9", name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/400px-Stripe_Logo%2C_revised_2016.svg.png", row: 2 },
  { id: "10", name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/400px-Shopify_logo_2018.svg.png", row: 2 },
  { id: "11", name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", row: 2 },
  { id: "12", name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/200px-Octicons-mark-github.svg.png", row: 2 },
  { id: "13", name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/400px-Uber_logo_2018.svg.png", row: 2 },
  { id: "14", name: "Discord", logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20702702.png", row: 2 },
  { id: "15", name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", row: 2 },
  { id: "16", name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/400px-Vercel_logo_black.svg.png", row: 2 },
];

function LogoItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-24 h-10 sm:w-44 sm:h-16 mx-5 sm:mx-12">
      <img
        src={logo}
        alt={name}
        className="max-w-full max-h-full object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          if (target.parentElement) {
            target.parentElement.innerHTML = `<span class="text-gray-800 font-bold text-lg tracking-wide">${name}</span>`;
          }
        }}
      />
    </div>
  );
}

// ✅ Props interface
interface Props {
  data?: Client[] | null;
}

export default function ClientsSection({ data }: Props) {
  // ✅ Split API data into rows, or use fallback
  const row1 = data ? data.filter((c) => c.row === 1) : defaultClientsRow1;
  const row2 = data ? data.filter((c) => c.row === 2) : defaultClientsRow2;

  const { ref: headerRef, isInView: headerInView } = useScrollReveal(0.15);
  const { ref: rowsRef, isInView: rowsInView } = useScrollReveal(0.1);

  return (
    <div className="relative bg-white pt-28 md:pt-48 pb-12 md:pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 animate-slide-from-bottom ${
            headerInView ? "in-view" : ""
          }`}
        >
          <p className="text-brand-red font-semibold text-sm mb-3 tracking-wide">
            Our Clients
          </p>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
            We have years of experience developing custom brand journey with:
          </p>
        </div>
      </div>

      {/* Marquee Rows */}
      <div
        ref={rowsRef}
        className={`animate-slide-from-bottom animate-delay-200 ${
          rowsInView ? "in-view" : ""
        }`}
      >
        {/* Row 1: Right to Left */}
        <div className="relative overflow-hidden mb-8 sm:mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none" />

          <div className="marquee-track-rtl">
            <div className="marquee-content">
              {row1.map((client, i) => (
                <LogoItem key={`r1a-${i}`} name={client.name} logo={client.logo} />
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {row1.map((client, i) => (
                <LogoItem key={`r1b-${i}`} name={client.name} logo={client.logo} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-brand-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-brand-light to-transparent z-10 pointer-events-none" />

          <div className="marquee-track-ltr">
            <div className="marquee-content">
              {row2.map((client, i) => (
                <LogoItem key={`r2a-${i}`} name={client.name} logo={client.logo} />
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {row2.map((client, i) => (
                <LogoItem key={`r2b-${i}`} name={client.name} logo={client.logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}