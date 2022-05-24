<script setup lang="ts">
// const props = defineProps<{
//   bgColor: string[]
// }>()
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-lg md:max-w-4xl">
        <h1 class="text-2xl md:text-5xl font-bold mb-5 text-center">
          <slot name="title" />
        </h1>
        <div>
          <slot name="content" />
        </div>


      </div>
    </div>
  </div>
</template>