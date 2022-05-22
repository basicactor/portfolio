<script setup lang="ts">
import SectionWrapper from "./SectionWrapper.vue"
import CardSide from "./CardSide.vue";

const isStacked = ref(true)
</script>

<template>
  <SectionWrapper bgColor="bg-base-100">
    <template #title>Job Experience</template>
    <template #content>
      <CardSide>
        <template #figure>
          <div>
            <p class="font-bold">独立系Sler企業</p>
            <p>2018.10 ~ 2021.7</p>
          </div>


        </template>
        <template #title>日本びじねすしすてびじねすしすて</template>
        <template #content></template>
      </CardSide>
      <!-- <div :class="{ 'stack': isStacked }" class="cursor-pointer" @click="() => isStacked = !isStacked">
        <div class="grid w-32 h-20 rounded bg-orange-300 text-primary-content place-content-center">日本ビジネスシステムズ株式会社(JBS)
        </div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
      </div> -->
    </template>
  </SectionWrapper>
</template>