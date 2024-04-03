<script setup lang="ts">
import czj from '@/icons/vue/czj.vue'
import { ref } from 'vue'
const testTxt = import.meta.env.VITE_APP_TEST

let fimoCol = ref('#000')
const init = () => {
    let a = true;
    setInterval(() => {
        if (a) {
            fimoCol.value = 'red'
            a = false
        } else {
            fimoCol.value = '#000'
            a = true
        }
    }, 1000)
}
setTimeout(() => { init() }, 0)



</script>

<template>
    <div id="draw">
        <div class="jg1">
            <svg height="64" width="340">
                <text y="50" x="50" font-size="15">操作表示机</text>
                <line x1="0" y1="60" x2="340" y2="60" stroke="#989898"></line>
                <line x1="0" y1="61" x2="340" y2="61" stroke="#fff"></line>
            </svg>
            <div style="padding:25px;background-color: rgb(211 211 211); position: relative;top:64px;">

                <czj></czj>

            </div>

            <div style="position: relative;top:30px">
                <svg-icon name="dbx" style="margin:60px 0px 0px 30px"></svg-icon>
                <svg-icon name="dbx" style="margin:93px 0px 0px 30px"></svg-icon>
                <svg-icon name="dbx2" style="margin:80px 0px 0px -10px"></svg-icon>
                <svg style="top:50px">
                    <path d="M5 20 L170 20 l0 90 l-165 0 l0 -90 l15 0 l0 90" fill="transparent" stroke="#333"></path>
                    <ellipse cx="10" cy="40" rx="3" ry="2" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="10" cy="90" rx="3" ry="2" fill="transparent" stroke="#333"></ellipse>


                    <ellipse cx="27" cy="23" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                    <ellipse cx="30" cy="42" rx="2" ry="1" fill="333" stroke="#333"></ellipse>

                    <ellipse cx="29" cy="80" rx="5" ry="3" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="27" cy="108" rx="3" ry="2" fill="333" stroke="#333"></ellipse>


                    <ellipse cx="157" cy="23" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                    <ellipse cx="155" cy="42" rx="2" ry="1" fill="333" stroke="#333"></ellipse>

                    <ellipse cx="155" cy="80" rx="5" ry="3" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="157" cy="108" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                </svg>
            </div>


            <div style="position: relative;left:165px;top:30px">
                <svg-icon name="dbx" style="margin:60px 0px 0px 30px"></svg-icon>
                <svg-icon name="dbx" style="margin:93px 0px 0px 30px"></svg-icon>
                <svg-icon name="dbx2" style="margin:80px 0px 0px -10px"></svg-icon>
                <svg style="top:50px">
                    <path d="M5 20 L170 20 l0 90 l-165 0 l0 -90 l15 0 l0 90" fill="transparent" stroke="#333"></path>
                    <ellipse cx="10" cy="40" rx="3" ry="2" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="10" cy="90" rx="3" ry="2" fill="transparent" stroke="#333"></ellipse>


                    <ellipse cx="27" cy="23" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                    <ellipse cx="30" cy="42" rx="2" ry="1" fill="333" stroke="#333"></ellipse>

                    <ellipse cx="29" cy="80" rx="5" ry="3" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="27" cy="108" rx="3" ry="2" fill="333" stroke="#333"></ellipse>


                    <ellipse cx="157" cy="23" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                    <ellipse cx="155" cy="42" rx="2" ry="1" fill="333" stroke="#333"></ellipse>

                    <ellipse cx="155" cy="80" rx="5" ry="3" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="157" cy="108" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                </svg>
            </div>



            <div style="position: relative;top:120px">
                <svg-icon name="dbx" style="margin:60px 0px 0px 30px"></svg-icon>
                <svg-icon name="dbx" style="margin:93px 0px 0px 30px"></svg-icon>
                <svg-icon name="dbx2" style="margin:80px 0px 0px -10px"></svg-icon>
                <svg style="top:50px">
                    <path d="M5 20 L170 20 l0 90 l-165 0 l0 -90 l15 0 l0 90" fill="transparent" stroke="#333"></path>
                    <ellipse cx="10" cy="40" rx="3" ry="2" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="10" cy="90" rx="3" ry="2" fill="transparent" stroke="#333"></ellipse>


                    <ellipse cx="27" cy="23" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                    <ellipse cx="30" cy="42" rx="2" ry="1" fill="333" stroke="#333"></ellipse>

                    <ellipse cx="29" cy="80" rx="5" ry="3" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="27" cy="108" rx="3" ry="2" fill="333" stroke="#333"></ellipse>


                    <ellipse cx="157" cy="23" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                    <ellipse cx="155" cy="42" rx="2" ry="1" fill="333" stroke="#333"></ellipse>

                    <ellipse cx="155" cy="80" rx="5" ry="3" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="157" cy="108" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                </svg>
            </div>


            <div style="position: relative;left:165px;top:120px">
                <svg-icon name="dbx" style="margin:60px 0px 0px 30px"></svg-icon>
                <svg-icon name="dbx" style="margin:93px 0px 0px 30px"></svg-icon>
                <svg-icon name="dbx2" style="margin:80px 0px 0px -10px"></svg-icon>
                <svg style="top:50px">
                    <path d="M5 20 L170 20 l0 90 l-165 0 l0 -90 l15 0 l0 90" fill="transparent" stroke="#333"></path>
                    <ellipse cx="10" cy="40" rx="3" ry="2" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="10" cy="90" rx="3" ry="2" fill="transparent" stroke="#333"></ellipse>


                    <ellipse cx="27" cy="23" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                    <ellipse cx="30" cy="42" rx="2" ry="1" fill="333" stroke="#333"></ellipse>

                    <ellipse cx="29" cy="80" rx="5" ry="3" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="27" cy="108" rx="3" ry="2" fill="333" stroke="#333"></ellipse>


                    <ellipse cx="157" cy="23" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                    <ellipse cx="155" cy="42" rx="2" ry="1" fill="333" stroke="#333"></ellipse>

                    <ellipse cx="155" cy="80" rx="5" ry="3" fill="transparent" stroke="#333"></ellipse>
                    <ellipse cx="157" cy="108" rx="3" ry="2" fill="333" stroke="#333"></ellipse>
                </svg>
            </div>


            <!-- <svg-icon name="pdx"></svg-icon> -->
            <svg style="top:350px;left:30px" viewBox="0 0 900 900" version="1.2" xmlns="http://www.w3.org/2000/svg">

                <rect x="10" rx="10" y="5" ry="5" width="10" height="85" fill="transparent" stroke-width="2"
                    stroke="#333"></rect>
                <rect x="40" y="5" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333" />
                <rect x="40" y="20" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333" />
                <rect x="40" y="35" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333" />
                <rect x="40" y="50" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333" />
                <rect x="40" y="65" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333" />
                <rect x="40" y="80" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333" />

                <rect x="400" y="5" width="210" height=85 fill="transparent" stroke-width="2" stroke="#333" />

                <line x1="400" y1="5" x2="405" y2="10" stroke="#333" stroke-width="3" />
                <line x1="610" y1="5" x2="605" y2="10" stroke="#333" stroke-width="3" />
                <line x1="400" y1="90" x2="405" y2="85" stroke="#333" stroke-width="3" />
                <line x1="610" y1="90" x2="605" y2="85" stroke="#333" stroke-width="3" />

                <rect x="420" y="20" width="10" height="50" fill="transparent" stroke="#333" stroke-width="2" />

                <circle stroke="#333" cx="450" cy="25" r="5" fill="transparent" stroke-width="2" />
                <circle stroke="#333" cx="450" cy="38" r="5" fill="transparent" stroke-width="2" />
                <circle stroke="#333" cx="450" cy="51" r="5" fill="transparent" stroke-width="2" />
                <circle stroke="#333" cx="450" cy="64" r="5" fill="transparent" stroke-width="2" />

                <circle stroke="#333" cx="560" cy="25" r="5" fill="transparent" stroke-width="2" />
                <circle stroke="#333" cx="560" cy="38" r="5" fill="transparent" stroke-width="2" />
                <circle stroke="#333" cx="560" cy="51" r="5" fill="transparent" stroke-width="2" />
                <circle stroke="#333" cx="560" cy="64" r="5" fill="transparent" stroke-width="2" />

                <rect x="580" y="20" width="10" height="50" fill="transparent" stroke="#333" stroke-width="2" />

                <rect x="635" rx="10" y="5" ry="5" width="10" height="85" fill="transparent" stroke="#333"
                    stroke-width="2"></rect>

                <circle cx="505" cy="40" r="10" fill="transparent" stroke="#333" stroke-width="2"></circle>
                <circle cx="505" cy="60" r="5" fill="transparent" stroke="#333" stroke-width="2"></circle>
            </svg>

            <!-- <svg-icon name="pdx"></svg-icon> -->
            <svg style="top:400px;left:30px" viewBox="0 0 900 900" version="1.2" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <rect width="50" x="0" y="0" height="90" fill="#fff" stroke-width="5" stroke="#000"></rect>
                    <ellipse cx="15" cy="30" rx="10" ry="8"></ellipse>
                    <ellipse cx="35" cy="30" rx="10" ry="8"></ellipse>
                    <rect width="50" x="50" y="0" height="90" fill="#fff" stroke-width="5" stroke="#000"></rect>
                    <ellipse cx="65" cy="30" rx="10" ry="8"></ellipse>
                    <ellipse cx="85" cy="30" rx="10" ry="8"></ellipse>
                    <rect width="50" x="100" y="0" height="90" fill="#fff" stroke-width="5" stroke="#000"></rect>
                    <ellipse cx="115" cy="30" rx="10" ry="8"></ellipse>
                    <ellipse cx="135" cy="30" rx="10" ry="8"></ellipse>
                    <rect width="50" x="150" y="0" height="90" fill="#fff" stroke-width="5" stroke="#000"></rect>
                    <ellipse cx="165" cy="30" rx="10" ry="8"></ellipse>
                    <ellipse cx="185" cy="30" rx="10" ry="8"></ellipse>
                    <line x1="0" y1="20" x2="200" y2="20" stroke="#333" stroke-width="8"></line>
                </g>
            </svg>


        </div>
        <div class="jg2">
            <svg viewBox="0 0 340 600">
                <g>
                    <text y="50" x="50" font-size="12">主控</text>
                    <circle cx="90" cy="45" r="10" stroke="#333" fill="#18fe82"></circle>
                </g>
                <g transform="translate(80, 0)">
                    <text y="50" x="50" font-size="12">备用</text>
                    <circle cx="90" cy="45" r="10" stroke="#333" fill="transparent"></circle>
                </g>
                <g transform="translate(160, 0)">
                    <text y="50" x="50" font-size="12">离线</text>
                    <circle cx="90" cy="45" r="10" stroke="#333" fill="transparent"></circle>
                </g>

                <g>
                    <text x="145" y="90" font-size="15">自动</text>
                    <text x="120" y="130" font-size="15">A</text>
                    <text x="190" y="130" font-size="15">B</text>

                    <circle cx="160" cy="125" r="15"></circle>
                    <rect x="156" y="105" width="8" height="40" fill="#fff" stroke="#000"></rect>
                    <rect x="156" y="105" width="8" height="8" fill="red"></rect>
                </g>

                <g transform="translate(0, 160)">
                    <g id="sixten">
                        <rect v-for="item in 16" width="16" height="100" :x="(item - 1) * 16 + (item * 5)" y="0"
                            fill="transparent" stroke="#000"></rect>
                    </g>
                    <g style="writing-mode:tb">
                        <text x="12" y="5" font-size="14">PWR 电源板</text>
                        <text x="33" y="5" font-size="14">FIMIO</text>
                        <text x="96" y="5" font-size="14">CAN 通信版</text>
                        <text x="117" y="5" font-size="14">CPU 运算板</text>
                        <text x="138" y="5" font-size="14">CMP 比较板</text>
                        <text x="159" y="5" font-size="14">CPU 运算板</text>
                        <text x="180" y="5" font-size="14">CAN 通信版</text>
                        <text x="201" y="5" font-size="14">ETH 通信版</text>
                        <text x="222" y="5" font-size="14">ETH 通信版</text>
                    </g>
                </g>

                <g transform="translate(0, 280)">
                    <rect v-for="item in 16" width="16" height="100" :x="(item - 1) * 16 + (item * 5)" y="0"
                        fill="transparent" :stroke="true ? fimoCol : '#000'"></rect>
                    <!-- [].filter?col:#000 -->
                    <g id="nums">
                        <text y="112" v-for="item in 16" :x="(item - 1) * 13 + (item * 8)" font-size=10>{{ item
                            }}</text>
                    </g>
                    <text style="writing-mode:tb" y="5" v-for="item in 16" :x="(item - 1) * 10 + (item * 11)"
                        font-size=10>FIMO</text>
                </g>



                <g transform="translate(0, 400)">
                    <rect v-for="item in 4" width="16" height="100" :x="(item - 1) * 16 + (item * 5)" y="0"
                        fill="transparent" :stroke="true ? fimoCol : '#000'"></rect>
                    <!-- [].filter?col:#000 -->
                    <g id="nums">
                        <text y="112" v-for="item in 16" :x="(item - 1) * 13 + (item * 8)" font-size=10>{{ item
                            }}</text>
                    </g>
                    <text style="writing-mode:tb" y="5" v-for="item in 4" :x="(item - 1) * 10 + (item * 11)"
                        font-size=10>FIMO</text>
                </g>



                <g transform="translate(0, 530)">
                    <g id="dykgleft">
                        <g id="dykglsx">
                            <rect x="17" width="45" height="8" stroke='#fff' fill="transparent"></rect>
                            <line x1="13" y1="4" x2="66" y2="4" stroke="#aeeef6"></line>
                        </g>
                        <g>
                            <rect x="10" y="20" width="5" height="10" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="15" y="17" width="5" height="15" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="20" y="15" width="5" height="20" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="25" y="15" width="5" height="20" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="30" y="15" width="5" height="20" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="35" y="15" width="5" height="20" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="40" y="15" width="5" height="20" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="45" y="15" width="5" height="20" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="50" y="15" width="5" height="20" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="55" y="15" width="5" height="20" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="65" y="20" width="5" height="10" fill="#8c8e8b" stroke="#fff"></rect>
                            <rect x="60" y="17" width="5" height="15" fill="#8c8e8b" stroke="#fff"></rect>
                            <line x1="10" y1="23" x2="70" y2="23" stroke="#fff"></line>
                            <line x1="10" y1="27" x2="70" y2="27" stroke="#fff"></line>
                        </g>

                        <use href="#dykglsx" y="40"></use>
                    </g>

                    <g transform="translate(80, 0)">
                        <g id="dykgbfk">
                        <rect y="8" width="25" height="30" stroke="#fff" fill="transparent"></rect>
                        <line x1="5" y1="30" x2="20" y2="30" stroke="red" stroke-width="2"></line>
                        </g>
                        <use href="#dykgbfk" x="25"></use>
                        <use href="#dykgbfk" x="50"></use>
                        <use href="#dykgbfk" x="75"></use>
                        <use href="#dykgbfk" x="100"></use>
                        <use href="#dykgbfk" x="125"></use>
                        <use href="#dykgbfk" x="150"></use>
                    </g>

                    <use href="#dykgleft" x="250"></use>

                </g>

            </svg>

        </div>
        <div class="jg3">
            <svg viewBox="0 0 340 600">
                <g>
                    <text y="50" x="50" font-size="12">主控</text>
                    <circle cx="90" cy="45" r="10" stroke="#333" fill="transparent"></circle>
                </g>
                <g transform="translate(80, 0)">
                    <text y="50" x="50" font-size="12">备用</text>
                    <circle cx="90" cy="45" r="10" stroke="#333" fill="#ebfb53"></circle>
                </g>
                <g transform="translate(160, 0)">
                    <text y="50" x="50" font-size="12">离线</text>
                    <circle cx="90" cy="45" r="10" stroke="#333" fill="transparent"></circle>
                </g>



                <g transform="translate(0, 160)">
                    <g id="sixten">
                        <rect v-for="item in 16" width="16" height="100" :x="(item - 1) * 16 + (item * 5)" y="0"
                            fill="transparent" stroke="#000"></rect>
                    </g>
                    <g style="writing-mode:tb">
                        <text x="12" y="5" font-size="14">PWR 电源板</text>
                        <text x="33" y="5" font-size="14">FIMIO</text>
                        <text x="96" y="5" font-size="14">CAN 通信版</text>
                        <text x="117" y="5" font-size="14">CPU 运算板</text>
                        <text x="138" y="5" font-size="14">CMP 比较板</text>
                        <text x="159" y="5" font-size="14">CPU 运算板</text>
                        <text x="180" y="5" font-size="14">CAN 通信版</text>
                        <text x="201" y="5" font-size="14">ETH 通信版</text>
                        <text x="222" y="5" font-size="14">ETH 通信版</text>
                    </g>
                </g>

                <g transform="translate(0, 280)">
                    <rect v-for="item in 16" width="16" height="100" :x="(item - 1) * 16 + (item * 5)" y="0"
                        fill="transparent" :stroke="true ? fimoCol : '#000'"></rect>
                    <!-- [].filter?col:#000 -->
                    <g id="nums">
                        <text y="112" v-for="item in 16" :x="(item - 1) * 13 + (item * 8)" font-size=10>{{ item
                            }}</text>
                    </g>
                    <text style="writing-mode:tb" y="5" v-for="item in 16" :x="(item - 1) * 10 + (item * 11)"
                        font-size=10>FIMO</text>
                </g>



                <g transform="translate(0, 400)">
                    <rect v-for="item in 4" width="16" height="100" :x="(item - 1) * 16 + (item * 5)" y="0"
                        fill="transparent" :stroke="true ? fimoCol : '#000'"></rect>
                    <!-- [].filter?col:#000 -->
                    <g id="nums">
                        <text y="112" v-for="item in 16" :x="(item - 1) * 13 + (item * 8)" font-size=10>{{ item
                            }}</text>
                    </g>
                    <text style="writing-mode:tb" y="5" v-for="item in 4" :x="(item - 1) * 10 + (item * 11)"
                        font-size=10>FIMO</text>
                </g>

            </svg>

        </div>



    </div>
</template>

<style scoped lang="scss">
#draw {
    height: calc(100vh - 84px);
    padding: 0;
    background: #4682b4;

}

.jg1,
.jg2,
.jg3 {
    display: inline-block;
    width: 340px;
    height: 600px;
    background-color: #c0c0c0;
    margin: 20px;
    position: relative;
}

svg {
    position: absolute;
}
</style>
