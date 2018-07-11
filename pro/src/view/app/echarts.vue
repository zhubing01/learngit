<template>

</template>

<script>
    // 引入基本模板
    let echart = require('echarts/lib/echarts.js')
    // // 引入柱状图组件
    require('echarts/lib/chart/bar')
    // // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')

    export default {
        name: 'echarts',
        props: ['echartsData', 'echartsDatas'],
        // {
        //     echartsData: {
        //         type: '',
        //         required: true
        //     },
        //     echartsDatas: {
        //         type: '',
        //         required: true
        //     }
        // },
        data() {
            return {
                xdata: '',
                ydata: ''
            }
        },
        mounted() {
            this.drawLine();
            this.drawLines();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echart.init(document.getElementById('myChart'));
                this.xdata = this.echartsData[0].xdata;
                this.ydata = this.echartsData[0].ydata;
                this.chartsCom(myChart);
            },
            drawLines() {
                let myChart = echart.init(document.getElementById('myCharts'));
                this.xdata = this.echartsData[1].xdata;
                this.ydata = this.echartsData[1].ydata;
                this.chartsCom(myChart);
            },
            chartsCom(myChart) {
                // debugger
                // 绘制图表
                myChart.setOption({
                    title: { text: 'ECharts 入门示例' },
                    tooltip: {},
                    xAxis: {
                        data: this.xdata
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: this.ydata
                    }]
                });
            }
        }
    }

</script>

<style>

</style>