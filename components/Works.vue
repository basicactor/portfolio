
<script setup lang="ts">
import Card from "./Card.vue"
import SectionWrapper from "./SectionWrapper.vue"
import { convertImgSrc } from "@/utilities/tools"



const works: Array<{
  title: string
  detail: string
  badges: string[]
  srcCode?: string
  fileName?: string,
}> = [
    { title: "This Portfolio Site", detail: "Nuxt3+Tailwindcssで作成しGitHub Pagesにて公開。レスポンシブ対応", badges: ['Nuxt.js v3.0', 'Vue.js v3.0', 'Tailwindcss v3.0', 'daisyui', 'TypeScrpit'], srcCode: "https://github.com/basicactor/portfolio", fileName: "portfolio" },
  ]
</script>

<template>
  <SectionWrapper :bgColor="['bg-stone-100', 'bg-gray-700']">
    <template #title>Works</template>
    <template #content>
      <div class="grid grid-cols-1  gap-4">

        <div></div>

        <template v-for="work in works">
          <div class="card bg-base-100 shadow-md">
            <div class="card-body p-6">
              <img :src="convertImgSrc(work.fileName)" class="w-20 md:w-40 mx-auto" :alt="work.fileName">
              <h2 class="font-bold text-xl text-center">{{ work.title }}</h2>
              <hr>
              <div>
                <template v-for="badge in work.badges">
                  <span class="badge mx-1">{{ badge }}</span>
                </template>
              </div>

              <div class="text-left">{{ work.detail }}</div>
              <div v-if="work.srcCode"
                class="btn bg-yellow-500 border-yellow-500 dark:bg-yellow-800 dark:border-yellow-800 mt-5">
                <a :href="work.srcCode"
                  class="inline-block w-full h-full text-center p-4 tracking-widest dark:text-gray-100">
                  ソースコード
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>

  </SectionWrapper>
</template>