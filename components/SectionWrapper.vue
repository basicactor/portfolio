<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <h1 class="text-5xl font-bold mb-5 text-center">
          <slot name="title" />
        </h1>
        <div>
          <slot name="content" />
        </div>

      </div>
    </div>
  </div>
</template>