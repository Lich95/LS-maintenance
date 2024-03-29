<script setup lang="ts">

import { onMounted, ref } from 'vue'

const getPoint = (className: string, direction: number) => {
    const element: HTMLElement | null = document.getElementById(className);
    let x = element?.offsetLeft - 100 ;
    let y = element?.offsetTop - (15 + 64) ;

    if (direction) {
        x = Math.floor(x + (element?.offsetWidth/2))
        y = Math.floor(y + element?.offsetHeight)
    } else {
        x = Math.floor(x + (element?.offsetWidth/2))
    }

    console.log(x);
    console.log(y);
}

onMounted(() => {

    getPoint('ctcA', 1)
    getPoint('ctcB', 1)
    getPoint('czjA', 0)
    getPoint('czjB', 0)
})

</script>

<template>
    <div id="networkDiv">
        <svg width="1223" height="707" style="position: absolute;z-index:1">
            <line x1="363" y1="113" x2="363" y2="167" stroke="#fff" stroke-width="2"></line>
            <line x1="363" y1="113" x2="759" y2="167" stroke="#fff" stroke-width="2"></line>

            
            <line x1="759" y1="113" x2="363" y2="167" stroke="#fff" stroke-width="2"></line>
            <line x1="759" y1="113" x2="759" y2="167" stroke="#fff" stroke-width="2"></line>
        </svg>
        <div style="z-index:2">
            <div class="xianlutu">
                <div class="txb2whzd">
                    <div class="txb">
                        <div>Ⅰ<br>系<br>O<br>C<br>通<br>信<br>版</div>
                        <div>Ⅱ<br>系<br>O<br>C<br>通<br>信<br>版</div>
                        <div>Ⅰ<br>系<br>计<br>轴<br>通<br>信<br>版</div>
                        <div>Ⅱ<br>系<br>计<br>轴<br>通<br>信<br>版</div>
                    </div>
                    <div class="whzd">维护终端</div>
                </div>
                <div class="xltContent">
                    <div class="line1">
                        <div id="ctcA">CTC自律A机</div>
                        <div id="ctcB">CTC自律B机</div>
                    </div>
                    <div class="line2">
                        <div id="czjA">操作A机</div>
                        <div id="czjB">操作B机</div>
                    </div>
                    <div class="line3">
                        <div>交换机1网</div>
                        <div>交换机2网</div>
                    </div>
                    <div class="line4">
                        <div>联锁Ⅰ系(主)</div>
                        <div>联锁Ⅱ系(备)</div>
                    </div>
                </div>


            </div>
            <div class="network">
                <div class="networkLine">
                    <span>OC1网</span>
                    <div class="line"></div>
                </div>
                <div class="networkLine">
                    <span>OC2网</span>
                    <div class="line"></div>
                </div>
                <div class="networkLine">
                    <span>安全1网</span>
                    <div class="line"></div>
                </div>
                <div class="networkLine">
                    <span>安全2网</span>
                    <div class="line"></div>
                </div>
            </div>
            <div class="shij">
                <div class="block">
                    <div class="version">Ⅰ系</div>
                    <div class="version">Ⅱ系</div>
                    <div class="content">OCU1</div>
                </div>
                <div class="block">
                    <div class="version">Ⅰ系</div>
                    <div class="version">Ⅱ系</div>
                    <div class="content">OCU2</div>
                </div>
                <div class="block">
                    <div class="version">Ⅰ系</div>
                    <div class="version">Ⅱ系</div>
                    <div class="content">OCU3</div>
                </div>
                <div class="block">
                    <div class="version">Ⅰ系</div>
                    <div class="version">Ⅱ系</div>
                    <div class="content">小湖集下CBI</div>
                </div>
            </div>
            <div class="tuli"></div>


        </div>

    </div>
</template>

<style scoped lang="scss">
#networkDiv {
    background-color: #000;
    height: calc(100vh - 84px);
    padding: 15px 100px !important;
}

.xianlutu {
    display: flex;
    flex-direction: row;
    width: 140vh;

    &>div:nth-child(1).txb2whzd {
        width: 15%;
        display: flex;
        flex-direction: column;
        text-align: center;
        .txb {
            line-height: 16px;
            font-size: 15px;

            &>div {
                padding: 5px 5px;
                margin-right: 15px;
                border: 1px solid #fff;
            }
        }

        .whzd {
            border: 1px solid #fff;
            margin-top: 50px;
            width: 100%;
        }

        &>div:first-child {
            display: flex;
            flex-direction: row;
        }
    }

    &>div:nth-child(2).xltContent {
        width: 100vh;
        display: flex;
        flex-direction: column;
        padding-top: 50px;

        &>div {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 90px;

            & div {
                display: flex;
                align-items: center;
                margin: 30px 5px;
                padding: 5px;
                width: 150px;
                border: 1px solid #fff;
                justify-content: center;
            }
        }
    }
}

.network {

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 15px 0;

    .networkLine {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0;

        span {
            display: inline-block;
            width: 60px;
            font-size: 10pt;
        }

        .line {
            width: 100%;
            height: 0px;
            border: 1px solid #fff;
        }
    }

}

.shij {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .block {
        width: 200px;

        text-align: center;

        .version {
            width: 98px;
            border: 1px solid #fff;
            display: inline-block;
        }

        .content {
            width: calc(100% - 2px);
            border: 1px solid #fff;
            line-height: 45px;
        }

    }

}
</style>
