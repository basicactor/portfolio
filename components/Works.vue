
<script setup lang="ts">
import Card from "@/components/Card.vue"
</script>

<template>
  <div id="works" class="hero min-h-screen bg-base-100">
    <div class="text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold mb-5">Works</h1>
        <div class="grid-cols-3">

          <Card :badges="['vue', 'html']">
            <template #title>TODOアプリ</template>
            <template #body>1日で作りました。</template>
          </Card>
          <Card :badges="['vue', 'javaScript']">
            <template #title>作成中</template>
            <template #body>...</template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>