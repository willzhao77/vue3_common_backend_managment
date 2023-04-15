<template>
    <div class="travel-map">
        <div id="main">
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import * as echarts from 'echarts';
import geoJson from '@/assets/china.json'
import { travel } from '@/request/api'

const data = reactive({
    points: [],
    linesData: []
})



onMounted(()=> {
    travel().then(res => {
    if(res.data.status === 200) {
        data.points = res.data.data.points
        data.linesData = res.data.data.linesData
        drawMap()
        }
    })
})

function drawMap() {
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
                    show: true,  //show name
                    color: '#1DE'
                },
                zoom: 1.1,
                map: 'china',
                itemStyle: {
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
                    },

                },
                emphasis: {
                    itemStyle: {
                        areaColor: 'rgb(46, 229, 206)',
                        borderWidth: 0.1
                    }
                }
            },
            // 地图中的散点图
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                symbolSize: 10,
                zlevel: 1,
                data: data.points,
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                }
            },
            //地图中线路动画效果
            {
                type: 'lines',
                zlevel: 2, 
                effect: {
                    show: true,
                    period: 4,
                    symbol: 'arrow',
                    symbolSize: 7,
                    trailLenght: 0.4
                },
                lineStyle: {
                    color: '#1DE9B6',
                    width: 1,
                    opacity: 0.1,
                    curveness: 0.3
                },
                data: data.linesData
            }
        ]
    }

    myChart.setOption(option)
}


</script>

<style lang="scss" scoped>
.travel-map {
    width: 100%;
    #main {
        width: 100%;
        height: 600px;
    }
}
</style>