  <script setup lang="ts">
import ScrollBtn from "@/components/ScrollBtn.vue"
import { convertImgSrc } from "@/utilities/tools"

interface socialMedia {
  tooltip: string
  url: string
  imgName: string
}
const socialMedias: Array<socialMedia> =
  [
    { tooltip: "GitHub", url: "https://github.com/basicactor", imgName: "github-icon" },
    { tooltip: "Zenn", url: "https://zenn.dev/one_dock", imgName: "zenn-logo" },
    { tooltip: "Qiita", url: "https://qiita.com/basicactor", imgName: "qiita-icon" }
  ]
</script>
  
  <template>
  <div class="hero min-h-screen bg-stone-200 dark:bg-blue-900 relative">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="@/assets/images/avator-yellow.png" />
          </div>
        </div>
        <h1 class="text-5xl font-bold">basicactor</h1>
        <p class="text-lg ">Front-end Engineer</p>
        <div class="sns-icons flex-auto pt-8 text-center space-x-7">
          <template v-for="media in socialMedias">
            <button class="avatar tooltip" :data-tip="media.tooltip">
              <div class="w-7 rounded-full">
                <a :href="media.url" target="_blank" rel="noopener">
                  <img :src="convertImgSrc(media.imgName)" /></a>
              </div>
            </button>
          </template>
        </div>
        <div class="w-64 text-left">
          <p class="pt-6">大学院卒業後、独立系SIer企業に就職。自社サービス開発プロジェクトのメンバーとして主にWebアプリのフロントエンド実装を担当。</p>
        </div>
        <ScrollBtn class="absolute bottom-0 right-0 left-0 mx-auto" />
      </div>
    </div>
  </div>
</template>