<script setup lang="ts">
import { ref } from 'vue'
const tccTabs = ref('KZbiaozhunTCC')
const tccSend = ref('bbxx')
const tccReceive = ref('bbxx')

let tb1Data = ref([
    { name: '萨嘎是', version: '1.1.1' }])
let tb2Data = ref([
    { name: '萨嘎是', version: '1.1.1' }])
const sendTableColumns = ref([
    { property: 'name', label: '名称', },
    { property: 'version', label: '版本号', },
])
const receiveTableColumns = ref([
    { property: 'name', label: '名称', },
    { property: 'version', label: '版本号', },
])

const tccSendChange = (c: string) => {
    if (c == 'mlxx') {
        sendTableColumns.value = [
            { property: 'fck', label: '发车口名称', },
            { property: 'fqj', label: '发车请求(FQJ)', },
            { property: 'fsj', label: '发车锁闭(FSJ)', },
            { property: 'ffaj', label: '发车辅助按钮(FFAJ)', },
            { property: 'jfaj', label: '接车辅助按钮(JFAJ)', },
        ]
    } else if (c == 'bbxx') {
        sendTableColumns.value = [
            { property: 'name', label: '名称', },
            { property: 'version', label: '版本号', },
        ]
        tb1Data.value = [
            { name: '萨嘎是', version: '1.1.1' }
        ]
        console.log(123);
    } else if (c == 'jlxx') {
        sendTableColumns.value = [
            { property: 'number', label: '进路号', },
            { property: 'state', label: '信号状态', },
            { property: 'lockState', label: '区段锁闭状态', },
            { property: 'name', label: '名称', },
        ]
    } else if (c == 'dsxx') {
        sendTableColumns.value = [
            { property: 'name', label: '进站信号名称', },
            { property: 'state', label: '信号状态', },
        ]
    } else if (c == 'ztxx') {
        sendTableColumns.value = [
            { property: 'name', label: '信号机名称', },
            { property: 'state', label: '状态', },
        ]
    } else if (c == 'kzxx') {
        sendTableColumns.value = [
            { property: 'name', label: '名称', },
            { property: 'state', label: '状态', },
        ]
    }

}
const tccReceiveChange = (c: string) => {
    if (c == 'mlxx') {
        sendTableColumns.value = [
            { property: 'fck', label: '发车口名称', },
            { property: 'fqj', label: '发车请求(FQJ)', },
            { property: 'fsj', label: '发车锁闭(FSJ)', },
            { property: 'ffaj', label: '发车辅助按钮(FFAJ)', },
            { property: 'jfaj', label: '接车辅助按钮(JFAJ)', },
        ]
    } else if (c == 'bbxx') {
        sendTableColumns.value = [
            { property: 'name', label: '名称', },
            { property: 'version', label: '版本号', },
        ]


    } else if (c == 'jlxx') {
        sendTableColumns.value = [
            { property: 'number', label: '进路号', },
            { property: 'state', label: '信号状态', },
            { property: 'lockState', label: '区段锁闭状态', },
            { property: 'name', label: '名称', },
        ]
    } else if (c == 'dsxx') {
        sendTableColumns.value = [
            { property: 'name', label: '进站信号名称', },
            { property: 'state', label: '信号状态', },
        ]
    } else if (c == 'ztxx') {
        sendTableColumns.value = [
            { property: 'name', label: '信号机名称', },
            { property: 'state', label: '状态', },
        ]
    } else if (c == 'kzxx') {
        sendTableColumns.value = [
            { property: 'name', label: '名称', },
            { property: 'state', label: '状态', },
        ]
    }

}
</script>

<template>
    <el-tabs v-model="tccTabs">
        <el-tab-pane label="KZbiaozhunTCC" name="KZbiaozhunTCC">
            <div class="tables">
                <div class="lsSend">
                    <h3> 联锁发送 </h3>
                    <el-tabs type="border-card" @tab-change="tccSendChange" v-model="tccSend">
                        <el-tab-pane label="版本信息" name="bbxx"></el-tab-pane>
                        <el-tab-pane label="区间方向控制命令信息" name="mlxx"></el-tab-pane>
                        <el-tab-pane label="进路信息" name="jlxx"></el-tab-pane>
                        <el-tab-pane label="进展信号机红灯断丝信息" name="dsxx"></el-tab-pane>
                        <el-tab-pane label="信号机调车状态信息" name="ztxx"></el-tab-pane>
                        <el-tab-pane label="无配线站信号机控制信息" name="kzxx"></el-tab-pane>
                    </el-tabs>
                    <el-table :data="tb1Data" border>
                        <el-table-column type="index" width="80" label="序号">
                        </el-table-column>
                        <el-table-column v-for="item in sendTableColumns" :property="item.property" :label="item.label">
                        </el-table-column>
                    </el-table>
                </div>
                <div class="lsReceive">
                    <h3> 联锁接收 </h3>
                    <el-tabs type="border-card" @tab-change="tccReceiveChange" v-model="tccReceive">
                        <el-tab-pane label="版本信息" name="bbxx"></el-tab-pane>
                        <el-tab-pane label="区间方向" name="qjfx"></el-tab-pane>
                        <el-tab-pane label="区间闭塞分区" name="qjbsfq"></el-tab-pane>
                        <el-tab-pane label="发车口区间防护信号机红灯断丝" name="fckqjfhxh"></el-tab-pane>
                        <el-tab-pane label="信号限速" name="xs"></el-tab-pane>
                        <el-tab-pane label="异物侵限灾害" name="zh"></el-tab-pane>
                        <el-tab-pane label="无配线站区间方向" name="fx"></el-tab-pane>
                        <el-tab-pane label="无配线站轨道状态" name="zt"></el-tab-pane>
                        <el-tab-pane label="无配线站区间信号机红灯断丝" name="ds"></el-tab-pane>
                        <el-tab-pane label="无配线站信号采集" name="cj"></el-tab-pane>
                        <el-tab-pane label="改方信息" name="xx"></el-tab-pane>
                    </el-tabs>
                    <el-table :data="tb2Data" border>
                        <el-table-column type="index" width="80" label="序号">
                        </el-table-column>
                        <el-table-column v-for="item in receiveTableColumns" :property="item.property"
                            :label="item.label">
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
        width: 45%;
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

::v-deep .tables .el-tabs__content {
    display: none;
}
</style>