<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { useRoute } from 'vue-router' ;
 
const route=useRoute()

</script>

<template>
<el-menu :default-active="route.path.replace('/','')"   mode="horizontal" router>
  <el-menu-item index="rtStation">实时站场</el-menu-item>
  <el-menu-item index="driver">驱动采集</el-menu-item>
  <el-menu-item index="network">网络状态</el-menu-item>
  <el-menu-item index="interface">安全接口</el-menu-item>
  <el-menu-item index="alarm">报警诊断</el-menu-item>
  <el-menu-item index="info">信息查询</el-menu-item>
  <el-menu-item index="history">历史回放</el-menu-item>
  <el-menu-item index="fun">辅助功能</el-menu-item>

</el-menu>
</template>

<style scoped  lang="scss"> 
::v-deep .el-tabs__content{
    display: none;
}
</style>
