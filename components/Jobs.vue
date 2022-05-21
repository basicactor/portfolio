<script setup lang="ts">
const isStacked = ref(true)
</script>

<template>
  <div id="jobs" class="hero min-h-screen bg-base-100">
    <div class="text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold mb-5">Jobs</h1>


        <div :class="{ 'stack': isStacked }" class="cursor-pointer" @click="() => isStacked = !isStacked">
          <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
          <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
          <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
        </div>
      </div>
    </div>
  </div>

</template>