  
<script setup lang="ts">
import Card from "./Card.vue"
import SectionWrapper from "./SectionWrapper.vue"

interface Skill {
  name: string
  exp: string
  isWorkExp: boolean
  detail: string
  fileName?: string
}

const skills: Array<Skill> = [
  { name: "Vue.js", exp: "2年", isWorkExp: true, detail: "Vue2 + composition-api + typescriptを利用しwebアプリを開発" },
  { name: "Nuxt.js", exp: "1ヵ月", isWorkExp: false, detail: "ポートフォリオ作成時にNuxt3を使用。" },
  { name: "javaScript", exp: "2年", isWorkExp: true, detail: "実務ではVue.jsの利用経験あり。個人開発ではNode.js(express)の経験あり" },
  { name: "CSS", exp: "2年", isWorkExp: true, detail: "主にSCSSを利用。VuetifyやtailwindcssなどのUIフレームワークを使うことが多い。" },
  { name: "HTML", exp: "2年", isWorkExp: true, detail: "" },
  { name: "C#", exp: "1年", isWorkExp: true, fileName: "csharp", detail: "Webアプリサーバーのバグ修正、メール送信バッチプログラムの開発時に利用" },
  { name: "Azure", exp: "2年", isWorkExp: true, detail: "Azure web apps（Webアプリ用SaaS）、Azure DevOps（アジャイル開発管理）、Azure functions(バッチ）の実務利用経験あり。" },
  { name: "TypeScript", exp: "1年", isWorkExp: true, detail: "vue2と一緒に利用。" },
  { name: "Git", exp: "2年", isWorkExp: true, fileName: "github-icon", detail: "4～6人チームでの利用あり" },
]


const convertImgSrc = (fileName: string): string => {
  return new URL(`../assets/images/${fileName}.png`, import.meta.url).href
}
</script>
  <template>
  <SectionWrapper bgColor="bg-base-200">
    <template #title>Skills</template>
    <template #content>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <template v-for="skill in skills">
          <Card>
            <template #title>{{ skill.name }}</template>
            <template #body>
              <template v-if="skill.isWorkExp">
                <div class="p-1 bg-emerald-700 rounded-lg text-sm text-white">
                  実務経験：{{ skill.exp }}
                </div>
              </template>
              <template v-else>
                <div class="p-1 bg-yellow-200 rounded-lg text-sm">
                  個人開発：{{ skill.exp }}
                </div>
              </template>
              {{ skill.detail }}
            </template>
            <template #img>
              <img :src="convertImgSrc(skill.fileName ?? skill.name.toLowerCase())" class="w-16 p-2" :alt="skill.name">
            </template>
          </Card>
        </template>
      </div>
    </template>
  </SectionWrapper>
</template>