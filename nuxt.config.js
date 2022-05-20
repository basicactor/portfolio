import { defineNuxtConfig } from "nuxt";

//https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: false,
  // app: {
  //   baseURL: "/portfolio/",
  //   buildAssetsDir: "nuxt",
  // },
  css: ["@/assets/styles/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  },
});
