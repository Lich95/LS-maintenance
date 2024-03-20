<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useDateFormat, useNow } from '@vueuse/core'

let time = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
setInterval(() => {
  time = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
}, 1000)
const route = useRoute()

</script>

<template>
  <div class="headerTop" style="background-color: #191970;height: 32px;font-size:16pt;">
    <div>××计算机联锁系统维护终端</div>
    <div>高速铁路标准站</div>
    <div>{{ time }}</div>
  </div>
  <el-menu :default-active="route.path.replace('/', '')" mode="horizontal" router style="height: 32px;">
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

<style scoped lang="scss">
::v-deep .el-tabs__content {
  display: none;
}

.headerTop {
  display: flex;
  justify-content: space-between;
}
.el-menu--horizontal>.el-menu-item{
  font-size:14pt;
  width: 130px;;
}
.el-menu--horizontal .el-menu-item.is-active {
  background-color: #00ffff;
  color: #333;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus{
  background-color: #00ffff;
  color: #333 !important;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled,.is-active):hover {
  background-color: #191970;
  color: #fff;
}
</style>
