<script setup lang="ts">
const props = defineProps<{
  section: string
}>()

</script>

<template>
  <a :href="props.section" class="scroll-btn duration-700"><span class="animate-bounce"></span>Scroll</a>
</template>

<style scoped lang="scss">
.scroll-btn {
  padding-top: 60px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  right: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: black;
  font: normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;

  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
  }

  &:hover {
    opacity: 0.5;
  }
}
</style>