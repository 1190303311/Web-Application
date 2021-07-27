<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="商品名称">
    <el-input v-model="form.name" placeholder="必填" style="width: 50%;"></el-input>
  </el-form-item>
  <el-form-item label="发货地点">
    <el-input v-model="form.region" style="width: 50%;"></el-input>
  </el-form-item>
  <el-form-item label="发货日期">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 50%;"></el-date-picker>
    </el-col>
</el-form-item>
  <el-form-item label="商品价格">
    <el-input v-model="form.price" placeholder="必填" style="width: 10%;"></el-input>
  </el-form-item>
  <el-form-item label="库存">
    <el-input v-model="form.inventory" style="width: 10%;"></el-input>
  </el-form-item>
  
  <el-form-item label="是否包邮">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="商品图片">
    <el-upload
  class="avatar-uploader"
  action="http://localhost:8080/shopping/upload"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="form.avatar" :src="form.avatar" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import { addGoods, get, update } from '@/api/shopping.js'

  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date: '',
          price: '',
          inventory: '',
          delivery: false,
          avatar:''
        }
      }
    },
    created() {
      if(this.$route.params&&this.$route.params.id)
        this.getInfo(this.$route.params.id)
    },
    methods: {
      onSubmit() {
        
        if(this.form.id){
          this.updateInfo()
        }
        else{
          this.addInfo()
        }
      },
      addInfo(){
        addGoods(this.form).then(response=>{
          this.$message({
                  type: 'success',
                  message: '添加成功！'
                });
          this.$router.push({path:"/shopping/goods"})
        })
      },
      updateInfo(){
        update(this.form).then(response=>{
          this.$message({
                  type: 'success',
                  message: '修改成功！'
                });
          this.$router.push({path:"/shopping/goods"})
        })
      },
      getInfo(id){
        get(id).then(response=>{
          this.form = response.data.goods
        })
      },
       handleAvatarSuccess(res) {
        this.form.avatar = "http://localhost:8080"+res.data.path
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
      
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
