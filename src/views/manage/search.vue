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

  </el-table>
  </div>
</template>

<script>
import { searchvip } from '@/api/user'
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
        searchvip().then(response =>{
            this.user = response.data.items
        })
      },
    }
  }
</script>