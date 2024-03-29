<script setup lang="ts">
import { ref } from 'vue'
const cbiTabs = ref('Astation')
let tb1Data = ref([
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 },
    { data: 1 }
])
const cbiSendTabs = ref('bbxx')
const cbiReceiveTabs = ref('bbxx')
let tb2Data = ref([
    { data: '名称1' },
    { data: '名称2'},
    { data: '名称3' },
    { data: '名称4' },
    { data: '名称6'},
])
</script>

<template>
    <el-tabs v-model="cbiTabs">
        <el-tab-pane label="A客专车站" name="Astation">
            <div class="tables">
                <div class="lsSend">
                    <h3> 联锁发送 </h3>
                    <el-tabs type="border-card" v-model="cbiSendTabs">
                        <el-tab-pane label="版本信息" name="bbxx"></el-tab-pane>
                        <el-tab-pane label="发送信息" name="info"></el-tab-pane>
                        <el-tab-pane label="发送数据" name="data"></el-tab-pane>
                    </el-tabs>
                    <el-table :data="tb1Data" border>
                        <el-table-column type="index" width="80" label="序号">
                        </el-table-column>
                        <el-table-column property="data" label="数据">
                        </el-table-column>
                    </el-table>
                </div>
                <div class="lsReceive">
                    <h3> 联锁接收 </h3>
                    <el-tabs type="border-card" v-model="cbiReceiveTabs">
                        <el-tab-pane label="版本信息" name="bbxx"></el-tab-pane>
                        <el-tab-pane label="接收信息" name="info"></el-tab-pane>
                        <el-tab-pane label="接收数据" name="data"></el-tab-pane>
                    </el-tabs>
                    <el-table :data="tb2Data" border>
                        <el-table-column type="index" width="80" label="序号">
                        </el-table-column>
                        <el-table-column property="data" label="数据">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>

</template>

<style lang="scss" scoped>


.tables {
    display: flex;
    // transform: scaleX(-1);

    .lsSend {
        flex: 1;
        width: 45%;
    }

    .lsReceive {
        flex: 1;
    }

    h3 {
        text-align: center;
    }
}

::v-deep .el-table__header {
    .cell {
        white-space: nowrap;
    }
}
::v-deep .tables .el-tabs__content{
    display: none;
}
</style>