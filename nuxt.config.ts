// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        "https://mrnednick.github.io/portfolio-nuxt",
    },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
