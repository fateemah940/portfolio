export const SITE = {
  name: "Yahaya Abubakar",
  jobTitle: "Full-stack Developer",
  title: "Yahaya Abubakar | Full-stack Developer (React, TypeScript, React Native, Rust, NestJS)",
  description:
    "Fullstack Developer with 3 years of experience building responsive React, TypeScript, and React Native applications from design to production. Published Sabi Ride to the App Store and Play Store (500+ downloads). Based in Abuja, Nigeria.",
  url: "https://abks-portfolio.vercel.app",
  email: "yahabubakar1@gmail.com",
  phone: "+234 807 704 8651",
  phoneHref: "tel:+2348077048651",
  linkedin: "https://linkedin.com/in/abkgami",
  github: "https://github.com/abkgami",
  location: "Abuja, Nigeria",
  resumePath: "/Yahaya_Abubakar_Frontend_Engineer_Resume.pdf",
  availability: "Open to work",
} as const;

export type ProjectSlug = "sabi-ride" | "motaa" | "web3-vending";

export interface ProjectListItem {
  slug: string;
  name: string;
  summary: string;
  period: string;
  type: "Professional" | "Personal";
  tech: string[];
  featured: boolean;
  links?: { label: string; href: string }[];
  caseStudy: boolean;
}

export const projects: ProjectListItem[] = [
  {
    slug: "sabi-ride",
    name: "Sabi Ride",
    summary:
      "Like a taxi-booking app: you request a ride, a driver is matched, and you track the trip.",
    period: "Mar 2024 – Dec 2024",
    type: "Professional",
    tech: ["React Native", "TypeScript", "Jest"],
    featured: true,
    caseStudy: true,
  },
  {
    slug: "motaa",
    name: "Motaa",
    summary: "An app where people browse, list, and pay for cars.",
    period: "Mar 2025 – Mar 2026",
    type: "Professional",
    tech: ["React Native", "TypeScript", "Jest"],
    featured: true,
    caseStudy: true,
  },
  {
    slug: "web3-vending",
    name: "Web3 Vending Machine Payments",
    summary:
      "Pay with USDC on Solana from your phone, get a one-time code, and use it to collect your item from a vending machine.",
    period: "Personal project",
    type: "Personal",
    tech: ["NestJS", "Supabase", "Solana Pay", "React Native"],
    featured: true,
    caseStudy: true,
  },
  {
    slug: "ride-booking-platform",
    name: "Ride Booking API + Mobile Front End",
    summary:
      "A ride-booking backend and mobile front end: log in, request a ride, match a driver, and view trip history.",
    period: "Personal project",
    type: "Personal",
    tech: ["NestJS", "Supabase", "React Native"],
    featured: false,
    caseStudy: false,
  },
  {
    slug: "client-websites",
    name: "Client Websites — Ahmfatya Concepts",
    summary:
      "Three responsive client websites built with React and Tailwind, tested and optimised for performance.",
    period: "Jan 2023 – Apr 2023",
    type: "Professional",
    tech: ["React.js", "Tailwind CSS"],
    featured: false,
    caseStudy: false,
  },
];

export interface CaseStudy {
  slug: ProjectSlug;
  name: string;
  plainEnglish: string;
  tags: string[];
  period: string;
  overview: string;
  role: string;
  problem: string;
  built: string[];
  tech: string[];
  outcome: string;
  improveNext: string;
}

