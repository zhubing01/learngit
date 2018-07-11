<template>
    <el-table :data="tableData.rows" stripe style="width: 100%">
        <el-table-column label="日期" width="180" prop="date">
            <!-- <template slot-scope="scope">
                <span style="margin-left: 10px" :title="scope.row.date">{{ scope.row.date }}</span>
            </template> -->
        </el-table-column>
        <el-table-column label="姓名" style="width:20%">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>1: {{ scope.row }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column label="内容" style="width:30%" prop="address">
            <!-- <template slot-scope="scope">
                <span style="margin-left: 10px" :title="scope.row.address">{{ scope.row.address }}</span>
            </template> -->
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: 'hello',
        props: ['tableData'],
        // {
        //     tableData: {
        //         type: '',
        //         required: true
        //     }
        // },
        data() {
            return {
            }
        },
        methods: {
            // 编辑
            handleEdit(index, row) {
                console.log(index, row);
            },
            // 删除
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }

</script>

<style scoped>

</style>