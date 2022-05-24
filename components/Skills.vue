  
<script setup lang="ts">
import CardSide from "./CardSide.vue"
import SectionWrapper from "./SectionWrapper.vue"
import { convertImgSrc } from "@/utilities/tools"


const skills: Array<{
  name: string
  exp: string
  isWorkExp: boolean
  detail: string
  fileName?: string
}> = [
    { name: "Vue.js", exp: "2年", isWorkExp: true, detail: "Vue2 + composition-api + typescriptを利用しwebアプリを開発。" },
    { name: "Nuxt.js", exp: "1ヵ月", isWorkExp: false, detail: "ポートフォリオ作成時にNuxt3を使用。" },
    { name: "javaScript", exp: "2年", isWorkExp: true, detail: "実務ではVue.jsの利用経験あり。個人開発ではNode.js(express)の経験あり。" },
    { name: "CSS", exp: "2年", isWorkExp: true, detail: "主にSCSSを利用。VuetifyやtailwindcssなどのUIフレームワークを使うことが多い。" },
    { name: "HTML", exp: "2年", isWorkExp: true, detail: "vue.jsフレームワーク内で使用。" },
    { name: "C#", exp: "1年", isWorkExp: true, fileName: "csharp", detail: "Webアプリサーバーのバグ修正、メール送信バッチプログラムの開発時に経験。" },
    { name: "Azure", exp: "2年", isWorkExp: true, detail: "Azure web apps、Azure DevOps、Azure functionsの実務経験あり。" },
    { name: "TypeScript", exp: "1年", isWorkExp: true, detail: "Vue.jsと合わせて実務経験あり。" },
    { name: "Git", exp: "2年", isWorkExp: true, fileName: "github-icon", detail: "4～6人チームでの利用あり。" },
  ]

</script>
  <template>
  <SectionWrapper :bgColor="['bg-stone-200', 'dark:bg-base-200']">
    <template #title>Skills</template>
    <template #content>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <template v-for="skill in skills">
          <div class="card bg-base-100 shadow-md">
            <div class="card-body p-6">
              <img :src="convertImgSrc(skill.fileName ?? skill.name.toLowerCase())" class="w-10 mx-auto"
                :alt="skill.name">
              <h2 class="font-bold text-xl text-center">{{ skill.name }}</h2>
              <hr>

              <div v-if="skill.isWorkExp" class="badge badge-green-400 p-2 text-sm">業務経験 : {{ skill.exp }}</div>
              <div v-else class="badge badge-orange-400 p-2 text-sm">個人開発 : {{ skill.exp }}</div>
              <div class="text-left">{{ skill.detail }}</div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </SectionWrapper>
</template>