<script setup lang="ts">
import { ref } from 'vue'
import tccContent from './tcc/index.vue'
import cbiContent from './cbi/index.vue'
import rbcContent from './rbc/index.vue'
let interfaceTabs = ref('tcc')
</script>

<template>
    <el-tabs v-model="interfaceTabs">
        <el-tab-pane label="TCC信息" name="tcc">
                <tccContent></tccContent>
        </el-tab-pane>
        <el-tab-pane label="RBC信息" name="rbc">
            
            <rbcContent></rbcContent>
        </el-tab-pane>
        <el-tab-pane label="相邻CBI信息" name="cbi">
            
            <cbiContent></cbiContent>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped lang="scss">

::v-deep .el-tabs__header{
    display: inline-block;   
    margin:0; 
    & .el-tabs__active-bar{
        display: none;
    }
}
::v-deep .tables .el-tabs__header{
    display:block;    
    
}
::v-deep .el-tabs__item{
    font-size: 14pt !important;
        padding:0 10px !important;
    &.is-active{
        background-color: #00ffff;
        color:#333;
        padding:0 10px !important;

    }
}
::v-deep .el-tabs--border-card>.el-tabs__header {
    background-color: #191970;

    .el-tabs__item {
        color: #fff;
        &.is-active {
            background-color: #00ffff;
            color: #333;
        }
    }

    .el-tabs__nav-prev,
    .el-tabs__nav-next {
        color: #fff;
    }
}

::v-deep .el-table {
    height: 50vh;

    &.el-table th.el-table__cell {
        background-color: #191970;
    }

    .el-scrollbar {

        background-color: #4682b4;
    }

    tr {
        background-color: transparent;
    }
}
</style>
