<script setup>

</script>

<template>
    <svg width="1000px" height="200px"
        style="transform: scale(0.25);position: absolute; left: 25px;top:-70px;transform-origin: 0;">
        <g id="fsb">
            <rect width="30" height="150" fill="#c8c4c4" stroke="#645d61"></rect>
            <ellipse cx="16" cy="25" rx="8" ry="5"></ellipse>
            <rect x="8" y="25" width="10" height="100"></rect>
            <ellipse cx="16" cy="125" rx="8" ry="5"></ellipse>
        </g>

        <rect x="40" y="5" width="450" height="120" fill="#c0c0c0"></rect>
        <g id="lineGroup">
            <rect :x="48 + (item * 4)" y="12" width="2" height="20" fill="#504c4e" id="bsjLine1" v-for="item in 105">
            </rect>
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
            <rect :x="510 + (item * 4)" y="12" width="2" height="20" fill="#504c4e" id="bsjLine2" v-for="item in 25">
            </rect>

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
            <rect :x="835 + (item * 4)" y="12" width="2" height="20" fill="#504c4e" id="bsjLine2" v-for="item in 25">
            </rect>
        </g>
        <use href="#lineGroup3" y="27"></use>
        <use href="#lineGroup3" y="54"></use>
        <use href="#lineGroup3" y="82"></use>

        <rect x="500" y="125" width="450" height="25" fill="#000"></rect>
        <g>
            <use href="#fsb" x="-990" style="transform: rotateY(180deg)"></use>
        </g>


    </svg>
</template>

<style lang="scss" scoped></style>