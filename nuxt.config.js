import { defineNuxtConfig } from 'nuxt'

//https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr:false,
  buildAssetsDir: '/nuxt/',
  app: {
    baseURL: '/portfolio/'
  },
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
})