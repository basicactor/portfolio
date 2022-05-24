<script setup lang="ts">

const { badges, size, hasSubtitle } = defineProps<{
  badges?: string[]
  size?: number
  hasSubtitle?: boolean
}>()
</script>

<template>
  <div :class='`card w-${size ?? 72} bg-base-100 dark:bg-gray-700 shadow-md`'>
    <div class="card-body p-6">
      <slot name="img" />
      <h2 class="font-bold text-lg md:text-xl text-center">
        <slot name="title" />
      </h2>
      <p v-if="hasSubtitle">
        <slot name="subtitle" />
      </p>
      <hr>
      <template v-if="badges">
        <div>
          <template v-for="badge in badges">
            <span class="badge mx-1">{{ badge }}</span>
          </template>
        </div>
      </template>
      <slot name="customBadges" />
      <div class="text-sm md:text-md">
        <slot name="body" />
      </div>
    </div>
  </div>



</template>