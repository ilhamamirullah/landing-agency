export interface ApproachItem {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  image: string; // used in list page
  heroImage: string;
  challengeText: string;
  challengeImage: string;
  approachItems: ApproachItem[];
  whatYouGetItems: string[];
  whatYouGetImage: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "1",
    number: "01",
    slug: "digital-media-campaign-strategy",
    title: "Digital Media Campaign Strategy",
    description:
      "We crawl and analyze every data aspect to help you determine the right strategy by leveraging various channels and platforms to achieve marketing objective goals.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    challengeText:
      "Many businesses generate high traffic but struggle to turn it into qualified leads and real revenue. Large ad budgets often deliver low ROAS due to inconsistent messaging and unstructured marketing funnels. Without proper tracking and performance analysis, it becomes difficult to optimize campaigns and clearly measure their true impact on business growth.",
    challengeImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    approachItems: [
      {
        title: "Data-Driven Strategy",
        description:
          "We leverage audience research, market insights, and competitive analysis before launching any campaign.",
      },
      {
        title: "Full-Funnel Campaign Planning",
        description:
          "We design strategies that cover awareness, consideration, conversion, and retention.",
      },
      {
        title: "Performance Optimization",
        description:
          "Continuous A/B testing, audience segmentation, and creative refinement to maximize ROI.",
      },
      {
        title: "Creative That Converts",
        description:
          "Visually compelling and strategically crafted messaging designed to drive action.",
      },
      {
        title: "Transparent Reporting",
        description:
          "Clear dashboards with actionable insights and measurable outcomes.",
      },
    ],
    whatYouGetItems: [
      "A structured and measurable campaign strategy",
      "Highly targeted audience segmentation",
      "Conversion-focused ad creatives",
      "An optimized and efficient marketing funnel",
      "Regular performance monitoring and reporting",
      "Ongoing optimization for sustainable growth",
    ],
    whatYouGetImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    number: "02",
    slug: "digital-media-campaign-planning",
    title: "Digital Media Campaign Planning",
    description:
      "With data analyst and digital media specialist, we create precision and effective media plan to help our clients start from winning the competition, increase engagement and recapture the consumers.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    challengeText:
      "Without a clear media plan, campaigns waste budget on the wrong channels and miss the ideal audience. Many brands lack a structured approach to allocate budget efficiently across platforms. A precise planning process is essential to align messaging, timing, and budget to achieve maximum campaign impact.",
    challengeImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    approachItems: [
      {
        title: "Audience Research",
        description:
          "Deep analysis of your target audience's behaviors, interests, and media consumption habits.",
      },
      {
        title: "Channel Mapping",
        description:
          "Identifying the right mix of channels to reach your audience at every stage of the funnel.",
      },
      {
        title: "Budget Allocation",
        description:
          "Strategic distribution of budget across channels to maximize efficiency and return.",
      },
      {
        title: "Timeline Planning",
        description:
          "Structured campaign calendars aligned with your business goals and key dates.",
      },
      {
        title: "KPI Framework",
        description:
          "Establishing measurable goals with clear metrics to track campaign success.",
      },
    ],
    whatYouGetItems: [
      "A comprehensive media plan tailored to your goals",
      "Clear channel strategy and budget breakdown",
      "Audience personas and targeting framework",
      "Campaign calendar with key milestones",
      "KPI tracking framework",
      "Ongoing plan optimization recommendations",
    ],
    whatYouGetImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    number: "03",
    slug: "digital-media-campaign-buying",
    title: "Digital Media Campaign Buying",
    description:
      "We maintain our good relationship with every stakeholders in today's digital world. As a result, we offer best deal and solution, manage the relation and situation and send it in an appetite report format only for you.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    challengeText:
      "Negotiating media buys without strong publisher relationships often results in overpriced placements and poor ad positions. Brands that lack access to premium inventory miss out on high-value audience touchpoints. Effective media buying requires both market knowledge and trusted partnerships to secure the best deals.",
    challengeImage:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop",
    approachItems: [
      {
        title: "Publisher Relations",
        description:
          "Leveraging strong, long-term relationships with top media publishers for premium placements.",
      },
      {
        title: "Negotiation Excellence",
        description:
          "Securing competitive rates and added value through expert media buying negotiations.",
      },
      {
        title: "Inventory Access",
        description:
          "Access to exclusive and premium ad inventory across digital and traditional media.",
      },
      {
        title: "Deal Management",
        description:
          "End-to-end management of media deals from contract to delivery and reporting.",
      },
      {
        title: "Performance Tracking",
        description:
          "Detailed reports on delivery, viewability, and campaign performance for every buy.",
      },
    ],
    whatYouGetItems: [
      "Access to premium and exclusive media inventory",
      "Competitive pricing through publisher relationships",
      "Comprehensive deal management from start to finish",
      "Detailed delivery and performance reports",
      "Transparent cost breakdowns",
      "Strategic recommendations for future buys",
    ],
    whatYouGetImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    number: "04",
    slug: "premium-publisher",
    title: "Premium Publisher",
    description:
      "Through our wide-range publisher networks, we offer you many opportunities to start spreading the conversation, do more action or even become more innovating in the digital advertising world.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    challengeText:
      "Reaching the right audience at scale requires access to quality publisher networks. Many brands struggle to find trustworthy inventory that aligns with their brand values and audience. Without a premium publisher network, campaigns risk poor brand safety, low engagement, and wasted media spend.",
    challengeImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    approachItems: [
      {
        title: "Network Curation",
        description:
          "Carefully selected publisher partners that align with your brand and audience profile.",
      },
      {
        title: "Brand Safety",
        description:
          "Strict standards to ensure your ads only appear in brand-safe, high-quality environments.",
      },
      {
        title: "Audience Reach",
        description:
          "Wide-reaching network to maximize brand exposure across diverse audience segments.",
      },
      {
        title: "Custom Formats",
        description:
          "Innovative and engaging ad formats tailored for each publisher environment.",
      },
      {
        title: "Performance Analysis",
        description:
          "Detailed performance insights per publisher to continuously optimize your spend.",
      },
    ],
    whatYouGetItems: [
      "Access to a curated premium publisher network",
      "Brand-safe advertising environments",
      "Wide audience reach across multiple verticals",
      "Custom and innovative ad formats",
      "Transparent publisher performance reporting",
      "Ongoing network optimization",
    ],
    whatYouGetImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    number: "05",
    slug: "programmatic",
    title: "Programmatic",
    description:
      "We offer programmatic advertising and also help you to optimize your campaign. Start from using real-time bidding, deliver the right ads quality to the right audience, until help you to manage your targeting methods using audience data.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop",
    challengeText:
      "Manual ad buying is slow, expensive, and difficult to scale. Without programmatic technology, brands miss real-time opportunities to reach their audience at the optimal moment. Managing multiple platforms manually also creates inconsistencies in targeting, bidding, and performance data that are hard to reconcile.",
    challengeImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    approachItems: [
      {
        title: "Real-Time Bidding",
        description:
          "Automated bidding to win the best ad placements at the most efficient price in real time.",
      },
      {
        title: "Audience Targeting",
        description:
          "Precise targeting using first-party, second-party, and third-party audience data.",
      },
      {
        title: "DSP Management",
        description:
          "Expert management across multiple Demand-Side Platforms for maximum reach and efficiency.",
      },
      {
        title: "Creative Optimization",
        description:
          "Dynamic creative testing and optimization to maximize engagement and conversion rates.",
      },
      {
        title: "Attribution Modeling",
        description:
          "Multi-touch attribution to accurately measure the true impact of every touchpoint.",
      },
    ],
    whatYouGetItems: [
      "Automated real-time bidding for optimal placements",
      "Precise data-driven audience targeting",
      "Multi-platform DSP management",
      "Dynamic creative optimization",
      "Accurate multi-touch attribution",
      "Comprehensive programmatic performance reporting",
    ],
    whatYouGetImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    number: "06",
    slug: "social-media",
    title: "Social Media",
    description:
      "We distribute your great social media content to the right audience, achieving more impact and efficiently achieve your brand goals.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop",
    challengeText:
      "Building a consistent and impactful social media presence requires more than just posting content. Brands that lack a clear social strategy struggle with low engagement, inconsistent messaging, and poor audience growth. Without the right targeting and content approach, social media spend fails to deliver measurable business results.",
    challengeImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    approachItems: [
      {
        title: "Content Strategy",
        description:
          "Building a content calendar aligned with your brand voice, campaign goals, and audience interests.",
      },
      {
        title: "Platform Expertise",
        description:
          "Specialized strategies for each platform — Meta, TikTok, Instagram, LinkedIn, and more.",
      },
      {
        title: "Paid Social",
        description:
          "Targeted paid campaigns to amplify reach, drive engagement, and generate conversions.",
      },
      {
        title: "Community Management",
        description:
          "Active audience engagement to build brand loyalty and grow your community.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Clear performance reporting with actionable insights to continuously refine your strategy.",
      },
    ],
    whatYouGetItems: [
      "A clear and consistent social media strategy",
      "Platform-specific content and campaign plans",
      "Targeted paid social campaigns",
      "Active community management",
      "Regular performance analytics and insights",
      "Ongoing strategy optimization",
    ],
    whatYouGetImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    number: "07",
    slug: "kol",
    title: "KOL",
    description:
      "We help you connect and select Influencers that best represent your brand to answer your campaign objective.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1600&auto=format&fit=crop",
    challengeText:
      "Choosing the wrong influencer can damage brand reputation and waste significant budget. Many brands struggle to identify KOLs whose audience genuinely aligns with their target market. Without a structured vetting and management process, influencer campaigns often underdeliver on reach, authenticity, and measurable business outcomes.",
    challengeImage:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop",
    approachItems: [
      {
        title: "KOL Vetting",
        description:
          "Rigorous selection process evaluating audience quality, engagement rate, and brand alignment.",
      },
      {
        title: "Campaign Briefing",
        description:
          "Structured creative briefs ensuring KOL content aligns with your brand guidelines and goals.",
      },
      {
        title: "Contract Management",
        description:
          "End-to-end contract and deliverable management to protect your brand and ensure compliance.",
      },
      {
        title: "Content Approval",
        description:
          "Review and approval workflows to maintain brand safety before any content goes live.",
      },
      {
        title: "Performance Measurement",
        description:
          "Detailed post-campaign reporting on reach, engagement, sentiment, and ROI.",
      },
    ],
    whatYouGetItems: [
      "Access to a vetted network of relevant KOLs",
      "Structured briefing and content alignment process",
      "Full contract and deliverable management",
      "Brand safety content approval workflow",
      "Detailed campaign performance reporting",
      "Ongoing KOL relationship management",
    ],
    whatYouGetImage:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop",
  },
];
