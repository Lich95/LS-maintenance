<script setup lang="ts">

interface ListItem {
  value: string
  label: string
}


import { ref } from 'vue'
const checkList = ref(['一级报警', '二级报警', '三级报警'])
const gocheck = () => {
  console.log(checkList.value);
};
const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
};
const list = ref<ListItem[]>([])
const options = ref<ListItem[]>([])
const value = ref<string[]>([])
const loading = ref(false);

const alarmData = ref([
  { time: '1', from: '2', info: '3', satte: '4', level: '5', restoreTime: '6' },
  { time: '1', from: '2', info: '3', satte: '4', level: '5', restoreTime: '6' },
  { time: '1', from: '2', info: '3', satte: '4', level: '5', restoreTime: '6' },
  { time: '1', from: '2', info: '3', satte: '4', level: '5', restoreTime: '6' }
])
</script>

<template>
  <div class="searchDiv">
    <el-checkbox-group v-model="checkList" @change="gocheck">
      <el-checkbox value="levelOne" label="一级报警" />
      <el-checkbox label="二级报警" value="levelTwo" />
      <el-checkbox label="三级报警" value="levelThree" />
      <el-checkbox label="事件信息" value="event" />
      <el-checkbox label="已恢复" value="done" />
    </el-checkbox-group>
    <div>
      <span>关键字搜索</span>
      <el-select v-model="value" multiple filterable remote reserve-keyword placeholder="" remote-show-suffix
        :remote-method="remoteMethod" style="width: 240px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>

    <div>
      <el-button>清除</el-button>
      <el-button>查询</el-button>
    </div>
    <div>
      <span>记录条数</span>
      <el-input style="width: 50px"></el-input>
    </div>
    <el-button>打印</el-button>
  </div>

  <el-table border :data="alarmData" height="calc(100vh - 114px)" style="background-color: #4682b4;font-size:20px">

    <el-table-column type="index" width="80" label="序号">
    </el-table-column>
    <el-table-column property="time" label="发生时间">
    </el-table-column>
    <el-table-column property="from" label="来源">
    </el-table-column>
    <el-table-column property="info" label="报警内容">
    </el-table-column>
    <el-table-column property="state" label="报警状态">
    </el-table-column>
    <el-table-column property="level" label="级别">
    </el-table-column>
    <el-table-column property="restoreTime" label="恢复时间">
    </el-table-column>
    <el-table-column property="help" label="帮助">
      <a>建议措施</a>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">
.searchDiv {
  font-size: 14px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.el-checkbox-group {
  display: inline-block;
  margin-right: 40px;
}

::v-deep .el-table__header {
  .el-table__cell {
    background-color: #191970;
  }

  .cell {
  // font-size: 20px;
    white-space: nowrap;
  }
}

::v-deep .el-table tr {
  background-color: #4682b4 !important
}

</style>
