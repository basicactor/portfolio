<script setup lang="ts">
const props = defineProps<{
  pageTitle: string
}>()

</script>

<template>
  <div class="pt-8 text-black tracking-widest 
  transition-opacity duration-500 ease-in hover:text-opacity-50" href="#">

    <svg class="animate-bounce top-0 right-0 left-0 mx-auto w-6 h-6 text-gray-900" fill="none" stroke-linecap="round"
      stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
    Scroll to {{ props.pageTitle }}
  </div>
</template>
