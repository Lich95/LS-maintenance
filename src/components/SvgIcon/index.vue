<template>
  <svg :class="svgClass" v-bind="$attrs">
    <use :xlink:href="iconName" rel="external nofollow"   />
  </svg>
</template>

<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) {
     return `svg-icon ${iconName.value}`
  }
  return "svg-icon"
})
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>