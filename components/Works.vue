
<script setup lang="ts">
import Card from "./Card.vue"
import SectionWrapper from "./SectionWrapper.vue"
import { convertImgSrc } from "@/utilities/tools"



const works: Array<{
  title: string
  detail: string
  badges: string[]
  srcCode?: string
  img?: string, //画像ファイル名
}> = [
    { title: "This Portfolio Site", detail: "Nuxt3+Tailwindcssで作成しGitHub Pagesにて公開。レスポンシブ対応", badges: ['Nuxt.js v3.0', 'Vue.js v3.0', 'Tailwindcss v3.0', 'daisyui', 'TypeScrpit'], srcCode: "https://github.com/basicactor/portfolio", img: "portfolio" },
  ]
</script>

<template>
  <SectionWrapper>
    <template #title>Works</template>
    <template #content>
      <div class="grid grid-cols-1  gap-4">
        <template v-for="work in works">
          <Card :badges="work.badges">
            <template #img>
              <img :src="convertImgSrc(work.img)" class="w-20 md:w-40 mx-auto" :alt="work.img">
            </template>
            <template #title>{{ work.title }}</template>
            <template #body>
              <div class="text-left">{{ work.detail }}</div>
              <div v-if="work.srcCode"
                class="btn bg-yellow-500 border-yellow-500 dark:bg-yellow-800 dark:border-yellow-800 mt-5">
                <a :href="work.srcCode"
                  class="inline-block w-full h-full text-center p-4 tracking-widest dark:text-gray-100">
                  ソースコード
                </a>
              </div>
            </template>
          </Card>
        </template>
      </div>
    </template>

  </SectionWrapper>
</template>