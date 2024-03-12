<script setup lang="ts">
import {RouterView} from 'vue-router'
import headerTab from "@/components/headerTab/index.vue"
</script>

<template>
  <headerTab></headerTab>
      <RouterView></RouterView>  
   
</template>

<style >
body{
  margin:0;padding:0
}
</style>
