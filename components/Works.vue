
<script setup lang="ts">
import Card from "./Card.vue"
import SectionWrapper from "./SectionWrapper.vue"


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
  <SectionWrapper bgColor="bg-base-100">
    <template #title>Works</template>
    <template #content>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <template v-for="work in works">
          <Card :badges="work.badges">
            <template #title>{{ work.title }}</template>
            <template #body>{{ work.detail }}</template>
            <template #img> <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></template>
          </Card>
        </template>
      </div>
    </template>

  </SectionWrapper>
</template>