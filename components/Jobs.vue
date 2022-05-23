<script setup lang="ts">
import SectionWrapper from "./SectionWrapper.vue"
import CardSide from "./CardSide.vue";

const isStacked = ref(true)
const langs: Array<string> = [
  "vue 2.5+",
  "TypeScript",
  "Vuetify",
  "SCSS",
  "c#",
]

const tableItems: Array<{
  label: string
  detail: string
}> = [
    { label: "フロント", detail: "Vue2 + composition API + Typescript+ Vuetify + (PWA)" },
    { label: "サーバー", detail: "C# + Azure Web Apps + Azure function + Azure SQL Database" },
    { label: "外部API", detail: "MS Graph API" },
    { label: "プロジェクト管理", detail: "Azure DevOps / Jira" },
    { label: "バージョン管理", detail: "Git" },
    { label: "開発規模", detail: "4～6人" },
    { label: "対象ブラウザ", detail: "Chrome, Edge, IE11, safari" },
  ]
</script>

<template>
  <SectionWrapper bgColor="bg-base-100">
    <template #title>Job Experience</template>
    <template #content>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body p-6">
          <h2 class="font-bold text-xl text-center">独立系Sler企業</h2>
          <p>2018.10 ~ 2021.7</p>
          <hr>
          <div>
            <template v-for="lang in langs">
              <span class="badge mx-1">{{ lang }}</span>
            </template>

          </div>

          <div class="text-left">
            <p class="mb-4">自社サービス開発プロジェクトのメンバーとして参加。主にフロントエンドを担当。</p>
            <h3 class="font-bold">携わったWebアプリの概要</h3>
            <p>社内会議予約を効率化するアプリ</P>
            <P>参加者と日時で検索すると空き日程候補が表示される。候補を選択すると会議室予約と参加者への会議依頼が一括で行える。</P>
            <h3 class="font-bold mt-4">開発環境</h3>
          </div>
          <div class="overflow-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>言語/プラットフォーム</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="item in tableItems">
                  <tr>
                    <td>{{ item.label }}</td>
                    <td class="whitespace-normal">{{ item.detail }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </SectionWrapper>
</template>