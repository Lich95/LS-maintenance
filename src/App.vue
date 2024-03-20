<script setup lang="ts">
import {RouterView} from 'vue-router'
import headerTab from "@/components/headerTab/index.vue"
</script>

<template>
  <headerTab></headerTab>
      <RouterView style="padding:10px"></RouterView>  
   
</template>

<style >
body{
  margin:0;padding:0px;
  background-color: #191970 ;;
  color:#fff;
  font-size: 14pt;
}
</style>
