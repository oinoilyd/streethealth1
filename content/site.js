// ============================================================
//  SITE CONTENT — edit this file to update the whole website.
// ============================================================

export const site = {
  name: "Rockford Street Medicine",
  shortName: "Rockford", // shown large in the logo lockup
  brandSub: "Street Medicine", // shown small under it
  tagline: "Barrier-free medical care on the streets of Rockford.",
  description:
    "Rockford Street Medicine provides compassionate, people-centered, barrier-free medical care, harm reduction resources and social support directly to people experiencing homelessness and housing insecurity in Rockford.",
  url: "https://streethealth1.vercel.app", // change once a custom domain is connected
  city: "Rockford, IL",
  email: "rockfordstreetmedicine@gmail.com",
  social: {
    instagram: "https://www.instagram.com/rockfordstreetmedicinesig/",
    instagramHandle: "@rockfordstreetmedicinesig",
    facebook: "", // add the Facebook page link when available
  },
  wishlistUrl: "https://www.amazon.com/hz/wishlist/ls/1ZXE7CVSKVAU2",
  volunteerSignupUrl: "https://www.signupgenius.com/go/10C0548AEAA2AA1FFC43-64894741-september",
  newVolunteerContact: { name: "Brianna Blaine", email: "bblai@uic.edu" },
};

export const partnerMailto = `mailto:${site.email}?subject=${encodeURIComponent("Partnering with Rockford Street Medicine")}`;

export const nav = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/services" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const mission = [
  "Rockford Street Medicine provides compassionate, people-centered, barrier-free medical care, harm reduction resources, and social support directly to individuals experiencing homelessness, housing insecurity, and other barriers to care in Rockford. Through strong partnerships with community organizations, Rockford Street Medicine prioritizes safety, dignity, and continuity of care while training medical residents, medical students, and other healthcare professionals in the practice of street medicine.",
  "Rockford Street Medicine is committed to meeting people where they are, addressing immediate and acute needs, building trust, and fostering long-term health and well-being within the communities it serves. The organization also collects and analyzes meaningful data to inform sustainable health and social solutions.",
];

export const home = {
  kicker: "Medical runs in Rockford since January 2026",
  headline: "Medical care that meets people where they are.",
  intro:
    "We provide free, trauma-informed medical care, harm reduction resources and social support directly to people experiencing homelessness and housing insecurity in Rockford.",
  heroImage: "", // optional photo, e.g. "/images/hero.jpg" (file in /public/images). Empty = floral illustration.
  heroImageAlt: "",
  quote: {
    text: "I love being able to connect human to human and build relationships with the people we are serving! Providing dignity and respect to people through giving basic resources, support, a listening ear, and medical care is such a privilege.",
    attribution: "Madeleine Meehan, President & Founding Member",
  },
};

// "RSM by the numbers" — update these after each reporting period.
export const numbers = {
  asOf: "August 22, 2026",
  firstRun: "January 7, 2026",
  stats: [
    { value: "54", label: "Medical runs" },
    { value: "1,100", label: "Patient encounters" },
    { value: "20.4", label: "Average encounters per run" },
    { value: "59", label: "Volunteers" },
    { value: "786", label: "Service hours" },
    { value: "$26,339.88", label: "Economic impact" },
  ],
};

export const approach = [
  {
    title: "Meeting people where they are",
    body: "We bring care directly to people experiencing homelessness and housing insecurity, addressing immediate and acute needs and building trust over time.",
  },
  {
    title: "Safety, dignity and continuity",
    body: "Through partnerships with community organizations, we connect people to ongoing care and support that continues after we leave.",
  },
  {
    title: "Training and data",
    body: "We train medical residents, medical students and other healthcare professionals in street medicine, and collect data to inform sustainable health and social solutions.",
  },
];

