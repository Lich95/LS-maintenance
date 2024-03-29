<script setup lang="ts">
import czj from '@/icons/vue/czj.vue'
import { ref } from 'vue'
const testTxt = import.meta.env.VITE_APP_TEST
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
            <svg style="top:400px;left:30px" viewBox="0 0 900 900" version="1.2" xmlns="http://www.w3.org/2000/svg">

                <rect x="10" rx="10" y="5" ry="5" width="10" height="85" fill="transparent" stroke-width="2"  stroke="#333"></rect>
                <rect x="40" y="5" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333"/>
                <rect x="40" y="20" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333"/>
                <rect x="40" y="35" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333"/>
                <rect x="40" y="50" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333"/>
                <rect x="40" y="65" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333"/>
                <rect x="40" y="80" width="350" height="10" fill="transparent" stroke-width="2" stroke="#333"/>

                <rect x="400" y="5" width="210" height=85 fill="transparent" stroke-width="2"  stroke="#333"/>

                <line x1="400" y1="5" x2="405" y2="10" stroke="#333"  stroke-width="3" />
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
                <circle stroke="#333" cx="560" cy="51" r="5" fill="transparent" stroke-width="2"  />
                <circle stroke="#333" cx="560" cy="64" r="5" fill="transparent" stroke-width="2" />

                <rect x="580" y="20" width="10" height="50" fill="transparent" stroke="#333" stroke-width="2" />

                <rect x="635" rx="10" y="5" ry="5" width="10" height="85" fill="transparent" stroke="#333" stroke-width="2" ></rect>

                <circle cx="505" cy="40" r="10" fill="transparent" stroke="#333" stroke-width="2" ></circle>
                <circle cx="505" cy="60" r="5" fill="transparent" stroke="#333" stroke-width="2" ></circle>
            </svg>


        </div>
        <div class="jg2">


        </div>
        <div class="jg3">


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
