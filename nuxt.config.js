import { defineNuxtConfig } from "nuxt";

const isProduction = process.env.NODE_ENV == "production";

const baseURL = isProduction ? "/portfolio/" : "";
const buildAssetsDir = isProduction ? "/nuxt" : "";
const href = isProduction ? "/basicactor/favicon.png" : "/favicon.png";

//https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: false,
  app: {
    baseURL,
    buildAssetsDir,
    head: {
      title: "basicactor's Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href,
        },
      ],
    },
  },
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
