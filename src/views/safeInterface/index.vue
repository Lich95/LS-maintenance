<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import tccContent from './tcc/index.vue'
import cbiContent from './cbi/index.vue'
import rbcContent from './rbc/index.vue'
let interfaceTabs = ref()
let secTabs = ref()
const tabsData = ref([])
const checkSendAndRevice = (list)=>{
    if(list[0].type==''){
        return false
    }else{
        return true
    }
}
const filterSendOrRevice=(list,type)=>{
    return list.filter(x=>x.type=type)
}
axios({
    method: 'post',
    url: 'http://192.168.0.100:8081/mmt/init/getLevel',
    data: {}
}).then(res => {
    tabsData.value = res.data.data
    console.log(tabsData);
    interfaceTabs.value = tabsData.value[0].name

})


</script>

<template>
    <el-tabs v-model="interfaceTabs">
        <!-- <el-tab-pane label="TCC信息" name="tcc">
            <tccContent></tccContent>
        </el-tab-pane>
        <el-tab-pane label="RBC信息" name="rbc">

            <rbcContent></rbcContent>
        </el-tab-pane>-->
        <!-- <el-tab-pane label="相邻CBI信息" name="cbi">

            <cbiContent></cbiContent>
        </el-tab-pane>  -->
        <el-tab-pane v-for="item in tabsData" :label="item.name" :name="item.name">
            <el-tabs v-model="secTabs">
                <el-tab-pane v-for="ite in item.childs" :label="ite.name" :name="ite.name">
                    <div class="SendAndReviceTables" v-if="checkSendAndRevice(ite.childs)">
                        <div class="lsSend">
                            <h3> 联锁发送 </h3>
                            <el-tabs type="border-card">
                                <el-tab-pane v-for="it in filterSendOrRevice(ite.childs,'send')" :label="it.name" :name="it.name"></el-tab-pane>
                            </el-tabs>
                        </div>
                        <div class="lsReceive">
                            <h3> 联锁接收 </h3>
                            <el-tabs type="border-card">
                                <el-tab-pane v-for="it in filterSendOrRevice(ite.childs,'rec')" :label="it.name" :name="it.name"></el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                    
                    <div class="lsAll" v-else>
                        <el-tabs type="border-card">
                            <el-tab-pane v-for="it in ite.childs" :label="it.name" :name="it.name"></el-tab-pane>
                        </el-tabs>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped lang="scss">
::v-deep .el-tabs__header {
    display: inline-block;
    margin: 0;

    & .el-tabs__active-bar {
        display: none;
    }
}

::v-deep .tables .el-tabs__header {
    display: block;

}

::v-deep .el-tabs__item {
    font-size: 14pt !important;
    padding: 0 10px !important;

    &.is-active {
        background-color: #00ffff;
        color: #333;
        padding: 0 10px !important;

    }
}

::v-deep .el-tabs--border-card>.el-tabs__header {
    background-color: #191970;

    .el-tabs__item {
        color: #fff;

        &.is-active {
            background-color: #00ffff;
            color: #333 !important;
        }
    }

    .el-tabs__nav-prev,
    .el-tabs__nav-next {
        color: #fff;
    }
}

::v-deep .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: #00ffff !important;
    color: #333 !important;
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
