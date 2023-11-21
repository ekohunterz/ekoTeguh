// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Eko Teguh Muhammadi",
      meta: [
        { name: "description", content: "Portfolio Eko Teguh Muhammadi" },
        { name: "name", content: "Portfolio" },
        { name: "author", content: "Eko Teguh Muhammadi" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image", "@nuxtjs/google-fonts", "nuxt-icon", "@nuxt/ui", "nuxt-particles", "@nuxtjs/device"],

  googleFonts: {
    families: {
      Roboto: true,
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
  particles: {
    mode: "full", // 'full' | 'slim' | 'basic' | 'custom'
    lazy: true,
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  plugins: [{ src: "~/plugins/aos", mode: "client" }],
});
