<script setup lang="ts">
import SectionWrapper from "./SectionWrapper.vue"
import CardSide from "./CardSide.vue";

const isStacked = ref(true)
</script>

<template>
  <SectionWrapper bgColor="bg-base-100">
    <template #title>Job Experience</template>
    <template #content>
      <CardSide>
        <template #figure>
          <div>
            <p class="font-bold">独立系Sler企業</p>
            <p>2018.10 ~ 2021.7</p>
          </div>


        </template>
        <template #title></template>
        <template #content>
          <div class="text-left">
            <p class="mb-4">自社サービスのWebアプリを開発（2年強）。途中運用保守業務にも従事</p>
            <p>開発アプリの概要</p>
            <p>フロント：Vue2 + composition API + Typescript</p>
            <p>サーバー：C# + Azure Web Apps</p>
            <P>プロジェクト管理：Azure DevOps</P>
            <P>バージョン管理：Git</P>
            <P>開発規模：4～6人</P>
            <P>役割：メンバー</P>
          </div>

        </template>
      </CardSide>
      <!-- <div :class="{ 'stack': isStacked }" class="cursor-pointer" @click="() => isStacked = !isStacked">
        <div class="grid w-32 h-20 rounded bg-orange-300 text-primary-content place-content-center">日本ビジネスシステムズ株式会社(JBS)
        </div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
      </div> -->
    </template>
  </SectionWrapper>
</template>