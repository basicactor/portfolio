<script setup lang="ts">
import Header from "@/components/Header.vue"
import MainVisual from "@/components/MainVisual.vue"
import Works from "@/components/Works.vue"
import Jobs from "@/components/Jobs.vue"
import Skills from "@/components/Skills.vue"
import Contact from "@/components/Contact.vue"


</script>
<template>
  <Header />
  <main class="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth">
    <MainVisual id="top" class="snap-start" />
    <Jobs id="jobs" class="snap-start" />
    <Skills id="skills" class="snap-start" />
    <Works id="works" class="snap-start" />
    <Contact id="contact" class="snap-start" />
  </main>
  <footer class="w-screen text-center">Copyright@basicactor2022</footer>




</template>