<script setup lang="ts">
import { getClock } from '@/hooks/time'
import {ref} from 'vue'
let time = ref('');
setInterval(() => { time.value = getClock() }, 1000)
</script>

<template>
  <div id="operate">
    <div class="visbArea">
      <el-card class="box-card alert">
        <template #header>
          <div class="card-header">
            <span>报警信息窗</span>
            <el-button class="button" text>更多+</el-button>
          </div>
        </template>
        <div>1111</div>
        <div>1111</div>

      </el-card>
      <el-card class="box-card state">
        <template #header>
          <div class="card-header">
            <span>设备状态信息窗</span>
            <el-button class="button" text>更多+</el-button>
          </div>
        </template>
        <div>2222</div>
        <div>2222</div>

      </el-card>
    </div>
    <div class="btns">
      <el-button>网络状态</el-button>
      <el-button>驱动采集</el-button>
      <el-button>信息查询</el-button>

      <el-button>总取消</el-button>
      <el-button>区故障</el-button>
      <el-button>总反位</el-button>

    </div>
    <div class="tips">
      <div class="msgBox">提示信息窗</div>
      <div class="timeBox">{{ time }}</div>
    </div>
  </div>
</template>

<style scoped  lang="scss">
#operate {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  
  background-color: #424242;
}

.visbArea {
  flex: 8;
  background-color: #000;
  padding: 10px;

  .box-card {
    width: 270px;

    &.state {
      float: right;
    }

    &.alert {
      float: left;
    }
  }

}

.btns {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;;
  border-bottom: 1px solid #8b8b8b;
  margin:0 20px;
}

.tips {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #424242;
  color: #fff;;

  div {
    display: inline-block;
  }

  .msgBox {
    width: calc(100% - 210px);
    padding-left: 20px;
  }

  .timeBox {
    width: 200px
  }
}</style>
