<template>
  <div class="card card-side bg-base-100 shadow-xl h-24 w-68">
    <figure>
      <slot name="img" />
      <!-- <img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"> -->
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <slot name="title" />
      </h2>
      <p>
        <slot name="body" />
      </p>
    </div>
  </div>
</template>