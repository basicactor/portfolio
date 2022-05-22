<script setup lang="ts">
import MainVisual from "@/components/MainVisual.vue"
import Works from "@/components/Works.vue"
import Jobs from "@/components/Jobs.vue"
import Skills from "@/components/Skills.vue"
import Contact from "@/components/Contact.vue"
</script>
<template>
  <div class="snap-y snap-mandatory h-screen w-screen overflow-scroll">
    <MainVisual class="snap-start" />
    <Jobs id="jobs" class="snap-start" />
    <Skills id="skills" class="snap-start" />
    <Works id="works" class="snap-start" />
    <Contact id="contact" class="snap-start" />
  </div>




</template>