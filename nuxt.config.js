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
  // Headers of the page
  head: {
    title: "basicactor's Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "@assets/images/favicon.ico" }, // ここを変更する
    ],
  },
  target: "static",
  ssr: false,
  app,
  css: [
    "@/assets/styles/tailwind.css",
    "@/assets/styles/common.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  plugins: ["@/plugins/fontawesome.ts"],
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
