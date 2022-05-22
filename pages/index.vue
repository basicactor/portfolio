<script setup lang="ts">
import MainVisual from "@/components/MainVisual.vue"
import Works from "@/components/Works.vue"
import Jobs from "@/components/Jobs.vue"
import Skills from "@/components/Skills.vue"
import Contact from "@/components/Contact.vue"

const navs: Array<string> = ["Top", "Jobs", "Skills", "Works", "Contact"]
</script>
<template>
  <header>
    <nav class="fixed top-0 z-10 w-screen">
      <ul class="absolute right-0 flex flex-row space-x-10 p-4">
        <template v-for="nav in navs">
          <li><a :href='`#${nav.toLowerCase()}`'>{{ nav }}</a></li>
        </template>
      </ul>
    </nav>
  </header>
  <main class="snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-smooth">
    <MainVisual id="top" class="snap-start" />
    <Jobs id="jobs" class="snap-start" />
    <Skills id="skills" class="snap-start" />
    <Works id="works" class="snap-start" />
    <Contact id="contact" class="snap-start" />
  </main>




</template>