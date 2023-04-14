<template>
    <div class="data-view">
        <el-card>
            <div id='main1'></div>
        </el-card>
        <el-card>
            <div id='main2'></div>
        </el-card>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import { dataview } from '@/request/api'

onMounted(()=> {
    const myChart = echarts.init(document.getElementById('main1'))
    myChart.setOption({
        title: {
            text: 'Make progress'
        },
        tooltip: {},
        xAxis: {
            data:['Class1','Class2', 'Class3', 'Class4','Class5']
        },  
        yAxis: {},
        series: [{
            name: 'Number',
            type: 'bar',
            data: [45, 42, 46, 48, 42, 47]
        }]
    })

    dataview().then(res => {
        console.log(res)
        if(res.data.status === 200) {
            let {legend, xAxis, series} = res.data.data
            draw(legend, xAxis, series)
        }
    }).catch (err => {
        throw err
    })
})

function draw(legend, xAxis, series) {
    const myChart1 = echarts.init(document.getElementById('main2'))
    const option = {
        title: {
            text: 'Session'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legend
        },
        xAxis: {
            data: xAxis
        },  
        yAxis: {
            type: 'value'
        },
        series: series
    }

    myChart1.setOption(option)
}

</script>

<style lang="scss" scoped>
    .data-view {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .el-card {
            width: 50%;
            #main1, #main2 {
                height: 500px;
            }
        }
    }
</style>