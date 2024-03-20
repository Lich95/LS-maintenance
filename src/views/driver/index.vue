<script setup lang="ts">

import { ref } from 'vue'
const testTxt = import.meta.env.VITE_APP_TEST
</script>

<template>
    <div id="draw">
        <div class="jg1">
            <svg height="64">
                <text y="50" x="50" font-size="15">操作表示机</text>
                <line x1="0" y1="60" x2="300" y2="60" stroke="#989898"></line>
                <line x1="0" y1="61" x2="300" y2="61" stroke="#fff"></line>
            </svg>
            <div style="padding:20px;background-color: rgb(211 211 211); position: relative;top:64px;">
                <svg width="1000px" height="200px"
                    style="transform: scale(0.2);position: absolute; left: 45px;top:-75px;transform-origin: 0;">
                    <g id="fsb">
                        <rect width="30" height="150" fill="#c8c4c4" stroke="#645d61"></rect>
                        <ellipse cx="16" cy="25" rx="8" ry="5"></ellipse>
                        <rect x="8" y="25" width="10" height="100"></rect>
                        <ellipse cx="16" cy="125" rx="8" ry="5"></ellipse>
                    </g>

                    <rect x="40" y="5" width="450" height="120" fill="#c0c0c0"></rect>
                    <g id="lineGroup">
                        <rect :x="48 + (item * 4)" y="12" width="2" height="20" fill="#504c4e" id="bsjLine1"
                            v-for="item in 105"></rect>
                    </g>
                    <use href="#lineGroup" y="27"></use>
                    <use href="#lineGroup" y="54"></use>
                    <use href="#lineGroup" y="82"></use>

                    <rect x="40" y="125" width="450" height="25" fill="#000"></rect>

                    <rect x="50" y="130" width="15" height="15" fill="#858f98"></rect>
                    <rect x="52" y="132" width="5" height="5" fill="#484e5a"></rect>
                    <rect x="58" y="132" width="5" height="5" fill="#484e5a"></rect>
                    <rect x="52" y="138" width="5" height="5" fill="#484e5a"></rect>
                    <rect x="58" y="138" width="5" height="5" fill="#484e5a"></rect>

                    <ellipse cx="80" cy="138" rx="8" ry="7" fill="#c3c9cd"></ellipse>
                    <ellipse cx="80" cy="138" rx="5" ry="4" fill="#646566"></ellipse>
                    <rect x="95" y="135" width="20" height="8" fill="#8294bc"></rect>

                    <rect x="500" y="5" width="450" height="120" fill="#c0c0c0"></rect>

                    <g id="lineGroup2">
                        <rect :x="510 + (item * 4)" y="12" width="2" height="20" fill="#504c4e" id="bsjLine2"
                            v-for="item in 25"></rect>

                    </g>
                    <use href="#lineGroup2" y="27"></use>
                    <use href="#lineGroup2" y="54"></use>
                    <use href="#lineGroup2" y="82"></use>

                    <defs>
                        <radialGradient cx="20%" cy="20%" r="50%" fx="10%" fy="10%" id="gradCircle">
                            <stop offset="0%" stop-color="#888"></stop>
                            <stop offset="100%" stop-color="#333"></stop>
                        </radialGradient>
                    </defs>
                    <circle cx="725" cy="25" r="10" fill="url(#gradCircle)" stroke="#000" stroke-width="2"></circle>

                    <rect x="640" y="45" width="170" height="70"></rect>

                    <circle cx="680" cy="60" r="6" fill="#b1c66d"></circle>
                    <circle cx="710" cy="60" r="6" fill="#b1c66d"></circle>
                    <circle cx="740" cy="60" r="6" fill="#b1c66d"></circle>
                    <circle cx="770" cy="60" r="6" fill="#b1c66d"></circle>
                    <circle cx="680" cy="80" r="6" fill="#b1c66d"></circle>
                    <circle cx="710" cy="80" r="6" fill="#b1c66d"></circle>
                    <circle cx="740" cy="80" r="6" fill="#b1c66d"></circle>
                    <circle cx="770" cy="80" r="6" fill="#b1c66d"></circle>

                    <filter id="f1">
                        <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                    </filter>
                    <rect x="660" y="95" width="15" height="10" fill="#85b4e2"></rect>
                    <!-- 高斯模糊？？ -->

                    <g id="lineGroup3">
                        <rect :x="835 + (item * 4)" y="12" width="2" height="20" fill="#504c4e" id="bsjLine2"
                            v-for="item in 25"></rect>
                    </g>
                    <use href="#lineGroup3" y="27"></use>
                    <use href="#lineGroup3" y="54"></use>
                    <use href="#lineGroup3" y="82"></use>

                    <rect x="500" y="125" width="450" height="25" fill="#000"></rect>
                    <g>
                        <use href="#fsb" x="-990" style="transform: rotateY(180deg)"></use>
                    </g>


                </svg>


            </div>

            <svg style="top: 80px;transform: scale(0.2);transform-origin: 0%;left: 40px;">

                <g>
                    <rect width="300" height="100" x="20" y="20" style="fill:#fff;stroke-width:3;stroke:#000" />
                    <rect width="260" height="80" x="30" y="30" style="fill:#fff;stroke-width:3;stroke:#000" />
                </g>
                <g>
                    <path d="M20 20 l0 8 q 8 0 8 -8" fill='#000'></path>
                    <path d="M20 120 l8 0 q 0 -8 -8 -8" fill='#000'></path>
                    <path d="M300 120 l-8 0 q 0 -8 8 -8" fill='#000'></path>
                    <path d="M300 20 l-8 0 q 0 8 8 8" fill='#000'></path>
                </g>

                <g>
                    <path d="M40 60 l15 15 q 100 -20 200 0 l15 -15" stroke="#333" fill="none" stroke-width="3"></path>
                </g>

                <g>
                    <path d="M145 75 l20 0 l-10 18 l0 0"></path>
                    <path d="M90 50 l15 -5 l-1 20"></path>
                    <path d="M205 45 l15 5 l-12 15"></path>
                </g>
            </svg>
        </div>
        <div class="jg2">


        </div>
        <div class="jg3">


        </div>

        <!-- <svg width="100%">

        <rect x="10" rx="10" y="5" ry="5" width="10" height="85" fill="#fff"></rect>
        <rect x="30" y="5" width="250" height="10" fill="#fff"/>
        <rect x="30" y="20" width="250" height="10" fill="#fff"/>
        <rect x="30" y="35" width="250" height="10" fill="#fff"/>
        <rect x="30" y="50" width="250" height="10" fill="#fff"/>
        <rect x="30" y="65" width="250" height="10" fill="#fff"/>
        <rect x="30" y="80" width="250" height="10" fill="#fff"/>

        <rect x="300" y="5" width="210" height=85 fill="#fff" />

        <line x1="300" y1="5" x2="305" y2="10" stroke="#333" stroke-width="3" />
        <line x1="510" y1="5" x2="505" y2="10" stroke="#333" stroke-width="3" />
        <line x1="300" y1="90" x2="305" y2="85" stroke="#333" stroke-width="3" />
        <line x1="510" y1="90" x2="505" y2="85" stroke="#333" stroke-width="3" />

        <rect x="320" y="20" width="10" height="50" fill="#fff" stroke="#333" stroke-width="2"/>

        <circle stroke="#333" cx="350" cy="25" r="5" fill="#fff"/>
        <circle stroke="#333" cx="350" cy="38" r="5" fill="#fff"/>
        <circle stroke="#333" cx="350" cy="51" r="5" fill="#fff"/>
        <circle stroke="#333" cx="350" cy="64" r="5" fill="#fff"/>
        
        <circle stroke="#333" cx="460" cy="25" r="5" fill="#fff"/>
        <circle stroke="#333" cx="460" cy="38" r="5" fill="#fff"/>
        <circle stroke="#333" cx="460" cy="51" r="5" fill="#fff"/>
        <circle stroke="#333" cx="460" cy="64" r="5" fill="#fff"/>

        <rect x="480" y="20" width="10" height="50" fill="#fff" stroke="#333" stroke-width="2"/>

        <rect x="525" rx="10" y="5" ry="5" width="10" height="85" fill="#fff"></rect>
    </svg> -->


    </div>
</template>

<style scoped lang="scss">
#draw {
    height: calc(100vh - 84px);
    padding: 0;
    background: rgb(19, 91, 210);

}

.jg1,
.jg2,
.jg3 {
    display: inline-block;
    width: 300px;
    height: 600px;
    background-color: #c0c0c0;
    margin: 20px;
    position: relative;
}

svg {
    position: absolute;
}
</style>
