/*
 * Single source of truth for site copy, aligned with
 * "SX Tech — Company Profile Oct 2026 D1.0".
 */
import pillarBusiness from "@/assets/profile/pillar-business.jpg";
import pillarPeople from "@/assets/profile/pillar-people.jpg";
import pillarTechnology from "@/assets/profile/pillar-technology.jpg";
import pillarAi from "@/assets/profile/pillar-ai.jpg";
import momentScale from "@/assets/profile/moment-scale.jpg";
import momentExecution from "@/assets/profile/moment-execution.jpg";
import momentAi from "@/assets/profile/moment-ai.jpg";
import momentGrowth from "@/assets/profile/moment-growth.jpg";
import stepDiscover from "@/assets/profile/step-discover.jpg";
import stepDesign from "@/assets/profile/step-design.jpg";
import stepBuild from "@/assets/profile/step-build.jpg";
import stepAdopt from "@/assets/profile/step-adopt.jpg";
import expExecutive from "@/assets/profile/exp-executive.jpg";
import expMarketing from "@/assets/profile/exp-marketing.jpg";
import expCreative from "@/assets/profile/exp-creative.jpg";
import expProductivity from "@/assets/profile/exp-productivity.jpg";
import indRetail from "@/assets/profile/ind-retail.jpg";
import indHospitality from "@/assets/profile/ind-hospitality.jpg";
import indFinancial from "@/assets/profile/ind-financial.jpg";
import whySimple from "@/assets/profile/why-simple.jpg";
import whyReality from "@/assets/profile/why-reality.jpg";
import whyPractitioners from "@/assets/profile/why-practitioners.jpg";
import whyBeyond from "@/assets/profile/why-beyond.jpg";
import teamTer from "@/assets/team/team-ter.jpg";
import teamKho from "@/assets/team/team-kho.jpg";
import teamJ from "@/assets/team/team-j.jpg";
import teamKrit from "@/assets/team/team-krit.jpg";

export const CONTACT = {
  email: "contact@sxtech.me",
  phone: "+66 83 946 2656",
  phoneHref: "tel:+66839462656",
  web: "https://sxtech.me",
  companyTh: "บริษัท ซิกชีทเทค จำกัด",
  companyEn: "Sixsheet Tech Co., Ltd.",
  registration: "0105569101976",
  address:
    "เลขที่ 15 ห้อง A124 ซอยประดิพัทธ์ 17 ถนนประดิพัทธ์ แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400",
};

export const VISION = "To make transformation possible for every business.";
export const MISSION =
  "We partner with businesses to turn ambition into action — transforming people, processes, and technology through practical AI, real-world expertise, and solutions we build together.";
export const PRINCIPLES = [
  "Simple to understand",
  "Practical to apply",
  "Built to create real impact",
];

export const PILLARS = [
  {
    key: "Business",
    title: "Define the Future.",
    line: "Turn ambition into direction.",
    traits: ["Strategy", "Growth", "Execution"],
    image: pillarBusiness,
  },
  {
    key: "People",
    title: "Empower the Change.",
    line: "Turn potential into performance.",
    traits: ["Capability", "Mindset", "Adaptation"],
    image: pillarPeople,
  },
  {
    key: "Technology",
    title: "Build What Matters.",
    line: "Turn ideas into solutions.",
    image: pillarTechnology,
  },
  {
    key: "AI",
    title: "Accelerate What's Next.",
    line: "Turn possibilities into impact.",
    image: pillarAi,
  },
];

export const MOMENTS = [
  {
    title: "Ready to scale",
    quote: "We're growing, but our organization and systems can't keep up.",
    image: momentScale,
  },
  {
    title: "Stuck in execution",
    quote: "We know where we want to go, but struggle to make it happen.",
    image: momentExecution,
  },
  {
    title: "Ready for AI",
    quote: "We know AI matters, but where does it create real business value?",
    image: momentAi,
  },
  {
    title: "Searching for the next growth engine",
    quote: "Our business works today, but where does tomorrow's growth come from?",
    image: momentGrowth,
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Discover",
    sub: "Business challenges & AI opportunities",
    points: [
      "Understand your business goals",
      "Identify key challenges and opportunities",
      "Explore relevant AI use cases",
    ],
    deliverable: "AI Opportunity Map",
    image: stepDiscover,
  },
  {
    n: "02",
    title: "Design",
    sub: "Tailor-made training & use cases",
    points: [
      "Design a customized training program",
      "Create role-based learning paths",
      "Define real business use cases",
    ],
    deliverable: "Custom AI Program",
    image: stepDesign,
  },
  {
    n: "03",
    title: "Learn & Build",
    sub: "Hands-on workshops & AI prototypes",
    points: [
      "Interactive workshops and live practice",
      "Build AI prototypes for real work",
      "Get hands-on support from our experts",
    ],
    deliverable: "Working AI Solutions",
    image: stepBuild,
  },
  {
    n: "04",
    title: "Adopt",
    sub: "Apply AI to everyday workflows",
    points: [
      "Integrate AI into daily operations",
      "Support adoption and change management",
      "Measure impact and continuous improvement",
    ],
    deliverable: "Adoption Roadmap",
    image: stepAdopt,
  },
];

