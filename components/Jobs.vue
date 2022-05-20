<script setup lang="ts">
const isStacked = ref(true)
</script>

<template>
  <div id="jobs" class="hero min-h-screen bg-base-100">
    <div class="text-center">
      <div class="max-w-md">
        this is works

        <div :class="{ 'stack': isStacked }" @click="() => isStacked = false">
          <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
          <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
          <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
        </div>
      </div>
    </div>
  </div>

</template>