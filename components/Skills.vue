  
<script setup lang="ts">
import SectionWrapper from "./SectionWrapper.vue"
import Card from "./Card.vue"
import { convertImgSrc } from "@/utilities/tools"

const isDarkMode = computed(() => localStorage.theme === 'dark'
  || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme: dark)').matches))


const skills: Array<{
  name: string
  exp: string
  isWorkExp: boolean
  img?: string //画像ファイル名
  darkModeIcon?: string
  detail: string
}> = [
    { name: "Vue.js", exp: "2年", isWorkExp: true, detail: "Vue2 + composition-api + typescriptを利用しwebアプリを開発。" },
    { name: "Nuxt.js", exp: "1ヵ月", isWorkExp: false, detail: "ポートフォリオ作成時にNuxt3を使用。" },
    { name: "javaScript", exp: "2年", isWorkExp: true, detail: "実務ではVue.jsの利用経験あり。個人開発ではNode.js(express)の経験あり。" },
    { name: "CSS", exp: "2年", isWorkExp: true, detail: "主にSCSSを利用。VuetifyやtailwindcssなどのUIフレームワークを使うことが多い。" },
    { name: "HTML", exp: "2年", isWorkExp: true, detail: "vue.jsフレームワーク内で使用。" },
    { name: "C#", exp: "1年", isWorkExp: true, img: "csharp", detail: "Webアプリサーバーのバグ修正、メール送信バッチプログラムの開発時に経験。" },
    { name: "Azure", exp: "2年", isWorkExp: true, detail: "Azure web apps、Azure DevOps、Azure functionsの実務経験あり。" },
    { name: "TypeScript", exp: "1年", isWorkExp: true, detail: "Vue.jsと合わせて実務経験あり。" },
    { name: "Git", exp: "2年", isWorkExp: true, img: "github-icon", darkModeIcon: "github-icon-dark", detail: "4～6人チームでの利用あり。" },
  ]

</script>
  <template>
  <SectionWrapper>
    <template #title>Skills</template>
    <template #content>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <template v-for="skill in skills">
          <Card>
            <template #img>
              <img v-if="isDarkMode && skill.darkModeIcon" :src="convertImgSrc(skill.darkModeIcon)" class="w-10 mx-auto"
                :alt="skill.name">
              <img v-else :src="convertImgSrc(skill.img ?? skill.name.toLowerCase())" class="w-10 mx-auto"
                :alt="skill.name">
            </template>
            <template #title>{{ skill.name }}</template>
            <template #customBadges>
              <div v-if="skill.isWorkExp"
                class="badge badge-green-400 p-2 text-sm dark:bg-green-900 dark:border-green-900 dark:text-gray-300">
                業務経験 : {{ skill.exp }}</div>
              <div v-else
                class="badge badge-orange-400 p-2 text-sm dark:bg-green-900 dark:border-green-900 dark:text-gray-300">
                個人開発 : {{ skill.exp }}</div>
            </template>
            <template #body>
              <div class="text-left">{{ skill.detail }}</div>
            </template>
          </Card>
        </template>
      </div>
    </template>
  </SectionWrapper>
</template>