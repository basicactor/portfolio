<script setup lang="ts">

const { badges, size } = defineProps<{
  badges?: string[]
  size?: number
}>()
</script>

<template>
  <div :class='`card w-${size ?? 72} bg-base-100 shadow-xl`'>
    <figure>
      <slot name="img" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <slot name="title" />
      </h2>
      <p>
        <slot name="body" />
      </p>
      <div class="card-actions justify-end">
        <template v-if="badges">
          <div v-for="badge in badges" class="badge bg-black p-3">
            {{ badge }}
          </div>
        </template>
      </div>
    </div>
  </div>

</template>