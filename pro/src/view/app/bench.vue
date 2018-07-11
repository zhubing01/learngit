<template>
    <div class="echarts-wrap">
        <echarts-list id="myChart" :echartsData="echartsData" :style="{width: '40%', height: '300px'}"></echarts-list>
        <echarts-list id="myCharts" :echartsData="echartsData" :style="{width: '40%', height: '300px'}"></echarts-list>
    </div>
</template>

<script>
    import echarts from '@/view/app/echarts';

    export default {
        name: 'hello',
        data() {
            return {
                echartsData: [],
                echartsDatas: [],
            }
        },
        created() {
            this.chartL();
            this.chartLs();
        },
        methods: {
            chartL() {
                this.echartsData.push({
                    xdata: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                    ydata: [5, 20, 36, 10, 10, 20]
                })
            },
            chartLs() {
                this.echartsData.push({
                    xdata: ["衬衫", "裤子", "羊毛衫", "雪纺衫", "高跟鞋", "袜子"],
                    ydata: [15, 20, 10, 30, 5, 40]
                })
            }
        },
        components: {
            echartsList: echarts
        }
    }

</script>

<style>
    #myChart {
        float: left;
        /* margin: 0 auto; */
    }
    #myCharts {
        float: left;
        /* margin: 0 auto; */
    }
</style>