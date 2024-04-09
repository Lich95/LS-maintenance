<script setup lang="ts">
import { ref ,computed} from 'vue'
import axios from 'axios'
import {getTableColumn,getTabName} from '@/hooks/tableColumn/index.js'

import data from '@/hooks/fakeData/data.json'
let interfaceTabs = ref()
let secTabs = ref()
const table1Tab = ref();
const table2Tab = ref();
const tabsData = ref([])
const sendTableData = ref([])
const recTableData = ref([])


const mapColumns1 = ref(getTableColumn('VIRINFOS')) 
const mapColumns2= ref(getTableColumn('VIRINFOR')) 

const checkSendAndRevice = (list) => {
    if (list.parentId == 2) {
        return false
    } else {
        return true
    }
}

const changeTabs1 =(name:string)=>{  
 mapColumns1.value = getTableColumn(name)
    sendTableData.value = data.data[name]
}

const changeTabs2 =(name:string)=>{
 mapColumns2.value = getTableColumn(name)
    recTableData.value = data.data[name]
}
// console.log(78,getColumn('版本信息'));
const filterSendOrRevice = (list:Object[], type:string) => {
    return list.filter(x => x.type == type)
}

setTimeout(()=>{
    tabsData.value =data.tabs
    interfaceTabs.value = data.tabs[0].name
    secTabs.value =  data.tabs[0].childs[0].name
    table1Tab.value = 'VIRINFOS'
    table2Tab.value = 'VIRINFOR'
    
    recTableData.value = data.data['VIRINFOR']
    sendTableData.value = data.data['VIRINFOS']



    // console.log(data.tabs);
    
    // console.log(123,data.data);
    
    
},0)


// axios({
//     method: 'post',
//     url: 'http://169.254.123.33:8081/mmt/init/getLevel',
//     data: {}
// }).then(res => {
//     console.log(234,res);
    
//     tabsData.value = res.data.data
//     // interfaceTabs.value = tabsData.value[0].name

// })

// axios({
//     method: 'post',
//     url: 'http://169.254.123.33:8081/mmt/init/querySITCCData',
//     data: {
//         "id": 2,
//         "serialNum": 1
//     }
// }).then(res => {
//     console.log(567,res);
    

// })


</script>

<template>
    <el-tabs v-model="interfaceTabs">
        <el-tab-pane v-for="item in tabsData" :label="getTabName(item.name)" :name="item.name">
           <el-tabs v-model="secTabs">
                 <el-tab-pane v-for="ite in item.childs" :label="getTabName(ite.name)" :name="ite.name">
                    <div class="SendAndReviceTables" v-if="checkSendAndRevice(ite)">
                        <div class="lsSend">
                            <h3> 联锁发送 </h3>
                            <el-tabs type="border-card" @tab-change="changeTabs1" v-model="table1Tab">
                                <el-tab-pane v-for="it in filterSendOrRevice(ite.childs, 'send')" :label="getTabName(it.name)"
                                    :name="it.name"></el-tab-pane>
                            </el-tabs>
                            <el-table border :data="sendTableData">
                                <el-table-column type="index" width="80" label="序号">
                            </el-table-column>
                            <el-table-column v-for="item in mapColumns1" :property="item.property" :key="item.property" :label="item.label">
                            </el-table-column>
                                </el-table>
                            </div>
                            <div class="lsReceive">
                                <h3> 联锁接收 </h3>
                                <el-tabs type="border-card" @tab-change="changeTabs2" v-model="table2Tab">
                                    <el-tab-pane v-for="it in filterSendOrRevice(ite.childs, 'rec')" :label="getTabName(it.name)"
                                        :name="it.name"></el-tab-pane>
                            </el-tabs>
                            <el-table border :data="recTableData">
                                <el-table-column type="index" width="80" label="序号">
                            </el-table-column>
                            <el-table-column v-for="item in mapColumns2" :property="item.property" :key="item.property" :label="item.label">
                            </el-table-column>
                                </el-table>
                            
                        </div>
                    </div>

                    <div class="lsAll" v-else>
                        <el-tabs type="border-card" v-if="ite.childs.length">
                            <el-tab-pane v-for="it in ite.childs" :label="getTabName(it.name)" :name="it.name"></el-tab-pane>
                        </el-tabs>
                        
                        <el-table border>
                                <el-table-column type="index" width="80" label="序号">
                            </el-table-column>
                            <el-table-column v-for="item in mapColumns2" :property="item.property" :label="item.label">
                            </el-table-column>
                                </el-table>
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
    display: inline-block;

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
    .cell{
        white-space: nowrap;
    }


    .el-scrollbar {

        background-color: #4682b4;
    }

    tr {
        background-color: transparent;
    }
}
::v-deep .lsSend{
    .el-tabs__header.is-top{
     width: 100%
    }
    .el-tabs__item{
        border: 2px solid #fff;
    }
}
::v-deep .lsReceive{
    .el-tabs__header.is-top{
     width: 100%
    }
    .el-tabs__item{
        border: 2px solid #fff;
    }

}
::v-deep .lsAll{
    .el-tabs__header.is-top{
     width: 100%
    }
    & .el-tabs{
        height: 38px;
        display: inline-block;
    }
    .el-tabs__item{
        border: 2px solid #fff;
    }

}
.SendAndReviceTables{
    display: flex;
    gap:10px;
    &>div{
        flex:1;width:50vh;
    }
    & .el-tabs{
        height: 38px;
    }
    h3{
        text-align: center;
        margin:8px 0 5px
    }
}

::v-deep .SendAndReviceTables{
    .el-tabs__content{
    display: none;
}
}
::v-deep .lsAll{
    .el-tabs__content{
    display: none;
}
}
</style>
