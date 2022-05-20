<script setup lang="ts">

const { badges } = defineProps<{
  badges: string[]
}>()
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        <slot name="title" />
      </h2>
      <p>
        <slot name="body" />
      </p>
      <div class="card-actions justify-end">
        <div v-for="badge in badges" class="badge bg-black p-3">
          {{ badge }}
        </div>
      </div>
    </div>
  </div>

</template>