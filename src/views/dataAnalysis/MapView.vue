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
        geo: {
            map: 'china',
            aspectScale: 0.75,
            zoom: 1.1,
            regions: [{
                name: 'South Island'
            }]
        },
        series: [
            {
                type: 'map',
                zoom: 1.1,
                map: 'china'
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