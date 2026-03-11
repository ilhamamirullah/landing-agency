import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTALeadSection from "@/components/CTALeadSection";
import FooterSection from "@/components/FooterSection";
import { getCaseStudies, getClients, getFooterData, getServices, getStats, getTestimonials } from "@/lib/api";

export default async function Home() {
  const [stats, services, clients, caseStudies, testimonials, footerData] =
    await Promise.all([
      getStats(),
      getServices(),
      getClients(),
      getCaseStudies(),
      getTestimonials(),
      getFooterData(),
    ]);

  return (
    <>
      <Header />
      <main className="snap-container" id="main-container">
        {/* Section 1: Home */}
        <section id="home" className="snap-section bg-black">
          <HeroSection stats={stats} />
        </section>

        {/* Section 2: About */}
        <section id="about" className="snap-section bg-black -mt-px lg:mt-0">
          <AboutSection stats={stats} />
        </section>

        <section id="services" className="snap-section bg-white">
          <ServicesSection data={services} />
          <section id="clients" className="bg-white">
            <ClientsSection data={clients} />
          </section>
        </section>

        {/* Section 5: Case Studies */}
        <section id="case-studies" className="snap-section bg-brand-light">
          <CaseStudiesSection data={caseStudies} />
        </section>

        {/* Section 6: Testimonials */}
        <section id="testimonials" className="snap-section bg-white">
          <TestimonialsSection data={testimonials} />
        </section>

        {/* Section 7: CTA + Footer */}
        <section id="cta" className="snap-section bg-white">
          <CTALeadSection />
          <FooterSection data={footerData} />
        </section>
      </main>
    </>
  );
}