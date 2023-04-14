<template>
    <div class="map-view">
        <div id="main">
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import geoJson from '@/assets/china.json'

onMounted(()=> {
    const myChart = echarts.init(document.getElementById('main'))
    echarts.registerMap('china', geoJson)

    let option = {
        backgroundColor: 'rgb(121, 145, 209)',
        geo: {
            map: 'china',
            aspectScale: 0.75,
            zoom: 1.1,
            // itemStyle: {
            //     normal: {
            //         shadowColor: 'rgb(58, 115, 192)',
            //         shadowOffsetX: 10,
            //         shadowOffsetY: 11,
            //     }
            // },
            regions: [{
                name: 'South Island'
            }]
        },
        series: [
            {
                type: 'map',
                label: {
                    normal: {
                        show: true,  //show name
                        textStyle: {
                            color: '#1DE'
                        }
                    },
                },
                zoom: 1.1,
                map: 'china',
                itemStyle: {
                    normal: {
                        backgroundColor: 'rgb(147, 235, 248)',
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgb(31, 54, 150)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(89, 128, 142)'
                                }
                            ],
                            globalCoord: true
                        }
                    },
                    emphasis: {
                        areaColor: 'rgb(46, 229, 206)',
                        borderWidth: 0.1
                    }
                }
            }
        ]
    }

    myChart.setOption(option)
})
</script>

<style lang="scss" scoped>
.map-view {
    width: 100%;
    #main {
        width: 100%;
        height: 600px;
    }
}
</style>