export const EXPERTISE = [
  {
    n: "01",
    title: "AI Executive & Business Excellence",
    line: "From strategy to execution — turn AI into real business value.",
    topics: [
      "AI Strategy & Opportunity",
      "Leadership & Change Management",
      "Use Case Development & ROI",
    ],
    course: "AI Executive Workshop",
    image: expExecutive,
  },
  {
    n: "02",
    title: "AI Marketing & Creative Transformation",
    line: "From ideas to high-impact content — faster, easier, and with real results.",
    topics: [
      "AI for Content & Campaigns",
      "Creator Workflow & Automation",
      "Social Media & Brand Growth",
    ],
    course: "AI Marketing & Content Lab",
    image: expMarketing,
  },
  {
    n: "03",
    title: "AI Creative & Production",
    line: "From concept to production — create professional content with AI.",
    topics: [
      "AI Image & Video Creation",
      "Creative Workflow & Production",
      "Brand Asset & Visual System",
    ],
    course: "AI Creative Production Lab",
    image: expCreative,
  },
  {
    n: "04",
    title: "AI Process & Productivity Transformation",
    line: "From repetitive work to smart workflows — save time, work smarter, and scale.",
    topics: [
      "AI Tools for Daily Work",
      "Workflow Automation",
      "Custom AI Solutions & AI Agents",
    ],
    course: "AI Productivity Lab",
    image: expProductivity,
  },
];

export const INDUSTRIES = [
  {
    n: "01",
    title: "Retail, FMCG & Consumer Brands",
    tag: "AI-Powered Growth",
    line: "Transform marketing and customer engagement from manual work into an AI-powered growth engine.",
    areas: [
      "Marketing & Content",
      "Commerce & Sales",
      "Customer Engagement",
      "Process Automation",
    ],
    image: indRetail,
  },
  {
    n: "02",
    title: "Hospitality, Tourism & Wellness",
    tag: "AI-Powered Experience",
    line: "Transform customer experiences from discovery to loyalty — powered by people, data and AI.",
    areas: [
      "Customer Journey",
      "Personalization & Engagement",
      "Service Productivity",
      "Content & Marketing",
    ],
    image: indHospitality,
  },
  {
    n: "03",
    title: "Financial & Professional Services",
    tag: "AI-Powered Knowledge",
    line: "Turn knowledge-intensive work into faster, smarter and more scalable operations.",
    areas: [
      "Knowledge & Documents",
      "Productivity & Automation",
      "Customer Service AI",
      "Business Intelligence",
    ],
    image: indFinancial,
  },
];

export const WHY = [
  {
    n: "01",
    title: "We make complex things simple.",
    body: "Complex ideas become conversations people understand, enjoy and actually use.",
    image: whySimple,
  },
  {
    n: "02",
    title: "Designed around your reality.",
    body: "We listen first, understand your gaps, then design the right program and solution.",
    image: whyReality,
  },
  {
    n: "03",
    title: "Real experience. Real practitioners.",
    body: "We teach and advise from what we've actually built, operated and experienced.",
    image: whyPractitioners,
  },
  {
    n: "04",
    title: "We don't stop at advice.",
    body: "From consulting and learning to prototyping, development, integration and scale.",
    image: whyBeyond,
  },
];

export type TeamMember = {
  name: string;
  nickname: string;
  role: string;
  years: number;
  focus: string;
  bio: string;
  photo: string;
  linkedin: string;
  email?: string;
  phone?: string;
  phoneHref?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Thanawin Ratametha",
    nickname: "Ter",
    role: "CEO and Venture Builder",
    years: 20,
    focus: "Business Transformation Consulting & Venture Building",
    bio: "Executive with 20 years in business and digital transformation across commerce tech, fintech and blockchain — blending business and technical expertise to build and scale new ventures.",
    photo: teamTer,
    linkedin: "https://www.linkedin.com/in/thanawin-ratametha-25385763/",
    email: "Ter@sixsheet.me",
    phone: "+66 83 946 2656",
    phoneHref: "tel:+66839462656",
  },
  {
    name: "Schwat Tangboontina",
    nickname: "Kho",
    role: "Chief Growth Officer and Business Development Partner",
    years: 15,
    focus: "AI Strategy, Adoption & Creative Content",
    bio: "AI adoption and governance specialist blending creativity, business and AI — helping organizations move AI from experimentation to practical business impact across strategy, people, workflows and real-world adoption.",
    photo: teamKho,
    linkedin: "https://www.linkedin.com/in/schwat-tangboontina-ba4285128",
  },
  {
    name: "Settha",
    nickname: "J",
    role: "Chief Marketing Officer and AI Engineer",
    years: 10,
    focus: "Creative Marketing & AI Production",
    bio: "Creative strategist with deep performance-marketing expertise — formerly Creative Strategist Manager at Heroleads Asia, leading pitches, creative campaigns and creative product management to hit revenue targets.",
    photo: teamJ,
    linkedin: "https://www.linkedin.com/in/jsettha",
  },
  {
    name: "Kritchapon Choktananan",
    nickname: "Krit",
    role: "Chief Technology Officer and AI Platform Builder",
    years: 15,
    focus: "Technology, Platforms & AI Development",
    bio: "Senior full-stack engineer who has built investment platforms and SAP systems — leading how we design, build and operate production platforms and AI solutions.",
    photo: teamKrit,
    linkedin: "https://www.linkedin.com/in/kritchapon-choktananan-176595b2/",
    email: "contact@sxtech.me",
    phone: "+66 91 532 4195",
    phoneHref: "tel:+66915324195",
  },
];
