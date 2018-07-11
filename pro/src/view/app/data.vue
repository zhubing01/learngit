<template>
    <div class="data-wrap">
        <div class="el-wrap">
            <el-row :gutter="20">
                <el-col :span="8">
                    <span class="fl input-span">请输入内容：</span>
                    <el-col :span="14">
                        <el-input size="medium" placeholder="请输入内容" v-model="input7">
                        </el-input>
                    </el-col>
                </el-col>
                <el-col :span="12">
                    <span class="demonstration">时间戳</span>
                    <span class="demonstration">值：{{ value12 }}</span>
                    <el-date-picker v-model="value12" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp">
                    </el-date-picker>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
                </el-col>
            </el-row>
        </div>

        <!-- 表格 -->
        <div class="table-list-wrap">
            <table-com id="tableId" :tableData='tableData'></table-com>
            <el-pagination @size-change="handleSizeChange" @current-change='currentChange' background layout="total, sizes, prev, pager, next, jumper, slot" :total="tableData.total" :page-size="10">
                <!-- <span>第{{currentPage}} / {{page_total}}页</span> -->
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import table from '@/view/app/table'
    import page from '@/view/app/page'
    // import echarts from '@/view/app/echarts'

    export default {
        name: 'home',
        data() {
            return {
                input7: '',
                value12: '',
                currentPage: 1,
                pagesize: 10,
                tableData: {
                    total: 57,
                    page_total: 6,
                    rows: [{
                            date: '2016-05-02',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-04',
                            name: '张三',
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            date: '2016-05-01',
                            name: '李四',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            date: '2016-05-03',
                            name: '王五',
                            address: '上海市普陀区金沙江路 1516 弄'
                        },{
                            date: '2016-05-02',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-04',
                            name: '张三',
                            address: '上海市普陀区金沙江路 1517 弄'
                        }, {
                            date: '2016-05-01',
                            name: '李四',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            date: '2016-05-03',
                            name: '王五',
                            address: '上海市普陀区金沙江路 1516 弄'
                        },{
                            date: '2016-05-02',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        }, {
                            date: '2016-05-04',
                            name: '张三',
                            address: '上海市普陀区金沙江路 1517 弄'
                        }]
                }
            }
        },
        created() {
            this.searchClick();
        },
        methods: {
            currentChange: function(page) {// 点击分页页码
                this.currentPage = page;
                console.log(page);
            },
            handleSizeChange: function(size) {// 每页展示多少条
                this.pagesize = size;
                console.log(size);
            },
            searchClick: function(a,b) {
            }
        },
        components: {
            tableCom: table,
            pageList: page,
            // echartsList: echarts
        }
    }

</script>

<style>
    .input-span {
        display: inline-block;
        margin-top: 5px;
    }

    .fl {
        float: left;
    }

    .el-wrap {
        margin: 20px 10px;
        height: 60px;
    }

    .el-row {
        margin-bottom: 20px;
    }

    .el-row:last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    /* 表格 */

    .table-list-wrap {
        margin: 0 10px;
    }

    .el-table th,
    .el-table td {
        text-align: center;
    }

    .cell,
    .cell span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .el-pagination {
        margin: 10px 0 40px 0;
    }
</style>