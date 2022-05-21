
<script setup lang="ts">
import Card from "@/components/Card.vue"

interface Work {
  title: string
  detail: string
  badges: string[]
}

const works: Array<Work> = [
  { title: "This Site", detail: "Nuxt3 + GitHub Pages", badges: ['vue', 'html'] },
  { title: "TODOアプリ", detail: "Nuxt3 + Netfily", badges: ['Nuxt', 'html'] },
  { title: "作成中", detail: "...", badges: [] },
]
</script>

<template>
  <div id="works" class="hero min-h-screen bg-base-100">
    <div class="text-center">
      <div class="">
        <h1 class="text-5xl font-bold mb-20">Works</h1>
        <div class="flex flex-row flex-wrap space-x-10">
          <template v-for="work in works">

            <Card :badges="work.badges">
              <template #title>{{ work.title }}</template>
              <template #body>{{ work.detail }}</template>
              <template #img> <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></template>
            </Card>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>