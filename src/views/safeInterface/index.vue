<script setup lang="ts">
import { ref } from 'vue'
let networkTabs = ref('tcc')
let tb1Data = ref([
    { fck: 1, fqj: 2, fsj: 3, ffaj: 4, jfaj: 5 },
    { fck: 1, fqj: 2, fsj: 3, ffaj: 4, jfaj: 5 },
    { fck: 1, fqj: 2, fsj: 3, ffaj: 4, jfaj: 5 },
    { fck: 1, fqj: 2, fsj: 3, ffaj: 4, jfaj: 5 },
    { fck: 1, fqj: 2, fsj: 3, ffaj: 4, jfaj: 5 }
])
let tb2Data = ref([
    { fck: '名称1', fqj: 2 },
    { fck: '名称2', fqj: 2 },
    { fck: '名称3', fqj: 2 },
    { fck: '名称4', fqj: 2 },
    { fck: '名称6', fqj: 2 },
])
</script>

<template>
    <el-tabs v-model="networkTabs">
        <el-tab-pane label="TCC信息" name="tcc">
            <div style="padding:10px">
                <el-button>KZbiaozhunTCC</el-button>
                <!-- <svg-icon name="openClose"/> -->
                <div class="tables">
                    <div class="lsSend">
                        <h3> 联锁发送 </h3>
                        <el-tabs type="border-card">
                            <el-tab-pane label="版本信息" name="bbxx"></el-tab-pane>
                            <el-tab-pane label="区间方向控制命令信息" name="mlxx"></el-tab-pane>
                            <el-tab-pane label="进路信息" name="jlxx"></el-tab-pane>
                            <el-tab-pane label="进展信号机红灯断丝信息" name="dsxx"></el-tab-pane>
                            <el-tab-pane label="信号机调车状态信息" name="ztxx"></el-tab-pane>
                            <el-tab-pane label="无配线站信息" name="xzxx"></el-tab-pane>
                        </el-tabs>
                        <el-table :data="tb1Data">
                            <el-table-column type="index" width="80" label="序号">
                            </el-table-column>
                            <el-table-column property="fck" label="发车口名称">
                            </el-table-column>
                            <el-table-column property="fqj" label="发车请求(FQJ)">
                            </el-table-column>
                            <el-table-column property="fsj" label="发车锁闭(FSJ)">
                            </el-table-column>
                            <el-table-column property="ffaj" label="发车辅助按钮(FFAJ)">
                            </el-table-column>
                            <el-table-column property="jfaj" label="接车辅助按钮(JFAJ)">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="lsReceive">
                        <h3> 联锁接收 </h3>
                        <el-tabs type="border-card">
                            <el-tab-pane label="版本信息" name="bbxx"></el-tab-pane>
                            <el-tab-pane label="区间方向" name="qjfx"></el-tab-pane>
                            <el-tab-pane label="区间闭塞分区" name="qjbsfq"></el-tab-pane>
                            <el-tab-pane label="发年口区间防护信号机红灯街丝" name="fnkqjfhxh"></el-tab-pane>
                        </el-tabs>
                        <el-table :data="tb2Data">
                            <el-table-column type="index" width="80" label="序号">
                            </el-table-column>
                            <el-table-column property="fck" label="名称">
                            </el-table-column>
                            <el-table-column property="fqj" label="版本号">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>

            </div>
        </el-tab-pane>
        <el-tab-pane label="RBC信息" name="rbc"></el-tab-pane>
    </el-tabs>
</template>

<style scoped lang="scss">
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
