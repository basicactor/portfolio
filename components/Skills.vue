  
<script setup lang="ts">
import Card from "@/components/Card.vue"

interface Skill {
  name: string
  detail: string
  fileName?: string
}

const skills: Array<Skill> = [
  { name: "Vue.js", detail: "実務経験3年" },
  { name: "Nuxt.js", detail: "実務経験3年" },
  { name: "javaScript", detail: "実務経験3年" },
  { name: "CSS", detail: "実務経験3年" },
  { name: "HTML", detail: "実務経験3年" },
  { name: "C#", detail: "実務経験3年", fileName: "csharp" },
  { name: "Azure", detail: "実務経験3年" },
  { name: "jQuery", detail: "実務経験3年" },
]


const convertImgSrc = (fileName: string): string => {
  return new URL(`../assets/images/${fileName}.png`, import.meta.url).href
}
</script>
  
  <template>
  <div id="skills" class="hero min-h-screen bg-base-200">
    <div class="">
      <!-- <div class="max-w-md"> -->
      <h1 class="text-5xl font-bold mb-5 text-center">Skills</h1>
      <div class="grid grid-cols-4 gap-4">
        <template v-for="skill in skills">
          <Card>
            <template #title>{{ skill.name }}</template>
            <template #body>{{ skill.detail }}</template>
            <template #img>
              <img :src="convertImgSrc(skill.fileName ?? skill.name.toLowerCase())" class="w-16 p-2" :alt="skill.name">
            </template>
          </Card>
        </template>

      </div>




    </div>
    <!-- </div> -->
  </div>
</template>