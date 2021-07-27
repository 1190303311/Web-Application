<template>
  <div class="app-container">
  <el-form ref="form" :model="user" label-width="80px">
  <el-form-item label="用户名">
    <el-input v-model="user.username"></el-input>
  </el-form-item>


    <el-form-item label="角色">
    <el-select v-model="user.role" placeholder="请选择">
      <el-option label="普通用户" value="0"></el-option>
      <el-option label="vip" value="1"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" :disabled="disable" @click="updateInfo(user)">保存</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import { update, getuser } from "@/api/user";
export default {
    data() {
      return {
        user: {
          username:'',
          role:''
        },
        disable:false
      }
    },
    created(){
      if(this.$route.params && this.$route.params.id){
        this.getInfo(this.$route.params.id)
      }
    },
    methods: {
      getInfo(id){
        getuser(id).then(response=>{
          this.user = response.data.info
        })
      },
      updateInfo(user){
        update(user).then(reponse=>{
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
          // 跳转到列表页
          this.$router.push({path:"/manage/index"})
        })
      },
    }
  }
</script>