  
<script setup lang="ts">
import Card from "@/components/Card.vue"

interface Skill {
  name: string
  detail: string
}

const skills: Array<Skill> = [
  { name: "Vue.js", detail: "実務経験3年" },
  { name: "Nuxt.js", detail: "実務経験3年" },
  { name: "javaScript", detail: "実務経験3年" },
  { name: "CSS", detail: "実務経験3年" },
  { name: "HTML", detail: "実務経験3年" },
  { name: "C#", detail: "実務経験3年" },
  { name: "Azure", detail: "実務経験3年" },
  { name: "jQuery", detail: "実務経験3年" },
]


const convertImgSrc = (fileName: string): string => {
  return new URL(`../assets/images/${fileName}.png`, import.meta.url).href


  // return new URL(src, import.meta.url).href
}
</script>
  
  <template>
  <div id="skills" class="hero min-h-screen bg-base-200">
    <div class="">
      <!-- <div class="max-w-md"> -->
      <h1 class="text-5xl font-bold mb-5 text-center">Skills</h1>
      <div class="flex flex-wrap">
        <template v-for="skill in skills">
          <Card>
            <template #title>{{ skill.name }}</template>
            <template #body>{{ skill.detail }}</template>
            <template #img>
              <!-- <img :src="convertImgSrc(`../assets/images/${skill.name.toLowerCase()}.png`)" class="w-16 p-2"
                :alt="skill.name"> -->
              <img :src="convertImgSrc(`${skill.name.toLowerCase()}`)" class="w-16 p-2" :alt="skill.name">
            </template>
          </Card>
        </template>


        <!-- <Card>
          <template #title>Vue</template>
          <template #body>2年間実務経験あり</template>
        </Card>
        <Card>
          <template #title>Vue</template>
          <template #body>2年間実務経験あり</template>
        </Card>
        <Card>
          <template #title>Vue</template>
          <template #body>2年間実務経験あり</template>
        </Card> -->
      </div>




    </div>
    <!-- </div> -->
  </div>
</template>