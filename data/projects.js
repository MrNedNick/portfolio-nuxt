// Curated flagship work shown on /projects. Screenshots and the remaining
// entries (oxfeeds, mobilynx) are filled in as separate tasks — this
// structure is built to take them without further changes.
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
];
