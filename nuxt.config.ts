import { defineNuxtConfig } from 'nuxt'

//https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  router: {
    base: '/portfolio/'
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