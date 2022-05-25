<script setup lang="ts">
const isDarkMode = computed(() => localStorage.theme === 'dark'
  || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme: dark)').matches))

const navs: Array<string> = ["Top", "Jobs", "Skills", "Works", "Contact"]

const isOpenSideBar = ref(false)
</script>

<template>
  <nav class="fixed top-0 z-10 w-screen h-14 bg-stone-100 dark:bg-gray-800">
    <ul class="invisible md:visible">
      <li class="absolute left-0 p-4">
        <a v-if="isDarkMode" href="#top"><img src="@/assets/images/logo-dark.png" class="w-7"></a>
        <a v-else="isDarkMode" href="#top"><img src="@/assets/images/logo.png" class="w-7"></a>
      </li>
      <div class="absolute right-4 flex flex-row space-x-10 p-4">
        <template v-for="nav in navs">
          <li><a :href='`#${nav.toLowerCase()}`'>{{ nav }}</a></li>
        </template>
      </div>
    </ul>
    <font-awesome-icon class=" visible md:invisible p-4 absolute right-0 top-0" icon="bars" size="lg"
      @click="() => isOpenSideBar = true" />
  </nav>

  <div v-if="isOpenSideBar" class="fixed right-0 top-0 z-10 h-screen w-1/2 bg-stone-50 dark:bg-gray-600">
    <font-awesome-icon class="p-4 absolute right-0 top-0" icon="xmark" size="lg" @click="() => isOpenSideBar = false" />

    <ul class="p-4">
      <template v-for="nav in navs">
        <li class="p-4 border-b-2" @click="() => isOpenSideBar = false">
          <a class="inline-block w-full h-full " :href='`#${nav.toLowerCase()}`'>
            {{ nav }}</a>
        </li>
      </template>
    </ul>

  </div>
</template>