<script setup lang="ts">
import SectionWrapper from "./SectionWrapper.vue"

const isStacked = ref(true)
</script>

<template>
  <SectionWrapper bgColor="bg-base-100">
    <template #title>Job Experience</template>
    <template #content>
      <div :class="{ 'stack': isStacked }" class="cursor-pointer" @click="() => isStacked = !isStacked">
        <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
      </div>
    </template>

  </SectionWrapper>
</template>