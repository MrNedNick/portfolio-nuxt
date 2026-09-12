// Curated flagship work shown on /projects. Screenshots are filled in as a
// separate task — this structure is built to take them without further
// changes.
export const projects = [
  {
    id: "vibeos",
    name: "VibeOS",
    oneLiner:
      "A personal life OS — habits, tasks, goals, training, notes and finance, all connected.",
    task: "Track habits, tasks, goals, training and finances without re-entering the same data across five different apps.",
    result:
      "A single app where one action cascades everywhere — check off a habit and its linked goal advances on its own.",
    stack: ["Vue 3", "TypeScript", "Pinia", "Supabase"],
    stats: [
      { label: "tests", value: "665" },
      { label: "components", value: "146" },
      { label: "initial JS (gzip)", value: "114 kB" },
    ],
    screenshot: null,
    links: {
      demo: "https://mrnednick.github.io/VibeOS",
      source: "https://github.com/MrNedNick/VibeOS",
    },
  },
  {
    id: "oxfeeds",
    name: "OXFeeds",
    oneLiner:
      "A modern redesign of a live search-traffic monetization landing page.",
    task: "Replace an aging single-page site for a search-monetization business with a design that matches current standards.",
    result:
      "A dark glassmorphism landing with scroll animations, a GDPR cookie-consent flow, and full legal pages, deployed live.",
    stack: ["Vue 3", "Vite 5", "Vue Router 4"],
    screenshot: null,
    links: {
      demo: "https://mrnednick.github.io/oxfeeds-landing/",
      source: "https://github.com/MrNedNick/oxfeeds-landing",
    },
  },
  {
    id: "mobilynx",
    name: "Mobilynx",
    oneLiner:
      "A rebuilt marketing site for an ad-tech traffic network, replacing a static single-page original.",
    task: "Turn a single static HTML page into a proper multi-page app covering traffic sources, targeting and pricing.",
    result:
      "A clean, themed Vue SPA with dedicated pricing, targeting and legal pages, deployed live via GitHub Pages.",
    stack: ["Vue 3", "Vite 5", "Vue Router 4"],
    screenshot: null,
    links: {
      demo: "https://mrnednick.github.io/mobilynx-landing/",
      source: "https://github.com/MrNedNick/mobilynx-landing",
    },
  },
];
