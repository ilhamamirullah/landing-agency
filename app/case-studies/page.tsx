import { getCaseStudies, getFooterData } from "@/lib/api";
import Header from "@/components/Header";
import CTALeadSection from "@/components/CTALeadSection";
import FooterSection from "@/components/FooterSection";
import CaseStudiesPageContent from "@/components/CaseStudiesPageContent";

export default async function CaseStudiesPage() {
  const [caseStudies, footerData] = await Promise.all([
    getCaseStudies(),
    getFooterData(),
  ]);

  return (
    <div className="bg-white min-h-screen page-scroll">
      <Header forceWhite />
      <CaseStudiesPageContent data={caseStudies} />
      <CTALeadSection />
      <FooterSection data={footerData} />
    </div>
  );
}
