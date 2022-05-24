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
  <main class="w-screen scroll-smooth">
    <MainVisual id="top" />
    <Jobs id="jobs" />
    <Skills id="skills" />
    <Works id="works" />
    <Contact id="contact" />
  </main>
  <footer>
    <div class="w-full h-8 py-2 leading-4 bg-stone-100 text-center">Copyrights © 2022 basicactor</div>
  </footer>


</template>