export const PROJECTS: CaseStudy[] = [
  {
    slug: "sabi-ride",
    name: "Sabi Ride",
    plainEnglish:
      "Like a taxi-booking app: you request a ride, a driver is matched, and you track the trip.",
    tags: ["React Native", "TypeScript", "NestJS", "Supabase"],
    period: "Mar 2024 – Dec 2024",
    overview:
      "Sabi Ride is a ride-booking mobile app for Android and iOS. I built and published the apps with React Native to both the App Store and Play Store, reaching 500+ downloads.",
    role: "Front-End Developer (Mar 2024 – Jul 2024), promoted to Lead Front-End Developer (Jul 2024 – Dec 2024) within 4 months. Worked with 2 backend developers and 2 designers.",
    problem:
      "Riders needed a simple, reliable way to request a ride, get matched with a driver, and track the trip on both iPhone and Android from a single codebase.",
    built: [
      "Designed and implemented core screens from design specs and kept the UI consistent across iOS and Android.",
      "Built and published the Android and iOS apps with React Native to the Play Store and App Store.",
      "Implemented automated testing pipelines to improve release stability.",
      "Built a companion NestJS + Supabase API covering authentication, ride requests, driver matching, and trip history, consumed by the mobile front end.",
    ],
    tech: ["React Native", "TypeScript", "NestJS", "Supabase", "Jest"],
    outcome:
      "Apps live on the App Store and Play Store with 500+ downloads. Promotion from Front-End Developer to Lead within 4 months.",
    improveNext:
      "Add offline trip caching, deeper trip analytics, and expanded end-to-end test coverage for the booking flow.",
  },
  {
    slug: "motaa",
    name: "Motaa",
    plainEnglish: "An app where people browse, list, and pay for cars.",
    tags: ["React Native", "TypeScript", "Jest"],
    period: "Mar 2025 – Mar 2026",
    overview:
      "Motaa is a car marketplace app for Android and iOS. I led front-end development of the React Native MVP covering listings, payments, and navigation.",
    role: "Senior Front-End Developer (Mar 2025 – Mar 2026). Led front-end development of the MVP.",
    problem:
      "Buyers and sellers needed a mobile-first marketplace to browse cars, list cars, and pay, with a UI faithful to the design.",
    built: [
      "Led front-end development of a React Native MVP for Android and iOS: listings, payments, navigation.",
      "Delivered a design-faithful UI praised by the team's developers and designers and presented to the CEO and CTO.",
      "Wrote Jest tests to improve stability and catch bugs before release.",
    ],
    tech: ["React Native", "TypeScript", "Jest"],
    outcome:
      "MVP delivered and presented to the CEO and CTO. Design-faithful UI praised by developers and designers.",
    improveNext:
      "[ADD: outcome metrics] Add search filters, saved listings, and seller analytics in the next iteration.",
  },
  {
    slug: "web3-vending",
    name: "Web3 Vending Machine Payments",
    plainEnglish:
      "Pay with USDC on Solana from your phone, get a one-time code, and use it to collect your item from a vending machine.",
    tags: ["React Native", "Solana Pay", "NestJS", "Supabase"],
    period: "Personal project",
    overview:
      "Personal full-stack project: an Expo React Native app that accepts USDC on Solana via Solana Pay, with Privy email login and embedded wallets, backed by a NestJS + Supabase API that verifies each payment and issues a one-time code for the machine.",
    role: "Sole builder: mobile front end, login and wallet setup, Solana Pay checkout, NestJS verification API, Supabase schema, and OTP redemption flow.",
    problem:
      "Vending machines cannot check the blockchain themselves, and buyers should not deal with seed phrases at a machine. They need a simple phone flow: log in, pay in USDC, and get a code to collect the item.",
    built: [
      "Built the Expo React Native front end with Solana Mobile Stack for signing on mobile.",
      "Added Privy email login with embedded wallets so users can start without managing seed phrases.",
      "Integrated Solana Pay to accept USDC on Solana (devnet), with amount, recipient, and reference per purchase.",
      "Built the NestJS + Supabase backend to verify each Solana transaction, record it, and return a single-use OTP for redemption at the machine.",
    ],
    tech: ["React Native", "Expo", "Solana Mobile Stack", "Solana Pay", "Privy", "NestJS", "Supabase", "TypeScript"],
    outcome:
      "Working devnet flow: Log in → Pay USDC → Verify on Solana → Get OTP → Collect item. [ADD: GitHub repo URL]",
    improveNext:
      "Move to mainnet with fee and confirmation handling, add OTP expiry and single-use enforcement, and add a small admin view of transactions.",
  },
];

