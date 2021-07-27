<template>
  <div class="app-container">
       <el-table
    :data="user"
    style="width: 100%">

    <el-table-column
      label="序号"
      width="180">
      <template slot-scope="scope">
        {{scope.$index+1}}
      </template>
    </el-table-column>


    <el-table-column
      label="用户名"
      width="180" prop="username">
    </el-table-column>

    <el-table-column
      label="电话号码"
      width="180" prop="phone">
    </el-table-column>

    <el-table-column
      label="角色（1代表会员）"
      width="180" prop="role">
    </el-table-column>


    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row.id)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>


  </el-table>
  </div>
</template>

<script>
import { search, deluser } from '@/api/user'
  export default {
    data() {
      return {
        user: []
      }
    },
    created(){
        this.getdata()
    },
    methods: {
      getdata(){
        search().then(response =>{
            this.user = response.data.items
        })
      },
      handleDelete(id) {
        this.$confirm('此操作将永久该用户，是否继续？','提示',{
            confirmButtonText:'确定',
            cancleButtonText:'取消',
            type:'warning'
        }).then(()=>{
            deluser(id).then(response=>{
                this.getdata()
                this.$message({
                    type:'success',
                    message:'删除成功！'
                });
            })
        })
      },
      handleEdit(id) {
        this.$router.push("/manage/change/"+id)
      }
    }
  }
</script>