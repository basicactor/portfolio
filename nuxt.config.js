import { defineNuxtConfig } from "nuxt";

const app =
  process.env.NODE_ENV == "production"
    ? {
        baseURL: "/portfolio/",
        buildAssetsDir: "nuxt",
      }
    : {};

//https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: false,
  app,
  css: ["@/assets/styles/tailwind.css", "@/assets/styles/common.scss"],
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