export interface Experience {
  title: string;
  company: string;
  start: string;
  startIso: string;
  end: string;
  endIso: string;
  points: string[];
  muted?: boolean;
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Senior Front-End Developer",
    company: "Motaa",
    start: "Mar 2025",
    startIso: "2025-03",
    end: "Mar 2026",
    endIso: "2026-03",
    points: [
      "Led front-end development of a React Native MVP for Android and iOS: listings, payments, navigation.",
      "Delivered a design-faithful UI praised by developers and designers and presented to the CEO and CTO.",
      "Wrote Jest tests to improve stability and catch bugs before release.",
    ],
  },
  {
    title: "Lead Front-End Developer",
    company: "Sabi Ride",
    start: "Jul 2024",
    startIso: "2024-07",
    end: "Dec 2024",
    endIso: "2024-12",
    points: [
      "Promoted from Front-End Developer to Lead within 4 months; worked with 2 backend developers and 2 designers.",
      "Designed and implemented core screens from design specs; kept the UI consistent across platforms.",
      "Implemented automated testing pipelines to improve release stability.",
      "Published Android and iOS apps with React Native to the App Store and Play Store, reaching 500+ downloads.",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Sabi Ride",
    start: "Mar 2024",
    startIso: "2024-03",
    end: "Jul 2024",
    endIso: "2024-07",
    points: [
      "Built core ride-booking screens with React Native and TypeScript from design specs.",
      "Collaborated with backend developers and designers to ship to production.",
    ],
  },
  {
    title: "Front-End Developer (SIWES Placement)",
    company: "Ahmfatya Concepts Limited",
    start: "Jan 2023",
    startIso: "2023-01",
    end: "Apr 2023",
    endIso: "2023-04",
    points: [
      "Built 3 responsive client websites with React.js and Tailwind CSS.",
      "Tested and optimised code for performance and responsiveness.",
    ],
  },
  {
    title: "Data Entry Assistant",
    company: "Semlark",
    start: "Jun 2021",
    startIso: "2021-06",
    end: "Mar 2022",
    endIso: "2022-03",
    points: ["Entered and verified data with attention to detail and accuracy."],
    muted: true,
  },
];

export const SKILLS: { group: string; items: { name: string; plain?: string }[] }[] = [
  {
    group: "Front-End",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React.js", plain: "A library for building website interfaces from reusable pieces." },
      { name: "Next.js", plain: "A React framework for fast, search-friendly websites." },
      {
        name: "React Native",
        plain: "Lets one codebase become both an iPhone app and an Android app.",
      },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS", plain: "A styling system for building clean interfaces quickly." },
      { name: "NativeWind", plain: "Tailwind-style styling for React Native apps." },
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      { name: "NestJS", plain: "A TypeScript framework for building reliable server APIs." },
      { name: "REST APIs", plain: "The standard way apps talk to servers over the internet." },
      { name: "Supabase", plain: "A hosted database and login service apps can plug into." },
      { name: "Firebase", plain: "Google tools for login, database, and push alerts." },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "MySQL" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git" },
      { name: "Jest", plain: "A testing tool that catches bugs before release." },
      { name: "Play Store and App Store Deployment", plain: "Publishing apps so anyone can download them." },
    ],
  },
  {
    group: "Soft Skills",
    items: [
      { name: "Problem-solving" },
      { name: "Collaboration" },
      { name: "Attention to detail" },
      { name: "User-focused design" },
    ],
  },
];

export const ABOUT = {
  summary:
    "Full-stack Developer with 3 years of experience building responsive React, TypeScript, and React Native applications from design to production. Published Sabi Ride to both the App Store and Play Store (500+ downloads), and built full-stack projects with NestJS and Supabase, including a Solana Pay vending-payment app with USDC on Solana.",
  howIWork: [
    "Design-faithful UI: what you approved is what ships.",
    "Tests before release with Jest and automated pipelines.",
    "Clear communication with designers and backend developers.",
    "Ships to production, including both app stores.",
  ],
  lookingFor: "[ADD: role type, remote/hybrid/onsite, availability date]",
  askMeAbout: [
    "Getting an app approved on both the App Store and Play Store",
    "Being promoted to Lead in 4 months at Sabi Ride",
    "Accepting USDC on Solana with Solana Pay and verifying it in NestJS",
    "Testing a React Native app with Jest",
  ],
  education: {
    degree: "B.Eng, Information and Communication Engineering",
    school: "Air Force Institute of Technology, Kaduna",
    start: "2022",
    end: "2026",
  },
};
