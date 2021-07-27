<template>
  <div class="app-container">
     <el-input placeholder="请输入内容：商品编号、商品名称" v-model="message">
    <template slot="prepend">搜索：</template>
    <el-button slot="append" icon="el-icon-search" @click="handleSearch(message)"></el-button>
  </el-input>
    <el-table
    :data="Goods"
    style="width: 100%">
    <el-table-column
      label="商品编号"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-shopping-bag-1"></i>
        <span style="margin-left: 10px">{{ scope.row.id}}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="商品"
      width="250">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>商品名称: {{ scope.row.name }}</p>
          <p>发货地址: {{ scope.row.region }}</p>
          <p>发货时间: {{ scope.row.date }}</p>
          <p>剩余库存: {{ scope.row.inventory }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="商品价格"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-coin"></i>
        <span style="margin-left: 10px">{{ scope.row.price}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="是否包邮"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-truck"></i>
        <span style="margin-left: 10px">{{ scope.row.delivery == true ? "是" : "否"}}</span>
      </template>
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
import {getList, del,search} from '@/api/shopping.js'
import { get } from 'js-cookie'
  export default {
    data() {
      return {
        Goods: [],
        message:''
      }
    },
    created(){
        this.fetchData()
    },
    methods: {
      fetchData(){
          getList().then(response=>{
              this.Goods = response.data.items
          })
      },
      handleEdit(id) {
         this.$router.push({path:"/shopping/add/"+id})
      },
      handleDelete(id) {
        this.$confirm('此操作将永久删除该商品信息，是否继续？','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(()=>{
            del(id).then(response=>{
                this.fetchData()
                this.$message({
                  type: 'success',
                  message: '删除成功！'
                });
            })
        })
      },
      handleSearch(message){
        search(message).then(response=>{
              this.Goods = response.data.items
          })
      }
    }
  }
</script>
