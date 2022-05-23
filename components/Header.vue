<script setup lang="ts">
const navs: Array<string> = ["Top", "Jobs", "Skills", "Works", "Contact"]
const isOpenSideBar = ref(false)

</script>
<template>
  <header>
    <nav class="fixed top-0 z-10 w-screen">
      <ul class="invisible md:visible absolute right-4 flex flex-row space-x-10 p-4">
        <template v-for="nav in navs">
          <li><a :href='`#${nav.toLowerCase()}`'>{{ nav }}</a></li>
        </template>
      </ul>
      <font-awesome-icon class=" visible md:invisible p-4 absolute right-0 top-0" icon="bars" size="lg"
        @click="() => isOpenSideBar = true" />
    </nav>
  </header>

  <div v-if="isOpenSideBar" class="fixed right-0 top-0 z-10 h-screen w-1/2 bg-white">
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