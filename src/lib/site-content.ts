/*
 * Language-independent site data: contact details, imagery and team links.
 * All translatable copy lives in src/lib/content/{th,en}.ts and is matched
 * to these arrays by index.
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
  companyTh: "บริษัท ซิกชีทเทค จำกัด",
  companyEn: "Sixsheet Tech Co., Ltd.",
  registration: "0105569101976",
  address:
    "เลขที่ 15 ห้อง A124 ซอยประดิพัทธ์ 17 ถนนประดิพัทธ์ แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400",
};

export const PILLAR_IMAGES = [pillarBusiness, pillarPeople, pillarTechnology, pillarAi];
export const MOMENT_IMAGES = [momentScale, momentExecution, momentAi, momentGrowth];
export const PROCESS_IMAGES = [stepDiscover, stepDesign, stepBuild, stepAdopt];
export const EXPERTISE_IMAGES = [expExecutive, expMarketing, expCreative, expProductivity];
export const INDUSTRY_IMAGES = [indRetail, indHospitality, indFinancial];
export const WHY_IMAGES = [whySimple, whyReality, whyPractitioners, whyBeyond];

/** Two-digit index label used on numbered cards ("01", "02", …). */
export const num = (i: number) => String(i + 1).padStart(2, "0");

export type TeamMember = {
  name: string;
  nickname: string;
  years: number;
  photo: string;
  linkedin: string;
  email?: string;
  phoneHref?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Thanawin Ratametha",
    nickname: "Ter",
    years: 20,
    photo: teamTer,
    linkedin: "https://www.linkedin.com/in/thanawin-ratametha-25385763/",
    email: "Ter@sixsheet.me",
    phoneHref: "tel:+66839462656",
  },
  {
    name: "Schwat Tangboontina",
    nickname: "Kho",
    years: 15,
    photo: teamKho,
    linkedin: "https://www.linkedin.com/in/schwat-tangboontina-ba4285128",
  },
  {
    name: "Settha",
    nickname: "J",
    years: 10,
    photo: teamJ,
    linkedin: "https://www.linkedin.com/in/jsettha",
  },
  {
    name: "Kritchapon Choktananan",
    nickname: "Krit",
    years: 15,
    photo: teamKrit,
    linkedin: "https://www.linkedin.com/in/kritchapon-choktananan-176595b2/",
    email: "contact@sxtech.me",
    phoneHref: "tel:+66915324195",
  },
];
