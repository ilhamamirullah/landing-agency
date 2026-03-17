export interface CaseStudyResult {
  label: string;
  value: string;
  sublabel: string;
}

export interface CaseStudyDetailData {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  heroImage: string;
  backgroundDescription: string;
  backgroundImage: string;
  objective: string;
  strategyExecution: string;
  results: CaseStudyResult[];
}

export const caseStudiesData: CaseStudyDetailData[] = [
  {
    id: "1",
    slug: "mld-content-hunt-fig-studio",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    category: "Awareness",
    client: "fig studio",
    heroImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop",
    backgroundDescription:
      "Lorem ipsum dolor sit amet consectetur. Vel consequat neque commodo ultrices. Malesuada ultrices ac adipiscing sodales imperdiet eros egestas aliquam turpis. Et luctus eu eu volutpat tristique. Justo nisl ipsum risus duis id egestas sollicitudin. Integer lacus eu mus a elit convallis nisl nunc. Ipsum ipsum ultrices tristique vulputate in. Id enim purus tellus semper. Amet eget et pellentesque vel gravida. Mi nulla potenti et tellus aliquam aliquam lectus ante ut.",
    backgroundImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    objective:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sit malesuada dapibus eu pulvinar eu enim adipiscing. Tellus semper elit arcu quis aenean at arcu a. Tempus purus non scelerisque augue turpis dignissim lorem una. Sed tortor tortor enim sit pretium arcu scelerisque.",
    strategyExecution:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sit malesuada dapibus eu pulvinar eu enim adipiscing. Tellus semper elit arcu quis aenean at arcu a. Tempus purus non scelerisque augue turpis dignissim lorem una. Sed tortor tortor enim sit pretium arcu scelerisque.",
    results: [
      { label: "Overall Result", value: "16,582,561", sublabel: "Actual Reach Plan" },
      { label: "Plan", value: "1,513,241", sublabel: "Actual views" },
      { label: "Actual Results", value: "686", sublabel: "Submission Plan" },
    ],
  },
  {
    id: "2",
    slug: "mld-content-hunt-late-checkout",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    category: "Branding",
    client: "Late Checkout",
    heroImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
    backgroundDescription:
      "Lorem ipsum dolor sit amet consectetur. Vel consequat neque commodo ultrices. Malesuada ultrices ac adipiscing sodales imperdiet eros egestas aliquam turpis. Et luctus eu eu volutpat tristique. Justo nisl ipsum risus duis id egestas sollicitudin. Integer lacus eu mus a elit convallis nisl nunc. Ipsum ipsum ultrices tristique vulputate in. Id enim purus tellus semper. Amet eget et pellentesque vel gravida. Mi nulla potenti et tellus aliquam aliquam lectus ante ut.",
    backgroundImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    objective:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sit malesuada dapibus eu pulvinar eu enim adipiscing. Tellus semper elit arcu quis aenean at arcu a. Tempus purus non scelerisque augue turpis dignissim lorem una. Sed tortor tortor enim sit pretium arcu scelerisque.",
    strategyExecution:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sit malesuada dapibus eu pulvinar eu enim adipiscing. Tellus semper elit arcu quis aenean at arcu a. Tempus purus non scelerisque augue turpis dignissim lorem una. Sed tortor tortor enim sit pretium arcu scelerisque.",
    results: [
      { label: "Overall Result", value: "8,340,200", sublabel: "Total Impressions" },
      { label: "Plan", value: "920,500", sublabel: "Target Reach" },
      { label: "Actual Results", value: "1,240", sublabel: "New Followers" },
    ],
  },
  {
    id: "3",
    slug: "mld-content-hunt-vertex-digital",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    category: "Performance",
    client: "Vertex Digital",
    heroImage:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1600&auto=format&fit=crop",
    backgroundDescription:
      "Lorem ipsum dolor sit amet consectetur. Vel consequat neque commodo ultrices. Malesuada ultrices ac adipiscing sodales imperdiet eros egestas aliquam turpis. Et luctus eu eu volutpat tristique. Justo nisl ipsum risus duis id egestas sollicitudin. Integer lacus eu mus a elit convallis nisl nunc. Ipsum ipsum ultrices tristique vulputate in. Id enim purus tellus semper. Amet eget et pellentesque vel gravida. Mi nulla potenti et tellus aliquam aliquam lectus ante ut.",
    backgroundImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    objective:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sit malesuada dapibus eu pulvinar eu enim adipiscing. Tellus semper elit arcu quis aenean at arcu a. Tempus purus non scelerisque augue turpis dignissim lorem una. Sed tortor tortor enim sit pretium arcu scelerisque.",
    strategyExecution:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sit malesuada dapibus eu pulvinar eu enim adipiscing. Tellus semper elit arcu quis aenean at arcu a. Tempus purus non scelerisque augue turpis dignissim lorem una. Sed tortor tortor enim sit pretium arcu scelerisque.",
    results: [
      { label: "Overall Result", value: "5,120,000", sublabel: "Total Reach" },
      { label: "Plan", value: "780,000", sublabel: "Clicks" },
      { label: "Actual Results", value: "3,480", sublabel: "Conversions" },
    ],
  },
  {
    id: "4",
    slug: "mld-content-hunt-creator-collective",
    title: "Drive engagement and submission for MLD Content Hunt Season 3",
    category: "Awareness",
    client: "Creator Collective",
    heroImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    backgroundDescription:
      "Lorem ipsum dolor sit amet consectetur. Vel consequat neque commodo ultrices. Malesuada ultrices ac adipiscing sodales imperdiet eros egestas aliquam turpis. Et luctus eu eu volutpat tristique. Justo nisl ipsum risus duis id egestas sollicitudin. Integer lacus eu mus a elit convallis nisl nunc. Ipsum ipsum ultrices tristique vulputate in. Id enim purus tellus semper. Amet eget et pellentesque vel gravida. Mi nulla potenti et tellus aliquam aliquam lectus ante ut.",
    backgroundImage:
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=800&auto=format&fit=crop",
    objective:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sit malesuada dapibus eu pulvinar eu enim adipiscing. Tellus semper elit arcu quis aenean at arcu a. Tempus purus non scelerisque augue turpis dignissim lorem una. Sed tortor tortor enim sit pretium arcu scelerisque.",
    strategyExecution:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet sit malesuada dapibus eu pulvinar eu enim adipiscing. Tellus semper elit arcu quis aenean at arcu a. Tempus purus non scelerisque augue turpis dignissim lorem una. Sed tortor tortor enim sit pretium arcu scelerisque.",
    results: [
      { label: "Overall Result", value: "12,900,000", sublabel: "Total Impressions" },
      { label: "Plan", value: "2,100,000", sublabel: "Video Views" },
      { label: "Actual Results", value: "4,520", sublabel: "Community Joins" },
    ],
  },
];
