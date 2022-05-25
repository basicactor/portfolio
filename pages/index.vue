<script setup lang="ts">
import Header from "@/components/Header.vue"
import MainVisual from "@/components/MainVisual.vue"
import Works from "@/components/Works.vue"
import Jobs from "@/components/Jobs.vue"
import Skills from "@/components/Skills.vue"
import Contact from "@/components/Contact.vue"


</script>
<template>
  <div class="dark:text-gray-300">
    <header>
      <Header />
    </header>
    <main class="w-screen scroll-smooth">
      <MainVisual id="top" class="bg-stone-100 dark:bg-[#03253c]" />
      <Jobs id="jobs" class="bg-stone-200 dark:bg-gray-800" />
      <Skills id="skills" class="bg-stone-100 dark:bg-gray-900" />
      <Works id="works" class="bg-stone-200 dark:bg-gray-800" />
      <Contact id="contact" class="bg-stone-100 dark:bg-gray-900" />
    </main>
    <footer>
      <div class="w-full h-8 py-2 leading-4 bg-stone-100 dark:bg-gray-800 text-center">
        Copyrights © 2022 basicactor
      </div>
    </footer>
  </div>


</template>