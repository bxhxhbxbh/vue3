<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="4" class="logo">
       <img class="logo-img" src="@/assets/logo1.png" alt="" />
      </el-col>
      <el-col :span="16" class="title"><h2>后台管理系统</h2></el-col>
      <el-col :span="4" class="info"><el-button type="text" class="fa fa-user"><span class="user">胡总</span></el-button></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';// @ is an alias to /src

export default defineComponent({
    name: 'Header',
});
</script>

<style lang="scss" scoped>
.el-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-img {
      height: 80px;
      width: 80px;
    }
  }
  h2 {
    text-align: left;
    color:aliceblue
  }
  .info {
    text-align: right;
    .el-button  {
      padding-right: 20px;
      color:antiquewhite;
      .user {
        padding-left: 10px;
      }
    }
  }
}
</style>