export const services = [
  {
    slug: "medical-care",
    title: "Medical care on the street",
    summary: "Free, trauma-informed medical care provided wherever people are staying.",
    details: [
      "Medications",
      "Wound care",
      "Prenatal care",
      "Follow-up care after hospital discharge",
      "Vital signs and health screenings, including blood pressure checks and glucose monitoring",
    ],
  },
  {
    slug: "behavioral-health",
    title: "Behavioral health & recovery",
    summary: "Mental health and substance use care delivered on the street by specialists.",
    details: [
      "Behavioral health visits and medication with a psychiatrist",
      "Substance use counseling",
      "Medication-assisted treatment (MAT) from addiction medicine specialists",
      "Harm reduction resources",
    ],
  },
  {
    slug: "navigation",
    title: "Connection to care",
    summary: "Warm handoffs to clinics and community partners so care continues.",
    details: [
      "Warm handoffs with clinic providers",
      "Help with walk-in and scheduled appointments",
      "Connections to community partners",
      "Public transportation passes for medical appointments",
    ],
  },
  {
    slug: "basic-needs",
    title: "Supplies & basic needs",
    summary: "Seasonal gear, hygiene items, clothing, food and water.",
    details: [
      "Cold weather items: hats, gloves, socks, hand warmers",
      "Warm weather items: sunscreen, bug spray, ponchos, cold water, cooling towels",
      "Hygiene, wound care and first aid supplies",
      "Clothes, shoes, snacks and water",
    ],
  },
];

// Items we hand out on runs — shown on the Donate page.
export const inventory = [
  { group: "Cold weather", items: ["Hats", "Gloves", "Socks", "Hand warmers"] },
  { group: "Warm weather", items: ["Sunscreen", "Bug spray", "Ponchos", "Cooling towels", "Bottled water"] },
  { group: "Health & hygiene", items: ["Hygiene items", "Wound care supplies", "First aid supplies"] },
  { group: "Everyday needs", items: ["Clothes", "Shoes", "Snacks", "Public transportation passes"] },
];

export const partners = [
  "Live4Lali",
  "Red Cross",
  "Hope Reaching Out",
  "University of Illinois College of Medicine",
  "University of Illinois Family Medicine Residency Program",
];

// Add photos to /public/team and set `photo` to "/team/<file>.jpg".
export const executiveBoard = [
  {
    name: "Madeleine Meehan",
    credential: "MD/MPH Candidate",
    role: "President, Founding Member",
    photo: "/team/madeleine-meehan.jpg",
    email: "mmeehan3@uic.edu",
    bio: {
      hometown: "Brookfield, IL",
      undergrad: "University of Illinois Urbana-Champaign",
      interests: "My dog, hiking, ceramics, watercolor painting, traveling, cooking, yoga",
      why: "I love being able to connect human to human and build relationships with the people we are serving! Providing dignity and respect to people through giving basic resources, support, a listening ear, and medical care is such a privilege. I love getting to use principles of public health to make personal changes in the lives of those we serve. Getting to build this organization with so many incredible people has been an honor.",
    },
  },
  { name: "Emily Drew", role: "Vice President, Founding Member", photo: "/team/emily-drew.jpg" },
  { name: "Navdeep Kaur", role: "Clinical Coordinator, Founding Member", photo: "/team/navdeep-kaur.jpg" },
  { name: "Brianna Blaine", role: "Risk Management", photo: "" },
  { name: "Nathan Yoon", role: "Treasurer", photo: "" },
  { name: "Raneem Qassem", role: "Secretary", photo: "" },
  { name: "Ramsha Akram", role: "Education Director", photo: "" },
  { name: "Ben Ross", role: "Supplies Director", photo: "" },
  { name: "Ryan Lawson", role: "Research Director", photo: "" },
  { name: "Adam Geibel", role: "Grant Coordinator", photo: "/team/adam-geibel.jpg" },
];

// Empty until the board is announced; the About page shows a "coming soon" note.
export const boardOfDirectors = [];

export const emeritusBoard = [
  "Ryan Walton",
  "Amaan Chalisa",
  "Kayla Wartman",
  "Madeleine Meehan",
  "Alyssa Steege",
  "Navdeep Kaur",
  "Emily Drew",
];
