// ============================================================
//  SITE CONTENT — edit this file to update the whole website.
//  Everything marked [FILLER] is placeholder text to replace.
// ============================================================

export const site = {
  name: "Common Ground Street Health", // [FILLER]
  shortName: "Common Ground",
  tagline: "Medicine that meets people where they are.",
  description:
    "A mobile street medicine team bringing free primary care, wound care, mental health support and a path to housing to unsheltered neighbors across the city.", // [FILLER]
  url: "https://example.org", // set to your real domain once connected
  city: "Chicago, IL", // [FILLER]
  email: "hello@example.org", // [FILLER]
  phone: "(312) 555-0142", // [FILLER] outreach line
  phoneHref: "tel:+13125550142",
  textLine: "(312) 555-0199", // [FILLER] text line
  textHref: "sms:+13125550199",
  address: "1200 W Example Ave, Suite 100, Chicago, IL 60607", // [FILLER] mailing address
  ein: "00-0000000", // [FILLER] 501(c)(3) EIN
  donateUrl: "https://example.org/donate", // [FILLER] Stripe / Givebutter / Donorbox link
  social: {
    instagram: "https://instagram.com/", // [FILLER]
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Get Care", href: "/get-care" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const home = {
  eyebrow: "Street medicine · Since 2019", // [FILLER]
  headline: "Healthcare shouldn't require an address.",
  intro:
    "Our clinicians walk the city every week — under viaducts, along the river, in encampments and shelters — delivering free, dignified care to neighbors living without housing.",
  heroImage: "", // e.g. "/images/hero.jpg" — drop the file in /public/images
  heroImageAlt: "Outreach team talking with a patient",
  stats: [
    { value: "4,800+", label: "Street visits last year" }, // [FILLER]
    { value: "1,150", label: "Unique patients served" },
    { value: "212", label: "Neighbors connected to housing" },
    { value: "5", label: "Nights a week on the street" },
  ],
  approach: [
    {
      title: "We go to them",
      body: "No appointments, no waiting rooms. Care happens wherever our patients are — on their terms and their turf.",
    },
    {
      title: "We keep showing up",
      body: "Trust is the treatment. The same faces return week after week, building relationships that make real care possible.",
    },
    {
      title: "We bridge the gap",
      body: "From ID recovery to specialist visits to housing, our navigators walk alongside patients into the systems that failed them.",
    },
  ],
  quote: {
    text: "They didn't ask me to come to them. They came to me — and then they kept coming back.", // [FILLER]
    attribution: "Patient, Lower Wacker outreach route",
  },
};

export const services = [
  {
    slug: "primary-care",
    title: "Primary & Urgent Care",
    summary: "Exams, chronic disease management, prescriptions and acute care — delivered on the street.",
    details: ["Blood pressure & diabetes management", "Infections and respiratory illness", "Medication refills and prescriptions", "Referrals and specialist coordination"],
  },
  {
    slug: "wound-care",
    title: "Wound & Foot Care",
    summary: "Among the most common needs we see. Cleaning, dressing and follow-up to prevent serious complications.",
    details: ["Wound cleaning and dressing", "Foot exams and trench-foot prevention", "Socks, boots and hygiene supplies", "Follow-up visits on our routes"],
  },
  {
    slug: "behavioral-health",
    title: "Mental Health & Recovery",
    summary: "Compassionate, low-barrier support for mental health and substance use, including medication for addiction treatment.",
    details: ["Psychiatric evaluation and follow-up", "Buprenorphine (MAT) on the street", "Naloxone distribution and training", "Warm handoffs to treatment programs"],
  },
  {
    slug: "navigation",
    title: "Care Navigation & Housing",
    summary: "Getting well means getting stable. Our navigators help patients secure the documents, benefits and housing they need.",
    details: ["State ID and birth certificate recovery", "Medicaid and benefits enrollment", "Coordinated entry for housing", "Rides to appointments"],
  },
  {
    slug: "hospital-consult",
    title: "Hospital Consult Service",
    summary: "When patients are admitted, we follow them in — advocating for dignified care and safe discharge.",
    details: ["Inpatient visits for known patients", "Discharge planning with hospital teams", "Continuity back to the street team", "Respite care coordination"],
  },
  {
    slug: "basic-needs",
    title: "Basic Needs & Harm Reduction",
    summary: "Every visit starts with something tangible — water, food, warm layers, hygiene kits and safer-use supplies.",
    details: ["Seasonal survival kits", "Hygiene and first-aid kits", "Fentanyl test strips and naloxone", "Phone charging and connection"],
  },
];

// Weekly outreach schedule shown on /get-care  [FILLER]
export const schedule = [
  { day: "Monday", time: "6:00 – 9:00 PM", area: "Lower Wacker Drive & Loop", type: "Walking route" },
  { day: "Tuesday", time: "9:00 AM – 12:00 PM", area: "Pacific Garden Mission (shelter clinic)", type: "Pop-up clinic" },
  { day: "Wednesday", time: "6:00 – 9:00 PM", area: "Chicago River / Riverwalk", type: "Walking route" },
  { day: "Thursday", time: "1:00 – 5:00 PM", area: "Uptown · Wilson & Broadway", type: "Mobile van" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM", area: "Humboldt Park encampments", type: "Walking route" },
];

export const about = {
  headline: "Built on presence, patience and respect.",
  story: [
    "Common Ground began in 2019 when a handful of nurses and medical students started walking the city's viaducts on weeknights with backpacks full of supplies.", // [FILLER]
    "Today we're a team of physicians, nurse practitioners, social workers, peer navigators and volunteers — but the model hasn't changed. We go to people, we listen first, and we keep coming back.",
    "Our work is rooted in the global street medicine movement: the belief that the most effective way to care for unsheltered people is to meet them in their own environment, with humility and consistency.",
  ],
  values: [
    { title: "Dignity", body: "Every person we serve is a neighbor, not a case." },
    { title: "Consistency", body: "Showing up — every week, in every season — is how trust is earned." },
    { title: "Low barriers", body: "No ID, insurance or appointment required. Ever." },
    { title: "Partnership", body: "We work with shelters, hospitals and housing agencies to close gaps together." },
  ],
  team: [
    // [FILLER] add photo paths like "/images/team/jane.jpg"
    { name: "Dr. Jordan Ellis", role: "Medical Director", photo: "" },
    { name: "Maria Santos, NP", role: "Lead Nurse Practitioner", photo: "" },
    { name: "Andre Wallace", role: "Peer Navigator", photo: "" },
    { name: "Priya Nair, LCSW", role: "Behavioral Health Lead", photo: "" },
    { name: "Sam Okafor", role: "Outreach Coordinator", photo: "" },
    { name: "Leah Kim", role: "Volunteer Program Manager", photo: "" },
  ],
  partners: ["City Health Dept.", "Northside Hospital", "Pacific Garden Mission", "Housing Forward", "Street Medicine Institute", "County Medicaid"], // [FILLER]
};

export const getInvolved = {
  volunteerRoles: [
    { title: "Clinical volunteers", body: "Physicians, NPs, PAs, RNs and pharmacists join outreach shifts alongside our core team." },
    { title: "Student volunteers", body: "Medical, nursing and social work students gain supervised street medicine experience." },
    { title: "Community volunteers", body: "Pack supply kits, drive the van, help with events and keep our operations moving." },
  ],
  wishlist: [
    // [FILLER] link to an Amazon wishlist or drop-off instructions
    "New wool socks", "Hand & foot warmers", "Travel-size hygiene items", "Rain ponchos", "Granola bars & water", "Reading glasses", "Phone chargers", "Backpacks",
  ],
  wishlistUrl: "", // e.g. Amazon wishlist link
};

export const donate = {
  headline: "Your gift walks the route with us.",
  body: "Common Ground is a 501(c)(3) nonprofit. Every dollar keeps clinicians on the street, supplies in their packs and patients connected to care.",
  impact: [
    { amount: 25, label: "stocks a winter survival kit" },
    { amount: 75, label: "covers wound care supplies for a week" },
    { amount: 250, label: "funds a full night of outreach" },
    { amount: 1000, label: "helps one neighbor secure ID, benefits and housing" },
  ],
};

export const faqs = [
  { q: "Do I need insurance or ID to be seen?", a: "No. All of our street care is free and requires no ID, insurance or appointment." },
  { q: "How do I request a visit for someone?", a: "Call or text our outreach line with a location and description. If it's an emergency, call 911." },
  { q: "Are you a shelter?", a: "No — we're a mobile medical team. We partner closely with local shelters and can help connect people to beds." },
  { q: "Can I donate supplies?", a: "Yes! See our wishlist on the Get Involved page, or contact us to arrange a drop-off." },
];
