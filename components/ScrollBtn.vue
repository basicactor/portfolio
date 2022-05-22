<script setup lang="ts">
const props = defineProps<{
  pageTitle: string
}>()

</script>

<template>
  <div class="pt-8 text-black tracking-widest 
  transition-opacity duration-500 ease-in hover:text-opacity-50" href="#">
    <font-awesome-icon icon="angle-down" size="2x"
      class="animate-bounce absolute top-0 right-0 left-0 mx-auto  text-gray-900" />
    <div class="py-2">Scroll to {{ props.pageTitle }}</div>
  </div>
</template>
