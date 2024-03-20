<script setup lang="ts">
import { ref } from 'vue'
const rbcTabs = ref('rbc1')
const rbcChange = () => {

};
const rbcTableTabs = ref('bbxx')
const tb1Data = ref([])
const rbcTableColumns = ref([
    { property: 'name', label: '名称', },
    { property: 'version', label: '版本号', }])
</script>

<template>
    <el-tabs v-model="rbcTabs">
        <el-tab-pane label="RBC1" name="rbc1">
            
            <div class="tables">
            <el-tabs type="border-card" @tab-change="rbcChange" v-model="rbcTableTabs">
                <el-tab-pane label="版本信息" name="bbxx"></el-tab-pane>
                <el-tab-pane label="进路信息" name="jlxx"></el-tab-pane>
                <el-tab-pane label="紧急区" name="jjq"></el-tab-pane>
            </el-tabs>
            <el-table :data="tb1Data" border>
                <el-table-column type="index" width="80" label="序号">
                </el-table-column>
                <el-table-column v-for="item in rbcTableColumns" :property="item.property" :label="item.label">
                </el-table-column>
            </el-table>
            </div>
        </el-tab-pane>
    </el-tabs>

</template>

<style lang="scss" scoped>

::v-deep .el-table__header {
    .cell {
        white-space: nowrap;
    }
}

::v-deep .tables .el-table {
    height: 60vh;
}
::v-deep .tables .el-tabs__content {
    display: none;
}
</style>